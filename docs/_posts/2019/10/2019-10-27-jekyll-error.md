---
layout: post
title: 【amp-jekyllエラー】Unable to get image dimensions for "(pathto img)". For local files, build the site with '--skip-initial-build' for better results. [Error undefined method `[]' for nil:NilClass]
description: jekyllをビルドした時に出てくるエラーメッセージのせいでデバッグしにくかったので、無意味なメッセージを表示させない方法を調査しました。
categories:
  - tech
tags:
  - jekyll
  - amp対応
img: common/research.jpg
---

## 解決方法

- デバッグ時は amp-jekyll を使わないようにする。
- [amp-jekyll の issue の対応をする](https://github.com/juusaw/amp-jekyll/issues/24)
- amp-jekyll を使わない

のいずれかです。

## エラーメッセージ

タイトルのとおりですが、

```
Unable to get image dimensions for "(path to img)". For local files, build the site with '--skip-initial-build' for better results. [Error: undefined method `[]' for nil:Niando.jpg". For local files, build the site with '--skip-initial-build' for better results. [Error: undefined method`[]' for nil:NilClass]
```

これが大量に出てきます。
日本語に訳すと、

「

（img へのパス）」の画像サイズを取得できません。ローカルファイルの場合、より良い結果を得るために '--skip-initial-build'を使用してサイトを構築します。 [エラー：nil：Niando.jpg の未定義メソッド `[] '。ローカルファイルの場合、より良い結果を得るために' --skip-initial-build 'でサイトをビルドします。[エラー：nilの未定義メソッド` []'： NilClass]

」

となります。

## 再現手順

```
bundle exec jekyll serve
```

で jekyll を build するとコンソール画面に画像の数だけ出てきます。

![Unable to get image dimensions for "(pathto img)". For local files, build the site with '--skip-initial-build' for better results. [Error undefined method `[]' for nil:NilClass]]({{site.baseurl}}/{{site.data.path.img}}/2019/10/bad_result.png)

## 補足：jekyll の--no-watch オプションについて

amp-jekyll ではなく、jekyll のビルド時に出てくる

```
Build Warning: Skipping the initial build. This may result in an out-of-date site.
Auto-regeneration may not work on some Windows versions.
Please see: https://github.com/Microsoft/BashOnWindows/issues/216
If it does not work, please upgrade Bash on Windows or run Jekyll with --no-watch.
```

ビルド時の上記黄色文字部分です。
<br>これまた Google 先生にお願いすると、

「

ビルド警告：最初のビルドをスキップします。これにより、サイトが古くなる可能性があります。

一部の Windows バージョンでは自動再生が機能しない場合があります。

参照してください：[https://github.com/Microsoft/BashOnWindows/issues/216](https://github.com/Microsoft/BashOnWindows/issues/216)

動作しない場合は、Windows で Bash をアップグレードするか、-no-watch を指定して Jekyll を実行してください。

」

との事なので、これもなかなか無視できなさそう。

## 注意

リアルタイム更新性は失われるので、保存後に手動でビルドをし直す必要があることを考えると一長一短です。
あくまでデバッグ時に使うものと割り切る方が良さそうです。

## --no-watch について

新規作成は適用しますが、更新については無視されるので記事を更新してリアルタイムプレビューをするのに向いていません。
いちいちビルドされたくない場合には良いかも知れませんが、ローカル開発時にあまり恩恵を感じませんね…

元々は--watch としないとリアルタイムプレビューができなかった頃があったので、どこかしらで逆転した経緯があるようですね。
