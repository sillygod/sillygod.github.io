---
layout: post
title: how to write a dll
date: 2013-08-05 14:02
comments: true
categories: 
---


dynamic link library(dll) 這是在windows上的稱呼，至於linux的稱呼是 shared library，沒記錯的話應該是這樣沒錯。最近想嘗試用python去call自己寫的dll檔，所以就開始學習如何產生dll檔。  
  
 經過我的嘗試後，發現dll的使用方式有兩種  

1. load-time dynamic linking (個人喜歡稱 implicity load way
2. run-time dynamic linking ( explicit load way

  
為何會這樣稱呼呢? 我想在稍後或許你就會了解了。  
首先寫一個dll檔，它也是有所謂的entry point的，就像是用C++和C寫一個console介面的程式，main就是entry point，win32則是WinMain。
```cpp
	BOOL APIENTRY DllMain(HANDLE hModule, DWORD dwReason, LPVOID lpReserved)  
	{  
	 return TRUE;  
	}
```  
	我對這個entry point實際上可以做哪些還不是很清楚，依照我看到的資料是說可以在這邊做一些資料的初始化和釋放，但是這個entry point可有可無並沒有強制規定要存在，所以目前我就沒有多去了解了。  
  
再來就是有個key word要注意了 __declspec() 這個可接受的參數有很多，但是目前我僅用到兩個  

1. dllexport
2. dllimport

假設今天我寫了一個這樣的函式我想要讓別人用dll可以call它，就要這樣寫
```cpp
	extern "C" __declspec(dllexport) int multipleByTwo(int num=2)  
	{  
	 std::cout<<"num will be multipled by 2"<<std::endl;  
	 return num*2;  
	}
```  
	
這樣一來被編譯成dll後，在另外一個檔案要用到這函式呢，就要如下面這樣寫，先做個宣告  
`extern "C" __declspec(dllimport) int multipleByTwo(int num);`  
	
宣告之後呢~嘿嘿還記得前面提到的兩種方式嗎?這個方法是implicity way，因為呢，這樣宣告後必須還要link library檔才有辦法編譯成功，要不然就會跑出錯誤提示找不到該函式的reference，另外dll也必須在執行檔的同個目錄喔! 要不然在run time的時候就會錯誤了。另外像這種宣告都會把它放在header file就是了。  
  
至於 explicity way呢，就是用到了LoadLibrary("xxx.dll")這種函式，明顯的去load dll檔，這種方法就不需要像前面那樣link library和宣告 `__declspec(dllimport)`，只是你相對就要去寫一些LoadLibrary和GetProcAddress之類的東西，不過這種的方式我就沒去嘗試了。  
  
不過因為目前我只是測試如何產生dll檔，所以就沒有特別去講究結構了 :) 之後就是來繼續做深入一點的研究，有心得後再上來PO  
  


