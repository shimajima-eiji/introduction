---
layout: post
title: jekyll 記事スニペット
description: なるべくこのファイルの運用ルールに従うような形でサイトを構築しています。
categories:
  - archive
tags:
  - スニペット
img: archive/template-1.png
---

## ごあんない

**このページは、GitHub Pages で jekyll を始めようと考えている人向けです。**

こういうものもあった方がいいなぁ、と思ったので残してます。
基本的に本ページの状態を常に最新とするような運用を心がけています。

なお、執筆時点での設定は以下のようになっています。

```
---
layout: post
title: jekyll 記事スニペット
description: なるべくこのファイルの運用ルールに従うような形でサイトを構築しています。
categories:
  - archive
tags:
  - スニペット
img: template-1.png
---
```

各項目の解説は省きます。

## 使い方

各項目がソース上のどれに対応するか知りたかったので、本ページを見れば適切な設定がわかりやすくなります。
jekyll の使い方は[チートシート]({{site.baseurl}}{% post_url archive/2019-01-01-howto-jekyll %})を参照してください。

## ナレッジとかノウハウとかハウツーとか

やらないと気付かないことばかりです。

### Q. カテゴリーを設定するとパスが変わるのでは？

[/\_config.yml]({{site.data.github.file}}/_config.yml#L4)で**:categories**と指定しているためです。
これをやめると[一覧での表示とリンク先が異なる問題（検証）]({{site.baseurl}}{% post_url 2019/10/2019-10-23-duplicate-link %})のような問題が発生するため、

- ファイル名を変更する
- カテゴリを変更する

で対応できるようにしました。
拡張性を考えると、後者の方が良さそうな気がします。
