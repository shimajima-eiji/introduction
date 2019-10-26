---
layout: post
title: GitHub Pagesでjekyllを使う時のためのチートシート、Tips・技術情報
description: GitHub Pagesで使える記法やちょっとしたTips、これから始める方向けに環境構築を残します。
categories:
  - archive
tags:
  - github
  - jekyll
  - Tipsツール
img: archive/techinfo.jpg
---

GitHub Pages を作成するにあたって、利用した技術情報などを**後で忘れても検索で気付くように**まとめておきます。
自分でも後で「どこにやったかな？」とならないようにチートシートにしました。

## チートシート

ここでは Markdown ではなく、jekyll の機能に限定しています。
[Markdown はこちらに移しました。]({{site.baseurl}}{% post_url archives/2019-01-01-howto-markdown %})
ソース部分のカッコは半角です。
[GitHub リポジトリ]({{site.data.github.url}})も参照してもらいつつ、見比べてもらったほうが良いかも知れません。

### GitHub アカウント

表示例：{{ site.social-github }}

```
｛｛ site.social-github ｝｝
```

### リンク記法

使用例：[site.baseurl と post_url を組み合わせる]({{site.baseurl}}{% post_url 2019/10/2019-10-09-first-person %})

```
｛｛site.baseurl｝｝｛% post_url archives/2019-01-01-operation-rule %｝
{{site.baseurl}}{% post_url archives/2019-01-01-operation-rule %}

# 参考：siteとpageのurlの違い
｛｛site.url｝｝
{{site.url}}

｛｛page.url｝｝
{{page.url}}

# 参考：siteのurlとbaseurlの違い
｛｛site.baseurl｝｝
{{site.baseurl}}

｛｛site.url｝｝
{{site.url}}

```

この辺りはややこしいので、自サイトでも検証して理解したほうが良いでしょう。

### 実ファイルパス変数

表示例：{{page.path}}

```
｛｛page.path｝｝
```

たとえば、[{{ site.data.config.ghfile }}/{{page.path}}]({{ site.data.config.ghfile }}/{{page.path}})のように指定する方法が考えられます。
が、用法として特殊なのでどうやって使うかは未知数です。コードなら大喜びですが…。

### 自由変数や\_config.yml の値を使いたい

表示例：{{site.data.github.file}}

```
｛｛site.data.config.file｝｝
# _data/github.ymlのfileを取得
```

ファイルは、[{{site.data.github.file}}\_data/github.yml]({{site.data.github.file}}/_data/github.yml)の通り。

```
# アカウント名(site.social-github)を変えたら変更すること
# github pagesについては、siteを使うことで対応可
baseurl: https://github.com/shimajima-eiji
url: https://github.com/shimajima-eiji/resume
file: https://github.com/shimajima-eiji/resume/blob/master
dir: https://github.com/shimajima-eiji/resume/tree/master
```

執筆時点のものなので変更されている可能性があります。
この方法で\_config.yml を使うこともできます。その場合は site 以下を参照すればよいです。

### TeX

やはり数式をきれいに書きたいですよね。

[見積もりの人月神話]({{site.baseurl}}{% post_url 2019/10/2019-10-10-estimate %})で使っているので、こちらを参考にしてみてください。

### TOC:目次

markdown ではなく jekyll です。
厳密には jekyll-doc という gem を使っています。
[ソースコード]({{site.data.github.file}}_includes/toc.html)

Gemfile に追記する必要はなく、githubpage に内包されています。

## 環境構築

GitHub Pages で公開することを前提にすると、ちょっとカスタマイズするだけでも気を遣います。
gem githubpages に入ってないものは使えないというつもりで、試行錯誤するブランチを作っておいたほうが良いかも知れません。

### 開発環境

ローカル環境で確認したい場合、rbenv を使うことになります。
[構築手順][rbenv]の通りにやれば OS 不問（Windows や Mac、Linux など）でできると思いますが検証はしていません。

また、[今回採用したテーマ][theme]をベースに拡張しています。
実行する際は、

```
bundle exec jekyll s --baseurl=""
```

で実行します。

### 検証用のプレビューをする方法

たとえば、githubpages.io というリポジトリを公開しているとします。
ここにブランチを切っても見れないので、一時的に確認用リポジトリを作ってそちらにアップロードし、対象のパスで検証します。
チェックが終わったら公開用リポジトリにプッシュするのが良いでしょうか。

### GitHub Pages でホスティングできるようにする。

Ruby を入れたのは、jekyll を使えるようにするためです。
Ruby のフレームワークは色々触ってきたけど、静的サイトジェネレーターはあまり意識して使ったことがない[^1]ので、これを機会に使っちゃおうという試みです。

ついでに、Ruby のフレームワークについて、もうひとつ詳しくなれました。

### メモ

- 【必須】記事を追加するだけなら GitHub の Web フォーム上でも可能です。
- 【注意】Markdown 記法の種類は[Kramdown](http://chirimenmonster.github.io/2016/01/28/tips-jekyll.html)
  - [Kramdown の TIPS](https://rcmdnk.com/blog/2013/10/12/blog-octopress-kramdown/)
  - [リファレンス](http://mae0003.github.io/markdown/2015/06/21/kramdownRefference)
- 目次は Kradown ではなく[jekyll-toc](https://github.com/allejo/jekyll-toc)を採用
- 各記事ページよりアポイントができます。

### 参考ページ

- [CHANGELOG.md を自動生成する](https://github.com/github-changelog-generator/github-changelog-generator)
- [AMP に対応](https://github.com/juusaw/amp-jekyll/)
- [theme を差し替え](http://jekyllthemes.org/)
  - [theme 変更時のお作法](https://e-joint.jp/321/)

## 注釈

[^1]: [adiary](https://adiary.org/)が優秀すぎた

{% comment %} 自サイトのリンクはすぐに差し替えられるようにする {% endcomment %}
[rbenv]: https://qiita.com/nomurasan/items/ef2c38ad28dfc08aae73
[theme]: https://github.com/artemsheludko/flexible-jekyll
