---
layout: post
title: pyqt designer 初體驗
date: 2014-02-05 04:42
comments: true
categories: [python, qt]
---


放了一個年假，總算是有點心情來搞跟程式有關的東西了 ˙ˇ˙   這次呢~我是嘗試著把之前做的[imageDisplayer][1]改成dark theme，功能還是一樣並沒有增加就是了:P 我只能說QT，真是讓人越用越愛阿，真的是一個很強大的library，他支援很強大的客製widget的功能，從官方網站的[文件說明][2]即可體會到這點，想到以前我在嘗試著用windows api去寫一個小小的GUI程式就搞了很久，要查很多api文件，而且那時候我還不知道怎樣去custom widget呢，舉例來說，把scroll bar改成很漂亮這樣，而不是一個很普通的樣子，從我給的連結應該就可以看出我要說的是什麼意思了。  
  
另外很特別的一點，QT他是使用css來改變GUI widget的外貌的，這點還真的是非常方便，從連結可以看到，你可以把scrollbar的上下箭頭改成其他圖案，或者是讓其不要顯示，上下箭頭的部分是這樣的 QScrollBar::up-arrow, QScrollBar::down-arrow 你只要設定他的background:none就會讓箭頭消失了，QScrollBar::handle則是中間那個長方形，你當然也是可以隨意改變他的樣子，剩下的我想官方說明已經非常清楚就不一一拿出來說嘴。  
  
不過目前我也是第一次用qt designer來做介面，另外我在實作時發現他好像有BUG，照理說這種WYSWYG，成品做出來後應該是不會差太多才對，不過很神奇的是，我用了Gridlayout去安排位置，結果我的button和lineEdit的位置都跑掉了...一整個滿神奇的，我為了搞這個搞了很久一再重複拉來拉去(感覺不太好拉阿sigh)，然後再把ui檔compile到py檔，最後再看成品的UI位置，結果怎麼調都沒辦法，就暫時放下來了:P 因為目的也算是達到了，只是想要體驗custom widget的功能而已。  
  
QT實在還有太多地方可以去鑽研，只是目前還有八個月役期的我，最多也只能利用放假來寫code了~  
  
不知道是否各位寫code時，也會利用音樂增加寫code的動力 :P  
[link][3]   

  
PS:太久沒碰，總是需要動力來幫助的

[1]: https://github.com/sillygod/my-travel-in-learning-python/tree/master/imageDisplayer
[2]: http://qt-project.org/doc/qt-4.8/stylesheet-examples.html#customizing-qscrollbar
[3]: https://youtube.googleapis.com/v/KYBsYkEeK4A&source=uds
