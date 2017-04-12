---
layout: post
title: js function invocation and function context
date: 2014-03-22 13:40
comments: true
categories: [javascript]
---


目前學習javascript，其中有個好玩的地方同時我也覺得頗重要的地方，今天就特別來記錄一下，那就是如標題所述，function invocation 和 function context，在js當中呢，每個函式都會有兩個隱性的parameter，分別是 this 和 arguments。  
  
arguments是一個很像Array的物件但是注意! 它不是Array，如同名字表是那樣，它代表的是實際傳入的參數。關於this在我看來就是指function context，根據不同的function invocation就會決定不同的function context，那麼this到底是何物呢?  this它指向一個物件，並且這個物件是有關於這個函式是怎麼被invoke的，聽起來還是有點模糊對吧 :) 先繼續往下看便知曉。  
  
關於function invocation基本上有四種  
  
1.`invocation as a function`  
```js
   function ja(){  
	 console.log(this);  
	}  
	  
	var vja = function(){  
	 console.log(this);  
	}
```
	  
你執行上面code，將會看到function context是window(global context)，  
  
2.`invocation as a method`
看到名字就知道，這個function是屬於一個物件，因此我們創建一個物件
給予一個property reference到一個function
```js
	function globalSay(){console.log(this);};  
	  
	var obj = {};  
	  
	obj.say = globalSay;  
	obj.say();  
```	  
執行上面code後，將會看到function context是obj這個物件，因此光從這邊就可以看出this是由這個function是怎麼被invoke所決定的  
  
3.`invocation as a constructor`
簡言之就是藉由new這個keyword所產生的結果
```js
	function test(){  
	 this.say = function(){  
	 console.log(this);  
	 }  
	}  
	  
	var obj1 = new test();  
	var obj2 = new test();  
	  
	obj1.say();  
	obj2.say();  
```	  
new這個keyword，它會產生一個新物件，並將這個物件的function context就是自己  
  
4.`invocation with aplly and call method`
這個是我認為javascript很特別的地方這個方法可以，讓你隨意的指定function context  
舉個例子來看看
```js
	function test(value){  
	 this.value = value;  
	}  
	  
	var obj1 = {};  
	var obj2 = {};  
	  
	test.call(obj1, 2);  
	test.call(obj2, 3);  
	  
	console.log(obj1.value);  
	console.log(obj2.value);  
	如上obj1和obj2將會被增加value這個屬性。  
call和apply的差別是在  
xxx.call(this, x,x,x,x);  
xxx.apply(this, [x,x,x,x]);   
```  
我覺得這功能的確滿方便的，javascript的this就是這麼....該說好用嗎?還是恐怖?  
因為用不好的話，似乎會造成很多問題的感覺。  
  
如果以前是學習C++來的人，會覺得js的this，會覺得非常與眾不同吧 :)  
動態語言就是如此，有著靜態語言不同的風格，隨著電腦速度越來越快，我不知不覺中越來越喜歡用動態語言來寫程式了，像是python，反而C++越來越少碰了 :( 不知道要不要找時間回去熟悉C++ :(  
  
回到正題，我覺得隨著mobile熱烈的發展，javascript已經越來越重要了，畢竟越來越多人已經支援js所規定出的標準了，已經是個合適的時機來學習JS了，而且可以另外學習function programming的style，會覺得別了一番滋味~  
  
  
  


