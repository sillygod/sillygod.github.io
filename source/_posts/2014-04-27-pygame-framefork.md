---
layout: post
title: pygame framefork 持續進行中
date: 2014-04-27 04:56
comments: true
categories: [pygame, python]
---


這個project的進度實在沒辦法進行的很快，畢竟現在我只有每周末可以回家寫，但是每次回到家都想要休息，另外一部份的原因實在是因為我對於設計GUI框架，沒有太多的概念，所以目前也只是按照我個人的想法來包裝，因此隨時都會有改動，最近感覺每次回到家，都要重新看code回想一下自己當初的想法是啥 :) 這樣感覺有點麻煩，所以這篇主要是來記錄一下目前的想法和進度的 :)  
  
目前寫到這樣的結構，其實我已經開始有點混亂了，目前我是寫在 imageCropper裡面，並沒有將這個framework分層，因為目前只是測驗性階段，加上python是動態語言，所以沒有將code分層是不會影響到效率的。  
  
我寫了這個測試，發現我的包裝少了什麼東西，就會回去把包裝修改一下，目前我有很多疑慮，像是  
  
1.寫個物件是處理座標系統的，因為發現了絕對座標和相對座標的問題。  
2.寫個物件是來計算每個widget位置的安排，像是考慮到margin padding等問題。  
3.widget是不是該包含update這樣的函式，可是如果在每次的gameloop都call update，這樣會不會有效率上的問題，這樣一直改來改去，想來想去，讓我有點不知道所措。  
4.需不需要把widget的屬性，另外用json的方式來進行讀取和設置   
  
實在是有太多太多地方需要思考，現階段可能就以先增加其他widget再說吧，像是listbox、scrollbar等，另外我也在想寫遊戲裡的GUI，有必要寫到那麼麻煩嗎? 我一直在思考這些事情，所以project進度也一直沒很大的進展，所以我在想要不要稍微停下來，讀一下別人的open source來擷取一些想法，只是我查了一下pygame gui 的相關open source，大致上只有[pgu][1] 感覺比較好一點，可是我又覺得它似乎有點太雜了，再加上似乎沒有在維護了，到最後我找了一個based on pyglet 的game gui，就是這個[simplui][2] ，他也是沒在維護了 :( 只是相對我覺得他比較lightweight，所以我決定從這個下手，因為可能比較好讀 :) 不過我沒什麼閱讀open source project的經驗，所以可能會讀比較久一點，才會有相關的心得就是了，而且萬一他用到比較有技巧的東西，那可能就要更久了 :)  
  
目前大概要一段時間才會PO 跟 framework有關的文章了 :)   
  
  
  
  
  



[1]: http://code.google.com/p/pgu/
[2]: https://code.google.com/p/simplui/
