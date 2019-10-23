---
layout: post
title: Windows Sub system Linux(WSL)を使ってmatplotlib(python)でグラフを出力させる
date: 2019-10-11 00:00:00 +0900
description: CUIターミナルでGUIのようにグラフを描画する時は、WSLだとvcxsrv.exeをインストールしますが、ここではVSCodeの画像プレビューが使えるのでmatplotlibからファイルに出力させる方法を解説します。
tags: [python]
img: 2019/10/manhour.png
---
## 最初に解答編と動くコード
最終的にできたコードがこちら。
```
import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt

# データ
x = np.arange(0, 6, 0.1)
y = (1 / x) + 2

# 描画設定
fig = plt.figure()
plt.xlabel("number of people")
plt.ylabel("completion date")
ax = fig.gca()
ax.set_ylim([0,7])
ax.plot(x, y)

fig.savefig('manhour')
```

事前に以下のライブラリをインストールしておきます。
必要であればpipをupgradeしておきましょう。

```
pip install pandas matplotlib
```

このコードを実行すると、実行した場所にmanhour.pngという名前で扉絵のようなグラフが作成されます。

## 解説
### 実行
```
import matplotlib.pyplot as plt
plt.show()
```

とりあえず動いている事を確認したかったので、何もない白画像を出そうとしましたが、
```
# graph.py:12: UserWarning: Matplotlib is currently using agg, which is a non-GUI backend, so cannot show the figure.
#   plt.show()
```
と怒られてしまいました。

### 解決
まぁ、見れなくてもいいんです。
出力先をディスプレイからファイルに向けて、CUIをGUIにする問題から離れます。

```
import matplotlib.pyplot as plt
fig = plt.figure()
ax = fig.gca()
fig.savefig('manhour')
```
これでとりあえず何かは出力されます。
何もやっていないので、真っ白な画像の状態ですね。

あとは、必要なものをこねくり回して作ると、グラフっぽい感じになります。
ただし、最後にプロッティングしないと、作ったものを表示するコマンドがないため、真っ白な画像のままです。
.plot()でレンダリングをさせるイメージでしょうか。
