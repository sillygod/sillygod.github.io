---
layout: post
title: Mithril 體驗
date: 2017-03-10 15:31
comments: true
categories: [javascript]
---
# Mithril 體驗

### Intro

Ｍithril 是個輕量的javascript library，相較於react, vue使用起來更加簡單，官方文檔也算是寫的簡單易懂，首先來個最簡單的示範

```js

var p = document.createElment("p");
p.textContent = "Hello World!";
document.getElementById("output1").appendChild(p);

```

這個在mithril會相當於下面語法

```js

var p = m("p", "Hello Middle-earth!");
m.render(document.getElementById("output2"), p);

```

m()會創造virtual HTML elements, m.render()將會把virtual dom轉換成real dom，這基本上和react是有著差不多的性質的，但是通常會使用component的方式，component就是一個javascript notation object，就是一個plain object，render會去抓view property，下面示範

```js

var dog = {
  view: function(){
    var say = "wong";
    return m("p", say);
  }
}

m.mount(document.getElementById("output3"), dog);

```

像上面使用`m.mount`不用自己在額外呼叫`m.render`這個方法，另外`m.mount`參數是接受component，`m.render`則是需要vnode。


```js

var default_value = "default";
var input_hidden = false;

function change_saying(s) { default_value = s; }
function toggle_saying() { input_hidden = !input_hidden; }

var awesome_test = {
  view: function(){
    return m('div', [
             m('button', {onclick: toggle_saying}, 'toggle saying'),
             m('hr'),
             input_hidden ? null : 
             m('input', {
               onchange: m.withAttr('value', change_saying),
               value: default_value
             }),
           ]);
  }
}

m.mount(document.getElementById('container'), awesome_test);

```

上面這範例值得注意的地方是，`m.withAttr`這個方法，他在input onchange時，會把其當下value傳入function裡面，所以你在執行範例會看到就算你切換掉input時，他裡面得值會依然保留，因為他在他被毀掉時之前就把值存起來了，下一次被創造就使用它，你可以試試看把onchange那行砍掉，在試著切換掉input，是不是永遠一旦切換回來input裡面的值都是default。

接著來看看呼叫api，並且得到回傳值後，rerender

```js

var url = "http://ratfactor.com/misc/lotr-fellowship.json.php";

var Fellowship = {
     res: null,
     data: function(res){

         if(res){
             Fellowship.res = res;
         }else{
             return Fellowship.res;
         }
     },
};


function get_fellowship(){
	m.request({method: "GET", url: url})
	 .then(Fellowship.data);
}

function view_fellowship(){
  console.log('enter view_fellowship');
	if (!Fellowship.data()) {
		return m("p", "Click the button and wait.");
	}
	return m("p", Fellowship.data().description);
}

Fellowship.view = function(){
	return m("div", [
		m("h3", "The Fellowship of the Ring"),
		m("button", {onclick: get_fellowship}, "Load Fellowship"),
		view_fellowship(),
	]);
};

m.mount(document.getElementById('container'), Fellowship);

```

api呼叫完後，畫面會更新主要是因為，`m.request`結束後會呼叫redraw，到目前為止其實大致上概念都跟react小像，接下來回頭從整個mithril架構來開始觀看。


### Structure

其實也不該說是架構，應該要說是特性吧，畢竟他也沒有強制說要你使用哪種寫法，寫起來十分自由呢，官方文檔的`key concepts`那邊大概列了下面幾項

 - Vnodes
 - Components
 - Lifecycle method
 - Keys
 - Autoredraw system
 
 
#### Vnodes

就是指virtual dom，這邊效率會好的重點是，dom的修改所花費的效能，其實不如直接重新創造還比較好，當然mithril自己說他有改良virtual dom演算法讓他效率更高這邊，這邊我就沒特別往裡面看了，畢竟演算法不是目前要注意的重點

**vnode types**

1. Element
2. Fragment
3. Text
4. Trusted HTML
5. Component


#### Components

如同前面所用到的，就像下面示範的

```js

var Example = {
  view: function(vnode){
    return m('div', 'hello'+ vnode.attr.name)
  }
}

// 這是一個component，跟react一樣我們也是可以傳入參數讓他去展現，
// 因此上面才會用vnode這個東西

m(Example, {name: "king"})

```

另外他跟react一樣也是擁有所謂的lifecycle，畢竟就是一個創造破壞dom的概念我想有lifecycle也是很正常吧～ 


#### Lifecycle methods



#### Keys

是一門技術用來將序列節點裡面的dom元素重新定序，並且將特定資料項目對應到相對應的dom元素序列，簡單的說這個keys就是用來讓virtual dom技術可以知道什麼資料對應哪個virtual dom元素。

就拿官網的例子來看，

```js

var people = [
  {id: 1, name: "jax"},
  {id: 2, name: "janna"},
]

function userList(users) {
  return users.map(function(u){
    return m('button', u.name);
  })
}

// 這將會產生
// <button>jax</button>
// <button>janna</button>

```

那麼今天people變成 `[{id:2, name:'god'}]`，render就會變成 `<button>god</button>`，那麼對於virtual dom演算，他會不知道要怎麼辦，因為有兩種可能，一個是第二的button被刪掉或是第一個button被刪掉，然後再改變其text的值，然後就會發生可怕的事，他自有自己的演算法去決定要怎麼下去，但是萬一今天你的button上面有綁事件怎辦？ 你無法確定哪個button是被留下來的，就會產生錯誤，因此這也是為啥要有keys的原因，所以上面應該要修改成如下，

```js

return m('button', {key: u.id}, u.name);

```


#### Autoredraw system

其實就是rerender的機制，在`m.mount`, `m.route`這兩個上面有相關機制存在，`m.render`沒有，以component為例，

```js

var MyComponent = {
  view: function() {
    return m('div', {onclick: doSomething}); 
  }
}

function doSomething(e){
  // 這邊將會產生rerender，如果doSomething被呼叫後
  // 如果你不想產生rerender，可以
  // e.redraw = false
  // 這樣就不會rerender了
}

```

m.request呼叫完畢也是會造成rerender，跟上面一樣他也有設定可以讓他不redraw

```js

m.request("/example/api", {background: true}).then(function(){
})

```

最後route change也會造成redraw。


### To sum up

整體而言，我覺得是可以嘗試一下這個library，因為他的自由性，個人目前有意思想把之前用angularjs寫的專案改成用這套寫寫看，不用react是因為，相對起來這套需要變動的地方比較少，他不像react通常還要搭配一些bundle tool還有架構性的framework才會比較完整，mithril js就是一個小而巧的library，可能也可以算是framework了，之後等我試用了一段時間後，有更多心得會再另外寫blog。


# Reference

一些靈感和內容來自於下面部落格參考，寫得很詳盡清晰

1. [blog ref1](http://ratfactor.com/mithril1.html?/shire)
2. [blgo ref2](http://ratfactor.com/mithril2.html)
