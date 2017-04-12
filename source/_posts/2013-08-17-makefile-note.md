---
layout: post
title: makefile note
date: 2013-08-17 07:24
comments: true
categories: [makefile]
---


我一直以來其實都不怎麼想用makefile來進行編譯的工作 :( 因為實在是有太多好用的IDE了!哈哈，只是我最近常常用sublime text做為我的coding環境，但是只用它來寫python和網頁語言而已。  
  
最近突然想到乾脆比較簡單的C++也在這環境寫好了:) 因此決定來親自碰一下這東西好了，這樣一來我只要自己寫一個subilme build的檔案，就可以按下ctrl+B進行編譯了。  
  

[![][1]][1]

  
如上所示!OK  
  
 makefile的規則包括三個部份如下  

1. target
2. prerequisite
3. commands

target: prerequisite  
[tab] commands  # [tab]表示字元\t而已  
  
target:簡單說就是你所要建置的目標，不一定要為檔名  
prerequisite:建置目標前，所需要的先決條件  
commands:就是shell commands!! 記得開頭得有tab才行  
  
ex:  
cc.exe: cc.o  
[tab] mingw32-g++ cc.o -o cc.exe    
cc.o: cc.cpp  
[tab] mingw32-g++ cc.cpp -std=c++11 -c   
  
然後當我在cmd中輸入mingw32-make，由於我沒給任何argument所以他會以預設得來執行，但是預設的是什麼呢? 答案就是開頭最前面的target。接下來make的分析規則大概是這樣的，先看target和prerequisite去找檔案，如果prerequisite有相關的rule存在那麼就會以他為優先去執行，另外如果prerequisite比target還要新(意思是像是進行修改)，那麼就會rebuild該target。  
  
所以，以範例為例一開始碰到cc.exe: cc.o，很好發現了cc.o有相關的rule，那就是cc.o: cc.cpp......那串，所以就會變成先優先執行這條 ，執行完後就會產生cc.o檔，然後就回去執行剛剛那條rule，最後就產生cc.exe這樣。  
  
make是還有更多的用法的，目前這篇僅記錄最基本的法則和用法，不過印象中make不同的版本似乎會有他們獨特的用法就是了，我也不知道會不會用到那麼多 :)  
  


[1]: http://i.imgur.com/1IO2lP3.png
