---
title: 離職休息、閱讀學習、記錄
date: 2018-05-03 21:55:35
categories:
tags:
---

最近我提離職了，也休息了幾個禮拜了，這期間我在回想著我過去的經歷，也把之前的線上課程上一上(雖然還有一堆...)，所以也才有了時間可以寫部落格 :)

### 從出社會第一家做比特幣交易所的公司

一開始因為很開心在104滿滿的職缺海中找到了可以用python的職缺！後來有著各種原因讓我決定離職，其中像是，

 - 原本有位要來的前輩沒來（後來跟我點出公司一些問題後，去了痞客邦當machine learning tech lead)
 - 跟我一樣是新鮮人的夥伴離職
 - 公司決策不停變換(畫大餅有點不實際)

所以我在想我是不是應該換個地方，因此也才在下一間遇到了一些不錯的夥伴，但是...

### 第二間是個做交友網站的公司

這間一開始吸引我的點是，他用了django這個framework來開發，剛好是我想要的，雖然一開始我進去只有我、技術長、跟一位mis兼程式開發的前輩，三位RD，加上一位美術和櫃檯，有點辛苦的撐著XD 但是後來慢慢的徵了

 - 前端
 - 後端
 - android工程師
 - 美術

公司有慢慢的壯大，其實我滿喜歡這種感覺的，和夥伴一同努力! 但是我只能說新創...就是變數大，期間發生了很多事情，公司商業變換政策往大陸發展，開始變控股公司...甚至董事長詐騙募資人的錢，捲款落跑，公司最後是倒閉收場.. 老實講若沒有發生這些很扯的事情，我想我會繼續待在這家公司，因為有著不錯的夥伴！

### 接著第三家公司博奕公司

其實這家是hr主動找過來的，原本的我出於好奇心，因為對於博弈產業不了解，所以來面試看看這家，結果意外的感覺其實沒我想的那麼不好?! 不知道是不是因為在松菸誠品的關係所以印象加分不少ＸＤＤ 但是由於公司是做技術提供，所以我就把它想成跟一般外面軟體公司類型很像，只是產業別跟客戶不同。

不得不說博弈背後真的就是錢的實力雄厚，光是能夠租在松菸誠品然後，在我進去公司九個月，十個月的時間後，公司從2x人成長到5x人就是個證明。

在這邊也遇到一些不錯的人，但是為何最近我離職了呢？ 原因大概是下面幾點。

 - 東西學習了差不多
 - 不少夥伴走人了
 - 陷入了部門鬥爭...
 - 沒有往上發展的機會

當然還有著其他因素，詳細的內容這裡就不多說明，免得...咳咳，據說我離開之後情況還是沒啥變化，看來我給予的建議，應該是被當作耳邊風吧，這間我離開的時候，老實講沒有上一家那麼依依不捨，我想因為是鬥爭的感覺吧...

仔細想想，我果然還是很在意相處的感覺更甚於錢，也不是說我care錢拉，錢很重要！ 尤其是對於社會的現實，沒有錢的你，又能夠做到什麼？ 但是我覺得即使身在社會的洪流裡，還是得保持著妳的初衷，不要因為外面而過度讓你自己變得不像自己。

休息的這期間，我思考著我未來的展望是什麼？ 其實該怎麼說呢，對我來講就是兩個字，**學習**，老實講我並沒有像一些人很明確的，直接說未來要當技術長、軟體架構師或是資料分析師什麼的，我只是純粹認為programming很有趣，把想法現實化，很有挑戰但也很有成就！ 但是對於想要的公司類型呢？ 的確我現在似乎有點迷惘，因為對我來說主要是和人相處的感覺吧，但是這又不是面試可以面出來的... 哈哈，所以最近在迷惘中閱讀與記錄！ 

該來講講這次要記錄的東西了！！ 之後還會發個幾篇心得文，畢竟最近比較**閒**！ 哈哈，今天要講的其實也沒什麼特別深度，是要講emacs lisp相關的東西。

## Emacs lisp 初學心得

最近會想看emacs lisp，其實是有點原因的，老實講emacs一直以來我都沒有認真去學習他，其實最大原因就是懶（嘿嘿），因為使用他前實在是需要很多客製化動作，就算是使用[spacemacs](https://github.com/syl20bnr/spacemacs)老實講，我覺得還是需要一些客製化，雖然它已經讓emacs的上手度大大降低很多了，只是用了一陣子後，我總覺得spacemacs實在有點肥，有太多東西是我用不到的，有時候我想要的功能她沒有，而且老實說對於程式開發，像是python的應用開發，我已經從spacemacs轉去[vscode](https://code.visualstudio.com/)，vscode對於不少語言的套件品質其實都滿高的，而且debug方面的功能也都做得不錯，話雖如此，emacs也有著其他人無法取代的套件，例如：magit，所以最近我在思考著我是否該先好好的了解emacs本身，竟然有人可以開發出這麼好用的套件，同時也在幻想著，我之後可以客製化emacs將它變成我得心應手的工具，所以我開始嘗試著學習一下emacs lisp這個語言，emacs本身就是用這個語言寫成的。其實也是滿有趣的

> emacs lisp -> emacs -> ? 

emacs lisp 生出 emacs ，emacs又可以讀取emacs lisp，簡言之我可以藉由emacs lisp將emacs變成其他東西，不一定是一個程式編輯器。好了，以下開始記錄我一些關於emacs lisp的小小心得。


## emacs hello world

首先我們打開emacs到下面截圖中**scratch**這個buffer來，這是可以讓你隨意玩emacs lisp的地方

![scratch](https://i.imgur.com/3OyFqK5.png)

接著來段hello world吧，
```lisp
(message "hello world")
```

接著按下`C-x C-e`記得要把游標移到行尾，因為他執行的功能是，evaluate the last s-expression，s-expression指的就是lisp相關方言的表達式，有興趣可以查看看wiki，這篇不會特別著墨lisp相關知識，但是這邊還是稍微提一下，sexp是一種標記法，表達巢狀list，一般都是只有儲存data，但是lisp卻連程式碼都存，這也是為什麼接下來後面程式碼你都只會看到一堆括號的原因～



![hello world](https://i.imgur.com/XGwh8oL.png)

轉回正題，上面執行完後你會看到最下面有印出`hello world`的字樣，那就是你的執行結果。另外其實你也可以到**Message**的buffer看，那裡會有所有訊息包括歷史記錄，接著來稍微講一下emacs lips的primitive data跟一些性質


![](https://i.imgur.com/7ageHDg.png)

由於前面提到的sexp，你會發現lisp是一個前序表達的方式，來看看`(+ 1 3)` 這個其實換成中序表達，會是(1 + 3)，沒錯！這個表達式的答案就是4，lisp在背後真正的表達應該是長這樣的`(+ . (1 . (3 . nil)))`，`.`這個符號就當作list串接的意味吧 :)

關於lisp語言本身，我想之後我再來寫一篇記錄好了，轉回來，經由上面的那個表達式，其實應該也不難猜出，其實我們是可以做這樣的事情的 `(+ 1 2 3 4 5)` 也就說我們可以用任意參數，不信的話，你是可以試試看，另外若是沒寫過python, 可能會對於上面的加號其實是一個function感到訝異吧～ 別懷疑他就是函式，在emacs裡，你可以把游標移到你想要的函式上面，然後按下`C-h f` 你就會看到相關的文檔敘述跑出來。

再來對於elisp，他其實沒有boolean type，只要是nil,或是empty list都是屬於false，其餘都是true，關於變數呢～ `(setq a 3)` 這樣就會將a變成3，但是這是全域的，若是要用區域變數的話

```elisp
(let (a b)
  (setq a 3)
  (setq b 2)
  (+ a b)
)
```

像上面，a和b只會在let區塊裡面有作用，如果你在外面使用a or b會發現他們並沒有被定義。


再來`progn` 一個很特別的語法，可以把它當成一個區塊的expression，然後他會回傳最後一個expression

```elisp

(progn (setq b "5") (message b))

```

上面progn本身並沒自己形成一個區塊，因此b是個全域變數。

再來就是關於迴圈方面elisp有提供`while`

```elisp
(let ((x 32))
  (while (< x 127)
    (insert-char x)
    (setq x (+ x 1))) 
```

上面這段會執行在游標插入一些字母和符號～ 

elisp function定義的方式，`defun name (pram..)` 如下 

```lisp

(defun sayHi ()
  "this is a doc string" ;; 這是function doc
  (interactive)
  (message "hi"))
  
```

上面這樣就是定義了一個函式會印出hi的字樣，其中特別的一點是，`(interactive)`會讓這個function變得可以從emacs中的`M-x`呼叫，不加的話，你就不會看到sayHi再`M-x`列出的函式清單。

整體上而言想要學會怎麼客製化emacs的話，對於lisp方言的掌握度，並不需要很深，只要懂的一些基礎就夠了，頂多只差在效能，接下來嘗試做個小小的功能，比如： 在轉寫程式碼時，有時候我忘記把單字放在""裡面，所以我想要有個功能是能夠快速把游標上的單字左右加上"這個符號。

```elisp

(defun quotify-region (start end)
  "insert \' or \" at the beginning and end of your
selection"
  (interactive "r")
  (save-excursion
    (save-restriction
      (goto-char start) (insert "\"")
      (goto-char (+ end 1)) (insert "\""))))
```

上面這段就是簡單版的實現，你只要選取你想要的單字後，呼叫這個函式就會看到效果了，比如接下來下面的demo，你會看到我選取的evil，然後將`" "`加在他的前後！

![demo](https://i.imgur.com/HK86MEW.gif)

其實上面這段程式碼，是我還在亂玩emacs的設定，新手上路，請不要電我～ 這邊呢，我有將我剛剛實作的功能綁定在evil的visual mode的快捷`m`然後按`'` 就會看到神奇的效果了。

# To Sum up

現在充斥著各種editor或是ide，其實認真講，我真的要開發golang, python, nodejs, 之類的我還是會用vscode，emacs目前我個人是當作興趣玩玩，順便來看看他可以在什麼地方用上，增加我的開發效率，然後經過稍微碰觸emacs lisp後，我只能說他真的太多東西要讀，我當前還沒整理出一個開發套件的模式，比如要去哪找你想要的函示名稱，這種東西一定需要一個地方可以讓你快速參考，還有就是對於lisp其實當前我只有基礎而已。

但是我深刻體驗到emacs的彈性了，真的是很容易就實作一個功能馬上應用，我想我會繼續挖掘emacs的特點，繼續記錄一些心得，下面reference的部分是一些連結我覺得可以看一下的。

# Reference

 - [elisp cookbook](https://www.emacswiki.org/emacs/ElispCookbook)
 - [elisp simple tutorial](http://ergoemacs.org/emacs/elisp.html)
 - [official elisp manual](https://www.gnu.org/software/emacs/manual/elisp.html)
 - [learning emacs](http://emacslife.com/emacs-lisp-tutorial.html#sec-1)
 - [ergoemacs lisp manual](http://ergoemacs.org/emacs_manual/elisp/index.html#Top)

下面兩個是關於lisp的免費書，想要更深入了解的人，建議可以去看一下

 - [ansi common lisp](http://acl.readthedocs.io/en/latest/zhTW/index.html)
 - [practical common lisp](http://www.gigamonkeys.com/book/)