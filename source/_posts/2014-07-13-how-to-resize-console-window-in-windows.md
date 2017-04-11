---
layout: post
title: how to resize the console window in windows
date: 2014-07-13 06:39
comments: true
categories: 
---


最近在軍中時在遇到太多鳥事，同時也遇到一些不太如意的事情，再加上我開始有點迷茫了，關於學習方式的事 :( 所以已經有一段時間沒碰程式了，只有回家逛逛論壇，突然我看到一個議題讓我有點小興趣，那就是我今天要寫的東西。  
  
其實如果想要可以放大的console window，其實也不難而且也不需要寫程式，點個右鍵，去設定裡面的一些性質就可以，只是身為一個programmer，就是要寫程式去控制不是嗎? :)  

![pic1][1]

上面這張圖是我目前寫出來的樣子，只是我對某些地方仍然感到不解，就是當我點把視窗放到最大，他其實並非真的完全放大，下面仍然會有些空隙，目前的code我放在[github][2]上面的console.py，其實這個project當初只是無聊試試看socket做個小小的consle介面的聊天室而已。  
  
關於撰寫這樣的功能，需要注意的地方，大概也只有幾點，這些心得是我觀察了一下，console的內容後得出來。  
  
首先，先來說說我的觀察，一開始windows的console window buffer的預設值是 80x300，我是不知道是不是每個windows系統都這樣啦，或許你自己也改過設定也說不定，之後你可以試試看點放到最大，你會發現視窗只有拉長高度，對於寬度他並沒有拉寬，所以可想而知，console buffer size，是一個關鍵點!! 所以想要放大視窗，我們必須為console準備相對應的buffer size，至於要怎麼計算呢? 我認為大概是這樣的  

```py
console buffer width = screen width / console font width  
console buffer height = screen height / console font height  
```

以我電腦為例  
200 = 1600 / 8  
56 (大概值) = 900 / 16  
也就是說最少我也需要200x56的buffer size才可以放到最大....  
  
console font size的預設值通常是 8x16，當然關於這個可用winapi去取得，是用什麼函式這裡就不囉嗦了，詳細請看console.py裡的resizeConsoleWindow，算完後，要重新設定buffer size以至於放大時可以填充，我同時也設定了console window info 雖然有得到跟上面那張圖，不一樣的結果(更接近真的放大最大)，上面那張是按了放大最大後的結果，關於這個行為我目前還是不解就是了，因為我已經準備足夠的buffer size讓他可以最大化，可是點了之後卻有點落差，不是很懂為什麼? 關於這點我還必須在研究一下 :(  
  
或者有誰知道為何的，可否告知小弟 :)

[1]: http://i.imgur.com/K7gZ63v.png
[2]: https://github.com/sillygod/my-travel-in-learning-python/tree/master/cli_chatroom
