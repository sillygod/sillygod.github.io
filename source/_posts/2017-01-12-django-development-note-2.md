---
layout: post
title: Django development note 2
date: 2017-01-12 02:26
comments: true
categories: [django]
---
# Django development note 2

繼上次[django development note1](http://sillygod-blog.logdown.com/posts/249502-django-development-note-1)後，已經過了一段時間，咦～其實好像是挺長的時間，哈哈，總之呢，這段時期，前端技術方面，實在是苟日新，日日新，又日新， 近來sharp edge技術都是由前端那render頁面（就是指用js去渲染html），有不少的事情，已經慢慢從後端被拿到前端去負責了。

其中像是

 - html render
 - url router
 - i18n
 - ..等等


但是django 本身有個template system， 就是由後端來render出頁面，我在公司嘗試過，將angularjs和django結合寫過公司官網，另外也試過reactjs和django結合，寫出電商網站，但是這邊的url router和部份html render其實都還是用django的system，其實並沒有做一個完全的前後端分割，沒有這麼做的原因是考量到seo的問題，傳統由server端渲染頁面的話，seo就不用擔心，因為爬蟲都爬的到，但是改成由js渲染的話，問題就大了，因為爬蟲不會解析js並且去運行，已目前的爬蟲來講的話啦，雖然有聽說，google爬蟲未來會有支援，但是未來是未來，我們要著眼當下是吧～ 

因此url router是由django負責的話，我可以考慮哪些頁面是需要seo，先由後端給出這樣～ seo這個問題這麼大，像React他們是怎麼解決的呢？ 他們有所謂的render server，原理大致上，就是server先講js的邏輯run過，產生頁面，再回傳給client端，說是這樣說啦，但是你用了React+webpack後，尤其是css的buidle問題，就會跑出一堆啦，因為許許多多webpack套件當初只是為了frontend而寫，沒考慮到拿到backend是否能run，所以其實render server沒那麼簡單。

個人研究後，看到universal概念，就是為了上述問題... 而產生的， 其實有個範例叫universal react redux 啥的，就有用render server，老實講實在挺恐怖的，只要一扯到universal，不知道為啥裡面整個用到超多套件，邏輯複雜.. 設定也麻煩， 明明React超級夯，但是都人沒提出一個漂亮解決seo問題的方法，後來我和同事有稍微搞個universal react redux with django的測試專案，要的話可以到[這邊參考](https://github.com/sillygod/django-react-test)，老實講現在要我回去我應該很多都忘了xd 太多小套件了，在實作這專案期間其實有個叫做[next.js](https://github.com/zeit/next.js/)的東西，號稱zero setting的render server，實際上個人使用也的確是這樣，但是她有個很大限制，就是你不能自己寫webpack config！！ css也是只能寫在js檔裡，這也難怪它是zero setting囉～  但是我想等以後這個套件就會越來越方便啦，值得期待。

經過在公司一年多以來的經驗，我後來自己整理了一些後端project starter架構，個人而言我覺得後端可以開始只要做為純api server，也就是說url router，template system，有的沒的都可以去掉了，專心設計api，剩下的都搬到前端去，這麼做的好處在哪？ 至少是有下面幾點

 - 前後端程式碼邏輯分割清楚

有些人會想前端跟後端程式碼哪裡可以扯在一起？ 基本上只要你用的backend framework有template system，一定會有不少邏輯混在後端，然後前端在一起搭配，之前進入公司發現一堆magic code和bug都超難找，就是因為太多邏輯四散各地 :(  

後端變為純api後，前端頁面有所問題，毛頭出在哪，就往前端找阿xd，不用在霧裡探花，驀然回首原來bug就在經過處，每次都要仔細找後端哪裡暗插了什麼鬼怪code，遇過暗插inline css的，整個囧..  我想光是這個優點，就讓許多人開心了吧。

 - 前端不用懂django

跟前面很像，因為分割清楚，加在環境也是分割，因此前端不需要知道django是怎麼運行，自己就可以搞環境，若是以前用法，前端需要懂一點django，才知道怎麼run測試server，甚至還要migration你說是不是～ 身為一個前端還要懂後端，豈不是很麻煩？ 無法專心在前端上

 - 前端開始具有架構性

由於webpack或是gulp之類的工具存在，開始讓前端具有一定的結構性，其實這是好事～
但是這麼分割後，前端的架構究竟該怎麼弄會比較好？ 這邊我還不知道xd 畢竟我本分是後端嘛～ 雖然我略懂一些js和css， 最近我會研究一下前端架構，有一定心得後，我改日必定放上 :)

說了這麼多，好像都還沒提到django development相關心得，哈哈，前面都只是一些經歷讓我整理了後來的[django as pure api server](https://github.com/sillygod/django-as-pure-api-server)架構，下面來進行大綱性的解說

#### 專案架構

```
api/
  ....
  ..
core/
  settings/
  wsgi/
  __init__.py
  urls.py
  wsgi.py
nginx/
  nginx.conf
requirements/
  dev.txt
  prod.txt
Dockerfile
docker-compose.yml
manage.py
circle.yml
pytest.ini
```

這是一個簡略的專案架構簡介，想要更詳細的了解，可以去[django as pure api server](https://github.com/sillygod/django-as-pure-api-server)了解，從這邊可以知道我至少用了docker和docker-compose還有circle ci的東西，這部份跟持續整合比較有關係，其實目前來講關於docker這邊，用到的地方除了未來**持續整合**那邊可以用到外，就是我本地可以先進行模擬正式台環境，確保不會有意外出現，我自己在開發中其實還是用django的runserver啦，其實真的是最方便，當然有興趣的人可以使用docker-compose一下，但是對於debug時，我暫時還沒想要怎麼弄xd  因為平常debug django app時，我都是用`python -m pdb manage.py runserver`，那麼使用docker-compose時我還沒研究要怎麼attach process裡～～ 

**個人覺得[docker](https://www.docker.com/)是一個值得投入心力去學習的工具**

比如像我個人是使用[elementary os](https://elementary.io/en/)作業系統，個人寫了一個[安裝腳本](https://gist.github.com/sillygod/6d37ef7e4a02d253e743#file-eos_loki-sh)，之前我要測試這腳本是否能夠正常運行，我都會用vmware player，灌elementary os，來進行，但是頗麻煩，而且感覺有浪費空間，有了docker後，由於elementary os loki，是基於ubuntu16.04，所以這邊我只要使用ubuntu16.04 image，來進行測試，run個container，就可以跑一下我的腳本看看過程是否有錯誤這樣，測完就可以砍掉啦～清爽～

再來對於nginx和uwsgi設置，這邊我也可以用docker來進行模擬，而不用真的灌在自己主機上，要不然自己主機越灌越多東西，會變慢的，只能說docker真的是一個很棒的工具，也難怪她後來夯成這樣。

docker-compose就是一個輔助你使用docker的工具，原理就是寫一個設定檔(yml)，她會自動幫你建立環境，省去你打超多docker指令和開啟一堆terminal哈哈。

**pytest**

pytest的話，就是拿來執行測試用的套件，老實講要怎麼寫出好的測試，我目前無法給出一個心得，因為這實在是太難囉～ 這邊需要讓我花時間研究一下

再來使用的套件方面，以下列出個人覺得值得一提的

 - [django debug toolbar](https://github.com/jazzband/django-debug-toolbar)
 
是一個挺不錯的工具，對於sql的效率分析很有幫助，除了sql以外，她其實有許多分析和記錄，但是我不常用。 然後**請注意**，在production請拿掉這個套件，這個會吃掉你不少效能，這跟python built-in module profile是一樣意思，這種分析的套件都是插入執行分析，必定會影響你程式運行效能

 - [django modeltranslation](https://github.com/deschler/django-modeltranslation)

對於model資料有i18n，覺得這套件不錯，因為有個很大的重點他不會破壞你原本的model，之前是使用[django-parler](https://github.com/django-parler/django-parler)，雖然當初用的時候覺得不錯，但是這個是使用繼承的方式，所以會破壞到model的一些特性，而且她有個很大的麻煩處，就是無法使用model inheritance，幸好當初我用的case只是文章性質的需求，所以不用用到複雜的功能

 - [django rest framework](http://www.django-rest-framework.org/)

這個應該不用多解釋了吧，用django的各位，想要實作rest api，多半應該都是用這套了吧，我之前文章有一些心得，可以去翻翻～

 - [django rest swagger](https://github.com/marcgibbons/django-rest-swagger)

就是一個可以當作api doc和測試的頁面，說實在的目前用起來就是一種缺少文檔的感覺，所以有些地方實在還不知道怎麼去調整，但是整體上而言算是不錯用，讓你的文檔，變成互動式的，而不是以前那樣呆板的文件


### 最後

對於django要不要升級到1.1x版，其實我還在考量，但是未來勢必是要升級的啦，因為他是沒有向後兼容的升級，這感覺就是當初python2跟3的抉擇，目前而言我選擇在django<1.9 ， 是一個穩定修復bug的版本，但是我目前用到的專案是有故意選的，大致都有支援到django 1.1x後，所以要升級其實應該是不難，只是尚在考量中（其實是懶 :p


###### tags: `django` `python`
