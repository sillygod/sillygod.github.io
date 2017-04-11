---
layout: post
title: pyqt image displayer
date: 2013-08-29 07:30
comments: true
categories: 
---


最近開始動手寫我之前講要實做的image displayer了，要學的東西太多，所以就晚了許多時刻才開始研究 :)  
大體上動機是想要讓自己更加了解qt這個library，另外的目的就是windows預設的image displayer是無法看動態gif的，所以我打算自己做一個可以看動態gif的圖片檢視器，目前的進度是這樣，一個非常楊春的界面，還有功能 :(  
  
介面架構:  
![pic][2]
大概就簡單如上面所示，只是toolbar的方面還要設計icon，所以目前就沒加上去，所以進度目前是50%吧 :) (或許更低)，下面影片是展示目前的進度  [連結](http://www.youtube.com/v/6w2TaPNtjlg?version=3&f=user_uploads&c=google-webdrive-0&app=youtube_gdata)  


   
稍後整理目前心得，一直查官方文件看的有夠累 :(  
整理完再重新編輯這篇文章 :-S  
目前使用的qt物件  
QGraphicsScene   
QGraphicsView  
QgridLayout  
QMainWindow  
..  
..  
其實QT實在有太多東西了，讓我覺得其實要做同樣的東西，可以使用很多不同的元件去達成，為何最後我會選QGraphicsScene來顯示圖片，是因為他對2D圖片顯示似乎是比較快的，當然你也可以用QLabel來達成，只是我想效率可能就會比較低吧? 沒實際比較過也不清楚 ，而且QGraphicsView可以控制你觀看QGraphicsScene的視角，像是旋轉阿~有的沒的，所以在種種因素考慮下才使用這兩個。  
  
另外QT其實有提供designer讓你可以用拖曳的方式來做GUI界面，滿方便的:) 只是我想要先嘗試一下hard coding的感覺而已  
  
要看源碼的話，我有放在github上面[點此][5]，最近才開使用 :)  
  
  


[1]: http://4.bp.blogspot.com/-ts3zKxfTXoc/Uh73aR4SZQI/AAAAAAAAADU/nbJ_q1oj3p4/s400/3.png
[2]: http://4.bp.blogspot.com/-ts3zKxfTXoc/Uh73aR4SZQI/AAAAAAAAADU/nbJ_q1oj3p4/s1600/3.png
[3]: http://www.youtube.com/v/6w2TaPNtjlg?version=3&f=user_uploads&c=google-webdrive-0&app=youtube_gdata
[5]: https://github.com/sillygod/my-travel-in-learning-python/tree/master/imageDisplayer
