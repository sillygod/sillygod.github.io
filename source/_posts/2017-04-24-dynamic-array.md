---
title: dynamic array
date: 2017-04-24 22:50:19
categories: [python]
tags:
---

## 緣由

最近正在上一堂線上課程[python for data structure algorithm and interviews](https://www.udemy.com/python-for-data-structures-algorithms-and-interviews/)，其中遇到有趣的點，想說特別來記錄一下，用python這麼久，也沒特別注意這個問題，今天要講的東西就是python list，老實講我並沒有看過源碼是怎麼實作的，原本我都以為python list是個類似link list的實作咧 :P 誰叫他名字有list 哈哈，但是python的list，實際上就是類似c++的vector那種動態array的機制，一開始就先給你一定容量的container，等到滿了就在new一個容量更大的array，然後搬過去，可以看看下面的測試例子就會知道了

```python
import sys


lst = []

for i in range(10):
    
    print('{} {}'.format(len(lst), sys.getsizeof(lst)))
    lst.append(i)

# output
#0 64
#1 96
#2 96
#3 96
#4 96
#5 128
#6 128
#7 128
#8 128
#9 192
```

可以看出size會等於某數的倍數成長，我們可以來做點簡單的方程式來實際看看到底是哪個數字

$$ 
x + y = 64 \\\\
x + 2y = 96
$$

輕易的可以知道那個數字是32，至於一開始的32，是list這個物件其餘的size，python的 `sys.getsizeof`並不會像c或是c++得到該資料型態的size，原因就是python所有資料型態都是物件，還要加上gargabe collection！，若是想要使用Ｃ或Ｃ++那種sizeof，就必須使用python ctypes的sizeof。

另外有趣的是我們可以藉由python ctypes來實作一個小小的dynamic array。

```python
import ctypes

class DynamicArray:
    
    def __init__(self):
        self.n = 0
        self.capacity = 1
        self.A = self.make_array(self.capacity)
        
    def __len__(self):
        return self.n
    
    def __sizeof__(self):
        return ctypes.sizeof(self.A)
    
    def __getitem(self, index):
        if not 0 < index <= self.n:
            raise IndexError('out of bound')
        
        return self.A[index]
    
    def append(self, ele):
        if self.n == self.capacity:
            self._resize(self.capacity*2)
        
        self.A[self.n] = ele
        self.n += 1
    
    def _resize(self, new_cap):
        B = self.make_array(new_cap)
        
        for index, ele in enumerate(self.A):
            B[index] = ele
            
        self.A = B
        self.capacity = new_cap
        
    def make_array(self, new_cap):
        return (ctypes.py_object*new_cap)()

```

以下我們來測試一下，進行跟python list類似的範例

```python

from ctypes import sizeof

darry = DynamicArray()

for i in range(20):
    print('{} {} {}'.format(len(darry), sys.getsizeof(darry), sizeof(darry.A)))
    
    darry.append(i)

#output
#0 32 8
#1 32 8
#2 40 16
#3 56 32
#4 56 32
#5 88 64
#6 88 64
#7 88 64
#8 88 64
#9 152 128
#10 152 128
#11 152 128
#12 152 128
#13 152 128
#14 152 128
#15 152 128
#16 152 128
#17 280 256
#18 280 256
#19 280 256

```

前面提過`sys getsizeof`這個方法，[官方文檔](https://docs.python.org/3/library/sys.html)，可以看出他是實際上只針對該物件內容進行size計算，而不會另外去針對裡面內容額外指到的物件，因此這裡的獲得的size不會因為我們new array而有所改變，甚至是class多增加屬性也不會增加其size，所以～ 這裡我才改寫了`__sizeof__`讓他比較像原生lst的行為。


## Amortized Analysis

那麼對於這種動態array，他的append實際上效率要怎麼計算呢？ 因為你會發現並不是每次append都需要resize對吧，所以我們必須想個方法來衡量這個效率，這時候就要來講講amortized analysis了， amortization中文意思是分期償還，從這個意思來看，大概有點ＦＵ了吧，接下來要對dynamic array的append效率來做分析，首先就先來觀察並分析如下表

```python
def append(self, ele):
    if self.n == self.capacity:
        self._resize(self.capacity*2)

    self.A[self.n] = ele
    self.n += 1
    
    
def _resize(self, new_cap):
        B = self.make_array(new_cap)
        
        for index, ele in enumerate(self.A):
            B[index] = ele
            
        self.A = B
        self.capacity = new_cap
```

| No. | ary cap  | cost | is resized |
| --- | ---      | ---  |  ---       |
|  1  |   1      |  1   |   x        |
|  2  |   2      |  2   |   o        |
|  3  |   4      |  3   |   o        |
|  4  |   4      |  1   |   x        |
|  5  |   8      |  5   |   o        |
|  6  |   8      |  1   |   x        |
|  7  |   8      |  1   |   x        |
|  8  |   8      |  1   |   x        |
|  9  |   8      |  9   |   o        |


每一次要resize時都會做copy動作，看看No. 9 那裡較明顯，因為要插入時發現是滿的，所以就做了resize，裡面動作有做到8次assgin（將前面的array內容複製到新array裡），另外一次就是新資料的輸入，所以有需要resized的情況下第n次append裡面就會做了n次assign動作，下面開始列出數學函示做點分析

$$ \frac{1+2+3+1+5+1+1+1+9+...}{n} $$

2, 3, 5 , 9 可以變成 (1+1) (1+2) (1+4) (1+8)

$$ \frac{(1+1+1....+1) + (1+2+4+8+..)}{n} $$


可以再繼續變化成下面這樣


$$ \frac{ \sum\_{i=1}^n 1 + \sum\_{i=1}^{(\log_2{n-1}) + 1} 2^{i-1} } {n} $$


**題外話**
```python
$$ \frac{ \sum\_{i=1}^n 1 + \sum\_{i=1}^{(\log_2{n-1}) + 1} 2^{i-1} } {n} $$
# 根據你使用的markdown渲染引擎不同，你可能會遇到一些小問題，上面這行就是上面那個數學公式，
# 我一定要在 _ 前面使用escape symbol (\)，才能正常表現，但是我在ipython就不需要～
```

### 等比級數公式

$$ S_n = \frac{a_1 - r^n}{1-r} $$


藉由等比級數可以將上面式子變成

$$ \frac { n + 2^{(\log_2 n-1) + 1} } {n}  = \frac { n+ 2*(n-1)} {n} = \frac {3n-2} {n} $$

算完之後這個效率等於 $ O(1) $


### amortized analysis相關知識

有三種方式

 - the aggregate method
 - the banker's method
 - the physicist's method(potential function)


`The amortized cost` per operation for a sequence of n operations is the total
cost of the operations divided by n.

其實說穿了amortized cost就是一種平均成本的概念，n次操作中，僅少數是昂貴的操作，絕大多數都是便宜的操作，平均後就會是便宜的操作，上面dynamic array就是個例子

`A potential function` is a function of the state of a system, that generally should
be non-negative and start at 0, and is used to smooth out analysis of some algorithm or process.

老實講我還沒弄很懂這麼多種的分析方法是...但是對於我們上面這種分析方式，應該算是aggregate method，就是硬底子的去分析每一步操作去計算平均效率這樣，這堂課還有許多內容我還沒上完，之後有遇到有趣的東西的話，還會上來紀錄一下的。