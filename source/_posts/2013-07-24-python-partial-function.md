---
layout: post
title: python partial function
date: 2013-07-24 14:19
comments: true
categories: [python]
---


    今天到是第一次聽到這個名詞，好奇之下去孤狗了一下，沒想到其實也沒有什麼特別的，應該很多人自己在coding的時候都用過了，這種東西就像design pattern一樣，是一種大家可能都會在不知不覺中使用出來的模式，因為常被使用而且有不錯的用途，因此取個名字記錄下來罷了，首先就來看看一段code  
  
```python
import functools

def f(base=1, pow=1):
	return base**pow
f3 = functools.partial(f, 3)
	print(f3(3))   
```
    看到這裡是否看出什麼了呢? 沒錯partial function其實也就只是將原本的function多做一層包裝，因為可能在某些情況下，你需要一直打出這些函式，每次都要一直傳參數，以上面為例如果你需要一直call以3基底各種次方數的函式，比起call f(...)，call f3(x)簡單多了不是嗎?所謂的partial function就大概是為此而在的。  
  
    functools.partial 第一個參數是你原本的fucntion，接著就是放進函式參數囉，像這邊f3就是指base=3，之後呢我在CALL，f3的時候再給予pow值 ，其實我也不知道functools這模組存在的理由 :) 可能是我幾乎沒再用的關係啦，或許他有好用的一面，至少他幫你做了一些包裝，只是我還是無聊做了一個實現  
  
```python
def partial(f, *arg, **karg):
	def innerF(*iarg, **ikarg):
  	ikarg.update(karg)
    return f(*(arg+iarg),**ikarg)
  return innerF  
```	  

我不太確定是否functools.partial是否是這樣實現的，只是至少我下面這完整的code沒問題 :)  

```python

import functools

def partial(f, *arg, **karg):  
	 def innerF(*iarg, **ikarg):  
	 ikarg.update(karg)  
	 return f(*(arg+iarg),**ikarg)  
	 return innerF  
	  
	  
	def f(base=1, pow=1):  
	 return base**pow  
	  
	f2 = partial(f, 2)  
	f3 = functools.partial(f, 3)  
	  
	print(f2(3),f3(3))  
```	  
  


