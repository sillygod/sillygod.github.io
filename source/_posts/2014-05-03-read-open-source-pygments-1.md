---
layout: post
title: read open source pygments 1
date: 2014-05-03 18:08
comments: true
categories: [python]
---
[pygments][1] 簡單說是一個syntax highlighter，他支援的語言十分之多，最近會突然想閱讀他源碼，其實有部分原因是想開始練習閱讀open source，畢竟為了我另外一個project，我想，閱讀open source的能力，勢必要有所上升才行 :)  
  
另外原因是，之前有朋友問，怎麼在blogger上面hightlight code，關於這個，我之前都是用[這個][2] ，這是based on javascript的，所以必須要在blogger的後端，加入一些連結，而且每次要寫code時，都必須把code包覆在`<pre brush:xx></pre>`裡面，才會有效果出現，其實就以寫blog而言，真的有那麼一點不順就是了 :(  
  
不過朋友說他做了設定後，卻沒有效果出來，好吧，我人沒在他旁邊，所以也不知道問題出在哪，所以最近在想乾脆用用pygments將code highlight後output成html格式，再將它PO在blog上面，這樣就比較簡單了 :) 於是我的閱讀之旅就這樣開始拉，雖然僅能利用假日來讀 :(  
![pci][3]
我想，首先就從package的`__init__.py`來開始看，應該是沒錯的，如上圖所示，它做了一些最基本的說明 "pygments 是一個用python寫的語法高亮器 bla bla bla" 以下省略 :p  
  
這邊特別說明一下 `__all__` 這個東西的效用，其實看[官網][4] 的說明，就大概知道了，當你用 `from pygments import *`，如果你有定義 `__all__` ，那它只會import 在all裡面的那些東東而已，沒定義的話，就會看你的 `__init__.py` 裡面有什麼就 import 啥，比如上面有`import sys`，那它也會跟著`import sys`，好啦轉回正題~  
  
這個檔案的結構也滿簡單的，highlight這個function用到了 lex 和 format，另外當`__init__.py`被當成執行入口時，它會import cmdline.py，所以接下來我要去讀的package和檔案其實也滿明顯的，接下來我是選擇先閱讀cmdline.py，其實從名字一看也知道這是關於在cmd中如何進行操作的檔案，看完這檔案，應該就知道怎麼使用 pygments了，畢竟先懂得怎麼使用，然後再試著修改，我想這應該是不錯的順序吧 :p，另外也不用再去看官方docments的操作說明 :)  
![pic][5]
看吧，果然有使用方法，不過這檔案用到挺多東西的，其中它用到了兩個standard module，  
  
1. getopt  
2. textwrap  
  
python果然真的是太方便了，光是內建就有一堆好用的東西，雖然這些自己寫一個也是OK拉:p  
  
看了官方說明， getopt 主要是一個 sys.argv的parser， textwrap總之，方便文字格式處理的module，詳細不多說，畢竟這不是這篇文章的重點，且官方有不少說明，或者更有興趣直接看textwrap.py和getopt.py也是可以的。  
  
 看了一些code後，使用上並不難，比如想要對test.py輸出一個語法高亮格式為html的檔案，打這樣的指令就可以了  
  
pygmentize -O full,style=emacs -o test.html test.py  
  
基本上只要你有提供輸入輸出檔，pygments會自動判斷該檔案的語法，當然你也可以自己輸入參數去規定syntax就是了，另外關於-O 那邊的設置，可以找源碼中的formatters的html.py裡面有相關說明，不同的輸出格式，會有一些有不同的option，效果如下  
  
<style type="text/css">
td.linenos { background-color: #f0f0f0; padding-right: 10px; }
span.lineno { background-color: #f0f0f0; padding: 0 5px 0 5px; }
pre { line-height: 125%; }
body .hll { background-color: #ffffcc }
body .c { color: #008800; font-style: italic } /* Comment */
body .err { border: 1px solid #FF0000 } /* Error */
body .k { color: #AA22FF; font-weight: bold } /* Keyword */
body .o { color: #666666 } /* Operator */
body .cm { color: #008800; font-style: italic } /* Comment.Multiline */
body .cp { color: #008800 } /* Comment.Preproc */
body .c1 { color: #008800; font-style: italic } /* Comment.Single */
body .cs { color: #008800; font-weight: bold } /* Comment.Special */
body .gd { color: #A00000 } /* Generic.Deleted */
body .ge { font-style: italic } /* Generic.Emph */
body .gr { color: #FF0000 } /* Generic.Error */
body .gh { color: #000080; font-weight: bold } /* Generic.Heading */
body .gi { color: #00A000 } /* Generic.Inserted */
body .go { color: #888888 } /* Generic.Output */
body .gp { color: #000080; font-weight: bold } /* Generic.Prompt */
body .gs { font-weight: bold } /* Generic.Strong */
body .gu { color: #800080; font-weight: bold } /* Generic.Subheading */
body .gt { color: #0044DD } /* Generic.Traceback */
body .kc { color: #AA22FF; font-weight: bold } /* Keyword.Constant */
body .kd { color: #AA22FF; font-weight: bold } /* Keyword.Declaration */
body .kn { color: #AA22FF; font-weight: bold } /* Keyword.Namespace */
body .kp { color: #AA22FF } /* Keyword.Pseudo */
body .kr { color: #AA22FF; font-weight: bold } /* Keyword.Reserved */
body .kt { color: #00BB00; font-weight: bold } /* Keyword.Type */
body .m { color: #666666 } /* Literal.Number */
body .s { color: #BB4444 } /* Literal.String */
body .na { color: #BB4444 } /* Name.Attribute */
body .nb { color: #AA22FF } /* Name.Builtin */
body .nc { color: #0000FF } /* Name.Class */
body .no { color: #880000 } /* Name.Constant */
body .nd { color: #AA22FF } /* Name.Decorator */
body .ni { color: #999999; font-weight: bold } /* Name.Entity */
body .ne { color: #D2413A; font-weight: bold } /* Name.Exception */
body .nf { color: #00A000 } /* Name.Function */
body .nl { color: #A0A000 } /* Name.Label */
body .nn { color: #0000FF; font-weight: bold } /* Name.Namespace */
body .nt { color: #008000; font-weight: bold } /* Name.Tag */
body .nv { color: #B8860B } /* Name.Variable */
body .ow { color: #AA22FF; font-weight: bold } /* Operator.Word */
body .w { color: #bbbbbb } /* Text.Whitespace */
body .mf { color: #666666 } /* Literal.Number.Float */
body .mh { color: #666666 } /* Literal.Number.Hex */
body .mi { color: #666666 } /* Literal.Number.Integer */
body .mo { color: #666666 } /* Literal.Number.Oct */
body .sb { color: #BB4444 } /* Literal.String.Backtick */
body .sc { color: #BB4444 } /* Literal.String.Char */
body .sd { color: #BB4444; font-style: italic } /* Literal.String.Doc */
body .s2 { color: #BB4444 } /* Literal.String.Double */
body .se { color: #BB6622; font-weight: bold } /* Literal.String.Escape */
body .sh { color: #BB4444 } /* Literal.String.Heredoc */
body .si { color: #BB6688; font-weight: bold } /* Literal.String.Interpol */
body .sx { color: #008000 } /* Literal.String.Other */
body .sr { color: #BB6688 } /* Literal.String.Regex */
body .s1 { color: #BB4444 } /* Literal.String.Single */
body .ss { color: #B8860B } /* Literal.String.Symbol */
body .bp { color: #AA22FF } /* Name.Builtin.Pseudo */
body .vc { color: #B8860B } /* Name.Variable.Class */
body .vg { color: #B8860B } /* Name.Variable.Global */
body .vi { color: #B8860B } /* Name.Variable.Instance */
body .il { color: #666666 } /* Literal.Number.Integer.Long */
</style>
<table class="highlighttable"><tbody>
<tr><td class="linenos"><div class="linenodiv">
<pre>1
2
3
4
5</pre>
</div>
</td><td class="code"><div class="highlight">
<pre><span class="n">a</span> <span class="o">=</span> <span class="p">[</span> <span class="n">x</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">10</span><span class="p">)</span> <span class="p">]</span>
<span class="n">b</span> <span class="o">=</span> <span class="n">a</span><span class="p">[::</span><span class="mi">2</span><span class="p">]</span>

<span class="k">print</span><span class="p">(</span><span class="n">a</span><span class="p">)</span>
<span class="k">print</span><span class="p">(</span><span class="n">b</span><span class="p">)</span>
</pre>
</div>
</td></tr>
</tbody></table>
  
我是將輸出的html內容擷取並貼上來，而且還要做一些小處理，只是如果每次都要這樣其實也滿累的 :( 目前就先到這邊吧，下次在PO繼續閱讀的心得，並且想個解決辦法 :p  
   


[1]: http://pygments.org/
[2]: http://alexgorbatchev.com/SyntaxHighlighter/
[3]: http://i.imgur.com/TlAATpe.png
[4]: https://docs.python.org/3.2/tutorial/modules.html?highlight=__all__
[5]: http://i.imgur.com/bcecuSV.png
