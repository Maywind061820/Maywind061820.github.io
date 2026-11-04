---
title: Lagrange
date: 2025-11-19 19:00:33
tags:
---

# Lagrange乘数法

## Easy 两类最优化问题

### 无约束优化问题

$$\min f(\bm{x})$$

直接求导，寻找 $f^\prime (\bm{x}) = 0$ 即可

### 有等式约束优化问题

$$\min f(\bm{x})$$

$$ s.t.h_i(\bm{x}) = 0, i = 1,2,\dots,n$$

构造拉格朗日函数

$$ L(\bm{x},\bm{\lambda}) = f(\bm{x}) + \sum_{i=1}^n \lambda_i h_i(\bm{x})$$

对每个变量求偏导使其为0，逐个查找。

## Hard 有不等式约束优化问题

### 原始问题 Primal Problem

$$\min f(\bm{x})$$

$$ s.t.h_i(\bm{x}) = 0, i = 1,2,\dots,n$$

$$ g_i(\bm{x}) \leq 0, i = 1,2,\dots,k$$

构造拉格朗日函数

$$ L(\bm{x},\bm{\lambda},\bm{\mu}) = f(\bm{x}) + \sum_{i=1}^n \lambda_i h_i(\bm{x}) +  \sum_{i=1}^k \mu_i g_i(\bm{x})$$

令 

$$z(\bm{x}) = \max_{\mu \geq 0,\lambda} L(\bm{x},\bm{\lambda},\bm{\mu})$$

这个函数 $z(\bm{x})$ 的关键性质在于它对不同 $\bm{x}$ 的取值：

- **如果 $\bm{x}$ 满足所有约束**（即 $h_i(\bm{x}) = 0$ 和 $g_i(\bm{x}) \leq 0$）：
  - $\sum \lambda_i h_i(\bm{x}) = 0$，因为 $h_i(\bm{x}) = 0$
  - $\sum \mu_i g_i(\bm{x}) \leq 0$，因为 $\mu_i \geq 0$ 和 $g_i(\bm{x}) \leq 0$
  - 为了最大化 $L(\bm{x}, \lambda, \mu)$，选择 $\mu_i = 0$
  - 因此，$L(\bm{x}, \lambda, \mu) = f(\bm{x})$，从而 $z(\bm{x}) = f(\bm{x})$

- **如果 $\bm{x}$ 违反任何约束**：
  - 如果某些 $h_i(\bm{x}) \neq 0$，可以选择 $\lambda_i$ 使 $\lambda_i h_i(\bm{x})$ 趋于无穷大
  - 如果所有 $h_i(\bm{x}) = 0$ 但某些 $g_i(\bm{x}) > 0$，可以选择 $\mu_i$ 很大正数使 $\mu_i g_i(\bm{x})$ 趋于无穷大
  - 因此，$z(\bm{x}) = \infty$

综上，$z(\bm{x})$ 是一个"惩罚函数"：

$$
z(\bm{x}) = 
\begin{cases} 
f(\bm{x}) & \text{如果 } \bm{x} \text{ 满足所有约束} \\
\infty & \text{否则}
\end{cases}
$$


因此原问题等价于

$$
\min_x z(\bm{x})
$$

因为
- 如果 $\bm{x}$ 不满足约束，$z(\bm{x}) = \infty$，不会被选为最小值
- 如果 $\bm{x}$ 满足约束，$z(\bm{x}) = f(\bm{x})$，所以最小化 $z(\bm{x})$ 就是最小化 $f(\bm{x})$ 在约束条件下

因此，通过定义 $z(\bm{x})$，我们将原约束优化问题转化为一个无约束优化问题。

### 对偶问题 Dual Problem

现在我们的 **原始问题** 为

$$\min_x \max_{\mu \geq 0,\lambda} L(\bm{x},\bm{\lambda},\bm{\mu})$$

交换其中的 $\min$ 和 $\max$ 得到其 **对偶问题** 为

$$\max_{\mu \geq 0,\lambda} \min_x L(\bm{x},\bm{\lambda},\bm{\mu})$$

记 

$$y(\bm{\lambda},\bm{\mu}) = \min_x L(\bm{x},\bm{\lambda},\bm{\mu})$$

称其为拉格朗日对偶函数

### 弱对偶性Weak Duality

记原始问题的答案为 $p^*$，而对偶问题的最优解为 $d^*$，有

$$d^* \leq p^*$$

其中 $p^* - d^*$ 称为 **对偶性间隔Duality Gap**

**证明**

对于极值点（事实上为所有满足约束条件的点） $\bm{x}^*$ 有

$$\sum_{i=1}^n \lambda_i h_i(\bm{x}) +  \sum_{i=1}^k \mu_i g_i(\bm{x}) \leq 0$$

则

$$L(\bm{x}^*,\bm{\lambda},\bm{\mu}) = \sum_{i=1}^n \lambda_i h_i(\bm{x}) +  \sum_{i=1}^k \mu_i g_i(\bm{x}) \leq f(\bm{x}^*)$$

所以有

$$y(\bm{\lambda},\bm{\mu}) = \min_x L(\bm{x}^*,\bm{\lambda},\bm{\mu}) = \sum_{i=1}^n \lambda_i h_i(\bm{x}) +  \sum_{i=1}^k \mu_i g_i(\bm{x}) \leq f(\bm{x}^*) \leq p^*$$

得证。

### 强对偶性 Strong Duality

强对偶性为

$$d^* = p^*$$

在强对偶性成立的情况下，求解对偶问题同时就解决了原始问题。此时有

$$
\begin{aligned}
f(\bm{x}^*) &= y(\bm{\lambda^*},\bm{\mu^*}) = \min_x \left[f(\bm{x}) + \sum_{i=1}^n \lambda_i^* h_i(\bm{x}) + \sum_{i=1}^k \mu_i^* g_i(\bm{x})\right] \\
&\leq f(\bm{x}) + \sum_{i=1}^n \lambda_i^* h_i(\bm{x}^*) + \sum_{i=1}^k \mu_i^* g_i(\bm{x}^*) \leq f(\bm{x}^*)
\end{aligned}
$$

两头相等，因此不等号可变为等号。

有第一个不等号可知 $\bm{x}^*$ 为 $L(\bm{x},\lambda^*,\mu^*)$ 的一个极值点，故 $\nabla L(\bm{x}^*,\lambda^*,\mu^*)=0$

此外有 $\mu_i^* g_i(\bm{x}^*) = 0$，综合原始问题的条件可得 **KKT(Karush-Kuhn-Tucker)条件**

$$
\begin{aligned}
&h_i(\bm{x}^*) = 0, i = 1,2,\dots,n \\
&g_i(\bm{x}^*) \leq 0, i = 1,2,\dots,k \quad &\text{Primal Feasibility (原问题可行性)}\\
&\mu_i^* \geq 0,i = 1,2,\dots,k \quad &\text{Dual Feasibility (对偶可行性)}\\
&\mu_i^* g_i(\bm{x}^*) = 0 \quad &\text{Complementary Slackness (互补松弛条件)}\\
&\nabla_x L(\bm{x}^*,\bm{\lambda}^*,\bm{\mu}^*) = 0  \quad &\text{Stationarity (平稳性)}
\end{aligned}
$$

KKT条件是强对偶性的充要条件，当原始问题为凸优化问题时，KKT为充要条件