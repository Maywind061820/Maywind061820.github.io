---
title: MR
date: 2025-11-30 13:58:30
tags:
---
## 逆方差加权法（IVW）

### 个体因果效应模型

对于每个SNP $i$，从GWAS汇总数据中得到两个估计值：
- $\hat{\beta}_{X_i}$：SNP $i$ 对暴露 $X$ 的效应
- $\hat{\beta}_{Y_i}$：SNP $i$ 对结局 $Y$ 的效应

如果SNP是有效的工具变量，暴露对结局的真实因果效应 $\beta$ 可以通过以下关系估计：
$$\hat{\beta}_{Y_i} = \hat\beta_i \cdot \hat{\beta}_{X_i} + \epsilon_i$$
其中 $\epsilon_i$ 是误差项。

### 计算过程

1. **Wald比率**：
   $$\hat{\beta}_i = \dfrac{\hat{\beta}_{Y_i}}{\hat{\beta}_{X_i}}$$

2. **权重计算**：
   Wald比率的近似方差：
   $$\text{Var}(\hat{\beta}_i) \approx \dfrac{\text{Var}(\hat{\beta}_{Y_i})}{(\hat{\beta}_{X_i})^2}$$
   
   权重为方差的倒数：
   $$w_i = \dfrac{1}{\text{Var}(\hat{\beta}_i)} = \dfrac{(\hat{\beta}_{X_i})^2}{\text{Var}(\hat{\beta}_{Y_i})}$$

   实践中常用简化权重：
   $$w_i = \dfrac{1}{\text{se}(\hat{\beta}_{Y_i})^2}$$

IVW通过加权平均值合并所有SNP的因果效应：

$$\hat{\beta}_{IVW} = \dfrac{\sum\limits_{i=1}^n \left( \dfrac{\hat{\beta}_{Y_i} \hat{\beta}_{X_i}}{\text{se}(\hat{\beta}_{Y_i})^2} \right)}{\sum\limits_{i=1}^n \left( \dfrac{\hat{\beta}_{X_i}^2}{\text{se}(\hat{\beta}_{Y_i})^2} \right)}$$


标准误为：
$$\text{se}(\hat{\beta}_{IVW}) = \sqrt{ \dfrac{1}{\sum\limits_{i=1}^n w_i} }$$

### 二、 应用条件

1. **所有工具变量有效**：每个SNP必须满足三大核心假设，特别是无水平多效性

2. **工具变量间相互独立**：SNP间无连锁不平衡

3. **无测量误差**：SNP对暴露的效应 $\hat{\beta}_{X_i}$ 测量误差可忽略

### 结果参数

- $\hat{\beta}_{IVW}$：核心因果效应估计值
- SE：估计值的标准误，衡量精确度
- P值：检验因果效应是否显著不为零
- **Cochran's Q统计量**：
  $$Q = \sum\limits_{i=1}^n w_i (\hat{\beta}_i - \hat{\beta}_{IVW})^2$$

  - Q检验P值 > 0.05：无异质性，IVW结果可靠
  - Q检验P值 < 0.05：存在异质性，提示可能有无效SNP

## MR-Egger 回归


### 基础模型设定

当工具变量存在定向多效性时，传统的IVW方法会产生偏倚。MR-Egger通过引入截距项来捕捉这种平均多效性效应。

对于每个SNP $i$，建立如下回归模型：

$$\hat{\beta}_{Y_i} = \beta_{0_i} + \beta_{Egger_i} \cdot \hat{\beta}_{X_i} + \epsilon_i$$

其中：
- $\hat{\beta}_{X_i}$：SNP $i$ 对暴露的效应
- $\hat{\beta}_{Y_i}$：SNP $i$ 对结局的效应  
- $\beta_{0_i}$：截距项，代表平均多效性效应
- $\beta_{Egger_i}$：斜率，代表校正多效性后的因果效应
- $\epsilon_i$：残差项

### 加权回归

与IVW类似，MR-Egger使用加权回归，权重为：

$$w_i = \dfrac{1}{\text{se}(\hat{\beta}_{Y_i})^2}$$

加权最小二乘估计的目标是最小化加权残差平方和：

$$\min_{\beta_0, \beta_{Egger}} \sum_{i=1}^n w_i \left( \hat{\beta}_{Y_i} - \beta_0 - \beta_{Egger} \hat{\beta}_{X_i} \right)^2$$

### 4. 标准误计算

**斜率标准误**：
$$\text{se}(\hat{\beta}_{Egger}) = \sqrt{ \dfrac{\frac{1}{n-2} \sum\limits_{i=1}^n w_i \hat{\epsilon}_i^2 }{\sum\limits_{i=1}^n w_i (\hat{\beta}_{X_i} - \bar{x}_w)^2} }$$

其中 $\hat{\epsilon}_i = \hat{\beta}_{Y_i} - \hat{\beta}_0 - \hat{\beta}_{Egger} \hat{\beta}_{X_i}$

**截距标准误**：
$$\text{se}(\hat{\beta}_0) = \text{se}(\hat{\beta}_{Egger}) \cdot \sqrt{ \dfrac{1}{\sum\limits_{i=1}^n w_i} + \bar{x}_w^2 \cdot \dfrac{1}{\sum\limits_{i=1}^n w_i (\hat{\beta}_{X_i} - \bar{x}_w)^2} }$$

### 假设条件：InSIDE条件

InSIDE条件要求工具变量的强度与多效性效应之间**零相关**。

$$\text{Cov}(\hat{\beta}_{X_i}, \alpha_i) = 0$$

其中 $\alpha_i$ 是SNP $i$ 的多效性直接效应。

- **满足InSIDE**：多效性效应在各个SNP中随机分布，与SNP-暴露关联强度无关
- **违反InSIDE**：强工具变量倾向于有更大的多效性效应（或反之）

当InSIDE条件满足时，MR-Egger的截距 $\beta_0$ 无偏地估计了平均多效性效应，斜率 $\beta_{Egger}$ 无偏地估计了真实的因果效应。

当InSIDE条件不满足时，MR-Egger估计量仍然有偏，其偏倚方向取决于$\text{Cov}(\hat{\beta}_{X_i}, \alpha_i)$的符号。

### 参数结果

- $\beta_{Egger}$
  - 校正了平均多效性偏倚后的因果效应估计
  - 如果$\beta_{Egger}$显著且方向合理，代表存在真实的因果效应
  - 与IVW结果比较：方向一致增加结果可信度，方向不一致提示存在严重多效性偏倚

- $\beta_0$
  - 平均多效性效应的估计值
  - $\beta_0 = 0$：无平均多效性，IVW结果可靠
  - $\beta_0 \neq 0$：存在定向多效性偏倚

- 截距项的P值
  - $P > 0.05$：无证据表明存在定向多效性，IVW可能更优
  - $P < 0.05$：存在显著的多效性偏倚，MR-Egger结果更可靠

