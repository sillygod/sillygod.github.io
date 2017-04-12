---
layout: post
title: c++ static_cast, dynamic_cast, const_cast, reinterpret_cast
date: 2014-04-20 04:50
comments: true
categories: [cplus]
---


最近又稍微碰到這類的問題，想說來複習一下也不錯，這邊有不錯的[解說][1] ，可以參考一下，這篇主要是記錄一下這四種type conversion的方法，基本上一扯到conversion，想當然爾，就會關係到C++裡面有的一個很需要注意的東西，那就是implicit conversion和explicit conversion，所以就先來講這兩個東西，就如同字面上的意思一樣，explicit是明顯的意思，因此explicit conversion  
大家都應該很熟悉，就像是...  
```cpp
	int i(5.2);  
```
這樣藉由 ( ) 這樣的語法轉換型態，就是明顯的轉換，那麼implicit是隱含的，所以什麼是隱含的轉換呢? 其實大家應該都常常寫到，只是不自覺，所以會很恐怖 :) 像是..  
```cpp
	double d = 5.2;  
	int i = d; //相當於 int i = int(d) 或 (int)d  
```
在你initialize的同時，C++會自動幫你轉換型態 :)  
或許這樣一看你會覺得不知道恐怖在哪是吧 :p  
的確今天的型態如果只是primitive，那你大概是不用怎麼怕，那如果是自己定義的呢??  
舉個例子  
```cpp
	#include <iostream>  
	#include <typeinfo>  
	using namespace std;  
	  
	  
	class A  
	{  
	public:  
	 A(int a=0)  
	 :mx(a)  
	 {  
	 }  
	  
	private:  
	 int mx;  
	};  
	  
	void test(A obj)  
	{  
	 cout<<typeid(obj).name()<<endl;  
	}  
	  
	  
	int main()  
	{  
	 test(2);  
	  
	 return 0;  
	}  
```	  
  
你將會看到，嘿嘿成功執行，你傳入的參數2，其實已經成為classA的copy constructor的參數了，你也可以看到印出來的type的確也是class A，上面只是跟你說一下，型態轉換在C++上面是很恐怖的，常常在很多你想不到的地方，他就發生了，就像這樣，如果哪個一個不小心，就會造成或許不是你預期的結果 :)  
  
哼哼尤其是在stl中，如果你想用到user defined class且有包含指標型態的話，通常最好要定義一下你的copy constructor，因為大概會被call到。關於這邊改天有心情的話，就來用個例子好啦 :)  
  
該來講一下四種cast的方法，在我上面給的那個連結基本上已經不錯的解說了，所以這邊就簡單總結一下而已  
  
`static_cast ` 
可以call implict conversoin和explicit conversion  
另外還有upcasting和downcasting  
只是他不像dynamic_cast會做動態的檢查  
  
`dynamic_cast` 
負責掌控 upcasting 和 downcasting  
  
  
`const_cast`  
它可以強制加上或拿掉一個變數的const特性，雖然我不知道這樣的實用在哪就是了 :-S  
  
`reinterpret_cast`  
一個很恐怖的東西，它可以強制轉換型態，任意的轉換，所以不要亂用  
  
另外關於這些cast想要更詳細的，可以看看 [這篇][2]  :)   
  


[1]: http://www.cplusplus.com/doc/tutorial/typecasting/
[2]: http://stackoverflow.com/questions/332030/when-should-static-cast-dynamic-cast-const-cast-and-reinterpret-cast-be-used
