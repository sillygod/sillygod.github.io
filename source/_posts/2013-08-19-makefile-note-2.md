---
layout: post
title: makefile note 2
date: 2013-08-19 11:32
comments: true
categories: 
---


關於make的target和prerequisites是用dependency graph來做記錄的，所以像這樣的寫法  
  
a: b.c c.c  
a: d.c e.c  
其實同等於  
a: b.c c.c d.c e.c  
  
他只是持續的修改dependency graph而已，但是如果是用double colon(例:a::b.c c.c)事情就會變得不一樣了，它會分別建立dependency graph，而不會append原來的。  
  
  
上次說到target可以為檔名也可以不是對吧，不是檔名的target，在術語上名為phony target，其實如同字面上的意思，phony -> fake，假的target，為什麼叫做假的target? 因為這個target並非用來產生檔案的，他只是純粹執行一些shell指令，像是這樣  
  
clean:  
    rm -f *.o  
  
如此這類的，但是呢! 當你要用來做這種事情的時候，請記得多加這一行 .phony: clean  
會需要多加這行的原因是 make它是無法辨別target是要用來產生檔案或是純粹執行指令，所以要加.phony的宣告，讓make知道它是always out of date，舉個例子吧，如果今天你沒有加這行會發生什麼事呢?  
  
當你同目錄下沒有檔案叫做clean的話那一切就會正常，always out of date，但~~~是~有的話呢!，此時你的target就會被認為是要產生檔案用的，由於clean的rule並沒有任何prerequisites所以always up to date，所以就不會被執行了。   
  
另外make是支援自定義變數的，例如: 你宣告了 compile = g++ ， 那麼當你要使用這變數時要用錢字號來取得，$(compile)這樣，make有所謂的 auto variable，詳情請見 [這個][1]  
目前對這個沒太多研究，我想這個的目的大概是減少code的量，畢竟一直重複打同樣的字是一件很煩的事，像機器人的做的事就交給機器人來做吧 :) 



[1]: http://www.gnu.org/software/make/manual/html_node/Automatic-Variables.html
