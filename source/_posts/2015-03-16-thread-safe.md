---
layout: post
title: python queue thread safe
date: 2015-03-16 08:43
comments: true
categories: [python]
---
之前看了python官方文檔，關於[Queue](https://docs.python.org/2/library/queue.html#module-Queue)的說明，以前就有在意過了，官方說Queue是thread safe的，所以會用到**多執行緒**的時候，如果會用到list之累的資料結構，建議用Queue，yeap,很好用，但是我那時候就直接使用也沒特別去想，要怎麼證明他是thread safe的，所以以下特別來講講我的測試。

要造成race condition的方法，就是讓兩個以上的thread，來競爭同一個資源(data structure or memory, etc)，這邊要先來證明Queue做到了什麼機制，來證明他是thread safe，以下舉例

```py
import threading
import time
import Queue

# candle = [1,2,3,4,5]
candle = Queue.Queue()
for i in range(5):
    candle.put(i)


def _pop1(candle):

    while len(candle) != 0:
        time.sleep(0.2)
        print(candle.pop())


def _pop2(candle):

    while len(candle) != 0:
        print(candle.pop())


def pop1(candle):
    """In some situation, this will hangs.
    ex.
        when execute candle.empty(), candle is actually has one
    element. However, other process will consume this one, and then
    this process will hangs on here until put other elements in the
    queue
    """
    while not candle.empty():
        time.sleep(0.2)
        print(candle.get())


def pop2(candle):
    while not candle.empty():
        print(candle.get())


t1 = threading.Thread(target=pop1, args=(candle,))
t2 = threading.Thread(target=pop2, args=(candle,))

t1.start()
t2.start()
t1.join()
t2.join()
```

若你直接執行上面code的話，會發現，程式印出一些資料後就停住了，絕對不是因為它當掉了！！ 而是因為已經沒有資料讓queue consume了，依照官方文檔說明，預設行為是會停在這邊，直到有新資料進入，繼續consume這樣，好拉，這次把上面的queue換成list(我註解掉的那行)，加上pop1函式換成pop1_，以此類推，函式命名就見諒 ：) 一時不想花時間想，因為是以測試為目的。

好拉，換完之後，再次執行你會發現，跑出exception了~ 原因其實就是

```py
def _pop1(candle):

    while len(candle) != 0:
        time.sleep(0.2)
        print(candle.pop())
```

這裡會加time.sleep(0.2)，就是要故意讓這個例外容易產生，要不然這個錯誤還真有點難弄出來，我試過將他3秒內run過一萬次竟然都沒出現過錯誤呢 ：)  好拉，這個錯誤就是呢，**兩個函式都針對於同個list再進行pop**，所以呢！當程式執行到`len(candle) != 0`這邊時當下是還有剩下一個element，但是接著由於我故意讓它sleep，隨後這個element會被另外一個函式給pop掉，所以再來執行pop的話，會變成`[].pop()`因此產生錯誤了。

再來一個例子，來看看queue是否有用鎖來鎖住共同使用的變數

```py
import threading
import time
import Queue

# candle = [1,1,1,1,1]
candle = Queue.Queue()
for _ in range(5):
    candle.put(1)


def _add1(candle):
    for i in range(len(candle)):
        if candle[i] == 1:
            time.sleep(0.2)
            candle[i] += 1


def _add2(candle):
    for i in range(len(candle)):
        if candle[i] == 1:
            time.sleep(0.2)
            candle[i] += 1


def add1(candle):
    """In some situation, this will hangs.
    ex.
        when execute candle.empty(), candle is actually has one
    element. However, other process will consume this one, and then
    this process will hangs on here until put other elements in the
    queue
    """
    for _ in range(candle.qsize()):
        time.sleep(0.2)
        a = candle.get()
        if a == 1:
            a += 1
        candle.put(a)


def add2(candle):
    for _ in range(candle.qsize()):
        time.sleep(0.2)
        a = candle.get()
        if a == 1:
            a += 1
        candle.put(a)


t1 = threading.Thread(target=add1, args=(candle,))
t2 = threading.Thread(target=add2, args=(candle,))


t1.start()
t2.start()


t1.join()
t2.join()

# print(candle)

while not candle.empty():
    print(candle.get())

```

一樣註解掉的地方，就是有分用list和分queue的版本，直接執行的話是queue版，會發現output都是2，但是如果將註解掉的地方uncomment掉，然後將queue的註解掉，會發現output都是3，原因我就不多講了，跟剛剛的上面例子的原因是一樣的，所以事實證明，的確如果今天你的程式有用到多執行緒，確實用queue你會快樂很多 ：) 當然！ 你也可以自己動手做一個類似queue的機制，自己實作一個鎖，只是何必呢~ 除非你的Case真的特別到，必須自己做一個，要不然用queue真的是一個至高的選擇 ：)

### To sum up

Simple is Beauty ! Python is wonderful, lol.
繼續來挖掘python這個挖不完的寶藏
