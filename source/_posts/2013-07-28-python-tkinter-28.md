---
layout: post
title: python tkinter 匯率換算器
date: 2013-07-28 13:51
comments: true
categories: [python, tkinter]
---


其實我最近正在學pyqt，然後看到有個例子是匯率換算器，所以無聊之下換成用tkinter來寫寫看code如下  
```python

def test2():  
	 import tkinter  
	 from tkinter import ttk  
	  
	 rates = {}  
	  
	 def getdata():  
   		nonlocal rates  
	 		try:  
	 				date = 'unknown'  
	 				fh = request.urlopen("http://www.bankofcanada.ca/en/markets/csv/exchange_eng.csv")  
	 				#always remember that in python3 this function returns byte object!!  
	 				for line in fh:  
	 						line = line.decode('utf-8')# so need to decode  
							if not line or line.startswith(('#', "Closing ")):  
	 								continue  
	 						fields = line.split(',')  
	 						if line.startswith("Date "):  
									date = fields[-1]  
	 						else:  
	 								try:  
	 										value = float(fields[-1])  
									 		rates[fields[0]] = value  
	 								except ValueError:  
	 										pass  
	 								return "Exchange Rates Date: "+ date  
	 		except Exception as e:  
	 				return "Failed to downloads:\n%s" % e  
	  
	 def show(event):  
	 		try:  
	 				num = float(entry.get())  
	 		except:  
	 				pass  
	  
	 fromCur = float(rates[fromCombo.get()])  
	 toCur = float(rates[toCombo.get()])  
	 result['text'] = fromCur/toCur * num  
	  
	  
	 root = tkinter.Tk()  
	  
	 dateLabel = ttk.Label(root, text=getdata())  
	 listVar = sorted(rates.keys())  
	  
	  
	 fromCombo = ttk.Combobox(root, values=listVar, state='readonly')  
	 fromCombo.current(0)  
	 toCombo = ttk.Combobox(root, values=listVar, state='readonly')  
	 toCombo.current(0)  
	  
	 entry = tkinter.Entry(root)  
	 result = ttk.Label(root, text='...')  
	  
	 calculate = ttk.Button(root, text='calculate')  
	 calculate.bind('<Button-1>', show)  
	  
	  
	 dateLabel.grid(column=0, row=0, columnspan=2, padx=5)  
	 fromCombo.grid(column= 0, row=1, padx=10, pady=5)  
	 toCombo.grid(column=0, row=2, padx=10, pady=5)  
	 entry.grid(column=1, row=1, padx=10, pady=5)  
	 result.grid(column=1, row=2, padx=10, pady=5)  
	 calculate.grid(column=0, row=3, columnspan=2)  
	  
	 root.mainloop()  
	  
	  
	if __name__ == '__main__':  
	 test2() 
```

由於只是嘗試寫寫所以就沒有特別去想結構了，用了不怎麼好看的寫法 :)    
只是有個地方滿好奇的，我用這匯率去算跟台銀給的匯率計算器得出的結果不一樣(汗，不過其實我也不太懂匯率是怎麼得出來的，所以用這個程式得出來的結果看看就好，想要知道目前的匯率還是去台銀官網看吧 :) 或者就是把這篇code所抓取的csv改成台銀的 :)  
  


