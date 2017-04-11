---
layout: post
title: python tkinter <簡單的滑鼠畫線>
date: 2013-07-17 12:14
comments: true
categories: 
---


真的好感慨啊!! 想想以前用windows api去寫相同的程式，就要多很多工夫，很多底層的東西都要自己實做，用別人幫你建構好的架構就是快速簡單阿 :)  

```python
	from tkinter import *  
	from tkinter import ttk  
	  
	  
	def main():  
	 lasty, lastx = 0, 0  
	  
	 def xy(event):  
	 nonlocal lasty, lastx  
	 lastx = event.x  
	 lasty = event.y  
	  
	 def addLine(event):  
	 nonlocal lasty, lastx  
	 canvas.create_line((lastx, lasty, event.x, event.y))  
	 lasty = event.y  
	 lastx = event.x  
	  
	  
	 root = Tk()  
	 root.columnconfigure(0, weight=1)  
	 root.rowconfigure(0, weight=1)  
	  
	 canvas = Canvas(root)  
	 canvas.grid(column=0, row=0, sticky='nwes')  
	 canvas.bind('&ltButton-1&gt', xy)  
	 canvas.bind('&ltB1-Motion&gt', addLine)  
	 root.mainloop()  
	  
	  
	if __name__ == '__main__':  
	 main()  
```

這樣短短的code就實做出來了。 成果如圖案所示(掩面，用滑鼠寫字好難 :( )  
  
![pic][1] 
  
其實這次會PO這篇，是想要做個記錄:) 頭一次用到nonlocal = =，這是用來取的最近的上層scope的變數，因此我在 xy函式裡面寫了 nonlocal lastx, lasty 是為了取得 main函式的 lastx, lasty的reference，讓我可以隨意改變他們的值

[1]: http://i.imgur.com/H3ulIXE.png
