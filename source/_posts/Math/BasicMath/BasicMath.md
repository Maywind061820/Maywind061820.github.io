---
title: 高等数学极速版
date: 2025-10-13 23:00:00
tags:
    - 高等数学
    - 微积分
    - 应试
categories:
    - [数学,高等数学]
---

# 同济高数上册

## 第一章 函数与极限

### 1.1 函数

**重要定义：**
- **函数定义**：设 $x$ 和 $y$ 是两个变量，$D$ 是一个给定的数集。如果对于每个 $x \in D$，按照对应法则 $f$，总有唯一确定的 $y$ 值与之对应，则称 $y$ 是 $x$ 的函数。
- **反函数**：设函数 $y = f(x)$ 的定义域为 $D$，值域为 $R$。若对于每个 $y \in R$，有唯一确定的 $x \in D$ 与之对应，则得到 $x = \varphi(y)$，称为 $y = f(x)$ 的反函数。

**重要结论：**
- 函数 $y = f(x)$ 与它的反函数 $x = f^{-1}(y)$ 的图像关于直线 $y = x$ 对称。

### 1.2 极限

**重要定义：**
- **数列极限**：$\lim\limits_{n \to \infty} x_n = a$ 表示 $\forall \varepsilon > 0, \exists N > 0$，当 $n > N$ 时，有 $|x_n - a| < \varepsilon$
- **函数极限**：$\lim\limits_{x \to x_0} f(x) = A$ 表示 $\forall \varepsilon > 0, \exists \delta > 0$，当 $0 < |x - x_0| < \delta$ 时，有 $|f(x) - A| < \varepsilon$

**重要极限公式：**
- $\lim\limits_{x \to 0} \frac{\sin x}{x} = 1$
- $\lim\limits_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$
- $\lim\limits_{x \to 0} (1 + x)^{\frac{1}{x}} = e$

**极限运算法则：**
- 和、差、积、商的极限等于极限的和、差、积、商（分母极限不为零）

### 1.3 无穷小与无穷大

**重要定义：**
- **无穷小**：极限为零的变量称为无穷小
- **无穷大**：绝对值无限增大的变量称为无穷大

**重要结论：**
- 有限个无穷小的和、积仍是无穷小
- 有界函数与无穷小的乘积是无穷小

### 1.4 连续性

**重要定义：**
- **函数连续**：$\lim\limits_{\Delta x \to 0} \Delta y = 0$ 或 $\lim\limits_{x \to x_0} f(x) = f(x_0)$
- **左连续、右连续**：$\lim\limits_{x \to x_0^-} f(x) = f(x_0)$（左连续），$\lim\limits_{x \to x_0^+} f(x) = f(x_0)$（右连续）

**重要定理：**
- **零点定理**：若 $f(x)$ 在 $[a,b]$ 上连续，且 $f(a) \cdot f(b) < 0$，则至少存在一点 $\xi \in (a,b)$，使 $f(\xi) = 0$
- **介值定理**：若 $f(x)$ 在 $[a,b]$ 上连续，$f(a) = A$，$f(b) = B$，则对于 $A$ 与 $B$ 之间的任意数 $C$，至少存在一点 $\xi \in (a,b)$，使 $f(\xi) = C$

## 第二章 导数与微分

### 2.1 导数概念

**重要定义：**
- **导数**：$f^\prime(x_0) = \lim\limits_{\Delta x \to 0} \frac{\Delta y}{\Delta x} = \lim\limits_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}$
- **左导数、右导数**：$f^\prime_-(x_0) = \lim\limits_{\Delta x \to 0^-} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}$，$f^\prime_+(x_0) = \lim\limits_{\Delta x \to 0^+} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}$

**几何意义：**
- 导数 $f^\prime(x_0)$ 表示曲线 $y = f(x)$ 在点 $(x_0, f(x_0))$ 处的切线斜率

### 2.2 求导法则

**基本公式：**
- $(C)^\prime = 0$（常数导数）
- $(x^\mu)^\prime = \mu x^{\mu-1}$（幂函数导数）
- $(\sin x)^\prime = \cos x$
- $(\cos x)^\prime = -\sin x$
- $(a^x)^\prime = a^x \ln a$
- $(e^x)^\prime = e^x$
- $(\log_a x)^\prime = \frac{1}{x \ln a}$
- $(\ln x)^\prime = \frac{1}{x}$

**求导法则：**
- $(u \pm v)^\prime = u' \pm v'$
- $(uv)^\prime = u'v + uv'$
- $(\frac{u}{v})^\prime = \frac{u'v - uv'}{v^2}$（$v \neq 0$）
- **链式法则**：$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$

### 2.3 高阶导数

**重要定义：**
- **二阶导数**：$f'^\prime(x) = [f^\prime(x)]'$
- **n阶导数**：$f^{(n)}(x) = [f^{(n-1)}(x)]'$

**常见高阶导数公式：**
- $(e^x)^{(n)} = e^x$
- $(\sin x)^{(n)} = \sin(x + \frac{n\pi}{2})$
- $(\cos x)^{(n)} = \cos(x + \frac{n\pi}{2})$
- $(x^\mu)^{(n)} = \mu(\mu-1)\cdots(\mu-n+1)x^{\mu-n}$（$\mu$ 为实数）

### 2.4 微分

**重要定义：**
- **微分**：$dy = f^\prime(x)dx$

**微分公式：**
- $d(u \pm v) = du \pm dv$
- $d(uv) = vdu + udv$
- $d(\frac{u}{v}) = \frac{vdu - udv}{v^2}$（$v \neq 0$）

## 第三章 微分中值定理与导数的应用

### 3.1 微分中值定理

**重要定理：**
- **罗尔定理**：若 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $f(a) = f(b)$，则存在 $\xi \in (a,b)$，使 $f^\prime(\xi) = 0$

**证明思路：**
由于 $f(x)$ 在闭区间上连续，必取得最大值 $M$ 和最小值 $m$
1. 若 $M = m$，则 $f(x)$ 为常数函数，导数处处为零
2. 若 $M > m$，则最大值和最小值至少有一个在 $(a,b)$ 内取得，该点处导数为零

- **拉格朗日中值定理**：若 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，则存在 $\xi \in (a,b)$，使 $f^\prime(\xi) = \frac{f(b) - f(a)}{b - a}$

**证明思路：**
构造辅助函数 $\varphi(x) = f(x) - f(a) - \frac{f(b) - f(a)}{b - a}(x - a)$
验证 $\varphi(x)$ 满足罗尔定理条件，应用罗尔定理得出结论

- **柯西中值定理**：若 $f(x)$，$g(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $g^\prime(x) \neq 0$，则存在 $\xi \in (a,b)$，使 $\frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f^\prime(\xi)}{g^\prime(\xi)}$

### 3.2 洛必达法则

**重要定理：**
- $\frac{0}{0}$ 型：若 $\lim\limits_{x \to a} f(x) = 0$，$\lim\limits_{x \to a} g(x) = 0$，且 $\lim\limits_{x \to a} \frac{f^\prime(x)}{g^\prime(x)}$ 存在（或为无穷大），则 $\lim\limits_{x \to a} \frac{f(x)}{g(x)} = \lim\limits_{x \to a} \frac{f^\prime(x)}{g^\prime(x)}$
- $\frac{\infty}{\infty}$ 型有类似结论

### 3.3 泰勒公式

**重要定理：**
- **泰勒中值定理**：若 $f(x)$ 在 $x_0$ 处有 $n$ 阶导数，则
$$f(x) = f(x_0) + f^\prime(x_0)(x - x_0) + \frac{f'^\prime(x_0)}{2!}(x - x_0)^2 + \cdots + \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n + R_n(x)$$
其中 $R_n(x) = o((x - x_0)^n)$（佩亚诺余项）

**常见展开式：**
- $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!} + o(x^n)$
- $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots + (-1)^n \frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+2})$
- $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots + (-1)^n \frac{x^{2n}}{(2n)!} + o(x^{2n+1})$
- $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots + (-1)^{n-1} \frac{x^n}{n} + o(x^n)$

### 3.4 函数单调性与极值

**判定定理：**
- **单调性**：设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导
  - 若在 $(a,b)$ 内 $f^\prime(x) > 0$，则 $f(x)$ 在 $[a,b]$ 上单调增加
  - 若在 $(a,b)$ 内 $f^\prime(x) < 0$，则 $f(x)$ 在 $[a,b]$ 上单调减少

- **极值第一充分条件**：设 $f(x)$ 在 $x_0$ 处连续，在 $x_0$ 的某去心邻域内可导
  - 若 $x < x_0$ 时 $f^\prime(x) > 0$，$x > x_0$ 时 $f^\prime(x) < 0$，则 $f(x_0)$ 为极大值
  - 若 $x < x_0$ 时 $f^\prime(x) < 0$，$x > x_0$ 时 $f^\prime(x) > 0$，则 $f(x_0)$ 为极小值

- **极值第二充分条件**：设 $f(x)$ 在 $x_0$ 处具有二阶导数，且 $f^\prime(x_0) = 0$，$f'^\prime(x_0) \neq 0$
  - 若 $f'^\prime(x_0) < 0$，则 $f(x_0)$ 为极大值
  - 若 $f'^\prime(x_0) > 0$，则 $f(x_0)$ 为极小值

## 第四章 不定积分

### 4.1 不定积分概念

**重要定义：**
- **原函数**：若在区间 $I$ 上，$F^\prime(x) = f(x)$，则称 $F(x)$ 为 $f(x)$ 在 $I$ 上的原函数
- **不定积分**：$f(x)$ 的全体原函数称为 $f(x)$ 的不定积分，记作 $\int f(x)dx = F(x) + C$

**基本性质：**
- $\left[\int f(x)dx\right]' = f(x)$
- $\int F^\prime(x)dx = F(x) + C$
- $\int kf(x)dx = k\int f(x)dx$（$k$ 为常数）
- $\int [f(x) \pm g(x)]dx = \int f(x)dx \pm \int g(x)dx$

### 4.2 基本积分公式

**基本积分表：**
- $\int x^\mu dx = \frac{x^{\mu+1}}{\mu+1} + C$（$\mu \neq -1$）
- $\int \frac{1}{x}dx = \ln|x| + C$
- $\int a^x dx = \frac{a^x}{\ln a} + C$
- $\int e^x dx = e^x + C$
- $\int \sin x dx = -\cos x + C$
- $\int \cos x dx = \sin x + C$
- $\int \sec^2 x dx = \tan x + C$
- $\int \csc^2 x dx = -\cot x + C$
- $\int \frac{1}{\sqrt{1-x^2}}dx = \arcsin x + C$
- $\int \frac{1}{1+x^2}dx = \arctan x + C$

### 4.3 换元积分法

**第一类换元法（凑微分）：**
若 $\int f(u)du = F(u) + C$，且 $u = \varphi(x)$ 可导，则
$$\int f[\varphi(x)]\varphi^\prime(x)dx = F[\varphi(x)] + C$$

**第二类换元法：**
设 $x = \psi(t)$ 单调可导，且 $\psi^\prime(t) \neq 0$，若 $\int f[\psi(t)]\psi^\prime(t)dt = F(t) + C$，则
$$\int f(x)dx = F[\psi^{-1}(x)] + C$$

### 4.4 分部积分法

**分部积分公式：**
$$\int u dv = uv - \int v du$$
或
$$\int uv' dx = uv - \int u'v dx$$

**常见应用：**
- $\int P_n(x)e^{ax}dx$，设 $u = P_n(x)$，$dv = e^{ax}dx$
- $\int P_n(x)\sin ax dx$ 或 $\int P_n(x)\cos ax dx$，设 $u = P_n(x)$
- $\int e^{ax}\sin bx dx$ 或 $\int e^{ax}\cos bx dx$，循环使用分部积分

## 第五章 定积分

### 5.1 定积分概念

**重要定义：**
- **定积分**：$\int_a^b f(x)dx = \lim\limits_{\lambda \to 0} \sum\limits_{i=1}^n f(\xi_i)\Delta x_i$，其中 $\lambda = \max\{\Delta x_1, \Delta x_2, \cdots, \Delta x_n\}$

**几何意义：**
- 曲边梯形的面积

**可积充分条件：**
- 若 $f(x)$ 在 $[a,b]$ 上连续，则 $f(x)$ 在 $[a,b]$ 上可积
- 若 $f(x)$ 在 $[a,b]$ 上有界且只有有限个间断点，则 $f(x)$ 在 $[a,b]$ 上可积

### 5.2 定积分性质

**基本性质：**
- $\int_a^b [f(x) \pm g(x)]dx = \int_a^b f(x)dx \pm \int_a^b g(x)dx$
- $\int_a^b kf(x)dx = k\int_a^b f(x)dx$（$k$ 为常数）
- $\int_a^b f(x)dx = \int_a^c f(x)dx + \int_c^b f(x)dx$
- 若在 $[a,b]$ 上 $f(x) \geq 0$，则 $\int_a^b f(x)dx \geq 0$
- 若在 $[a,b]$ 上 $f(x) \leq g(x)$，则 $\int_a^b f(x)dx \leq \int_a^b g(x)dx$

**积分中值定理：**
- 若 $f(x)$ 在 $[a,b]$ 上连续，则存在 $\xi \in [a,b]$，使 $\int_a^b f(x)dx = f(\xi)(b-a)$

### 5.3 微积分基本公式

**重要定理：**
- **微积分基本定理**：若 $f(x)$ 在 $[a,b]$ 上连续，则 $\Phi(x) = \int_a^x f(t)dt$ 在 $[a,b]$ 上可导，且 $\Phi^\prime(x) = f(x)$

**证明思路：**
$$\Phi^\prime(x) = \lim_{\Delta x \to 0} \frac{\Phi(x+\Delta x) - \Phi(x)}{\Delta x} = \lim_{\Delta x \to 0} \frac{\int_x^{x+\Delta x} f(t)dt}{\Delta x}$$
由积分中值定理，存在 $\xi$ 介于 $x$ 与 $x+\Delta x$ 之间，使得
$$\frac{\int_x^{x+\Delta x} f(t)dt}{\Delta x} = f(\xi)$$
当 $\Delta x \to 0$ 时，$\xi \to x$，由 $f(x)$ 的连续性得 $\Phi^\prime(x) = f(x)$

- **牛顿-莱布尼茨公式**：若 $F(x)$ 是 $f(x)$ 在 $[a,b]$ 上的一个原函数，则
$$\int_a^b f(x)dx = F(b) - F(a)$$

### 5.4 定积分换元法与分部积分法

**换元公式：**
设 $f(x)$ 在 $[a,b]$ 上连续，$x = \varphi(t)$ 满足：
1. $\varphi(\alpha) = a$，$\varphi(\beta) = b$
2. $\varphi(t)$ 在 $[\alpha,\beta]$（或 $[\beta,\alpha]$）上具有连续导数，且值域包含于 $[a,b]$
则
$$\int_a^b f(x)dx = \int_\alpha^\beta f[\varphi(t)]\varphi^\prime(t)dt$$

**分部积分公式：**
$$\int_a^b u(x)v^\prime(x)dx = [u(x)v(x)]\bigg|_a^b - \int_a^b u^\prime(x)v(x)dx$$

## 第六章 定积分的应用

### 6.1 平面图形面积

**直角坐标系：**
- 由曲线 $y = f(x)$，$y = g(x)$ 及直线 $x = a$，$x = b$ 所围图形面积：
$$S = \int_a^b |f(x) - g(x)|dx$$

**极坐标系：**
- 由曲线 $r = r(\theta)$ 及射线 $\theta = \alpha$，$\theta = \beta$ 所围图形面积：
$$S = \frac{1}{2}\int_\alpha^\beta r^2(\theta)d\theta$$

### 6.2 体积

**旋转体体积：**
- 由曲线 $y = f(x)$，直线 $x = a$，$x = b$ 及 $x$ 轴所围图形绕 $x$ 轴旋转一周所得旋转体体积：
$$V = \pi\int_a^b [f(x)]^2dx$$

**平行截面面积已知的立体体积：**
- 过点 $x$ 且垂直于 $x$ 轴的截面面积为 $A(x)$，则立体体积：
$$V = \int_a^b A(x)dx$$

### 6.3 平面曲线弧长

**直角坐标系：**
- 曲线 $y = f(x)$（$a \leq x \leq b$）的弧长：
$$s = \int_a^b \sqrt{1 + [f^\prime(x)]^2}dx$$

**参数方程：**
- 曲线 $\begin{cases} x = \varphi(t) \\ y = \psi(t) \end{cases}$（$\alpha \leq t \leq \beta$）的弧长：
$$s = \int_\alpha^\beta \sqrt{[\varphi^\prime(t)]^2 + [\psi^\prime(t)]^2}dt$$

**极坐标系：**
- 曲线 $r = r(\theta)$（$\alpha \leq \theta \leq \beta$）的弧长：
$$s = \int_\alpha^\beta \sqrt{[r(\theta)]^2 + [r^\prime(\theta)]^2}d\theta$$

## 第七章 微分方程

### 7.1 微分方程基本概念

**重要定义：**
- **微分方程**：表示未知函数、未知函数的导数与自变量之间关系的方程
- **阶**：微分方程中出现的未知函数的最高阶导数的阶数
- **解**：代入微分方程能使该方程成为恒等式的函数
- **通解**：含有与微分方程阶数相同个数的独立任意常数的解
- **特解**：确定了通解中任意常数后的解

### 7.2 一阶微分方程

#### 可分离变量方程

**形式：** $\frac{dy}{dx} = f(x)g(y)$

**解法：**
$$\frac{dy}{g(y)} = f(x)dx \quad (g(y) \neq 0)$$
$$\int \frac{dy}{g(y)} = \int f(x)dx + C$$

#### 齐次方程

**形式：** $\frac{dy}{dx} = \varphi\left(\frac{y}{x}\right)$

**解法：**
令 $u = \frac{y}{x}$，则 $y = ux$，$\frac{dy}{dx} = u + x\frac{du}{dx}$
代入得：$u + x\frac{du}{dx} = \varphi(u)$
$$\frac{du}{\varphi(u) - u} = \frac{dx}{x}$$

#### 一阶线性微分方程

**形式：** $\frac{dy}{dx} + P(x)y = Q(x)$

**通解公式：**
$$y = e^{-\int P(x)dx}\left[\int Q(x)e^{\int P(x)dx}dx + C\right]$$

**推导：**
两边同乘积分因子 $e^{\int P(x)dx}$：
$$e^{\int P(x)dx}\frac{dy}{dx} + P(x)e^{\int P(x)dx}y = Q(x)e^{\int P(x)dx}$$
左边为 $\frac{d}{dx}\left(ye^{\int P(x)dx}\right)$，积分即得通解

#### 伯努利方程

**形式：** $\frac{dy}{dx} + P(x)y = Q(x)y^n \quad (n \neq 0,1)$

**解法：**
令 $z = y^{1-n}$，则 $\frac{dz}{dx} = (1-n)y^{-n}\frac{dy}{dx}$
化为线性方程：$\frac{dz}{dx} + (1-n)P(x)z = (1-n)Q(x)$

### 7.3 可降阶的高阶微分方程

#### $y^{(n)} = f(x)$ 型

**解法：** 连续积分 $n$ 次
$$y^{(n-1)} = \int f(x)dx + C_1$$
$$y^{(n-2)} = \int\left[\int f(x)dx + C_1\right]dx + C_2$$
依此类推

#### $y'' = f(x, y')$ 型（不显含 $y$）

**解法：** 令 $y' = p$，则 $y'' = \frac{dp}{dx}$
化为：$\frac{dp}{dx} = f(x, p)$（一阶方程）

#### $y'' = f(y, y')$ 型（不显含 $x$）

**解法：** 令 $y' = p$，则 $y'' = \frac{dp}{dx} = \frac{dp}{dy}\frac{dy}{dx} = p\frac{dp}{dy}$
化为：$p\frac{dp}{dy} = f(y, p)$（一阶方程）

### 7.4 高阶线性微分方程

#### 基本概念

**形式：** $y^{(n)} + a_1(x)y^{(n-1)} + \cdots + a_{n-1}(x)y' + a_n(x)y = f(x)$

**齐次方程：** $f(x) = 0$
**非齐次方程：** $f(x) \neq 0$

#### 解的结构

**齐次方程：**
- 叠加原理：若 $y_1, y_2, \cdots, y_n$ 是解，则它们的线性组合也是解
- 通解结构：$y = C_1y_1 + C_2y_2 + \cdots + C_ny_n$

**非齐次方程：**
- 通解结构：$y = Y + y^*$，其中 $Y$ 是对应齐次方程的通解，$y^*$ 是非齐次方程的特解

#### 常数变易法

用于求解非齐次线性方程的特解

### 7.5 常系数线性微分方程

#### 二阶常系数齐次线性方程

**形式：** $y'' + py' + qy = 0$

**特征方程：** $r^2 + pr + q = 0$

**通解情况：**
1. 两个不等实根 $r_1 \neq r_2$：$y = C_1e^{r_1x} + C_2e^{r_2x}$
2. 两个相等实根 $r_1 = r_2$：$y = (C_1 + C_2x)e^{r_1x}$
3. 一对共轭复根 $r = \alpha \pm i\beta$：$y = e^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$

#### 二阶常系数非齐次线性方程

**形式：** $y'' + py' + qy = f(x)$

**特解求法（待定系数法）：**

**$f(x) = P_m(x)e^{\lambda x}$ 型：**
设特解 $y^* = x^kQ_m(x)e^{\lambda x}$，其中：
- $k = 0$ 当 $\lambda$ 不是特征根
- $k = 1$ 当 $\lambda$ 是单特征根
- $k = 2$ 当 $\lambda$ 是重特征根

**$f(x) = e^{\alpha x}[P_l(x)\cos\beta x + P_n(x)\sin\beta x]$ 型：**
设特解 $y^* = x^ke^{\alpha x}[R_m^{(1)}(x)\cos\beta x + R_m^{(2)}(x)\sin\beta x]$，其中 $m = \max(l, n)$
- $k = 0$ 当 $\alpha \pm i\beta$ 不是特征根
- $k = 1$ 当 $\alpha \pm i\beta$ 是特征根

#### 欧拉方程

**形式：** $x^ny^{(n)} + a_1x^{n-1}y^{(n-1)} + \cdots + a_{n-1}xy' + a_ny = 0$

**解法：** 令 $x = e^t$，则方程化为常系数线性方程

### 7.6 微分方程应用

#### 几何应用
- 已知曲线切线、法线等几何性质建立微分方程

#### 物理应用
- 牛顿第二定律：$m\frac{d^2s}{dt^2} = F$
- RC电路：$RC\frac{du_c}{dt} + u_c = E$
- 弹簧振动：$m\frac{d^2x}{dt^2} + c\frac{dx}{dt} + kx = F(t)$

#### 人口模型
- 马尔萨斯模型：$\frac{dP}{dt} = kP$
- 逻辑斯蒂模型：$\frac{dP}{dt} = kP\left(1 - \frac{P}{M}\right)$

# 同济高数下册

## 第八章 向量代数与空间解析几何

### 8.1 向量及其线性运算

**向量的基本概念**
- 向量：既有大小又有方向的量
- 向量的模：$|\vec{a}| = \sqrt{a_x^2 + a_y^2 + a_z^2}$
- 单位向量：$\vec{a}^0 = \frac{\vec{a}}{|\vec{a}|}$

**向量的坐标表示**
设 $\vec{a} = (a_x, a_y, a_z)$，$\vec{b} = (b_x, b_y, b_z)$

**向量的线性运算**
- 加法：$\vec{a} + \vec{b} = (a_x + b_x, a_y + b_y, a_z + b_z)$
- 数乘：$k\vec{a} = (ka_x, ka_y, ka_z)$
- 点积：$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta = a_xb_x + a_yb_y + a_zb_z$

**点积的性质**
1. $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}$
2. $\vec{a} \cdot (\vec{b} + \vec{c}) = \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c}$
3. $(k\vec{a}) \cdot \vec{b} = k(\vec{a} \cdot \vec{b})$

**叉积**
- 定义：$\vec{a} \times \vec{b} = 
\begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
a_x & a_y & a_z \\
b_x & b_y & b_z
\end{vmatrix}$
- 几何意义：$|\vec{a} \times \vec{b}| = |\vec{a}||\vec{b}|\sin\theta$

### 8.2 平面与直线

**平面方程**
1. 点法式：$A(x-x_0) + B(y-y_0) + C(z-z_0) = 0$
2. 一般式：$Ax + By + Cz + D = 0$
3. 截距式：$\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1$

**直线方程**
1. 点向式：$\frac{x-x_0}{m} = \frac{y-y_0}{n} = \frac{z-z_0}{p}$
2. 参数式：$\begin{cases} x = x_0 + mt \\ y = y_0 + nt \\ z = z_0 + pt \end{cases}$

**位置关系**
- 两平面夹角：$\cos\theta = \frac{|A_1A_2 + B_1B_2 + C_1C_2|}{\sqrt{A_1^2+B_1^2+C_1^2}\sqrt{A_2^2+B_2^2+C_2^2}}$
- 点到平面距离：$d = \frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$

## 第九章 多元函数微分法及其应用

### 9.1 多元函数的基本概念

**定义**
- 多元函数：$z = f(x,y)$，定义域 $D \subset \mathbb{R}^2$
- 极限：$\lim_{(x,y)\to(x_0,y_0)} f(x,y) = A$
- 连续：$\lim_{(x,y)\to(x_0,y_0)} f(x,y) = f(x_0,y_0)$

### 9.2 偏导数

**定义**
- 对 $x$ 的偏导：$f_x(x_0,y_0) = \lim_{\Delta x \to 0} \frac{f(x_0+\Delta x,y_0)-f(x_0,y_0)}{\Delta x}$
- 对 $y$ 的偏导：$f_y(x_0,y_0) = \lim_{\Delta y \to 0} \frac{f(x_0,y_0+\Delta y)-f(x_0,y_0)}{\Delta y}$

**高阶偏导数**
- $\frac{\partial^2 z}{\partial x^2} = f_{xx}$，$\frac{\partial^2 z}{\partial y^2} = f_{yy}$
- $\frac{\partial^2 z}{\partial x\partial y} = f_{xy}$，$\frac{\partial^2 z}{\partial y\partial x} = f_{yx}$

**定理**：如果 $f_{xy}$ 和 $f_{yx}$ 在区域 $D$ 内连续，则 $f_{xy} = f_{yx}$

### 9.3 全微分

**定义**
$dz = f_x(x,y)dx + f_y(x,y)dy$

**可微的充分条件**
如果 $f_x$，$f_y$ 在点 $(x_0,y_0)$ 连续，则 $f$ 在该点可微。

### 9.4 多元复合函数求导法则

**链式法则**
设 $z = f(u,v)$，$u = u(x,y)$，$v = v(x,y)$，则：
$$
\frac{\partial z}{\partial x} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial x}
$$
$$
\frac{\partial z}{\partial y} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial y} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial y}
$$

### 9.5 隐函数求导公式

**一个方程的情形**
设 $F(x,y) = 0$ 确定 $y = f(x)$，则：
$$
\frac{dy}{dx} = -\frac{F_x}{F_y}
$$

设 $F(x,y,z) = 0$ 确定 $z = f(x,y)$，则：
$$
\frac{\partial z}{\partial x} = -\frac{F_x}{F_z},\quad \frac{\partial z}{\partial y} = -\frac{F_y}{F_z}
$$

### 9.6 方向导数与梯度

**方向导数**
$$
\frac{\partial f}{\partial l}\bigg|_{(x_0,y_0)} = f_x(x_0,y_0)\cos\alpha + f_y(x_0,y_0)\cos\beta
$$

**梯度**
$$
\text{grad }f(x_0,y_0) = f_x(x_0,y_0)\vec{i} + f_y(x_0,y_0)\vec{j}
$$

**性质**：方向导数等于梯度在该方向上的投影

### 9.7 多元函数极值

**极值的必要条件**
如果 $f(x,y)$ 在 $(x_0,y_0)$ 处有极值，且偏导数存在，则：
$$
f_x(x_0,y_0) = 0,\quad f_y(x_0,y_0) = 0
$$

**极值的充分条件**
设 $f_x(x_0,y_0) = 0$，$f_y(x_0,y_0) = 0$，令：
$$
A = f_{xx}(x_0,y_0),\quad B = f_{xy}(x_0,y_0),\quad C = f_{yy}(x_0,y_0)
$$
记 $\Delta = AC - B^2$：
1. 如果 $\Delta > 0$ 且 $A > 0$，则 $f(x_0,y_0)$ 是极小值
2. 如果 $\Delta > 0$ 且 $A < 0$，则 $f(x_0,y_0)$ 是极大值
3. 如果 $\Delta < 0$，则 $(x_0,y_0)$ 不是极值点

**拉格朗日乘数法**
求 $z = f(x,y)$ 在条件 $\varphi(x,y) = 0$ 下的极值，构造：
$$
L(x,y,\lambda) = f(x,y) + \lambda\varphi(x,y)
$$
解方程组：
$$
\begin{cases}
L_x = f_x + \lambda\varphi_x = 0 \\
L_y = f_y + \lambda\varphi_y = 0 \\
L_\lambda = \varphi(x,y) = 0
\end{cases}
$$

## 第十章 重积分

### 10.1 二重积分的概念与性质

**定义**
$$
\iint_D f(x,y)d\sigma = \lim_{\lambda \to 0} \sum_{i=1}^n f(\xi_i,\eta_i)\Delta\sigma_i
$$

**性质**
1. 线性性：$\iint_D [\alpha f(x,y) + \beta g(x,y)]d\sigma = \alpha\iint_D f(x,y)d\sigma + \beta\iint_D g(x,y)d\sigma$
2. 区域可加性：如果 $D = D_1 \cup D_2$，则 $\iint_D f(x,y)d\sigma = \iint_{D_1} f(x,y)d\sigma + \iint_{D_2} f(x,y)d\sigma$
3. 比较定理：如果在 $D$ 上 $f(x,y) \leq g(x,y)$，则 $\iint_D f(x,y)d\sigma \leq \iint_D g(x,y)d\sigma$

### 10.2 二重积分的计算法

**直角坐标系**
- X型区域：$\iint_D f(x,y)d\sigma = \int_a^b dx \int_{y_1(x)}^{y_2(x)} f(x,y)dy$
- Y型区域：$\iint_D f(x,y)d\sigma = \int_c^d dy \int_{x_1(y)}^{x_2(y)} f(x,y)dx$

**极坐标系**
$$
\iint_D f(x,y)d\sigma = \iint_D f(r\cos\theta, r\sin\theta)rdrd\theta
$$

**换元公式**
设 $x = x(u,v)$，$y = y(u,v)$，则：
$$
\iint_D f(x,y)dxdy = \iint_{D'} f[x(u,v),y(u,v)]|J|dudv
$$
其中 $J = \frac{\partial(x,y)}{\partial(u,v)}$ 是雅可比行列式。

### 10.3 三重积分

**直角坐标系**
$$
\iiint_\Omega f(x,y,z)dv = \iiint_\Omega f(x,y,z)dxdydz
$$

**柱面坐标系**
$$
\begin{cases}
x = r\cos\theta \\
y = r\sin\theta \\
z = z
\end{cases},\quad dv = rdrd\theta dz
$$

**球面坐标系**
$$
\begin{cases}
x = \rho\sin\varphi\cos\theta \\
y = \rho\sin\varphi\sin\theta \\
z = \rho\cos\varphi
\end{cases},\quad dv = \rho^2\sin\varphi d\rho d\varphi d\theta
$$

## 第十一章 曲线积分与曲面积分

### 11.1 对弧长的曲线积分（第一类曲线积分）

**定义**
$$
\int_L f(x,y)ds = \lim_{\lambda \to 0} \sum_{i=1}^n f(\xi_i,\eta_i)\Delta s_i
$$

**计算方法**
1. 参数方程：$x = \varphi(t)$，$y = \psi(t)$，$\alpha \leq t \leq \beta$
   $$
   \int_L f(x,y)ds = \int_\alpha^\beta f[\varphi(t),\psi(t)]\sqrt{[\varphi'(t)]^2 + [\psi'(t)]^2}dt
   $$

### 11.2 对坐标的曲线积分（第二类曲线积分）

**定义**
$$
\int_L P(x,y)dx + Q(x,y)dy = \lim_{\lambda \to 0} \sum_{i=1}^n [P(\xi_i,\eta_i)\Delta x_i + Q(\xi_i,\eta_i)\Delta y_i]
$$

**计算方法**
参数方程：$x = \varphi(t)$，$y = \psi(t)$，从 $\alpha$ 到 $\beta$
$$
\int_L Pdx + Qdy = \int_\alpha^\beta \{P[\varphi(t),\psi(t)]\varphi'(t) + Q[\varphi(t),\psi(t)]\psi'(t)\}dt
$$

### 11.3 格林公式

**定理**
设闭区域 $D$ 由分段光滑的曲线 $L$ 围成，函数 $P(x,y)$，$Q(x,y)$ 在 $D$ 上具有一阶连续偏导数，则：
$$
\oint_L Pdx + Qdy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dxdy
$$

**曲线积分与路径无关的条件**
在单连通区域 $D$ 内，以下条件等价：
1. $\oint_L Pdx + Qdy = 0$ 对 $D$ 内任意闭曲线 $L$ 成立
2. $\int_L Pdx + Qdy$ 在 $D$ 内与路径无关
3. $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ 在 $D$ 内恒成立
4. 存在 $u(x,y)$ 使得 $du = Pdx + Qdy$

### 11.4 对面积的曲面积分（第一类曲面积分）

**定义**
$$
\iint_\Sigma f(x,y,z)dS = \lim_{\lambda \to 0} \sum_{i=1}^n f(\xi_i,\eta_i,\zeta_i)\Delta S_i
$$

**计算方法**
如果曲面 $\Sigma: z = z(x,y)$，$(x,y) \in D_{xy}$，则：
$$
\iint_\Sigma f(x,y,z)dS = \iint_{D_{xy}} f[x,y,z(x,y)]\sqrt{1 + z_x^2 + z_y^2}dxdy
$$

### 11.5 对坐标的曲面积分（第二类曲面积分）

**定义**
$$
\iint_\Sigma Pdydz + Qdzdx + Rdxdy
$$

**计算方法**
如果曲面 $\Sigma: z = z(x,y)$，$(x,y) \in D_{xy}$，则：
$$
\iint_\Sigma R(x,y,z)dxdy = \pm \iint_{D_{xy}} R[x,y,z(x,y)]dxdy
$$
正负号取决于曲面的侧。

### 11.6 高斯公式

**定理**
设空间闭区域 $\Omega$ 由分片光滑的闭曲面 $\Sigma$ 围成，函数 $P,Q,R$ 在 $\Omega$ 上具有一阶连续偏导数，则：
$$
\oiint_\Sigma Pdydz + Qdzdx + Rdxdy = \iiint_\Omega \left(\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}\right)dv
$$

### 11.7 斯托克斯公式

**定理**
设 $\Gamma$ 为分段光滑的空间有向闭曲线，$\Sigma$ 是以 $\Gamma$ 为边界的分片光滑的有向曲面，函数 $P,Q,R$ 在曲面 $\Sigma$ 上具有一阶连续偏导数，则：
$$
\oint_\Gamma Pdx + Qdy + Rdz = \iint_\Sigma \begin{vmatrix}
dydz & dzdx & dxdy \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
P & Q & R
\end{vmatrix}
$$

## 第十二章 无穷级数

### 12.1 常数项级数的概念和性质

**定义**
级数 $\sum_{n=1}^\infty u_n = u_1 + u_2 + \cdots + u_n + \cdots$
部分和 $S_n = \sum_{k=1}^n u_k$
如果 $\lim_{n\to\infty} S_n = S$ 存在，则级数收敛。

**性质**
1. 如果 $\sum u_n$ 收敛，则 $\lim_{n\to\infty} u_n = 0$
2. 级数收敛的必要条件：$\lim_{n\to\infty} u_n = 0$

### 12.2 常数项级数的审敛法

**正项级数审敛法**
1. 比较审敛法
2. 比值审敛法：$\lim_{n\to\infty} \frac{u_{n+1}}{u_n} = \rho$
   - $\rho < 1$ 收敛
   - $\rho > 1$ 发散
   - $\rho = 1$ 不确定
3. 根值审敛法：$\lim_{n\to\infty} \sqrt[n]{u_n} = \rho$
   - $\rho < 1$ 收敛
   - $\rho > 1$ 发散
   - $\rho = 1$ 不确定

**交错级数审敛法（莱布尼茨定理）**
如果交错级数 $\sum_{n=1}^\infty (-1)^{n-1}u_n$ 满足：
1. $u_n \geq u_{n+1}$
2. $\lim_{n\to\infty} u_n = 0$
则级数收敛。

### 12.3 幂级数

**定义**
$\sum_{n=0}^\infty a_n(x-x_0)^n$

**收敛半径**
$\lim_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right| = \rho$，则收敛半径 $R = \frac{1}{\rho}$

**运算性质**
1. 加减法
2. 乘法（柯西乘积）
3. 逐项求导
4. 逐项积分

### 12.4 函数展开成幂级数

**泰勒级数**
$$
f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n
$$

**常用展开式**
1. $e^x = \sum_{n=0}^\infty \frac{x^n}{n!}$，$x \in (-\infty,+\infty)$
2. $\sin x = \sum_{n=0}^\infty (-1)^n \frac{x^{2n+1}}{(2n+1)!}$，$x \in (-\infty,+\infty)$
3. $\cos x = \sum_{n=0}^\infty (-1)^n \frac{x^{2n}}{(2n)!}$，$x \in (-\infty,+\infty)$
4. $\frac{1}{1-x} = \sum_{n=0}^\infty x^n$，$x \in (-1,1)$
5. $\ln(1+x) = \sum_{n=1}^\infty (-1)^{n-1} \frac{x^n}{n}$，$x \in (-1,1]$

### 12.5 傅里叶级数

**傅里叶系数**
$$
a_0 = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)dx
$$
$$
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)\cos nx dx
$$
$$
b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)\sin nx dx
$$

**傅里叶级数**
$$
f(x) \sim \frac{a_0}{2} + \sum_{n=1}^\infty (a_n\cos nx + b_n\sin nx)
$$

**收敛定理（狄利克雷条件）**
如果 $f(x)$ 满足：
1. 在一个周期内连续或只有有限个第一类间断点
2. 在一个周期内至多只有有限个极值点
则傅里叶级数收敛，且：
- 在连续点收敛于 $f(x)$
- 在间断点收敛于 $\frac{f(x^-)+f(x^+)}{2}$