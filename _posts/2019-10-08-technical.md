---
layout: post
title: 技術情報
date: 2019-10-08 00:00:00 +0900
description: 詳細
tags: [github pages 拡張機能]
---
GitHub Pagesを作成するにあたって、利用した技術情報などを**後で忘れても検索で気付くように**まとめておきます。

## 開発環境
ローカル環境で確認したい場合、rbenvを使うことになります。
[構築手順][rbenv]の通りにやればOS不問（WindowsやMac、Linuxなど）でできると思いますが検証はしていません。

また、[今回採用したテーマ][theme]をベースに拡張しています。
実行する際は、
```
bundle exec jekyll s --baseurl=""
```
で実行します。

## GitHub Pagesでホスティングできるようにする。
Rubyを入れたのは、jekyllを使えるようにするためです。
Rubyのフレームワークは色々触ってきたけど、静的サイトジェネレーターはあまり意識して使ったことがない[^1]ので、これを機会に使っちゃおうという試みです。

ついでに、Rubyのフレームワークについて、もうひとつ詳しくなれました。

## メモ
* 【必須】記事を追加するだけならGitHubのWebフォーム上でも可能です。
* 【注意】Markdown記法の種類は[Kramdown](http://chirimenmonster.github.io/2016/01/28/tips-jekyll.html)
  * [KramdownのTIPS](https://rcmdnk.com/blog/2013/10/12/blog-octopress-kramdown/)
  * [リファレンス](http://mae0003.github.io/markdown/2015/06/21/kramdownRefference)
* 目次はKradownではなく[jekyll-toc](https://github.com/allejo/jekyll-toc)を採用
* 【相談】サイトの方針からコメントフォームは採用しない方がいい……？
  * ユーザーは匿名でできるが、[サイトオーナーは有料（30日無料）登録が必要](https://disqus.com/)かもしれない。
  * コメントの消し方は、/_layout/post.html参照
* 【相談】[netlify](https://www.netlify.com/)とどっちがいいんでしょうね？

## 技術情報・参考
* [CHANGELOG.mdを自動生成する](https://github.com/github-changelog-generator/github-changelog-generator)
* [AMPに対応](https://github.com/juusaw/amp-jekyll/)
* [themeを差し替え](http://jekyllthemes.org/)
  * [theme変更時のお作法](https://e-joint.jp/321/)

## 注釈
[^1]: [adiary](https://adiary.org/)が優秀すぎた

{% comment %} 自サイトのリンクはすぐに差し替えられるようにする {% endcomment %}
[rbenv]: https://qiita.com/nomurasan/items/ef2c38ad28dfc08aae73
[theme]: https://github.com/artemsheludko/flexible-jekyll
