---
layout: post
title: use ctypes to call windows api
date: 2013-07-13 05:25
comments: true
categories: [python, ctypes]
---


繼續之前使用ctypes實做Windows data type，這次要做的是使用windows api，來做一個console interface的聊天室，此篇僅先做出介面的樣子  

```python
	import ctypes  
	from ctypes import wintypes  
	from ctypes.wintypes import *  
	import msvcrt  
	import sys  
	  
	#-----------------debug use----------------------  
	import inspect  
	  
	def myDebugMsg(msg=''):  
	 print('{} at:{}'.format(msg, inspect.stack()[1][1:3]))  
	  
	def pause():  
	 while True:  
	 if msvcrt.kbhit():  
	 break  
	#------------------------------------------------  
	  
	  
	#--------------------------------------------------  
	# use ctypes to create a windows data type  
	class Char(ctypes.Union):  
	 _fields_ = [("UnicodeChar",WCHAR),  
	 ("AsciiChar", CHAR)]  
	  
	class CHAR_INFO(ctypes.Structure):  
	 _anonymous_ = ("Char",)  
	 _fields_ = [("Char", Char),  
	 ("Attributes", WORD)]  
	  
	  
	class CONSOLE_CURSOR_INFO(ctypes.Structure):  
	 _fields_ = [('dwSize', DWORD),  
	 ('bVisible', BOOL)]  
	  
	  
	PCHAR_INFO = ctypes.POINTER(CHAR_INFO)  
	COORD = wintypes._COORD  
	#---------------------------------------------------  
	  
	  
	class dllLoader:  
	 '''  
	 load the dll written by c and call them for use   
	 '''  
	 def __init__(self):  
	 self.mKernel32 = ctypes.WinDLL('Kernel32.dll')  
	 self.mUser32 = ctypes.WinDLL('User32.dll')  
	  
	 def getKernel32(self):  
	 return self.mKernel32  
	  
	 def getUser32(self):  
	 return self.mUser32  
	  
	 Kernel32 = property(getKernel32)  
	 User32 = property(getUser32)  
	  
	  
	dll = dllLoader()  
```	   
	  
上面這些code是先將我會用到的dll檔先load好和windows api data type實做出來，另外還有方便我用來debug的函式，接下來就是用來實做介面的code  

```python
	class consoleBackBuffer:  
	 def __init__(self, w, h):  
	 self.mstdout = dll.Kernel32.CreateConsoleScreenBuffer(  
	 0x80000000|0x40000000, #generic read and write  
	 0x00000001|0x00000002,  
	 None,  
	 1, #CONSOLE_TEXTMODE_BUFFER defined in winbase.h  
	 None)  
	 if self.mstdout == HANDLE(-1):  
	 myDebugMsg('CreateConsoleScreenBuffer failed')  
	  
	  
	 self.cursorInfo = CONSOLE_CURSOR_INFO()  
	 self.cursorInfo.dwSize = 25  
	  
	  
	 self.coordBufSize = COORD()  
	 self.coordBufSize.X = w  
	 self.coordBufSize.Y = h  
	  
	 self.coordBufCoord = COORD()  
	 self.coordBufCoord.X = 0  
	 self.coordBufCoord.y = 0  
	  
	  
	 self.readRgn = SMALL_RECT()  
	 self.readRgn.Top = 0  
	 self.readRgn.Left = 0  
	 self.readRgn.Right = w-1  
	 self.readRgn.Bottom = h-1  
	  
	  
	 self.writeRgn = SMALL_RECT()  
	 self.writeRgn.Top = 0  
	 self.writeRgn.Left = 0  
	 self.writeRgn.Right = 79  
	 self.writeRgn.Bottom = 24  
	  
	 self.actuallyWritten = DWORD() # used when writeconsole called  
	  
	 self.setCursorVisibility() # by default, set cursor invisible  
	  
	 def setCursorVisibility(self, flag = False):  
	 self.cursorInfo.bVisible = flag  
	 dll.Kernel32.SetConsoleCursorInfo(self.mstdout, ctypes.byref(self.cursorInfo))  
	  
	 def toggleActiveConsole(self, stdout=None):  
	 if stdout != None:  
	 dll.Kernel32.SetConsoleActiveScreenBuffer(stdout)  
	 else:  
	 dll.Kernel32.SetConsoleActiveScreenBuffer(self.mstdout)  
	  
	 def getHandle(self):  
	 return self.mstdout  
	  
	 def set_color(self, color):  
	 dll.Kernel32.SetConsoleTextAttribute( self.mstdout, color )  
	  
	  
	 def gotoxy(self, x, y, stdout=None):  
	 coord = COORD(x, y)  
	 if stdout == None:  
	 dll.Kernel32.SetConsoleCursorPosition( self.mstdout, coord)  
	 else:  
	 dll.Kernel32.SetConsoleCursorPosition( stdout, coord)  
	  
	 def setWriteSrc(self, x, y):  
	 self.writeRgn.Top = y  
	 self.writeRgn.Left = x  
	 self.writeRgn.Right = x+self.coordBufSize.X-1  
	 self.writeRgn.Bottom = y+self.coordBufSize.Y-1  
	  
	 def write(self, msg):  
	 while len(msg)>self.coordBufSize.X:  
	  
	 tempMsg = msg[:self.coordBufSize.X-1]+'\n'  
	 msg = msg[self.coordBufSize.X-1:]  
	  
	 success = dll.Kernel32.WriteConsoleW(  
	 self.mstdout,  
	 tempMsg,  
	 DWORD(len(tempMsg)),  
	 ctypes.byref(self.actuallyWritten),  
	 None)  
	  
	 if success == 0:  
	 myDebugMsg('WriteConsoleW failed')  
	  
	 if '\n' not in msg:  
	 msg = msg+'\n'  
	  
	 if len(msg) != 0:  
	 success = dll.Kernel32.WriteConsoleW(  
	 self.mstdout,  
	 msg,  
	 DWORD(len(msg)),  
	 ctypes.byref(self.actuallyWritten),  
	 None)  
	  
	 if success == 0:  
	 myDebugMsg('WriteConsoleW failed')  
	  
	 def present(self, mainBuffer):  
	 chiBuffer = (CHAR_INFO*(self.coordBufSize.X*self.coordBufSize.Y))()  
	  
	 success = dll.Kernel32.ReadConsoleOutputW(  
	 self.mstdout,  
	 ctypes.byref(chiBuffer),  
	 self.coordBufSize,  
	 self.coordBufCoord,  
	 ctypes.byref(self.readRgn)  
	 )  
	  
	 if success == 0:  
	 myDebugMsg('ReadConsoleOutputW failed')  
	  
	 success = dll.Kernel32.WriteConsoleOutputW(  
	 mainBuffer,  
	 ctypes.byref(chiBuffer),  
	 self.coordBufSize,  
	 self.coordBufCoord,  
	 ctypes.byref(self.writeRgn))  
	  
	 if success == 0:  
	 myDebugMsg('WriteConsoleOutput failed')  
```

我會實做一個console buffer的原因是，我想要用double buffer，畢竟畫面需要常常更新，為了不讓畫面有閃爍，因此使用這個技術。題外話，其實感覺滿新鮮的 :) 因為我以前用過double buffer是在使用 windows api的gdi才用過，果然在CLI裡也有 :) 親自實做的感覺，其實滿有成就感的，接下來就是做一些 widget出來，只是我對於GUI的元件該有怎樣的包裝，我也不清楚，因此只是隨意的做做而已 :(  
  
```python
	class widget:  
	 def __init__(self, sx, sy, w, h):  
	 self.console = consoleBackBuffer(w, h)  
	 self.console.setWriteSrc(sx, sy)  
	 self.gx = sx  
	 self.gy = sy  
	 #global position  
	 self.w = w  
	 self.h = h  
	 self.mTitle = 'no name'  
	 self.content = []  
	  
	 def getConsole(self):  
	 return self.console  
	  
	 def getContent(self):  
	 return self.content[:]  
	  
	 def setContent(self, content):  
	 self.content = content[:]  
	  
	  
	 def setTitle(self, title):  
	 self.mTitle = title  
	  
	 def getTitle(self):  
	 return self.mTitle  
	  
	 title = property(getTitle, setTitle)  
	  
	 def addContent(self, s):  
	 if len(s) >= self.w-3:  
	 self.content.append(s[:self.w-3])  
	 self.content.append(s[self.w-3:])  
	 else:  
	 self.content.append(s)  
	  
	 def delContent(self, s):  
	 self.content.remove(s)  
	  
	 def display(self, stdout):  
	 self.console.present(stdout)  
	  
	  
	class usermenu(widget):  
	 '''  
	 show user list  
	 '''  
	 def __init__(self, sx, sy, w, h):  
	 super().__init__(sx, sy, w, h)  
	  
	 def update(self):  
	 #draw outline  
	 border = '|'+'-'*(self.w-2)+'|'  
	 emptyLine = '|'+' '*(self.w-2)+'|'  
	 for y in range(self.h):  
	 if y in (0, 2, self.h-1):  
	 self.console.write(border)  
	 else:  
	 self.console.write(emptyLine)  
	  
	 #draw title and user list  
	 tx = int( (self.w - len(self.title))/2 )  
	 self.console.gotoxy(tx, 1)  
	 self.console.write(self.title)  
	  
	  
	 for i in range(len(self.content)):  
	 self.console.gotoxy(2, 3+i)  
	 self.console.write(self.content[i])  
	 self.console.gotoxy(0, 0)  
	  
	  
	class msgroom(widget):  
	 def __init__(self, sx, sy, w, h):  
	 super().__init__(sx, sy, w, h)  
	 self.scroll = 0  
	 self.start = 0  
	  
	 def scrollContent(self, offset):  
	 self.scroll += offset  
	 if self.scroll > 0:  
	 self.scroll = 0  
	  
	 def detectPageUpAndDown(self):  
	 pageUP = dll.User32.GetAsyncKeyState(0x21)  
	 pageDown = dll.User32.GetAsyncKeyState(0x22)  
	  
	 if pageUP != 0:  
	 self.scrollContent(-2)  
	 if pageDown != 0:  
	 self.scrollContent(2)  
	  
	 def update(self):  
	 self.detectPageUpAndDown()  
	 border = '|'+'-'*(self.w-2)+'|'  
	 emptyLine = '|'+' '*(self.w-2)+'|'  
	  
	 for y in range(self.h):  
	 if y in (0, 2, self.h-1):  
	 self.console.write(border)  
	 else:  
	 self.console.write(emptyLine)  
	 #draw title and content  
	 tx = int( (self.w - len(self.title))/2 )  
	 self.console.gotoxy(tx, 1)  
	 self.console.write(self.title)  
	  
	 index = len(self.content)-(self.h-4)+self.scroll  
	 self.start = 0 if index < 0 else index  
	  
	 obj = self.content if len(self.content) < self.h-4 else self.content[self.start : self.start+self.h-4]  
	 # wow, slice in python seems to automatically check the index if it is out of range  
	 # ex. lst = [1,2,3,4,5]  
	 # lst[-6:] no error produce  
	  
	 for i in range(len(obj)):  
	 self.console.gotoxy(1, 3+i)  
	 self.console.write(obj[i])  
	 self.console.gotoxy(0, 0)  
	  
	  
	  
	class inputLabel(widget):  
	 def __init__(self, sx, sy, w, h):  
	 super().__init__(sx, sy, w, h)  
	  
	 def update(self):  
	 border = '|'+'-'*(self.w-2)+'|'  
	 emptyLine = '|'+' '*(self.w-2)+'|'  
	  
	 for y in range(self.h):  
	 if y in (0, 2, self.h-1):  
	 self.console.write(border)  
	 else:  
	 self.console.write(emptyLine)  
	  
	 tx = int( (self.w - 8))  
	 self.console.gotoxy(tx, 0)  
	 self.console.write('|')  
	 self.console.gotoxy(tx, 2)  
	 self.console.write('|')  
	 self.console.gotoxy(tx, 1)  
	 self.console.write('|submit')  
	 self.console.gotoxy(0, 0)
```

	好了到這邊為止任務就完成了，想當然爾，要寫個code來測試，自己寫出來的code是不是跟自己想的效果一樣

```python
	def test():  
	 '''   
	 like this?  
	 in windows, the size of console is 80X25 by default   
	  
	 setting:   
	 2 space for left and rigth edge  
	 one space or \n for each panel  
	  
	 chatroom: 15 height, 55 width  
	 user list: 16 height, 15 width  
	 submit: 71 width, height 3  
	 |-------------------------------------------------------------| |-----------|  
	 | chatroom | | user list |  
	 |-------------------------------------------------------------| |-----------|  
	 |name2: hello, you | |df |  
	 |name1: yo | |yeah |  
	 | | |one |  
	 | | | |  
	 | | | |  
	 |-------------------------------------------------------------| |-----------|  
	  
	 |-------------------------------------------------------------------|-------|  
	 | yo, hahaha |submit |  
	 |-------------------------------------------------------------------|-------|  
	  
	 '''  
	 from threading import Timer, Thread  
	  
	  
	 hstdout = dll.Kernel32.GetStdHandle(DWORD(-11))  
	  
	 if(hstdout == HANDLE(-1)):  
	 print('create buffer failed')  
	  
	 backBuffer = consoleBackBuffer(80, 25)  
	  
	 userpanel = usermenu(56, 0, 15, 17)  
	 userpanel.title = 'user list'  
	 userpanel.addContent('heyhey')  
	 userpanel.addContent('haha')  
	 userpanel.update()  
	 userpanel.display(backBuffer.getHandle())  
	  
	 chatroom = msgroom(0, 0, 55, 17)  
	 chatroom.title = 'chat room'  
	 chatroom.addContent("eric: I'm so happy")  
	 chatroom.update()  
	 chatroom.display(backBuffer.getHandle())  
	  
	 inLabel = inputLabel(0, 18, 71, 3)  
	 inLabel.update()  
	 inLabel.display(backBuffer.getHandle())  
	  
	 backBuffer.present(hstdout)  
	 input()  
	  
	  
	  
	if __name__ == '__main__':  
	 test()  
```

結果跑出來的，如同我想像 happy :)  
其實後來我有使用socket，thread模組，加上這篇寫的code實做出一個多人聊天室，只是感覺鳥鳥的，有點不想PO出來 :( ，最近是打算寫出一個聊天軟體是GUI介面的，所以要先來研究tkinter，希望能夠成功做出來。
