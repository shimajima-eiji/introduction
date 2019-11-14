---
layout: post
title: 【Windowsの環境を簡単に移行したい】chocolateyを実運用してみる
description: Windowsのパッケージ管理を考える。MacOSでいうbrewやymlなどaptのようなPackage Managementを実現する方法を実践で解説！
categories:
  - tech
tags:
  - Windows
  - パッケージ管理
img: 2019/11/chocolatey.jpg
---

## Windowsの引っ越しは大変！
先日、マシンを換装する際にファイルの移行で非常に苦労しました。
わざわざサイトまで行ってインストーラーをダウンロードして実行する、というプロセスをいくつもやっているととても手間臭い！
ひとつふたつではなく、大量にあるわけです。

移行ツールなど色々ありますが、できたらエンジニアライクにやりたい！ということでchocolateyを使ってみます。

## chocolateyで管理しよう
[Qiitaの記事](https://qiita.com/nomurasan/items/a85555f4c6964c69cb9c)の追記版です。
どうやって運用しているか？という話もありますが、ほとんど私の話なのでこちらで私物化しとります。

## chocolateyとは
Windowsのパッケージ管理・エコシステムで、MacOSでいうbrewやymlなどaptのようなものです。
chromeやらfirefoxやら、インストールしているものをコマンド一発でいい感じにやってくれるツール、ぐらいの認識で良いと思います。

では、ここから実際に運用してみたお話です。

## Windowsアップデート
理由がなければ真っ先に走らせましょう。
他が終わってもWindows Updateが終わらないことには再起動もできません。
たとえば、Windows10ならVersion19.03が入るまでは何もできません。
そして、終わるまでにそのまま待ちましょう。

おそらく、再起動を要求されるので、これも承諾します。
以下の作業は再起動後を想定しています。

今回、クリーンインストールをしたので最初のアップデートが終わっても、アップデートしたファイルのアップデートがダウンロードされて再起動を求められる、というパターンがありました。
具体的にはWindow Version19.03の更新パッケージを入れた後でした。

## chocolatey本体のインストール
コマンドプロンプトを管理者権限で開いて以下のコマンドをコピペ。
```
@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin
```
なんか大量のWarningメッセージは出るけど無視しましょう、
というのも、chocolateyを実施するときちんと入ってるっぽいですが、この辺りは要確認のこと。

## パッケージインストール
予め作成しておいたパッケージがあれば、
```
cinst chocolatey.config
```
でまとめて入りますし、なければ`cinst （パッケージ）`とか`chocolatey install （パッケージ）`でガシガシ入れていきましょう。
一つ二つならまだしも、頻繁に使うと手間なので、まとまったタイミングでxmlにアウトプットして別管理しておくことをオススメします。

インストーラー側からメッセージがちょいちょい上がってくるので、yとかaとかで進めましょう。
面倒くさかったら聞かれてもないのにy[enter]y[enter]を何回か入力しておいてもいいかもしれません。[^1]

## そのうち、インストーラーがないもの
つまり、インストールしたのはいいものの、レジストリに登録されないので実行ファイルがどこにあるか分からないものです。
`C:\ProgramData\chocolatey\lib`以下にファイルが配置されます。
設定はtools以下に置かれています。

ためしに、ファイラ「[Tablacus Explorer](https://tablacus.github.io/explorer.html)」をインストールして確認してみましょう。

### 罠か？インストールされても使えない機能がある
マルチプロセスなど、管理者権限が必要なものは使えないと思われます。
たとえば、tablacusを管理者権限で実行して実施したところ、正常に動いていないことが確認できました。
他にMicrosoft Store製品やGoogleDriveなんかも若干挙動が怪しいです。

探せばほかの機能やアプリでも同様の症例がありそうな気がするので、本格的に運用したい場合は別管理したほうがよさそうです。

## Windowsの設定
適宜対応のものなのでやってもやらなくても良いです。
私はHyper-VとWindows Subsystem for LInuxは必需品なので、この二つを入れてます。
なお、**Windows Subsystem for LInuxをchocolateyで入れると環境によっては致命的なエラーになり復旧が不可能になります。**

あと、宗教上の理由でキー設定がMicrosoft IMEではなくATOK。
フォルダオプションはtablacusを使うので設定するほどでもないかなぁ。

## その他サードパーティー製のもの
こちらも必要に応じて入れていきましょう。
tortoise gitを使っているなら、languageパッケージをわざわざダウンロードしないといけないです。
開き直ってenglish版を使いこなせるようになってしまうのもアリだと思います。
とはいえ面倒くさいので、chocolateyで管理してくれないかなぁ。

いっそのこと、これらのファイルだけ別管理するという手もなくはないです。

## chocolateyで管理できないもの
執筆時点で導入できないものは以下の通り。
- [toutoise git language pack for japanese](https://tortoisegit.org/download/)
- [ぴすたちおーウィンドウをピッタリ合わせる](http://ara.moo.jp/pita/)
- [pauseボタンで最前列](http://ftp.vector.co.jp/71/91/2318/pause_200.zip)

細かい事を言うと、7zipの圧縮解凍ソフトや仮想ディスクなんかも、これを機会に乗り換えました。
chocolateyに依存すると、こういった弊害が生まれそうです。

## 入った後に設定するもの
私の場合、tablacusとVSCodeのSettings.jsonをgitで管理しているので、これらを持ってくる必要があります。
また、Vivaldiの設定をコミュニティにログインして持ってきたりとか、マウスジェスチャーを再設定したり、やることは多いです。
それでもchocolateyがあるとだいぶ捗りますね。

## ありがちな失敗
Windows Updateがすべて完了する前にパッケージを入れると、本来必要でないものを入れることになるのでレジストリがおかしな事になる可能性があります。
分かりやすいのは、グラフィックドライバーなどWindows Updateに含まれるものをわざわざ入れなおしたりなど。Geforceユーザーは多いだろうと思いますが、こういう専用ドライバーが多いです。
WSLもこちらに該当します。

## 注釈
[^1]: 【yesキー先行入力】何がインストールされているのか自己管理できている場合に限ります。当然責任はとれません…
