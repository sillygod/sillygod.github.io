---
layout: post
title: 閱讀 Functional Programming Python 心得
date: 2017-02-28 13:58
comments: true
categories: [python, fnctional]
---
# 閱讀 Functional Programming Python 心得

## 何謂 functional programming

通常是指程式語言具有以下特性

1. function 是 first class object

意思就是 function 可以像 data(例:Ｃ語言的變數) 一般，可以被當作函式的參數傳入，也可以當作回傳值被回傳，或是被賦予到某變數，甚至是存到資料結構，

2. 遞迴是基本中的基本流程結構，甚至有些程式語言是沒有所謂的迴圈

3. higher order function

這是指function被當作另外一個function的參數或是將function當作回傳結果

4. 程式語言結構沒有所謂的statements 只有 expression

這個像是haskell就是這樣

5. pure functional language 是沒有 side effects

所謂的side effects是指，你的function，只要你每次的呼叫都是帶入同樣的參數，就會得到相同的結果

相信稍微熟悉python的人，看了上述就知道python其實也多多少少算是functional programming有點沾到邊，不得不說python就是一個這樣的語言，他並沒有強制要成為某種特定形式的語言，像是Ojbect oriented language，或是像Ｃ那種imperative language，甚至是functional language，所以這讓python在寫程式的時候有著很大的自由呢～

### 相關閱讀資源

書中有提到一些資源，這邊做點記錄

1. [python 官網](https://docs.python.org/3.5/howto/functional.html)

沒想到官網竟然就有一篇好教學

2. [ibm developer works](https://www.ibm.com/developerworks/linux/library/l-prog/index.html)

太久沒到這網站了，沒想到ui整個都改變了，這上面其實有不少教學文不錯，可以多看看

3. [awesome functional python](https://github.com/sfermigier/awesome-functional-python)

---

## functional programming 思維

### how to what

書中所提到的是functional programming，比起imperative programming，更加著重於 what，感覺上就是指，函式裡面是如何產生結果的這邊不用去理解，你只要知道你丟什麼東西，會產生生什麼東西就好，其實就是一種細節隱藏的概念，以下引用書中範例:

```py

collection = get_initial_state() 
state_var = None
for datum in data_set:
    if condition(state_var):
        state_var = calculate_from(datum) 
        new = modify(datum, state_var) 
        collection.add_to(new)
    else:
        new = modify_differently(datum) collection.add_to(new)

# Now actually work with the data
for thing in collection: 
    process(thing)

```

上面程式就是典型的imperative思維，一行一行的指令執行，從獲得初始資料，資料剖析處理整理出你要的資料
，最後才真正地對資料去做要做的事情，再來看看functional programming思維是怎麼樣

```py

def make_collection(data_set): 
    collection = get_initial_state() 
    state_var = None

    for datum in data_set:
        if condition(state_var):
            state_var = calculate_from(datum, state_var) 
            new = modify(datum, state_var) 
            collection.add_to(new)
        else:
            new = modify_differently(datum)
            collection.add_to(new)

    return collection

# Now actually work with the data
for thing in make_collection(data_set): 
    process(thing)

```

程式碼幾乎沒啥改變，就只是單純多了一層抽象化包裝，但是這要表達什麼？ 就是我們可以不用去注重make\_collection裡面到底是如何做的，我們只要知道餵它吃什麼，它就會吐出什麼XD ， 對於書中最後面 for 迴圈如果想要更佳functional思維的話，我個人覺得可以改成 `[process(thing) for thing in make_collection(data_set)]` 當然前提是process(thing) 是有要回傳資料的話～

這種思維對於unit test也是比較易於測試的，因爲測試本身就是一個你給它資料，然後你期待得到什麼回傳結果的行為，剛剛好等於functional思維。

### 遞迴

我想這是絕對最最最基本的程式流程，不會用到loop，對於python而言，遞迴是非常沒有效率的，而且有最大遞迴次數限制

![compare recursive and iterative](http://i.imgur.com/2NqXm1T.png)

上圖雖然我用的數字不大（因為試過隨便帶個1000，遞迴版本就爆掉拉），可以看出迴圈執行效率是比較高的，其實照理說一般是會對所謂的tial-recursion做編譯優化讓他等於迴圈，但是python並沒有做這種處理，因此這也讓我對python是否適合拿來學習functional programming感到一點遲疑，這也是為何我會好奇讀這本書的原因，然後有一點讓我挺驚訝的是，沒想到用reduce的效率會比迴圈高，真是不知道python的reduce裡面做了什麼，雖然說使用了`dis`模組看了一下解譯後的指令，的確是挺少的拉，但是這不能代表效率，我想如果想要知道為何效率比較高的話，可能得去研究python的source code了。


### Closure and callable instance

書中有個說法十分有趣，如果是資工系相關出身的人大概都有聽過class is data with oprations attached 之類的說法吧，但是對於closure呢？ closure is operations with data attached. 這句真是有醍醐灌頂之效，我真的沒這樣想過，以下舉例

```py

class Adder:

  def __init__(self, n):
    self.n = n
  def __call_(self, m):
    return self.n + m
    
add5 = Adder(5)


def make_adder(n):
  def adder(m):
    return m + n
  return adder
  
add5 = make_adder(5)

```

上面class版本只是示範，如何使用class來實作類似效果而已，那麼看看這個跟以前物件導向有哪裡不同，以前物件導向，就是初始化實例，然後他本身會有定義相對應動作，在呼叫去執行，所以就是class is data with operations attached，那麼今天這個class Adder則是已經先把行為給定義好了，剩下餵資料而已，就像是`add5(10)`就會得到15，這就是closure is operations with data attached 想要表明的意思。

執得注意的地方是python的closure，他的variable是bind by name而不是value，以下舉例

```py

test_case = [lambda: i for i in range(5)]

print(test_case[0]())
print(test_case[1]())

```

沒意外的話你會看到兩個都是4，會這樣的原因是lambda: i 相當於 return i的意思，那麼這個i就是for迴圈的i，當for 迴圈結束時，i值等於4，所以由此可以知道python的closure變數只是做一個類似指標指過去的概念，所以如果你想要讓裡面的i值是每一次的for迴圈值那麼你就要用python會對function的parameter做初始化的動作那邊下手，如下

```py

test_caes = [lambda i=i: i for i in range(5)]

print(test_case[0]())
print(test_case[1]())

```

這樣你就會看到你想要的結果拉～

### lazy evaluation

這個在函式語言可是非常常見，簡單說就是遇到了才做動作的意思，比方說像我想要建立一個無限的陣列，聽起來很詭異吧，但是在haskell之類的functional programming卻是很正常的東西，因為他們本身就是lazy evaluation，需要從那陣列拿多少東西再拿，而不是一開始就先定義好一個內容無限長的陣列，在傳統的Ｃ語言，想必大家都習慣，new array，collect需要的記憶體這些動作了吧，哪來的無限哈哈～

在python中，要如何建立這種概念的東西，答案就是要使用iterator，其中最常使用的方式是，generator，應該很常看到在funtion裡面有`yield`吧，那就是generator，在python概念，會比較跟c++不太一樣，c++是有分container和iterator，iterator就是一個純粹的指標，指向container，然後可以存取東西這樣，可是python的iterator，感覺就比較像是兩者融合了，以下面範例來看

```py

def infinite_ary():
    n = 1
    while True:
        yield n 
        n += 1

```

PEP定義片段是這樣描述的 The iterator provides a 'get next value' operation that produces the next item in the sequence each time it is called，基本上就是有實作 __next__ 這個magic method，讓他可以取得下一個值的都算是iterator，所以這麼看來上面這個function同時算是container和iterator的結合，但是其實也不能算是container拉，因為它實際背後也沒有真的去做收集資料，而是前面所講的lazy evaluation，然後最後還是回傳給你iterator讓你操作拉～ 其實用起來滿簡潔的，這也是為用了python回不去c++的原因，語法實在是太簡潔漂亮，反觀c++越來越...四不像了，也複雜的恐怖，已經好久沒碰c++了啊，哈哈哈


### Currying

書中提到python內建模組中functool的partial，就是currying，我覺得這句有點不那麼精準，根據[haskell 官網](https://wiki.haskell.org/Currying)的定義，然後這是[partial的定義](https://wiki.haskell.org/Partial_application)，partial是指能夠傳入比函式定義少的參數的能力，以下舉例

```python

def add(x, y):
    return x+y


addOne = partial(add, 1)
addOne(2)


```

上面結果會是3，在haskell中，並不需要特別像python一樣，還要import functools中的partial，這是haskell基本特性，add函式本身定義是需要兩個參數，但是卻可以利用partial，給予少於兩個參數，並且得到addOne這個函式，然後我呼叫他，這個行為就是partial (apply)，但是我這個舉例剛剛好也符合currying，接著讓我們來看currying定義是什麼，根據官方定義是，將擁有多參數的函式，變成只接受一個參數，如果還有其他參數，就回傳另外一個函式

```haskell

g: (a, b) -> c

;; curried 後

f: a -> b -> c

```

上面是用haskell表示curry的概念，根據這定義我們前面python所寫的，也剛好符合，但是這不代表python實作的partial等於currying，因為今天我們要是給予兩個以上參數，或是任何地方跟定義不一樣，就會變成不是currying，所以應該是這樣說的，currying是partial的子集，我們可以利用partial達到currying的效果這樣。

---

## 總結

後半部書中，大致上都是在講python內建的，functools, itertools，確實使用起來挺方便的，也讓我反省了一下，是否以後在工作有些地方可以使用看看，先姑且不論效率上是否會更好，程式碼簡潔程度會有大大的提升，然後對於python來學習functional programming style，如果是以學習來講的話，我個人覺得不是那麼好，最好還是學haskell這種pure functional programming，會學的比較多和深，雖然我自己也還沒學特別深拉ＸＸＤ。 但是python是可以用functional progamming style是無庸置疑的，而且老實講語意上也是很順，之後如果有時間我想我會好好想想怎麼用python來用functional programming的。


