---
title: 线性回归
date: 2025-11-19 13:37:00
tags:
  - 机器学习
catogories:
  - [机器学习]
---

# 标准线性模型

## 一元线性回归

### 

$$y = \hat\beta_0 + \hat\beta_1 x + u$$

$$\hat y = \hat\beta_0 + \hat\beta_1 x$$

使用残差平方和 RSS 来测量模型与真实数据的接近程度

$$RSS = \sum_{i=1}^n e_i^2$$

### 评价

## 多元线性回归

$$y_ = \beta_0 + \beta_1 x_1 + \dots + \beta_n x_m + u$$

回归模型为

$$\hat y = \hat\beta_0 + \hat\beta_1 x_1 + \dots + \hat\beta_m x_m$$

取 $n$ 组观察值，即为

$$
\begin{bmatrix}
y_1 \\ y_2 \\ \vdots \\ y_n
\end{bmatrix} 

=

\begin{bmatrix}
1 & x_{11} & x_{12} & \cdots & x_{1m} \\
1 & x_{21} & x_{22} & \cdots & x_{2m} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & x_{n1} & x_{n2} & \cdots & x_{nm} \\
\end{bmatrix} 
\begin{bmatrix}
\beta_0 \\ \beta_2 \\ \vdots \\ \beta_m
\end{bmatrix} 
+
\begin{bmatrix}
u_1 \\ u_2 \\ \vdots \\ u_n
\end{bmatrix} 
$$

即

$$\bm{y} =  \bm{X\beta} + \bm{u}$$

其中 $\bm{y}$ 为 $n$ 维响应观察值变量， $\bm{X}$ 为 $n\times m$ 阶解释变量的观察矩阵，$\bm{\beta}$ 为$m$ 阶回归参数向量， $\bm{u}$ 为随机扰动项向量。

回归模型

$$
\hat y = \bm{X\hat\beta} + \bm{e}
$$

要求满足以下假定

- 零均值假定
  - $\bar{u} = 0$ 或 $E(u_i|x_{i1},x_{i2},\cdots,x_{im}) = 0,\forall i$
- 同方差假定
  - $\text{var}(u_i) = \sigma^2$
  - 通常认为 $u_i \sim N(0,\sigma^2)$
- 相互独立性
  - $\text{cov}(u_i,u_j),\quad\forall i,j,i\neq j$
- 无多重共线性假定
  - $u_i$ 间线性无关

$$
RSS = \sum_{i=1}^n e_i^2 = \sum_{i=1}^n (y_i - \bm{X}_i^{\text{T}}\bm{\hat \beta})^2
$$ 

目标为

$$
\argmin_{\bm{\hat \beta}} RSS
$$

求导

$$
\nabla_{\bm{\beta}} RSS = 0
$$ 

可得

$$
\begin{cases}
  n\hat \beta_0 + \sum \hat \beta_1 x_{i1} + \sum \hat \beta_2 x_{i2} + \cdots + \sum \hat \beta_m x_{m} = \sum y_i \\
  \sum \hat \beta_0 x_{i1} + \sum \hat \beta_1 x_{i1}^2 + \sum \hat \beta_1 x_{i1}x_{i2} + \cdots+ \sum \hat \beta_m x_{i1}x_{im} = \sum x_{i1}y_{i1} \\
  \vdots \\
  \sum \hat \beta_0 x_{im} + \sum \hat \beta_1 x_{i1}x_{im} + \sum \hat \beta_1 x_{im}x_{i2} + \cdots+ \sum \hat \beta_m x_{im}^2 = \sum x_{im}y_{i1}
\end{cases}
$$

这个方程组称为正规方程组

令系数矩阵为 $\bm{A}$,常数项向量为 $\bm{B}$

$$
\bm{A} = 
\begin{bmatrix}
  n & \sum x_{i1} & \sum x_{i2} & \cdots & \sum x_{im} \\
  \sum x_{i1} & \sum x_{i1}^2 & \sum x_{i1}x_{i2} & \cdots & \sum x_{i1}x_{im} \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  \sum x_{im} & \sum x_{im}x_{i1} & \sum x_{im}x_{i2} & \cdots & \sum x_{im}^2 \\
\end{bmatrix} 

\bm{B} =
\begin{bmatrix}
  \sum y_i \\ \sum x_{i1}y_i \\ \cdots \\ \sum x_{im}y_i   
\end{bmatrix} 
$$

则有

$$\bm{A} = \bm{X}^{\text{T}}X,\bm{B} = \bm{X}^{\text{T}}\bm{y}$$

$\bm{A}$ 可逆时解得 

$$
\bm{\hat \beta} = \bm{A}^{-1}\bm{B} = (\bm{X}^{\text{T}}\bm{X})^{-1}\bm{X}^{\text{T}}\bm{y} \\
\bm{\hat y} = \bm{X} \bm{\hat \beta} = \bm{X}(\bm{X}^{\text{T}}\bm{X})^{-1}\bm{X}^{\text{T}}\bm{y}
$$

记

$$\bm{H} = \bm{X}(\bm{X}^{\text{T}}\bm{X})^{-1}\bm{X}^{\text{T}}$$

称其为帽子矩阵，是一个 $n$ 阶对称矩阵，对角线元素 $h_i$ 给出第 $i$ 个观测值距离其余 $n-1$ 个观测值有多远，称其为杠杆值。

# 线性模型拓展

标准线性回归模型为

使用最小二乘法可以拟合此模型。

使用其他方法进行拟合可以得到更好的 **预测准确性 prediction accuracy** 和 **模型解释性 model interpretability**

- **预测准确性** 
  - 当观测个数 $n$ 不能远远大于 $p$ 时，使用最小二乘法容易得到过拟合，方差极大。因此可以考虑以牺牲偏差为代价减小方差，从而提高模型在测试集上的预测准确性。
- **模型解释性**
  - 多元回归模型中，某些预测变量与响应变量并不是线性关系或者无关。此时移除这些变量可以使得模型更有解释能力。通过 **特征选择** 或 **变量选择** 可以实现。
  
三种拟合方法

- **子集选择**
  - 选择预测变量的子集，对子集进行最小二乘法，最后选择表现最优的。
- **压缩估计**
  - 基于全部 $p$ 个预测变量进行模型拟合，通过正则化缩减估计系数，可以压缩至很小（岭回归）或降为零（LASSO，用于变量选择）
- **降维法**
  - 将 $p$ 维预测变量进行线性组合，选取 $M$ 个 （ $M < p$）作为新的预测变量，实现降维，然后执行最小二乘法。

## 子集选择

### 最优子集选择

### 逐步模型选择

## 压缩估计

假设预测变量之间不满足线性无关，就有 $|\bm{X}^{\text{T}}\bm{X}| = 0$，于是 $\bm{\beta}$ 无解。倘若预测变量之间近似共线性，方差也会很大导致模型精度降低。

通过压缩回归系数来降低预测结果对预测变量的敏感性，从而降低方差。

### 岭回归

岭回归的目标为

$$\argmin_{\bm{\hat \beta}} \left\{RSS + \lambda \sum_{i=1}^n \hat\beta_i^2\right\}$$


其中 $\lambda \geq 0$，引入惩罚项使回归系数被压缩，最终得到

$$\bm{\hat \beta} = \bm{A}^{-1}\bm{B} = (\bm{X}^{\text{T}}\bm{X}+\lambda\bm{I})^{-1}\bm{X}^{\text{T}}\bm{y} \\$$

### LASSO

## 降维法

### 主成分

### 偏最小二乘