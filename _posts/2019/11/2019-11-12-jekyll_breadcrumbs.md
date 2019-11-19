---
layout: post
title: ruby on railsにはgretelというパンくずリスト用のgemパッケージがあるのにgithubpagesでも使えるjekyll用のbreadcrumbsはないのだろうか？
description:
categories:
  - tech
tags:
  - ruby
  - jekyll
img: 2019/11/breadcrumb.jpg
---

ruby パンくずリストみたいな検索ワードで検索するとRuby **on Rails**のgretelというgemパッケージがヒットするばかりで、**GitHub Pagesで使えるjekyllのBreadCrumbsは見つからない**ので、諦めて自分で作って公開する事にします。

→あったぞおぉぉ！
いつのまにか消えていたら嫌なので、[こちら]({{site.data.github.url}}/{{site.data.github.file}}/_includes/breadcrumbs.html)でも公開します。
執筆時点ではまだ存在確認できます。[jekyll codex](https://jekyllcodex.org/without-plugin/breadcrumbs/)

いざ導入しようとしたら、たったこれだけで済んでしまいました。
言われてみれば確かにこれで行けるんだよなぁ、と唸ってしまいました…。

## Gemfileにjekyll-archivesやらbreadcrumbsを入れてみようとした時の試行錯誤
悔しいので作業録を残しておきます。最終的には全部撤廃しています。

[Gemfileでgithub上のリポジトリを指定してgem installする時の注意点](http://koic.hatenablog.com/entry/2017/01/10/000000)には非常に感銘を受けました。
これは言われてみれば確かにそうだなぁ、と思った。

## 追記
`bundle update`していたらこういうエラーメッセージでハマったので備忘録として。
```
Retrying fetcher due to error (1/4): Bundler::HTTPError Could not fetch specs from https://rubygems.org/
Retrying fetcher due to error (2/4): Bundler::HTTPError Could not fetch specs from https://rubygems.org/
Retrying fetcher due to error (3/4): Bundler::HTTPError Could not fetch specs from https://rubygems.org/
Retrying fetcher due to error (4/4): Bundler::HTTPError Could not fetch specs from https://rubygems.org/
```

特に設定を変えたつもりはないので、ネットワーク障害かなんかだと思います。
試しにipで通してもダメだったので、/etc/hostsの問題ではなさそう。

```
host rubygems.org
# rubygems.org has address 151.101.0.70
# rubygems.org has address 151.101.192.70
# rubygems.org has address 151.101.64.70
# rubygems.org has address 151.101.128.70
# rubygems.org has IPv6 address 2a04:4e42::70
# rubygems.org mail is handled by 10 mxa.mailgun.org.
# rubygems.org mail is handled by 10 mxb.mailgun.org.
```

で取れたので、これを追記。

```
151.101.128.70  api.rubygems.org
151.101.0.70    api.rubygems.org
151.101.64.70   api.rubygems.org
151.101.192.70  api.rubygems.org
```

hostで取れてるので問題なさそうだが、pingも確認しておく。
これも問題ない。
`curl https://rubygems.org/`で普通に中身を取得できる。

この状態でもbundleコマンドでエラーを吐いてしまった。
ますます意味がわからない。

伝家の宝刀・再起動もネットワーク障害の前では対応として適切ではないらしい。
う～む……。

とりあえず、一瞬テザリング炊いてそちらに接続することで対応。なんだったんだろう？
