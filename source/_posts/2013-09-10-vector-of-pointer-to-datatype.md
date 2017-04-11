---
layout: post
title: vector of pointer to datatype
date: 2013-09-10 12:05
comments: true
categories: 
---


最近開始回去用C++，乎~真的是久沒用，除了打code時忘了用 ; 來結尾，還有忘了打 { }(因為太習慣python了...)，另外對於一些C++ compiler背後運作的方式都有點生疏了，像是一些關於繼承方面會用到的語法xxx: public virtual xxx，虛擬繼承的東西，為啥會有這種東西的存在我不用多說吧? 有興趣就google: c++ diamod problem。  
  
  
今天是想要記錄一些比較瑣碎的東西，以前我在用std::vector的時候，從來都沒有用資料型態是指標的，所以就沒有注意到一個問題，那就是如下code所示  
  
```cpp
	class animal  
	{  
	public:  
	 animal()  
	 {  
	 cout<<"create default"<<endl;  
	 }  
	  
	 virtual ~animal()  
	 {  
	 cout<<"delete default"<<endl;  
	 }  
	  
	};  
	  
	class dog: public animal  
	{  
	public:  
	 dog()  
	 {  
	 cout<<"create dog"<<endl;  
	 }  
	  
	 virtual ~dog()  
	 {  
	 cout<<"delete dog"<<endl;  
	 }  
	};  
	  
	  
	class cat:public animal  
	{  
	public:  
	 cat()  
	 {  
	 cout<<"create cat"<<endl;  
	 }  
	  
	 virtual ~cat()  
	 {  
	 cout<<"delete cat"<<endl;  
	 }  
	};  
	  
	  
	  
	int main()  
	{  
	 vector<animal*> obj;  
	 obj.push_back(new cat());  
	 obj.push_back(new dog());  
	  
	  
	 //vector<animal*>::iterator  
	 //sintax sugar auto  
	 for(auto it=obj.begin(); it!=obj.end(); ++it)  
	 {  
	 delete *it;  
	 }  
	 cout<<"..."<<endl;  
	 return 0;  
	}  
```	  
今天我宣告一個baseclass名為animal，然後有兩個class去繼承他分別為cat和dog，用這樣是為了來做一個upcasting的例子而已，其實這樣的做法是有其方便的地方，假如你今天在做一個遊戲，想當然爾需要常常用到Draw(...)來render物件吧，那麼這時候upcasting這種方式就可以出來耀武揚威了:) 你可以宣告一個interface裡面有draw()，然後繼承該class的class也必須分別implement它們各自的Draw的內容，那麼接下來你就可以用 
```cpp
vector<xxx*> obj  
for(.......)  
{  
    obj->draw();   
}  
``
其實今天想要說的東西是，當你用vector<xxx>，xxx這是指標型態的時候，千萬要記得事後自己要delete掉，像我上面code那樣，vector只是幫你handle那些指標占掉的空間，而不會幫你清掉你new的東西，不信你就把我用來delete的那行去掉，看看程式執行會不會有跑出delete的訊息。  
  
第二件想要記錄的是，C++11有個關鍵字叫auto，感覺真棒，一個很棒的sintax sugar，雖然沒有這東西，你也可以用typedef來達到類似功能，只是直接用auto是更爽的一件事 :)

