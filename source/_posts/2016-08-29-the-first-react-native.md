---
layout: post
title: 初嘗react native
date: 2016-08-29 14:39
comments: true
categories: [react native]
---
# 初嘗 React Native 


### 學習動機

有鑑於最近公司比較沒事，所以就心血來潮來玩一下，其實這還算是玩具性質的專案，有著效率上的問題，而且應該會有不少地雷存在，雖然他說得很漂亮，什麼write once, run anywhere? 當然我覺得這不是不可能，只是大概需要很常的時間，才能做到，不過呢，反正時間多出來了，就來玩玩看也不吃虧。


### 環境設置

這邊是以Linux(ubuntu 14.04)為例，[官網](https://facebook.github.io/react-native/releases/next/docs/getting-started.html)其實都有教學，只是在ubuntu上面通常安裝相對於,mac和windows來講都會比較麻煩點.. 我也不知道為什麼，linux的東西，一直以來懶人包好像都比較少，不像其他平台都是點一點就安裝好啦～～ 

安裝node環境那邊很簡單就不多說， react native command line 安裝方法也滿簡單的如下

```shell
npm install -g react-native-cli
```

主要是 Android Studio這邊，首先呢！ 你必須先安裝一下java環境，最好是oracle的java， ubuntu還有個open java，我想畢竟android是用oracle java開發的，所以最好還是用oracle吧，當然有人想試試open jdk的，試玩再告訴我心得 :)


```shell
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
sudo apt-get install oracle-java8-set-default
```

至於安裝jre環境這邊我是用

```shell
sudo apt-get install default-jre
```

java環境這邊告一段落， 再來去[android studio](https://developer.android.com/studio/index.html)官網下載安裝檔，接著根據官方說明文件～ 請先做一個步驟

```shell
sudo apt-get install lib32z1 lib32ncurses5 lib32bz2-1.0 lib32stdc++6
```

這個是你系統是64bit ubuntu的話，再安裝這些，看起來他是需要32bit的library，所以才安裝這些，接著剛剛下載完的檔案，沒意外應該要是一個zip檔，就把他解壓到你要的地方吧，一般而言會是放在 /opt/下面，你爽就好 :p

```shell
sudo unzip android-studio.zip -d /opt
```

這樣就算是安裝完成。

```shell
/opt/android-studio/bin/studio.sh
```

上面就是啟動方式， 不過啟動程式這樣很麻煩對吧， 你想要的話，其實可以把 /opt/android-studio/bin/ 加入系統路徑， 這樣就可以簡短指令， 你只要 sutdio.sh 這樣就可以啟動了。

不過我個人會比較想要建立一個 Desktop file 來啟動，就是像是桌面捷徑的感覺，點兩下就啟動程式，以下是Desktop file的內容

```
[Desktop Entry]
Version=1.0
Type=Application
Name=Android Studio
Exec="/opt/android-studio/bin/studio.sh" %f
Icon=/opt/android-studio/bin/studio.png
Categories=Development;IDE;
Terminal=false
StartupNotify=true
StartupWMClass=android-studio
```

把檔案存在 ~/.local/share/applications/ 下面，這樣就可以建立捷徑了～

**Watchman**這個他是沒說一定要裝啦，只是看起來裝了這個，開發上效率似乎會比較好，所以就都安裝啦， 哈哈哈哈阿， 這裡我選擇直接[install from source](https://facebook.github.io/watchman/docs/install.html#installing-from-source) 的方式，最簡單明瞭 :)

再來差不多可以往下進行啦～

### Reactive Hello World

雖然官網就給個幾行指令，說這樣就可以啟動example了

```shell
react-native init AwesomeProject 
cd AwesomeProject 
react-native run-android
```

但是～～～ 事實果然就是沒那麼簡單喔～ 人生總是期待越高，失望越大。 疑！ 突然好像有點悲觀（題外話

這邊要注意的是，請記得先啟動你的Android Studio，他會安裝android-sdk相關的東西，這邊需要注意版本， example 使用的是 23 版， 但是啟動時，我的是先安裝 24版的，所以記得安裝一下，安裝完後， 記得設置 `ANDROID_HOME`這個環境變數，

```shell
export ANDROID_HOME=$HOME/Android/Sdk
export PATH="$HOME/Android/Sdk/platform-tools:$HOME/Android/Sdk/tools:$PATH"
```
我的配置如上， 這樣一來大致上就沒問題了~~ 大概...吧


可是！ 我錯了， 哈 第一次用關於android的東西，看了錯誤訊息，似乎是他需要先運行一個模擬器呢～ 所以我選擇是`Genymotion`公司的android員工說是用這個，說效率比較好，所以就先採取他們的意見啦 :)

哈～ 不過呢！ 後來先換成用google的模擬器吧， Genymotion在ubuntu 15 以下版本，安裝有點步驟，頗麻煩... 首先先看看你的模擬器有哪些裝置，當然這邊你也可以自己建立一個模擬器


```shell
android list targets
android create avd -n react -t 1 --abi default/x86_64
emulator -avd react  # 啟動模擬器
```

值得注意的是有許多地方都需要依靠 android sdk manager，來安裝一些tool～

啟動完模擬器後，雖然官網說執行 `react-native run-android` 這行就可以了，但是沒意外你應該會出現**紅色錯誤**，官方自己下面也補充了，請額外執行 `react-native start` 這行，這樣一來就可以看到成功畫面了，如下

![screenshot](http://i.imgur.com/oaTJs2U.png)


但是有個問題，你會發現這個模擬器並沒有和我們的鍵盤連線，也就是你按了鍵盤毫無反應，也就無法享受到他給你的double tap R，更新的效果，所以接著我們要解決這個問題， 嘖嘖在linux上問題總是許多，我是不知道其他平台也是不是會遇到這些問題啦～～


重點在，要先啟動 avd manager， 這邊我找超久... 原來不是在android studio裡面，直接在command line裡面輸入`android avd`就可以打開了..我都快要翻桌了！！ 接著設置允許keyboard，之後就可以享用按兩下R就更新的快感啦！ 哈哈哈哈哈哈

好啦，起手式就到這邊為止，再來我要先來繼續看基本教學，有了一定心得後，再來po一篇文章。

###### tags: `react-native`
