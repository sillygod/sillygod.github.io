---
layout: post
title: create a blog on github (in process
date: 2014-02-15 13:42
comments: true
categories: 
---


今天逛程式論壇偶然看到一個東西叫做 [github page ][1]似乎是可以把你的網站github上面託管，官網上面有簡短的幾個步驟，基本上照著做，就會看到他所跟你說的效果，只是剛開始我看到的時候，心裡遲疑了一下，他好像沒有說到關於後端的事情阿! blog雖然只是一個簡單的記錄用途，像是日記一般，但是他最少也有提供留言的功能，我想這應該需要用到後端的幫助吧? 所以我很好奇這個有辦法做出有留言功能的blog嗎? 可是當我在github page上，把滾輪滾到頁底，卻發現 Blogging with Jekyll 這樣的字眼，讓我有點好奇於是就來試著用用看了，而且我看似乎有不少人的部落格也是用github page來託管，所以我想如果我用好後大概就是用它了，這邊的blogger就不會再更新了 :P  
  
Jekyll 看官網說明它是由 [ruby][2] 所寫的，這同時也代表你必須要擁有ruby才能用Jekyll，由於我目前沒興趣碰ruby，題外話，個人覺得ruby似乎有模仿python的味道，不過兩者所秉持的精神卻是大大不同就是了，有興趣的人可以去學學ruby:) 回到正題，由於上述原因，所以我就試著找尋看看有沒有類似的library是python所寫的，果然不出所料是有的，目前我發現兩個可能不錯的 [hyde][3] 和 [pelican][4] 而且看了這兩個網站，他們也的確說自己是 static site generator，所以我更加好奇留言功能是怎麼用的 :P 雖然有的是方法，比如一有人留言就更改網頁內容這樣，只是要做到這樣的話，github網站就必須提供API讓我們可以控制這樣的行為...不管是怎樣，總之我很好奇 :)  
  
我挑的是pelican，不過如果你的平台跟我一樣是windows加上python的version是3以上的話，在安裝上可能就有點麻煩了 :P 因為他要藉助setuptools來安裝 :( 所以呢! 首先到 [這個網站][5] 下載 `ez_setup.py`，別懷疑就是run它，安裝完後就可以安裝pelican，他會自動幫你安裝它所依靠的其它library，做完這些後，你會發現還是有問題!! 當你執行pelican-quickstart會跑出錯誤訊息 syntax error ，其實就是python2和3的問題，所以要用python3內附的py2to3去轉換後就OK了 :) 然後另外問題就是pelican文件上也有說明，如果你想要用markdown寫網頁的話，那你還要另外安裝python的package markdown就是了。  
  
目前我[做到如此][6]而已，畢竟還要讀一下pelican的document才知道後續的操作~ 這篇就先記錄在windows上安裝的流程這樣，至於怎麼把網站用到上面我想等我了解一些內部細節後，在一起記錄。  
  
其實如果是linux的環境應該是無痛安裝 :P這並不是代表windows suck，這只能說源自於linux的東西，本來就對linux友善，想要在不同平台使用就要靠自己去做修改 :) 幸好不用到改源碼的境界就該高興了 :P  




[1]: http://pages.github.com/
[2]: https://www.ruby-lang.org/zh_tw/
[3]: http://ringce.com/hyde
[4]: https://github.com/getpelican/pelican
[5]: https://pypi.python.org/pypi/setuptools#id1
[6]: http://sillygod.github.io/blog/
