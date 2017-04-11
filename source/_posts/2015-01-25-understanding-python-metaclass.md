---
layout: post
title: python metaclass 理解
date: 2015-01-25 02:07
comments: true
categories: 
---
最近碰到跟這個有關的議題，因此就特別來了解一下，基本上來說 meta class 是class的class，也因此meta有超元的意思，舉例： metaprogram 就有超程式的意思， 產生程式的程式，所以呢！

 - class 是 metaclass的 instance屌吧！
 - 一般來說 class 的 instance 是一個 object

在python中，class一般的確是拿來創造物件，如下示範

```py
class objectCreator(object):
    pass

obj = objectCreator()
print(obj)

<__main__.objectCreator object at 0x7f46ccc7e3d0>
```

但是呢~ 其實在python中，class其實也是個物件！
沒錯！ 別懷疑，若你像我一樣從C或C++跳過來用python的，想必會感到很好奇！ 這也是動態語言跟靜態語言不太一樣的地方，一般而已動態語言會傾向與任何東西都是物件這種特性，以下來證明！
你可以操作class像是操作物件一樣，
舉例：

 - assign 它
 - 複製它
 - 為它增加屬性
 - 把他當作參數一樣傳遞

```py
def printClass(cls):
    print(cls)

printClass(objectCreator)
print(hasattr(objectCreator, 'whoamI'))
# expected False
# now we add a attribute for it

objectCreator.whoamI = 'objectCreator'
print(hasattr(objectCreator, 'whoamI'))
# expected True

<class '__main__.objectCreator'>
False
True
```

試玩了一下證明，的確class可以操作物件那樣被操作，這邊我們就用python的built-in function type，來看看class會跑出什麼資訊 :)

```py
print(type(1))
print(type("1"))
print(type(objectCreator))
print(type(objectCreator()))

<type 'int'>
<type 'str'>
<type 'type'>
<class '__main__.objectCreator'>
```

注意到了嗎！！
class的類型是type，這代表著一件事，我們可以用type來創造class。[type官方文件](https://docs.python.org/2/library/functions.html#type)
type(name, base, dict) 所以我們來試著用type創造一個class

```py
creature = type('creature', (), {})
obj = creature()
print(type(obj))

<class '__main__.creature'>
```

接著我們讓creature多一個attribute看看

```py
creature = type('creature', (), {'is_alive': True})
obj = creature()
print(obj.is_alive)

True
```

以上測試用type是可以創造出class的，那麼接著來測試一下繼承

```py
bird = type('bird', (creature, ), {'creature_type':'bird'})
obj = bird()
print(obj.is_alive)
print(obj.creature_type)

True
bird
```

前面講了那麼多，其實就要讓你了解，meta class的概念~
In brief, 可以這樣說
IamClass = metaclass() 
IamObject = IamClass()

再來就是進入meta
在class裡面若有定義 \_metaclass\_ 在創建物件時，python會先進入這邊，做一些初始動作 詳情可以看這邊
簡單來說就是，python平常是用自定義的type來創造class，藏在背後，若你想要改變創造class的行為，換句話說就是你想要用你自創的type來創造 class，那你就要定義 \_metaclass\_，python會去抓你有沒有定義，有的話就會去用你定義的type來取代原生type~

[相關文檔](https://docs.python.org/2/reference/datamodel.html#invoking-descriptors)
基本上，type只要是一個callable物件即可，但是他要接受3個參數和回傳一個物件
以下舉個例子！

```py
def mymeta(name, base, attributes):
    print('enter metaclass')
    return 'hello'


class C(object):
    __metaclass__ = mymeta


print(C)
print(C, type(C))  # 由此看來class 定義 只會跑一次唷！

enter metaclass
hello
('hello', <type 'str'>)
```

再來做個有趣的實驗，常常會有個情形，再開發專案我們常常想要知道哪個函式，在什麼時候有被call的，這時候若利用metaclass，會達到相當方便的妙用！ 以下示範

```py
import time

def logged(time_format):
    def decorator(func):
        def decorated_func(*args, **kwargs):
            print('Running {} on {}'.format(func.__name__, time.strftime(time_format)))
            start_time = time.time()
            result = func(*args, **kwargs)
            end_time = time.time()
            print('Finished {}, execution time={}'.format(func.__name__, end_time-start_time))
            return result

        decorated_func.__name__ = func.__name__
        return decorated_func
    
    return decorator

 
def log_everything_metaclass(name, base, attributes):
    print('Creating class: {}'.format(name))
    myattributes = {}
    print('attributes type is {}'.format(type(attributes)))
    for name, value in attributes.items():
        # 將任何可以被call的東西，都用loggeed
        if hasattr(value, '__call__'):
            myattributes[name] = logged('%b %d %Y - %H:%M:%S')(value)

    return type(name, base, myattributes)

 
class C(object):
    __metaclass__ = log_everything_metaclass

    def __init__(self, x):
        self.x = x
    
    def print_x(self):
        print(self.x)

 
print('start create object')
c = C('haha')
c.print_x()

 
Creating class: C
attributes type is <type 'dict'>
start create object
Running __init__ on Jan 23 2015 - 11:07:46
Finished __init__, execution time=9.53674316406e-07
Running print_x on Jan 23 2015 - 11:07:46
haha
Finished print_x, execution time=1.50203704834e-05
```


上面利用_metaclass_，做到每個callable attribute，將會被logged起來
再來看看其他user case，也是個人我目前想要試的功能，"真"動態創造class，概念上來說，就是一個class factory，假設我給予一個identifier，然後根據identifier 創造出相對應的class。

如果不用metaclass，可能就要用一堆十分不好看的if else去判斷，除了代碼hedious之外，日後要維護跟用metaclass比較起來也沒那麼順手 :)

ex.

```py
class Iskill:
    pass

class fireball(Iskill):
    identifier = 'fireball'
    pass

class iceball(Iskill):
    identifier = 'iceball'
    pass

class skillFactory:
    def __new__(....)
        pass
```

之後給予factory相對應的參數，就會創造出你定義的相對class，以下示範

```py
class SkillFactory(object):

    _class_dict = {}
    
    def __new__(cls, name, base, attrs):
        print('Creating class: {}'.format(name))
        c = type(name, base, attrs)

        if attrs.get('identifier', None):
            # do something here
            SkillFactory._class_dict[attrs['identifier']] = c
            print(attrs['identifier'])
        # 原封不動回傳type創建出來的class
        return c


    @staticmethod
    def get_class_from_identifier(id):
        return SkillFactory._class_dict[id] 


class ISkill(object):

    def spell(self):
        """spell skill. just print skill name here
        """
        raise NotImplementedError

 
class Fireball(ISkill):
    __metaclass__ = SkillFactory
    identifier = 'fireball'

    def __init__(self):
        self._name = 'fireball'

    def spell(self):
        print('spell {}'.format(self._name))

    
class Iceball(ISkill):
    __metaclass__ = SkillFactory
    identifier = 'iceball'

    def __init__(self):
        self._name = 'iceball'

    def spell(self):
        print('spell {}'.format(self._name))
        

fire = SkillFactory.get_class_from_identifier('fireball')
ice = SkillFactory.get_class_from_identifier('iceball')

print(fire)
print(ice)

Creating class: Fireball
fireball
Creating class: Iceball
iceball
<class '__main__.Fireball'>
<class '__main__.Iceball'>
```

目前我認識就大概到這邊，以後若有其他更有趣的用法，會再上來PO一篇的。目前要學的東西可多了，只是我好像都在學一些不是職場上頗重要的東西，我時常在想自己這樣是不是很呆，或是說浪費時間，自從出了社會後，我內心的交雜其實更嚴重了，有許多矛盾的事情一直在我心中盤繞，sigh.... 原本以為早點出社會後，許多事情或許會茅塞頓開，但現在看來並非如此，反而陷入了更加社會現實面的問題，或許我需要一點時間來適應和冷靜吧~


