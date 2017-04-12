---
layout: post
title: django development note 1
date: 2015-01-11 10:40
comments: true
categories: [django]
---
# 春去秋來，冬去春回

近來在公司上班有許多事情要忙，以至於太久沒上寫blog了，在過了一個月後，終於慢慢上了軌道了，所以今天特別來寫一些紀錄性質的文章，主要是再網路上讀到一篇[blog的post](https://medium.com/cs-math/11-things-i-wish-i-knew-about-django-development-before-i-started-my-company-f29f6080c131)，這是關於django的一些心得紀錄，剛好小弟我也有興趣精進django，所以就順便來紀錄一下了，以下紀錄該文章提到的一些重點
    
#### 用正確的檔案結構來開始一個專案

這邊比較見仁見智，作者提供的結構是

```
project
    - apps/
    - bin/
    - config/
    - media/
    - static/
    - templates/
    - vender
    ...
    ..
```

這邊是用個大概而已，主要想要紀錄的是部份幾個資料夾，是我沒想過的

 - apps directory
 
裡面存放了一些你做的django app

 - bin directory
 
裡面放了一些bash script，用來自動化你的開發

 - config directory
 
放置一些網站、資料庫、celery等的設定檔

 - media 跟 static directory
 
差別差在 media的檔案經過compress後，放入static，簡言之，一個是開發用，一個是deploy用

 - templates directory
 
不用多說，是djanog本身就有規範的結構，雖然沒有強制遵守，但是通常都會用這個命名，裡面是放html template files

 - vender directory
 
這個我就比較不懂他的意思了，說是放一些你不想安裝的apps或者是不能用pip install來安裝的app，那放這個意義是？

#### 使用celery來做非同步的任務和 cron jobs(例行性排程)

作者特別說不用用`unix crontab`，用celery的目的是，當網站開始有龐大的request的時候，出現hanging的情況，就要考慮分散式架構的時候了，這邊作者十分之推這套，it's time to **bust out** celery，bust out指的是使用,但他也特別說，如果想用比較輕量的library，那就用別的吧~ 作者幾乎把所有不需要同步化的工作，都用celery去做掉了。舉凡發送郵件，從facebook api拉取資料等。

#### 關於server的選擇

這邊沒啥好說的，作者都說apache is like shit了，原本他是推[gunicorn](http://gunicorn.org/)，但是他後來是推[nginx](http://nginx.com/)，沒想到作者也懂nginx

#### 不要害怕使用mongo db來當作你的主要資料庫

作者是說south，做了相當棒的migration，但是他說mongodb，用起來相當簡單

#### 使用命名的urls和使用url reverse的功能

這邊的用途，我了，不用作者說也知道這個厲害在哪，reverse url的功能真的很棒，因為你的url的位置並不是直接寫死在各個檔案，這樣以後檔案一大，萬一想改URL，就會方便許多，而不用去找每個地方去修改他

#### settings.py 檔案要正確地的設置

這邊說到一個東西，的確是我目前遇到的問題，可以使用local settings來覆蓋global setting，local settings是要做什麼呢？ 當作產品開發時，可能會有開發階段的settings，或是產品釋出的settings，所以這時候如果有各別的設定檔，然後用覆蓋的方式，也不失為一個方法。

#### 使用supervisor來監督process

[supervisor](http://supervisord.org/)，目前感覺起來是這樣的，監督一些process，監督是要做啥呢？ 你可以用現實狀況來想，公司老闆監督你是要監督啥XD？ 就是要看你有沒有好好做事或是偷懶阿 ：) 所以今天這個東西，也是這樣，萬一你監督的工作，他突然shut down了，總要有人把他重新啟動阿~

#### 選擇正確的ajax/json架構

這邊說因為django並沒有內建json request，所以good luck，但是python卻有json模組，加上django又可以無縫和python溝通，所以應該是沒難處才對，這邊感受不到他要講的

#### 使用redis

用來做celery的queue的backend，哈，就我所知，django的ORM，官方內建並沒有支援非relational的DB，但是這作者兩個推薦的DB的是非realtional的呢，所以我查一查果然是有人寫[套件](https://django-mongodb-engine.readthedocs.org/en/latest/topics/setup.html)，沒用過我也不知道穩不穩定。

題外話
嘖嘖，自從到了公司，總是被說，你又沒親自測試你光看網路上的東西，就可以確認了嗎？ 我也不是不懂他的意思拉，只是我時間最好是那麼多，要同時survey多項資料，又要幫每個framework寫個小project測試，最好這種事可以一個禮拜就做完，一個禮拜一套就好棒棒了吧，或許是我實力不夠拉 ：( 總之出社會有好多事情跟壓力，相比之下在大公司的同學就輕鬆許多...
哈哈 還是少抱怨好了，回到正題

#### 使用[munin](http://munin-monitoring.org/)和[statds](https://codeascraft.com/2011/02/15/measure-anything-measure-everything/)

看起來應該是視圖化，監督網路有關的東西，這邊沒怎麼詳細看，因為這邊跟我目前工作用到的，沒那麼強力相關，畢竟目前的階段還沒到那麼後面，雖然之後應該會遇到，這邊可以做個記錄

#### 使用[jammit](http://documentcloud.github.io/jammit/)來做static asset compression

關於這類的功能，針對django，我在網路上有看到[django compressor](https://github.com/django-compressor/django-compressor)，不知道兩者比較是誰比較好，若單純看star數，應該是django compressor對於django的設置比較友善吧？ 畢竟jammit本來是對於ruby on rail所用的工具。

---
這篇的紀錄就先到此為止了，我想這些心得或是說法則，在我工作後使用的心得，再來評論一下這是否真的好用，或是有其他更好的工具，我會把心得記錄在django note 2的文章，不過可能要一段時間才會出來，最近要好好的強化各方面的知識了，在
新創公司，果然不是普通的累，不能用輕鬆的態度面對，必須要時時增進自己的實力，吸收各方知識，當然也不能僅限於programming方面唷！ 





