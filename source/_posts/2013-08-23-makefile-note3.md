---
layout: post
title: makefile note3
date: 2013-08-23 08:16
comments: true
categories: 
---


關於makefile的變數assign的方式，目前看到的大概有三種，詳細資料請看 [這個][1]  
  
第一種 simple expand variable，是使用 := 這樣的operator  
舉個例子  
```makefile  
who := mark  
act :=  $(who) say  
who := alice  
echo $(act)  
```  
將會是 mark say，:=這種assgn的operator，如同字面上所言簡單的擴展，他一遇到該行就直接擴展並不會去查他最後是什麼樣子，如果你想要結果是 alice say的話那麼就是要使用第二種方式。  
  
第二種 recursive expand，是使用= 這樣的operator  
```makefile  
who = mark  
act = $(who) say  
who = alice  
echo $(act)  
```  
這樣一來結果就會是alice say  
  
第三種是conditional variable assginment operator，是使用?=這樣的operator 
```makefile
who = mark  
act = $(who) say  
who ?= alice  
echo $(act)
```
嘿嘿結果是 mark say喔~ 這個operator的作用是他會檢查該變數是否有值，有值的話就不會做assign的動作  
  
關於make，基本上似乎看官方文件就很OK了，遇到不會的符號查查官方文件大概就有解，我是看gnu make的官方文件，畢竟mingw-make我找不到相關的文件，我想大概是mingw-make就是gnu make來的吧，所以兩者差異應該不大才是。



[1]: http://www.ecoop.net/coop/translated/GNUMake3.77/make_6.html#SEC63
