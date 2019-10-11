# 2019-11-11-matplot Source file
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

fig.savefig('../assets/img/2019/10/manhour')
