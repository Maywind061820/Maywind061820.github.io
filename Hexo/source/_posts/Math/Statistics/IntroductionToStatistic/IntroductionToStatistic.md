---
title: IntroductionToStatistic
date: 2025-10-26 09:53:02
tags:
    - 数学
    - 统计学
    - 统计学习导论
categories:
    - [数学,统计学]
---

## 基本概念

$$ Y = f(X) + \varepsilon$$

- $X = (X_1,X_2,...,X_n)$ 
  - 输入变量 input variable
  - 预测变量 predictor variable
  - 自变量 independent variable
  - 属性变量 feature variable
  - 有时直接称为 变量
- $Y$
  - 响应变量 response variable
  - 因变量 dependent variable
- $\varepsilon$     
  - 随机误差项 error term，要求与 $X$ 独立，均值为0
- $f$
  - 表达了 $X$ 提供给 $Y$ 的系统信息 systematic information

统计学习是估计 $f$ 的一系列方法。

## 估计f

### 预测 prediction

目的是为了通过 $X$ 预测 $Y$

由于 $\varepsilon$ 均值为0，可使用下式预测 $Y$

$$\hat{Y} = \hat{f}(X)$$

假设 $\hat{f}$ 和 $X$ 固定，计算均方误差(Mean Squared Error,MSE)为：

$E[(Y-\hat{Y})^2] = E[(f(X) + \varepsilon + \hat{f}(X))^2] = [f(X) - \hat{f}(X)]^2 + Var(\varepsilon)$

- $[f(X) - \hat{f}(X)]^2$ 可约误差 reducible error
  
  - 可以通过提高 $\hat{f}$ 的准确度来降低。
  - 
-  $Var(X)$ 不可约误差 irreducible error
  
  - 可以通过提高 $\hat{f}$ 的准确度来降低
  
### 推断 inference

目的是为了知道 $X$ 与 $Y$ 的关系