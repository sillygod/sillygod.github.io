---
layout: post
title: python wsgi 初體驗~
date: 2014-01-02 15:29
comments: true
categories: 
---


最近終於稍微將上進的心，慢慢抓回來了 : ) 所以特別來寫一篇，雖然質量可能沒說很好，但總也是一個進步，好了，回到正題，其實是最近開始對python的[django][1] 感到有點興趣 :P  
  
我照著官方的教學，跟著一步一步慢慢做，在其中赫然發現，有個東西叫做wsgi，那時我突然覺得奇怪，怎麼這東西似曾相似，於是我果斷就搬出我最會的技能( google it )，哈哈，原來python標準模組裡就有這種東西，難怪會有熟悉的感覺，看過wiki介紹後，才知道這是python所定出的一個interface，wsgi千萬不要硬記阿! 看過他全名後就很容易記起來 web server gateway interface，簡言之，它只是一種application和server間溝通的介面這樣，想要看更加詳細的解說，可以看看這個 [網站][2]，說得滿詳細的。  
  
  
跟往常一樣就先來個測試範例吧  
```py
	from wsgiref.util import setup_testing_defaults  
	from wsgiref.simple_server import make_server  
	from wsgiref.validate import validator  
	  
	  
	def simple_app(environ, start_response):  
	 setup_testing_defaults(environ)  
	  
	 status = '200 OK'  
	 headers = [('Content-type', 'text/html; charset=utf-8')]  
	  
	 start_response(status, headers)  
	  
	 ret = '<script>alert("hello world")</script>\n'.encode('utf-8')  
	 return [ret]  
	  
	  
	validator_app = validator(simple_app)  
	  
	httpd = make_server('', 8000, validator_app)  
	print('serving on port 8000')  
	httpd.serve_forever()  
```	  
其實關於我給的那個網站，就有對於參數詳細的說明，或者去官方網站看也會得到解釋的，所以在這我就不會特別說明了 :P (其實是有點懶XD  
  
`start_response`就是將http的status和header傳給server，想當然爾，傳完了initial資訊，就要接著傳內容，這邊有個特別的地方那就是回傳的值(內容)! 似乎必須要是iterable的值，以我的python版本，如果只是單純回傳bytes物件會發生錯誤，因此我才會用list。再來就是python強大又好用的地方了，他很貼心，有做個小型Server可以讓我們測試結果，而不用再去安裝其他server，還要去做相關設定....。開啟localhost:8000後，就會跳出一個視窗上面寫著hello world囉~ 顯而易見的答案對吧。  
  
  
另外關於ret你是可以改成讀取index.html檔案，然後encode後再回傳，這樣做的話，就更有server的FU吧 :) 我想django大概也是利用類似的做法，不過django也說了他是一個架構，而非server，所以自附的server僅供測試方便，要發佈網站時，還是用專業的server比較好。  
  


[1]: https://www.djangoproject.com/
[2]: http://webpython.codepoint.net/wsgi_tutorial
