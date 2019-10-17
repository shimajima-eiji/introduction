---
theme: "league"
transition: "zoom"
highlighttheme: "darkula"
---

---
# Reveal.jsでスライドを作る
* Markdownでスライドが書ける**
* スライドをめくる場合は↓と→がある。
* スライドの設定（テーマやスプライト等）を変更できる
* VSCodeならプレビューもできる

---

# Agenda
<!-- TOC -->

- [Reveal.jsでスライドを作る](#revealjsでスライドを作る)
- [Agenda](#agenda)
- [ソースコード](#ソースコード)
- [プレビュー](#プレビュー)
- [解説](#解説)
- [インストール](#インストール)
- [ファイルを用意](#ファイルを用意)
- [VSCodeでプレビューする](#vscodeでプレビューする)
- [VSCodeでプレビューする](#vscodeでプレビューする)
- [VSCodeでプレビューする](#vscodeでプレビューする)

<!-- /TOC -->
--

# ソースコード

```
---
theme: "white"
transition: "zoom"
highlighttheme: "darkula"
---
# Reveal.jsでスライドを作る
**Markdownでスライドが書ける**
* スライドをめくる場合は↓と→がある。
  * 縦スライドさせる場合は--(-が2つ)
  * 横スライドさせる場合は---(-が3つ)
* スライドの設定（テーマやスプライト等）を変更できる
* VSCodeならプレビューもできる
```
本当にMarkdownのみ。
https://github.com/shimajima-eiji/resume/blob/add-article/othersource/revealjs.md

---

# プレビュー
https://github.com/shimajima-eiji/resume/blob/add-article/othersource/revealjs.pdf


---

# 解説

--

# インストール
VSCodeをインストールして、[VSCode-Reveal(拡張機能)](https://marketplace.visualstudio.com/items?itemName=evilz.vscode-reveal)を入れる

--

# ファイルを用意
1. 所定のフォーマットでMarkDownを書く
  * ---
  * theme:
  * ---
1. 普通に書く
1. --（縦）、---（横）

--

# VSCodeでプレビューする
リアルタイムプレビューの場合
1. [Shift] + [Ctrl] + [P]:
1. **>Revealjs: Show presentation by side**

--

# VSCodeでプレビューする
HTML・PDFに出力する場合
1. [Shift] + [Ctrl] + [P]:
1. **>Revealjs: EXport in HTML(PDF)**

--

# VSCodeでプレビューする
https://github.com/shimajima-eiji/resume/blob/add-article/othersource/export
* 基本的には→へスライド
* ↓や↑にもスライドできる
