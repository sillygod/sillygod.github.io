---
layout: post
title: python tkinter+PIL
date: 2013-07-23 06:12
comments: true
categories: [python, tkinter]
---


有鑑於Windows內建的圖片預覽器沒辦法看animated gif，因此我突然想要自己實做一個，想當然爾是用python開發方便 :) 只是，果真是人算不如天算阿!! 由於tkinter本身並沒辦法去讀取png、jpg等格式的檔案，所以我另外去裝了PIL。  
  
哼哼，雖然我成功讀取那些檔案，但是 "animated gif" 仍然是一個很大的問題，相信我! 千萬不要用 PIL 去讀取animated gif :(  it's the worst gif-supported library I've ever seen. 我是有成功抓到每個frame出來，但是將每個frame存成圖後簡直悲劇，失真失得好慘阿....之後找了找我發現有人的解法是類似我寫的這樣..  
  
```python
	img = Image.open(filename)  
	palette = img.getpalette()  
	seq = []  
	try:  
	 while True:  
	 img.putpalette(palette)  
	 new_im = Image.new("RGBA", img.size)  
	 new_im.paste(img)  
	 self.frame.append(new_im)  
	 img.seek(img.tell()+1)  
	except EOFError:  
	 #mission complete  
	 pass  
	  
	for i in range(len(self.frame)):  
	 self.frame[i].save('{}.png'.format(i))  
```	  
說是這是pil的bug，說啥每當seek到下一個frame時，會失去palette，因此要幫他補上去，只是阿...我這樣做了，就只有部分gif是OK的，有些仍然會有問題!! 我想可能要用其它的library來實做了吧 :(  這次的經歷給我了一句話那就是 PIL + GIF = TORTURE  
  
寫這篇的目地，是不希望有下個人給我一樣在這邊耗這麼久，到頭來卻毫無收穫

