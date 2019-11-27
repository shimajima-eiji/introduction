---
layout: post
title: gitでpushできなくて--forceで強制プッシュもできない困った時にまず確認したいこと
description: 間違っても
categories:
  - tech
tags:
  - git
img: common/research.jpg
---

## git push -f origin masterは厳禁
これをルール・大前提に検討します。

## 一番安全な方法
手元で変更したファイルを100%管理している時しか使えません。

### 一番手っ取り早い方法
きれいな状態の.gitファイルを取得して、その上で対応すればよいのです。
具体的にいは、きれいな歴史と最新のファイルを引っ付ければ良いという考え方です。

1. 新しくgit clone -b (プッシュしたいブランチ)をする。元々作業していたディレクトリはそのまま残す。
1. cloneしたディレクトリ以下を、**.gitだけを残して**すべて削除する
1. 作業をしていたディレクトリから**.git以外**をすべてコピーする

gitコマンドに詳しくない熟練のエンジニアならこの方法が一番コストが低いんじゃないかと思います。

### 履歴を削除したくない！
やはりというか当然というか、履歴は消したくないもの。
であれば、masterと現行を競合させて収束していく他ありません。

普通にgit pullをしようとするとmergeエラーになります。
git pullとは、git fetch && git mergeを一括でやってくれるコマンドなので、mergeエラーになるのはこの場合は当然といえば当然です。
逆にいうと、mergeエラーになる場合はコンフリクトを起こしているか、履歴が消滅しているか[^1]のどちらかです。

###　


## 注釈
[^1]: 【履歴が消滅している】git push --force(-f)がだいたいの原因。他にも履歴そのものを削除する「filter-branch」と「git gc」というやべーコマンドもあります。