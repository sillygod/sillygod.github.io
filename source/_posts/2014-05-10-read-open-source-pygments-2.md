---
layout: post
title: read open source pygments 2
date: 2014-05-10 14:14
comments: true
categories: 
---


這篇就來，繼續上次的進度 :)  
  
上次code貼上來的結果不甚理想，所以我在想是不是要自己來寫一個format會比較方便，當然在動手之前，我想重新理解code的流程是必須的，因為要讓自己對這份open source掌握更加清楚，所以我決定利用debug的step into，來進行trace code :p  
  
這邊就來介紹一下我用的工具，關於debug，我還是選擇用IDE，因為比較直覺化又容易使用，我是覺得沒必要去聽信那些說用gdb才是王道，畢竟那要打一些指令，實在是有點麻煩，個人是認為有興趣的話再去用那種方式 :p  
  
說要介紹我是用哪款IDE都差點忘了 :) 這邊我是用[pycharm][1] ，這一直以來都算很有名氣，雖然是要錢的，但是網路上總有...咳咳，不過那僅限以前!!，現在可好了呢，它有提供open source版，而且功能很夠用，有興趣的人可以去載來用看看 :)  
  
![pic][2]
  
pycharm的介面如上，它提供了算是不錯的code intellisense，加上trace code也是方便，像是find definition，加上它的plugin也是挺多的，要說讓我說嘴的地方就是記憶體吃的有點多:(  
另外以介面來講，我還是喜歡sublime就是了，好啦，該來講講怎麼trace code的部分了，一般來講都要先下個所謂的break point，就是讓程式執行到該行時，停下來，接著就有如下幾個操作  
 - next line(step over)  
 - step into  
 -  step out  
... 等等  
  
就先來看看這張圖吧  
![pic][3]
我在40行的地方下了中斷點，所以程式執行到這邊就會停下來，之後呢，我特別在watch中加入一些我想看的變數，上面這張圖是我step over後，可以看出它是一個class，有興趣要看它是怎麼一步一步產生的話，就必須用step into，就像接下來的HtmlFormatter，我用了step into就會如下面這張圖  
![pic][4]
程式碼頁面會跳到HtmlFormatter所在的檔案html.py，接著你更想的話，你當然可以繼續用step into，就看你想要鑽到的地方有多深，就跳多深吧 :)  
  
另外我覺得用pycharm來debug真的是頗爽 :) 老實講真的太方便了，看前面幾張圖就知道，它其實會自己監看一些變數，起初我用sublime text閱讀源碼時，其實有點卡卡的，當時我認為是我理解力不夠，因為有很多地方看過去，我會有種不知道這樣的code會產生什麼效果，但是用了pycharm就方便多了，因為你會看到這些變數，就知道他們是否如你所想像的一樣，這樣一來多了一些證實，自然就會多了信心，閱讀起來更加順遂，就舉個例子好了，請看下面這張  
![pci][5]
我當初一眼看沒有懂的地方就是這裡  
`arg = ('cssclass' in self.options and '.'+self.cssclass or '') `
從圖中可以看到arg的值是.highlight其實就是'.'+self.cssfile  
很好!! 這樣的寫法到底是怎麼運作呢? 詳細可以看看 [這個][6]這樣的寫法不是每個programming language都可以寫的呢 :) 看看這個[wiki][7] 就知道囉~  
  
回到正題，那行的意思是 'cssclass'有沒有在self.options裡，有的話就會回傳'.'+selfclass，沒有的話，就會繼續evaluate下去，那就是變成回傳''，這其實是用到short circuit的技術 :p  
其實個人認為這邊根本不需要用到這種寫法，只是徒增不可讀性就是了，用if else還親民多了，不過這不代表這樣的寫法沒用處，我想大概可以用在 lambda這地方吧 :)  
  
經過這次的閱讀，目前我想到一個，不用自己繼承一個HtmlFormatter的寫法了，我是用了擷取部分code，之後再自行增加一些必須的html的方式。  
  
目前我粗略地寫了個簡單測試腳本，效果如下  

{% raw %}

<style>
.lineno {
    color: #505050;
    margin-right: 5px;
}
.highlight .hll { background-color: #404040 }
.highlight  { background: #202020; color: #d0d0d0 }
.highlight .c { color: #999999; font-style: italic } /* Comment */
.highlight .err { color: #a61717; background-color: #e3d2d2 } /* Error */
.highlight .g { color: #d0d0d0 } /* Generic */
.highlight .k { color: #6ab825; font-weight: bold } /* Keyword */
.highlight .l { color: #d0d0d0 } /* Literal */
.highlight .n { color: #d0d0d0 } /* Name */
.highlight .o { color: #d0d0d0 } /* Operator */
.highlight .x { color: #d0d0d0 } /* Other */
.highlight .p { color: #d0d0d0 } /* Punctuation */
.highlight .cm { color: #999999; font-style: italic } /* Comment.Multiline */
.highlight .cp { color: #cd2828; font-weight: bold } /* Comment.Preproc */
.highlight .c1 { color: #999999; font-style: italic } /* Comment.Single */
.highlight .cs { color: #e50808; font-weight: bold; background-color: #520000 } /* Comment.Special */
.highlight .gd { color: #d22323 } /* Generic.Deleted */
.highlight .ge { color: #d0d0d0; font-style: italic } /* Generic.Emph */
.highlight .gr { color: #d22323 } /* Generic.Error */
.highlight .gh { color: #ffffff; font-weight: bold } /* Generic.Heading */
.highlight .gi { color: #589819 } /* Generic.Inserted */
.highlight .go { color: #cccccc } /* Generic.Output */
.highlight .gp { color: #aaaaaa } /* Generic.Prompt */
.highlight .gs { color: #d0d0d0; font-weight: bold } /* Generic.Strong */
.highlight .gu { color: #ffffff; text-decoration: underline } /* Generic.Subheading */
.highlight .gt { color: #d22323 } /* Generic.Traceback */
.highlight .kc { color: #6ab825; font-weight: bold } /* Keyword.Constant */
.highlight .kd { color: #6ab825; font-weight: bold } /* Keyword.Declaration */
.highlight .kn { color: #6ab825; font-weight: bold } /* Keyword.Namespace */
.highlight .kp { color: #6ab825 } /* Keyword.Pseudo */
.highlight .kr { color: #6ab825; font-weight: bold } /* Keyword.Reserved */
.highlight .kt { color: #6ab825; font-weight: bold } /* Keyword.Type */
.highlight .ld { color: #d0d0d0 } /* Literal.Date */
.highlight .m { color: #3677a9 } /* Literal.Number */
.highlight .s { color: #ed9d13 } /* Literal.String */
.highlight .na { color: #bbbbbb } /* Name.Attribute */
.highlight .nb { color: #24909d } /* Name.Builtin */
.highlight .nc { color: #447fcf; text-decoration: underline } /* Name.Class */
.highlight .no { color: #40ffff } /* Name.Constant */
.highlight .nd { color: #ffa500 } /* Name.Decorator */
.highlight .ni { color: #d0d0d0 } /* Name.Entity */
.highlight .ne { color: #bbbbbb } /* Name.Exception */
.highlight .nf { color: #447fcf } /* Name.Function */
.highlight .nl { color: #d0d0d0 } /* Name.Label */
.highlight .nn { color: #447fcf; text-decoration: underline } /* Name.Namespace */
.highlight .nx { color: #d0d0d0 } /* Name.Other */
.highlight .py { color: #d0d0d0 } /* Name.Property */
.highlight .nt { color: #6ab825; font-weight: bold } /* Name.Tag */
.highlight .nv { color: #40ffff } /* Name.Variable */
.highlight .ow { color: #6ab825; font-weight: bold } /* Operator.Word */
.highlight .w { color: #666666 } /* Text.Whitespace */
.highlight .mf { color: #3677a9 } /* Literal.Number.Float */
.highlight .mh { color: #3677a9 } /* Literal.Number.Hex */
.highlight .mi { color: #3677a9 } /* Literal.Number.Integer */
.highlight .mo { color: #3677a9 } /* Literal.Number.Oct */
.highlight .sb { color: #ed9d13 } /* Literal.String.Backtick */
.highlight .sc { color: #ed9d13 } /* Literal.String.Char */
.highlight .sd { color: #ed9d13 } /* Literal.String.Doc */
.highlight .s2 { color: #ed9d13 } /* Literal.String.Double */
.highlight .se { color: #ed9d13 } /* Literal.String.Escape */
.highlight .sh { color: #ed9d13 } /* Literal.String.Heredoc */
.highlight .si { color: #ed9d13 } /* Literal.String.Interpol */
.highlight .sx { color: #ffa500 } /* Literal.String.Other */
.highlight .sr { color: #ed9d13 } /* Literal.String.Regex */
.highlight .s1 { color: #ed9d13 } /* Literal.String.Single */
.highlight .ss { color: #ed9d13 } /* Literal.String.Symbol */
.highlight .bp { color: #24909d } /* Name.Builtin.Pseudo */
.highlight .vc { color: #40ffff } /* Name.Variable.Class */
.highlight .vg { color: #40ffff } /* Name.Variable.Global */
.highlight .vi { color: #40ffff } /* Name.Variable.Instance */
.highlight .il { color: #3677a9 } /* Literal.Number.Integer.Long */</style>
<div class="highlight">
<pre><span class="lineno"> 1</span> <span class="sd">'''</span>
<span class="lineno"> 2</span> <span class="sd">a script for python code highlighting is expected to partial html output.</span>
<span class="lineno"> 3</span> <span class="sd">That's output content without the whole html tags.</span>
<span class="lineno"> 4</span> 
<span class="lineno"> 5</span> 
<span class="lineno"> 6</span> <span class="sd">ex.</span>
<span class="lineno"> 7</span> <span class="sd">&lt;style&gt;</span>
<span class="lineno"> 8</span> <span class="sd">xxx</span>
<span class="lineno"> 9</span> <span class="sd">xxx</span>
<span class="lineno">10</span> <span class="sd">xx</span>
<span class="lineno">11</span> <span class="sd">&lt;/style&gt;</span>
<span class="lineno">12</span> <span class="sd">&lt;table&gt;</span>
<span class="lineno">13</span> <span class="sd">&lt;div&gt;</span>
<span class="lineno">14</span> <span class="sd">xx</span>
<span class="lineno">15</span> <span class="sd">xx</span>
<span class="lineno">16</span> <span class="sd">&lt;/div&gt;</span>
<span class="lineno">17</span> <span class="sd">&lt;/table&gt;</span>
<span class="lineno">18</span> 
<span class="lineno">19</span> <span class="sd">usage: test.py inputfile outputfile</span>
<span class="lineno">20</span> 
<span class="lineno">21</span> <span class="sd">'''</span>
<span class="lineno">22</span> 
<span class="lineno">23</span> 
<span class="lineno">24</span> <span class="kn">from</span> <span class="nn">pygments.formatters</span> <span class="kn">import</span> <span class="n">HtmlFormatter</span>
<span class="lineno">25</span> <span class="kn">from</span> <span class="nn">pygments</span> <span class="kn">import</span> <span class="n">highlight</span>
<span class="lineno">26</span> <span class="kn">from</span> <span class="nn">pygments.lexers</span> <span class="kn">import</span> <span class="o">*</span>
<span class="lineno">27</span> <span class="kn">from</span> <span class="nn">pygments.styles</span> <span class="kn">import</span> <span class="o">*</span>
<span class="lineno">28</span> <span class="kn">import</span> <span class="nn">sys</span>
<span class="lineno">29</span> 
<span class="lineno">30</span> <span class="k">try</span><span class="p">:</span>
<span class="lineno">31</span>     <span class="n">readfile</span> <span class="o">=</span> <span class="nb">open</span><span class="p">(</span><span class="n">sys</span><span class="o">.</span><span class="n">argv</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="s">'r'</span><span class="p">)</span>
<span class="lineno">32</span> <span class="k">except</span><span class="p">:</span>
<span class="lineno">33</span>     <span class="n">sys</span><span class="o">.</span><span class="n">exit</span><span class="p">()</span>
<span class="lineno">34</span> 
<span class="lineno">35</span> <span class="n">code</span> <span class="o">=</span> <span class="n">readfile</span><span class="o">.</span><span class="n">read</span><span class="p">()</span>
<span class="lineno">36</span> <span class="n">readfile</span><span class="o">.</span><span class="n">close</span><span class="p">()</span>
<span class="lineno">37</span> 
<span class="lineno">38</span> <span class="nb">file</span> <span class="o">=</span> <span class="nb">open</span><span class="p">(</span><span class="n">sys</span><span class="o">.</span><span class="n">argv</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">split</span><span class="p">(</span><span class="s">'.'</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span><span class="o">+</span><span class="s">'.html'</span><span class="p">,</span> <span class="s">'w'</span><span class="p">)</span>
<span class="lineno">39</span> 
<span class="lineno">40</span> <span class="n">st</span> <span class="o">=</span> <span class="n">get_style_by_name</span><span class="p">(</span><span class="s">'native'</span><span class="p">)</span>
<span class="lineno">41</span> <span class="n">myformat</span> <span class="o">=</span> <span class="n">HtmlFormatter</span><span class="p">(</span><span class="n">style</span><span class="o">=</span><span class="n">st</span><span class="p">,</span> <span class="n">linenos</span><span class="o">=</span><span class="s">'inline'</span><span class="p">)</span>
<span class="lineno">42</span> 
<span class="lineno">43</span> 
<span class="lineno">44</span> <span class="n">content</span> <span class="o">=</span> <span class="s">'''&lt;style&gt;</span>
<span class="lineno">45</span> <span class="s">.lineno {{</span>
<span class="lineno">46</span> <span class="s">    color: {};</span>
<span class="lineno">47</span> <span class="s">    margin-right: 5px;</span>
<span class="lineno">48</span> <span class="s">}}</span>
<span class="lineno">49</span> <span class="s">{}&lt;/style&gt;'''</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="s">'#'</span><span class="o">+</span><span class="nb">str</span><span class="p">(</span><span class="nb">int</span><span class="p">(</span> <span class="n">st</span><span class="o">.</span><span class="n">background_color</span><span class="p">[</span><span class="mi">1</span><span class="p">:])</span><span class="o">+</span><span class="mi">303030</span><span class="p">),</span> <span class="n">myformat</span><span class="o">.</span><span class="n">get_style_defs</span><span class="p">(</span><span class="s">'.highlight'</span><span class="p">))</span>
<span class="lineno">50</span> <span class="c">#rule the style</span>
<span class="lineno">51</span> 
<span class="lineno">52</span> <span class="n">content</span> <span class="o">+=</span> <span class="n">highlight</span><span class="p">(</span><span class="n">code</span><span class="p">,</span> <span class="n">get_lexer_for_filename</span><span class="p">(</span><span class="n">sys</span><span class="o">.</span><span class="n">argv</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span> <span class="n">myformat</span><span class="p">)</span>
<span class="lineno">53</span> <span class="c">#add the highlighted code</span>
<span class="lineno">54</span> 
<span class="lineno">55</span> 
<span class="lineno">56</span> <span class="nb">file</span><span class="o">.</span><span class="n">write</span><span class="p">(</span><span class="n">content</span><span class="p">)</span>
<span class="lineno">57</span> <span class="nb">file</span><span class="o">.</span><span class="n">close</span><span class="p">()</span>
</pre>
</div>

{% endraw %}

比起上次用原來的指令，所產生出來的html檔，這次不需要再多做一些修正，可以將完整的內容直接複製貼上，相對起來大概是有比較方便吧 :) 這篇就先到此吧~  

  
    


[1]: http://www.jetbrains.com/pycharm/
[2]: http://i.imgur.com/gxPLPNv.png
[3]: http://i.imgur.com/nhja3Fq.png
[4]: http://i.imgur.com/b57Jy6r.png
[5]: http://i.imgur.com/J9gGWbC.png
[6]: http://www.diveintopython.net/power_of_introspection/and_or.html
[7]: http://en.wikipedia.org/wiki/Short-circuit_evaluation
[8]: https://youtube.googleapis.com/v/vjMGtb3MDWo&source=uds
