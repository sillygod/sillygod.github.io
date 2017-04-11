---
layout: post
title: first time to play lisp
date: 2013-09-18 11:04
comments: true
categories: 
---


最近不知道怎麼搞的，突然想要來碰一下這十分古老的語言 :) lisp是一個充滿分支的語言，我覺得他沒有像python那樣有一個強力標準在，意思是python有一個官方版本，雖然python也有眾多分支就是了，像是Jpython, Ironpython....有的沒的。  
  
其實在後來有一個算的上稱為標準的lisp，那就是common lisp，以後在網路上搜索的結果，發現比較多人在用的是clisp(common lisp)和SBCL，但是common lisp也是有眾多實做版本，，我是下載 [gnu common lisp][1] ，如果想要玩SBCL請自行去找載點囉 :)  
  
lisp的在網路上的資源，說多也不多，說少也不少，但是我覺得似乎沒那麼熱門，畢竟這語言，曾經被冷落一段時間，但是經過我稍微一探lisp的世界，我發現這語言雖然古老，但是它卻有著許多現代語言的特性，甚至該說更好嗎? 垃圾回收機制他也擁有。但是令我比較驚訝的是它的例外處理，他不像目前的語言，一遇到錯誤就只是丟個訊息，然後程式結束，lisp它似乎會讓你進入debug模式的樣子，然後列出一些你可以執行的動作，目前我也才剛碰一兩天而已，所以還無法完整了解，lisp的哲學，必須過一段時間才能領域精髓。  
![pic][2]  
上面是我的開發環境，因為網路上，我看到推薦的幾乎一致是 emacs + slime + your clisp，所以我就用囉，其實最近也在學vim，但是我看到的插件，竟然跟gnu screen配合，這實在是...很悲劇的他沒提供windows版的:( ，當然其實也有不是用gnu screen，純粹用vim buffer的，插件名字是slimv，但是目前還找不到無法使用的原因，目前猜想是我vim支持的python版本的不合的關係，但是我可不想為了這個，而重新去compile一個vim來用...，或許也是其他原因也說不定，只是想要無痛設定開發環境，就用emacs吧 :) 畢竟slime本來就是emacs的插件。  
  
  
其實如果你不想要為了學lisp而在去安裝emacs、學emacs的話，我有找到一個IDE，方便好用，以供參考[allegro common lisp][3] ，但是介面實在是...，如果你不介意介面的話，又不想碰emacs，那就用這個吧 :)  
  
  
另外這邊記錄一下目前找到的資源，滿意外的lisp，有不少免費電子書而且品質還算不錯!!  

* [ansi common lisp][4] 
* [wiki tutorial][5] 
* [practical common lisp][6] 

我想看完這些就差不多了吧 :) 

[1]: http://sourceforge.net/projects/clisp/
[2]: http://i.imgur.com/660Ts3S.png
[3]: http://www.franz.com/downloads/clp/survey
[4]: http://acl.readthedocs.org/en/latest/zhTW/index.html
[5]: http://zh.wikibooks.org/wiki/Category:Lisp_%E5%85%A5%E9%96%80
[6]: http://www.gigamonkeys.com/book/
