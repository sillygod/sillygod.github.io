---
layout: post
title: rest framework serializer 深入理解
date: 2016-08-18 01:44
comments: true
categories: [rest framework]
---
# rest framework serializer 深入理解


這篇主要是記錄一些個人對於rest framework的serializer源碼實作的理解，從下段源碼

```python
@six.add_metaclass(SerializerMetaclass)
class Serializer(BaseSerializer):
	....
```

可以看到作為ModelSerializer還有一些xxSerializer的**base class(Serializer)**，是繼承BaseSerializer，以及還有個metaclass，首先我們就先來看看meta class這邊，它用到了six這個third party library，這模組主要目的是幫你弄出python2和3 compatible的code，`@six.add_metaclass`這個東西作用如下，

```python

@six.add_metaclass(SerializerMetaclass)
class Serializer(BaseSerializer):
	pass
	
# to python2

class Serializer(BaseSerializer):
	__metaclass__ = SerializerMetaclass
	
	pass
	
# to python3

class Serializer(BaseSerializer, metaclass=SerializerMetaclass):
	pass
	
```

至於對於metaclass的作用，這邊我不多加敘述，詳情可以看我之前的blog，有篇是對於metaclass的理解，SerializerMetaclass做的事情，基本上是在我們new instance時，把attribute屬於Field的instance給濾出來～ 這個Field是rest framework fields.py裡面有所定義，濾出來後呢，接著按照_creation_counter來排序，之後把這些給assgin到`_declared_fields`看到這邊目前不知道為什麼要作這個動作，不過我相信我們繼續看下去應該就會知道為什麼了？ 這個metaclass做的事情就是這樣而已。

接著由於BaseSerializer是繼承Field，所以我們先來看看Field是作什麼

```python

class Field(object):

    _creation_counter = 0
    # 用來做欄位排序～ 疑你想說哪邊有做排序
    # 目前而言我們看到在metaclass那邊他有利用這個屬性來做排序（我沒有貼源碼上來）

    default_error_messages = {
        'required': _('This field is required.'),
        'null': _('This field may not be null.')
    }
    default_validators = []
    default_empty_html = empty
    initial = None

    def __init__(self, read_only=False, write_only=False,
                 required=None, default=empty, initial=empty, source=None,
                 label=None, help_text=None, style=None,
                 error_messages=None, validators=None, allow_null=False):
        self._creation_counter = Field._creation_counter
        Field._creation_counter += 1

        # If `required` is unset, then use `True` unless a default is provided.
        if required is None:
            required = default is empty and not read_only
            # 這邊而言我的確不懂為什麼default要用emtpy，但是這邊註解寫的清楚，沒有給required時預設就是True

        # Some combinations of keyword arguments do not make sense.
        assert not (read_only and write_only), NOT_READ_ONLY_WRITE_ONLY
        assert not (read_only and required), NOT_READ_ONLY_REQUIRED
        assert not (required and default is not empty), NOT_REQUIRED_DEFAULT
        assert not (read_only and self.__class__ == Field), USE_READONLYFIELD
        # 這邊做的事就只是檢查一些不合理的flag設置比如第一個你同時設置read_only和write_only為True
        # 有夠不合理吧 :)

        self.read_only = read_only
        self.write_only = write_only
        self.required = required
        self.default = default
        self.source = source
        self.initial = self.initial if (initial is empty) else initial
        self.label = label
        self.help_text = help_text
        self.style = {} if style is None else style
        self.allow_null = allow_null

        if self.default_empty_html is not empty:
            if default is not empty:
                self.default_empty_html = default

        if validators is not None:
            self.validators = validators[:]

        # These are set up by `.bind()` when the field is added to a serializer.
        self.field_name = None
        self.parent = None

        # Collect default error message from self and parent classes
        messages = {}
        for cls in reversed(self.__class__.__mro__):
            messages.update(getattr(cls, 'default_error_messages', {}))
        messages.update(error_messages or {})
        self.error_messages = messages
        # 這邊可以注意 message: key-pair 被覆蓋的順序～

```

關於init函式，一些需要注意的地方我都寫在註解上面了，當然有些參數目前還不知道是要做啥，但是不明的東西就先打個問號，因為你在怎麼執著於這邊，你也不知道答案是什麼，必須要看到其他地方式怎麼使用這些參數的或函式，才會比較明瞭，所以姑且就繼續往下看吧

```python

def bind(self, field_name, parent):
        """
        Initializes the field name and parent for the field instance.
        Called when a field is added to the parent serializer instance.
        """

        # In order to enforce a consistent style, we error if a redundant
        # 'source' argument has been used. For example:
        # my_field = serializer.CharField(source='my_field')
        assert self.source != field_name, (
            "It is redundant to specify `source='%s'` on field '%s' in "
            "serializer '%s', because it is the same as the field name. "
            "Remove the `source` keyword argument." %
            (field_name, self.__class__.__name__, parent.__class__.__name__)
        )

        self.field_name = field_name
        self.parent = parent

        # `self.label` should default to being based on the field name.
        if self.label is None:
            self.label = field_name.replace('_', ' ').capitalize()

        # self.source should default to being the same as the field name.
        if self.source is None:
            self.source = field_name

        # self.source_attrs is a list of attributes that need to be looked up
        # when serializing the instance, or populating the validated data.
        if self.source == '*':
            # magic star!!  雖然不知道是做啥～ 繼續看下去就會知道了
            self.source_attrs = []
        else:
            self.source_attrs = self.source.split('.')

```

單單這樣看好像挺模糊的，他的assert希望 self.source 和 field_name 一樣，可是好玩的是假如self.source是None的話，self.source = field_name，所以這邊我有點不懂她是在assert啥...

再來下面四個method，就比較簡單了，

```python

@property
    def validators(self):
        if not hasattr(self, '_validators'):
            self._validators = self.get_validators()
        return self._validators

    @validators.setter
    def validators(self, validators):
        self._validators = validators

    def get_validators(self):
        return self.default_validators[:]

    def get_initial(self):
        """
        Return a value to use when the field is being returned as a primitive
        value, without any object instance.
        """
        return self.initial
        
```

雖然我個人覺得啦，她分的好細，乍看之下或許有點多餘，不過看久了到是覺得還好，反正邏輯很簡單，只要沒有做過 self.validators = .... 那她就會使用 self.default_validators[:] 來回傳結果～


```python

def get_value(self, dictionary):
        """
        Given the *incoming* primitive data, return the value for this field
        that should be validated and transformed to a native value.
        """
        if html.is_html_input(dictionary):
            # HTML forms will represent empty fields as '', and cannot
            # represent None or False values directly.
            if self.field_name not in dictionary:
                if getattr(self.root, 'partial', False):
                    return empty
                return self.default_empty_html
            ret = dictionary[self.field_name]
            if ret == '' and self.allow_null:
                # If the field is blank, and null is a valid value then
                # determine if we should use null instead.
                return '' if getattr(self, 'allow_blank', False) else None
            elif ret == '' and not self.required:
                # If the field is blank, and emptyness is valid then
                # determine if we should use emptyness instead.
                return '' if getattr(self, 'allow_blank', False) else empty
            return ret
        return dictionary.get(self.field_name, empty)

```

這裡html.is_html_input，是做一個檢查，是什麼呢？ 她檢查 dictionary是否擁有 getlist 這個屬性，很好，值得注意的是這裡的dictionary，似乎是因為有可能會是django的MultiValueDict，這個就會有getlist這個屬性了，相信之後部份code會用到這個method，讓我們就先繼續往下走～～


```python

def get_attribute(self, instance):
        """
        Given the *outgoing* object instance, return the primitive value
        that should be used for this field.
        """
        try:
            return get_attribute(instance, self.source_attrs)
        except (KeyError, AttributeError) as exc:
            if not self.required and self.default is empty:
                raise SkipField()
            msg = (
                'Got {exc_type} when attempting to get a value for field '
                '`{field}` on serializer `{serializer}`.\nThe serializer '
                'field might be named incorrectly and not match '
                'any attribute or key on the `{instance}` instance.\n'
                'Original exception text was: {exc}.'.format(
                    exc_type=type(exc).__name__,
                    field=self.field_name,
                    serializer=self.parent.__class__.__name__,
                    instance=instance.__class__.__name__,
                    exc=exc
                )
            )
            raise type(exc)(msg)

```

這裡有call一個global get_attribue 這個之後看，當發生exception（KeyError, AttribueError）時，這裡做的處理是如果此field非required和default是empty的話，就會raise SkipField（），要不然就是照樣raise該有的錯誤，只是給她額外增加一個比較fancy的錯誤訊息。再來讓我們瞧瞧global的get_attribue到底做了什麼！


```python

def get_attribute(instance, attrs):
    """
    Similar to Python's built in `getattr(instance, attr)`,
    but takes a list of nested attributes, instead of a single attribute.

    Also accepts either attribute lookup on objects or dictionary lookups.
    """
    for attr in attrs:
        if instance is None:
            # Break out early if we get `None` at any point in a nested lookup.
            return None
        try:
            if isinstance(instance, collections.Mapping):
                instance = instance[attr]
            else:
                instance = getattr(instance, attr)
        except ObjectDoesNotExist:
            return None
        if is_simple_callable(instance):
            try:
                instance = instance()
            except (AttributeError, KeyError) as exc:
                # If we raised an Attribute or KeyError here it'd get treated
                # as an omitted field in `Field.get_attribute()`. Instead we
                # raise a ValueError to ensure the exception is not masked.
                raise ValueError('Exception raised in callable attribute "{0}"; original exception was: {1}'.format(attr, exc))

    return instance

```

還記得前面`bind` method做了什麼好事嗎？

```python
if self.source == '*':
            self.source_attrs = []
        else:
            self.source_attrs = self.source.split('.')
```

由於經過這樣的處理，所以attrs必定是list型態，所以這邊`get_attribute`才會用for loop，其實這個function做的事情，如同他的註解說的差不多，真的就跟python內建的 `getattr` 很像，只是他可以接受nested屬性，例如： `obj.a.c` 這樣。

```python

def get_default(self):
    pass

def validate_empty_values(self, data):
	pass

```

這兩個function就不多琢磨了，就算是helper function這樣

```python
def run_validation(self, data=empty):
	"""
	Validate a simple representation and return the internal value.

	The provided data may be `empty` if no representation was included
	in the input.

	May raise `SkipField` if the field should not be included in the
	validated data.
	"""
	(is_empty_value, data) = self.validate_empty_values(data)
	if is_empty_value:
		return data
	value = self.to_internal_value(data)
	self.run_validators(value)
	return value

def run_validators(self, value):
	"""
	Test the given value against all the validators on the field,
	and either raise a `ValidationError` or simply return.
	"""
	errors = []
	for validator in self.validators:
		if hasattr(validator, 'set_context'):
			validator.set_context(self)

		try:
			validator(value)
		except ValidationError as exc:
			# If the validation error contains a mapping of fields to
			# errors then simply raise it immediately rather than
			# attempting to accumulate a list of errors.
			if isinstance(exc.detail, dict):
				raise
			errors.extend(exc.detail)
		except DjangoValidationError as exc:
			errors.extend(exc.messages)
	if errors:
		raise ValidationError(errors)

```

這邊就是serializer常用到的validation了，做檢查～
最後值得注意的地方是下面這兩個function

```python

def to_internal_value(self, data):
	"""
	Transform the *incoming* primitive data into a native value.
	"""
	raise NotImplementedError(
		'{cls}.to_internal_value() must be implemented.'.format(
			cls=self.__class__.__name__
		)
	)

def to_representation(self, value):
	"""
	Transform the *outgoing* native value into primitive data.
	"""
	raise NotImplementedError(
		'{cls}.to_representation() must be implemented.\n'
		'If you are upgrading from REST framework version 2 '
		'you might want `ReadOnlyField`.'.format(
			cls=self.__class__.__name__
		)
	)

```
`to_internal_value` 作用就是把輸入得資料轉換成，你資料庫或者其他地方你想要儲存的型態，像是日期好了，你輸入的是字串，但是rest framework的DatetimeField，是幫你轉成python裡的datetime相關物件， 至於 `to_representation` 就是資料輸出的形式， 一般都是當你call `serializer.data` 所表現的形式就是用到上面那個function， 這裡的serializer是某某Serializer class的instance。

到目前為止，class Field，大致上的實作都大概看過了，這個是很重要的核心，因為你看源碼你會發現，有很多其他東西都是繼承於這個， XXXField 一堆～～

這篇就先紀錄到這邊為止，下一次就回到BaseSerializer那邊去理解源碼。



###### tags: `python` `restframework` 
