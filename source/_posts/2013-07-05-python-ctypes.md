---
layout: post
title: python ctypes
date: 2013-07-05 14:11
comments: true
categories: 
---
最近做了小小的測試，使用python的ctypes來實做windows api的data type  
  
 ex.1

```python
	typedef struct _CHAR_INFO {  
	    union{  
	        WCHAR UnicodeChar;  
	        CHAR AsciiChar;  
	    } Char;  
	    WORD Attributes;  
	} CHAR_INFO, *PCHAR_INFO;  
用ctypes實做如下先將名為Char的union實做出來  
  
	class Char(ctypes.Union):  
	    _fields_ = [("UnicodeChar",WCHAR),  
	                ("AsciiChar", CHAR)]  
	再來將CHAR_INFO整個structure實做出來  
  
	class CHAR_INFO(ctypes.Structure):  
	    _anonymous_ = ("Char",)  
	    _fields_ = [("Char", Char),  
	                ("Attributes", WORD)]  
	PCHAR_INFO = ctypes.POINTER(CHAR_INFO)  
```

噹噹噹~mission complete  
ex.2  

```python
	typedef struct _CONSOLE_CURSOR_INFO {  
	 DWORD dwSize;  
	 BOOL  bVisible;  
	}CONSOLE_CURSOR_INFO, *PCONSOLE_CURSOR_INFO;  
		class CONSOLE_CURSOR_INFO(ctypes.Structure):  
	    _fields_ = [('dwSize', DWORD),  
	                ('bVisible', BOOL)] 
```

其實ctypes這模組挺方便的，可以隨意的call用C寫出來的dll檔，如果只是想要用到一點點dll檔，我想自己寫就好了，不需要去用到其它模組，像是如果你要大量的用到windows api那就果斷用[pywin32][1]吧:)，裡面可幫你寫好一堆的東西呢，畢竟這動作實在是很機械式，有別人幫你種樹，就去乘涼吧，而且它還有個特別的地方是ctype已幫你繞開python的GIL限制~這個就不多解釋了，畢竟我也沒啥碰到。

當然用python去CALL用C寫的dll也有其他目的，通常是效率問題，把效率吃緊的地方給較低階的語言去實做，目前知道有個叫[SWIG][2]，可以將很多語言黏在一起，因為小弟也沒用過所以不敢多言 
  
  
   


[1]: http://sourceforge.net/projects/pywin32/
[2]: http://www.swig.org/
