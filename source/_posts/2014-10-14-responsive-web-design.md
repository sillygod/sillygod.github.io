---
layout: post
title: 初嘗Responsive Web Design
date: 2014-10-14 12:37
comments: true
categories: 
---

以前就稍微略有耳聞過這個東東，RWD到底是什麼東西呢??  其實現在隨便google一下都會有答案，responsive 有點像 altermating的意思，就是交互的，響應的，所以網路上RWD翻譯常看到"響應式設計"，我想這種設計網站的風格，主要是因為現在mobile發展的太好啦，隨著瀏覽網頁的裝置不同，想必要有針對性的頁面設計吧~~  
  
也因此這種RWD，需要倚靠 css @media這類的東西，詳情看 [這裡][1] ，這是CSS本身就有支援也比較方便，我想如果是以前的時代可能就要依靠javascript去控制了吧~ 回到正題，關於media這個語法我也不清楚，畢竟我不是專門寫網站設計的，後端OK，但前端我只是略懂略懂 :)  
  
其實現在framework這麼多，你也不用手刻這種css framework，況且css本身的特性，很容易覆蓋前者定義，哼哼，你一定想這樣可以幹嘛是吧! 個人是認為這樣你就放膽去用css framework，如果效果不合你意，你在自己定義去覆蓋就好囉，對於前端可以省超多麻煩，也可以放多的心力在JS和後端，當然如果是想要專精於前端的客官阿，我有找到一篇blog，內容挺不錯的 [這裡][2] ，可以多看看，好拉說了這麼多，我也來說說我用了什麼framewrok，我個人目前用的是 [bootstrap][3] ，這個其實不單是一個css framework，其中也包含了JS和一些東東，有興趣者，在自己多鑽研吧。  
  
這邊要告訴你的是，如何快速上手 bootstrap，基本上官方文檔就夠了，而且我看也只有官方文擋了 :p "getting started" 那邊的連結基本上看了你也不懂怎麼用 :) 那邊教你下載，如何引用，和一些bootstrap基本概念，我覺得到不如直接開一個 [jsbin][4] 或者類似的網站都可以，目的就是讓你直接看到效果，最直接又方便，再來直接看官方的css和component的連結，他的說明都會有舉個小小例子，直接複製貼上，看看效果，我想你就略知一二了，對了，記得jsbin中，要加入library喔~ 要不然會沒看到效果，其實玩一玩後，我想你就大概知道怎用了，因為基本上只是把框架修改修改，遇到問題就去 stackoverflow查一下，基本上會有解答的。  
  
小弟基本上花了不到兩小時就稍微知道怎用了，也寫了一個前端，雖然我的頁面設計很不行 :( 沒有美感，加上又沒美工.... 預覽圖如下  
  
在PC上長這樣  
  

![pci1][5]

  
在mobile下長這樣，這裡用chrom的開發工具預覽  
  

![pic2][6]

  
基本上我沒自己額外加寫css，就有這樣的效果了，只是純粹套用class，很方便。  
  
目前而言，這篇也只是跟你展現怎麼快速使用，至於要怎麼隨心所欲使用的話，看我以後會不會常用到這個，有個心得後，我再做多的解釋，或者是類似的framework的比較。  
  
退伍後的programming相關的第一個post :) 好久沒寫這樣的文章，有點累(眼睛 QQ
真不知道有什麼方法可以保養眼睛的

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media
[2]: http://learn.shayhowe.com/advanced-html-css/
[3]: http://getbootstrap.com/
[4]: http://jsbin.com/
[5]: http://i.imgur.com/B88wzQs.png
[6]: http://i.imgur.com/gdvFqPY.png
