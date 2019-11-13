---
layout: post
title: WindowsでLinuxのfind-grepのようなファイル内サーチをしたい？それ、PowerShellでできるよ。
description:
categories:
  - tech
tags:
  - powershell
img: common/research.jpg
---
WSL使えばよくね？って思いますが、PowerShellの話にフォーカスします。

## UNIX/LINUXコマンドで
```
grep "(hoge)" -rl (path)
```
こんなに簡単！

## Windows PowerShellで（本題）
```
ls -r -include (pattern)
# find . -type f -name (pattern)
```

```
Select-String '(hoge)'
# xargs grep (hoge)
```

これをパイプでくっつけて使います。

## 補足
- 【findコマンドのgrep】今回はわかりやすく-nameとしましたが、`| grep (hoge)`でも同じことができます。ただし、xargsの有無で意味が異なります。
- 【findコマンドに`-print`オプション】これはフルパス表記に変えるものなので、本件で不要な事をやっている例がちょいちょいあるのが気になって仕方ない…
- 【grepにxargsを指定する・しない場合の違い】`| grep (hoge)`でファイルパスを、`| xargs grep (hoge)`でファイル内を検索します。

興味があればこんなのもあります。
<iframe src="//www.slideshare.net/slideshow/embed_code/key/EstvApT0Nz1v7w" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/ShellShoccarJpn/posix-59780910" title="恐怖！シェルショッカーの POSIX原理主義シェルスクリプト" target="_blank">恐怖！シェルショッカーの POSIX原理主義シェルスクリプト</a> </strong> from <strong><a href="//www.slideshare.net/ShellShoccarJpn" target="_blank">Richie Shellshoccar</a></strong> </div>

ご参考まで。
