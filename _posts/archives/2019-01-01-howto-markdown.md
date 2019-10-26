---
layout: post
title: GitHub Pagesでjekyll markdownを使う時のためのチートシート、Tips・技術情報
description: GitHub Pagesで使えるmarkdown記法やちょっとしたTips、これから始める方向けに環境構築を残します。
categories:
  - archive
tags:
  - github
  - jekyll
  - markdown
  - kramdown
  - Tipsツール
img: archive/techinfo.jpg
---

GitHub Pages を作成するにあたって、利用した技術情報などを**後で忘れても検索で気付くように**まとめておきます。
自分でも後で「どこにやったかな？」とならないようにチートシートにしました。

## チートシート

ここでは jekyll ではなく、 jekyll の Markdown[^1]の機能に限定しています。
[jekyll はこちらに移しました。]({{site.baseurl}}{% post_url archives/2019-01-01-howto-jekyll %})
ソース部分のカッコは半角です。
[GitHub リポジトリ]({{site.data.github.url}})も参照してもらいつつ、見比べてもらったほうが良いかも知れません。

一般的な markdown 記法については言及していません。
あまり使われないものや、mkar 固有のものを扱います。

## 注釈記法

注釈[^2]

```
[^2]
```

マウスオーバーでコメントが表示されます。
コメント自体はページ下部の注釈欄を参照してください。リンク先でも確認できます。

## TeX

やはり数式をきれいに書きたいですよね。

[見積もりの人月神話]({{site.baseurl}}{% post_url 2019/10/2019-10-10-estimate %})で使っているので、こちらを参考にしてみてください。

## TOC:目次

これは markdown の機能ではありませんが、VSCode を使っているのでそれっぽいものを半自動でできます。

![Auto Markdown TOC]({{site.baseurl}}/{{site.data.path.img}}/toc.png)

```
<!-- TOC -->

- [チートシート](#チートシート)
- [注釈記法](#注釈記法)
- [TeX](#tex)
- [TOC:目次](#toc目次)
- [画像](#画像)
- [画像リンク](#画像リンク)
- [注釈](#注釈)

<!-- /TOC -->
```

を任意の位置に手動で配置し、保存とともに自動更新されます。

## 画像

目次でも使った画像をこのように貼り付けます。

```
![Auto Markdown TOC]({{site.baseurl}}/{{site.data.path.img}}/toc.png)
```

特殊なことはしてないんですが、しょっちゅう忘れるので置いてます。
参照先は jekyll の機能を使っていますが、パスを設定しています。

## 画像リンク

リンク記法はテキスト：URL で指定しますが、画像リンクの場合はテキスト部分が画像になるだけです。
つまり、

```
[![Auto Markdown TOC]({{site.baseurl}}/{{site.data.path.img}}/toc.png)](#toc目次)
```

雑な表現ですが、リンクタグに!をつけると画像を意味します。
これを組み合わせると画像リンクになります。

[![Auto Markdown TOC]({{site.baseurl}}/{{site.data.path.img}}/toc.png)](#agenda)

分かりやすいように、画像をクリックすると目次までジャンプします。

## 注釈

[^1]: 【Markdown】厳密には kramdown という markdown レンダラー。
[^2]: 【注釈記法】リンク部分をマウスオーバーするとそちらでも見れるので、書き方を考えるのはありだと思います。実用的かどうかはさておき、使い方によっては面白いこともできそう。
