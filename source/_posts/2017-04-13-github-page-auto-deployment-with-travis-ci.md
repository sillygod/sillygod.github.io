---
title: github-page-auto-deployment-with-travis-ci
date: 2017-04-13 14:46:41
categories: [web]
tags:
---

## 緣由

其實個人有計劃未來要手動自己打造static website，跟撰寫部落格的工具，只是在此之前我想到說我之前的部落格是放在非static website的，如果一次轉換這麼大會經歷很痛的轉換期，再加上我想要先試用一下這類的工具，這樣我之後才知道什麼地方是我想要的，什麼是我不要的，所以我就找了一下順眼的工具來使用，這篇部落格會來講解使用[hexo][hexo]結合[travis ci][travis ci]和[github page][github page]，達到自動部署的靜態網頁的效果。


## 開始轉換之路

最一開始其實我是在google blogger上面寫部落格，後來碰到markdown語法，覺得簡單也滿喜歡的，所以我就一直找可以使用markdown來寫文章的平台，找著找著就遇到[logdown][logdown]，使用上挺簡單的，介面也很簡潔，之後就是一直用它了，是到最近想說想要親手打造一個static web site generator，因此才開始轉換我的部落格。

幸好[logdown][logdown]本身就有提供匯出你的文章功能，只是要注意的是它匯出的格式是Octopress，[hexo][hexo]真是剛剛好有支援這種格式，哈哈，其實也不是那麼剛好拉，除了順眼外，我還有故意挑是否有支援Octopress格式的，[hexo][hexo]第三方套件數量不少，能夠選擇的主題也很多，主題我是用[hexo next theme][next theme]，相關細節設定，就不多說明了，文檔算是挺清楚的，再來講講使用[hexo][hexo]可能會遇到的問題，一般都是出現在render時，也就是當你run `hexo g` or `hexo s`會遇到的，他的提示是render時遇到syntax error，直接跟你講幾乎問題都會出在你的文章們，裡面可能包含了什麼語法讓他parse錯誤～


## github page

關於什麼是github page，可以到[官網][github page]，簡單來說就是github提供可以讓你放置靜態網站的服務，有分為兩種

 - user or organization site
 - project site

比較需要注意的是，user or organization site，強制只能把網站相關的檔案放在master，你當然也可以故意放在其他branch拉，只是就會空白:p ，屬於user or organization site類型的，github是會去讀取branch master，屬於project site的話，就可以自由選擇要讓github去讀取哪個branch，這點要注意，也因此我的主要開發branch就是develop（另開的），寫完文章或是調整設定後，我就會run `hexo g`，產生靜態檔，之後就是把這些靜態檔放到branch master，所以你會發現我的master和develop檔案內容差異很大，可以到我的[repo][blog repo]看看就會比較清楚我在講什麼了，到這邊為止其實整個部落格撰寫流程已經可以運作了

1. 撰寫文章.md
2. run hexo s 看看是否ＯＫ
3. run hexo g 產生靜態檔
4. git checkout master 將靜態檔，搬到外面來
5. git push origin master 看狀況branch develop也可能會需要push

身為一個程式人，就是懶，當然能夠自動化的地方就讓電腦來，不是嗎？ 或者是減少重複性質動作也好 :) 

步驟1~3這邊無可避免必須是我們要自己來，畢竟電腦又不知道你寫的這文章是否是最終版本要上線了，但是步驟4跟5呢？ 這邊跟你說！ 是可以的！，也是這篇我主要想要跟大家分享的，我個人是這麼做的，步驟1~3後，接下來我就push branch develop，之後travis ci偵測到github的branch develop有所變動，接著就clone了我的專案，進行產生靜態檔，把靜態檔弄到branch master，之後在push，簡單說就是步驟4~5都被travis ci給拿去做了，那麽我們就先來看看travis ci。

## travis ci

travis ci是一個持續整合的平台，一般而言都是拿來當作run tests，比如，當有人發出pull request到你的repo，你可以讓他先run過測試檢查看看是不是符合最基本需求，至少他沒有把你的功能做壞，如果通過的話，你可以考量是否採納這個pull request，更進一步的人，會在測試成功後，做deploy的動作，也就是部署，所以github page是可以利用這個來達到自動部署的！

至於要怎麼和github page做結合呢？ 有想法是一回事，實際做又是一回事，實作中一定會遇到問題，其實有點sense的人，應該一開始就會想到他是怎麼git push的，不是都要輸入密碼嗎？ 關於這個首先就要來看看[github personal access token][github personal access token]，藉由這種方式就可以避免掉需要輸入username和password了，像這樣`git clone https://<token>@github.com/owner/repo.git`，至於要怎麼建立access token呢？ 到你個人的github settings頁面，左邊側邊欄會有personal access token，進入後就會看到類似下面的頁面

![access token page](http://i.imgur.com/6kW9kPp.png)

再來就是建立token，詳細的就不多說了,接下來就要把你的token給放到travis ci相對的project的環境變數，每個自動整合的project，都可以點進去做設定，它提供了可以設定環境變數的功能，也就是說在你的shell裡可以使用你設定的變數，避免你的script直接透露token值！ 如下面這張圖

![travis ci image](http://i.imgur.com/1HOzeAw.png)


最後就是撰寫自己的deployment的shell script了。

## 總結

[hexo][hexo]使用起來的確簡單，但是使用這個工具，還是需要有點程式知識的人才有辦法輕鬆學會，相對而言，[logdown][logdown]提供了一個不錯的撰寫環境，使用起來很簡單，我想之後有時間我開始實做我自己想要的撰寫部落格工具。



[hexo]: https://hexo.io/
[travis ci]: https://travis-ci.org/
[github page]: https://pages.github.com/
[github personal access token]: https://github.com/blog/1270-easier-builds-and-deployments-using-git-over-https-and-oauth
[blog repo]: https://github.com/sillygod/sillygod.github.io
[logdown]: http://logdown.com/
[next theme]: http://theme-next.iissnan.com/getting-started.html
