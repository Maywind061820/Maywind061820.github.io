---
title: 生信数据挖掘速通
date: 2025-10-17
tags:
    - 生物信息学
    - 极速版
categories:
    - 生物信息学
---

## 写在前面

~~其实本人是比较反感不求甚解的~~

~~但是总不能速通生物学有关内容、计算机组成原理、数学、编程吧~~

我们希望学习以下内容：

- TCGA数据下载与数据预处理
- 数据清洗
- 差异分析
- COX回归分析
- GO和KEGG富集分析
- PPI协作网络
- 单因素COX分析
- 免疫浸润

R这个东西在我看来根本不是一门编程语言，而是一个工具。看各种教程所谓各种函数满天飞，各种包满天飞，编程没有逻辑性，没有美感，只剩下机械的记忆。

B站的教程大多讲不清原理，或多或少地进行了关键部分的模糊和隐藏。令人汗颜！

可恶，然而……

---

作为速通教程，本篇旨在介绍一些基础概念和流程，**不求甚解**。您可以查看其他文章以获取更详细的信息。

可以戳这里学习 [R语言教程](https://www.runoob.com/r/r-tutorial.html) **本篇默认您掌握了R语言的基础语法** 

呐，要开始了哟！

---
# 生信速通之零：？？？

在此之前，您需要知道测序的基本概念。

## 0.0测序过程

[illumina技术原理](https://www.bilibili.com/video/BV1v34y147nj)

## 0.1几个术语

- reads: 一个 read 是落到某个基因的一个DNA测序片段
- counts：一个基因的 reads 总数即为该基因的 counts
- 基因长度：目标基因非重叠外显子长度之和（有几个碱基对）
- 测序深度：测序得到的基因总量（bp）与基因组（测序目标区域、转录组）的比值。
---
- RPK(每千个碱基的read数)
  - $\text{RPK}_i = 10 ^ 3 \cdot \dfrac{n_i}{l_i}$
  - 平衡掉基因长度的影响
---
- RPKM
  - $\text{RPKM}_i = 10 ^ 6 \cdot \dfrac{\text{RPK}_i}{\sum _j n_j}$
  - 在RPK的基础上平衡掉基因深度的影响
  - RPKM是单端测序的概念，FPKM是双端测序的概念
  - **可以组内比较，无法组间比较**
---
- TPM
  - $\text{TPM}_i = 10 ^ 6 \cdot \dfrac{\text{RPK}_i}{\sum _j \text{RPK}}_j$
  - **既可组内比较，也可组间比较**
---
- CPM
  - $\text{CPM}_i = 10 ^ 6 \cdot \dfrac{n_i}{\sum _j n_j}$
  - **不可组内比较，可以组间比较**
---

# 生信速通之一 TCGA数据下载及预处理

[TCGA官网](https://portal.gdc.cancer.gov/)

[TCGA网站下载数据教程](https://zhuanlan.zhihu.com/p/685928258)

我们这里介绍使用R来下载TCGA数据，


使用TCGAbiolinks包下载和处理TCGA数据，一般包含三个核心步骤：**查询、下载、整理**。

### **1. 数据查询 (GDCquery)**

这是最关键的一步，需要设置好筛选参数。
```r

#安装必要的包
if(!require("BiocManager")){
  install.packages("BiocManager")
}
library(BiocManager)
if(!require("TCGAbiolinks")){
  BiocManager::install("TCGAbiolinks")
}
library(TCGAbiolinks)

# 构建查询请求
query <- GDCquery(
  project = "TCGA-LUAD",       # 项目ID，如TCGA-LUAD（肺腺癌）
  data.category = "Transcriptome Profiling",          # 数据类别，如"Transcriptome Profiling"（转录组分析）
  data.type = "Gene Expression Quantification",       # 数据类型，如基因表达定量数据
  workflow.type = "STAR - Counts",                    # 分析流程类型，如STAR生成的Counts数据
 # legacy = FALSE,              # 通常使用FALSE，代表使用最新的Harmonized数据（基于hg38）
 # experimental.strategy = "RNA-Seq" # 实验策略，如RNA-Seq
)
```
**主要参数说明**：
*   `project`: 指定要下载的癌症项目。可以通过 `getGDCprojects()$project_id` 查看所有可用的项目ID。
*   `data.category`: 数据的大类，例如 `"Transcriptome Profiling"`（转录组分析）、`"Copy Number Variation"`（拷贝数变异）、`"Simple Nucleotide Variation"`（简单核苷酸变异/突变数据）、`"DNA Methylation"`（DNA甲基化）等。
*   `data.type`: 在指定的大类下进一步选择数据类型。例如，在`"Transcriptome Profiling"`下，常用`"Gene Expression Quantification"`（基因表达定量）。
*   `workflow.type`: 指定数据的处理流程，这对于获取特定类型的表达矩阵（如Counts、FPKM、TPM）至关重要。例如，对于RNA-Seq数据，`"STAR - Counts"`提供原始的counts数据，而`"HTSeq - Counts"`是另一种计数方式。
*   `legacy`: 如果设为 `TRUE`，将从GDC Legacy Archive查询旧版本数据（如基于hg19的）；通常建议使用最新的Harmonized数据（基于hg38），因此默认设为 `FALSE` 即可。
*   `experimental.strategy`: 实验策略，例如 `"RNA-Seq"`、`"WGS"`、`"Methylation Array"` 等。

### **2. 数据下载 (GDCdownload)**

执行查询后，就可以下载数据了。
```r
GDCdownload(query, method = "api") 
```
**参数说明**：
*   `query`: 上一步得到的查询对象。
*   `method`: 下载方法，可选 `"api"`（默认，通常更快）或 `"client"`。

### **3. 数据整理 (GDCprepare)**

下载的数据是分散的样本文件，这一步将其合并并整理成R中便于分析的格式（如SummarizedExperiment对象）。
```r
data <- GDCprepare(query)
```
**返回值**：
*   `data` 是一个 `SummarizedExperiment` 对象，包含了表达矩阵、临床信息和基因注释等。

### 💻 封装好的简洁代码

将以上步骤封装成一个函数，可以方便地下载和提取不同癌症的数据。

```r
# 加载必要的R包
library(TCGAbiolinks)
library(SummarizedExperiment)

# 定义一个函数用于获取TCGA表达矩阵和临床信息
getTCGAData <- function(project_id) {
  
  # 1. 构建查询 - 这里以下载基因表达Counts数据为例
  query <- GDCquery(
    project = project_id,
    data.category = "Transcriptome Profiling",
    data.type = "Gene Expression Quantification",
    workflow.type = "STAR - Counts", # 也可根据需要尝试 "HTSeq - Counts"
   # legacy = FALSE
  )
  
  # 2. 下载数据
  GDCdownload(query)  
  # 3. 整理数据，得到SummarizedExperiment对象
  se_object <- GDCprepare(query)
  
  # 4. 从se_object中提取所需信息
  # 表达矩阵 (例如counts矩阵)
  expr_matrix <- assays(se_object)[[1]] # 具体哪个assay取决于数据，可能是"unstranded", "counts"等，需查看se_object
  # 临床信息
  clinical_data <- colData(se_object)
  # 基因信息
  gene_info <- rowData(se_object)
  
  # 5. (可选) 将提取的信息存入一个列表并返回
  result_list <- list(
    expression_matrix = expr_matrix,
    clinical_data = clinical_data,
    gene_annotation = gene_info,
    summarized_experiment = se_object # 也返回原始se对象，以便必要时获取更多信息
  )
  
  return(result_list)
}

# 使用函数下载数据，例如肺腺癌TCGA-LUAD
# 请将您的TCGA项目ID（如"TCGA-LUAD"）替换到下面的代码中
project_id <- "TCGA-LUAD" # 例如，替换成 "TCGA-BRCA" 用于乳腺癌
tcga_data <- getTCGAData(project_id)

# 查看提取的数据
str(tcga_data, max.level = 1)
# 访问表达矩阵
# head(tcga_data$expression_matrix)
# 访问临床信息
# head(tcga_data$clinical_data)
```

### 💎 使用说明与技巧

1.  **R包版本**：确保您的 `TCGAbiolinks` 包版本在 **2.25.1** 以上，以避免一些常见的报错。您可以使用 `packageVersion("TCGAbiolinks")` 查看当前版本。
2.  **网络环境**：数据下载需要稳定且良好的网络环境。如果下载失败，可以尝试重新运行 `GDCdownload`，它会自动跳过已下载的文件。
3.  **数据类型选择**：根据您的分析目的选择合适的 `workflow.type`。若计划进行差异表达分析，推荐使用原始 `Counts` 数据（如 `"STAR - Counts"` 或 `"HTSeq - Counts"`）；若需直接比较样本间的基因表达水平，则可能考虑 `FPKM` 或 `TPM` 数据（对应的 `workflow.type` 可能不同，请查阅文档或通过查询结果预览可用类型）。
4.  **探索数据**：`SummarizedExperiment` 对象是一个丰富的容器。使用 `assays(se_object)`、`colData(se_object)` 和 `rowData(se_object)` 来探索其包含的具体数据。
5.  **其他数据类型**：此代码框架也适用于下载其他类型的数据，如甲基化数据（`data.category = "DNA Methylation"`）或突变数据（`data.category = "Simple Nucleotide Variation"`），只需调整相应的 `data.category`、`data.type` 等参数即可。

### 💡 关于表达矩阵提取的补充说明

网络上也有一些封装好的脚本（例如 `getTCGAexpr.r`），可以一键提取 `mRNA` 和 `lncRNA` 的 `counts`、`FPKM`、`TPM` 等多种格式的表达矩阵。您可以搜索 "getTCGAexpr.r" 来获取这些脚本。但了解并使用上述标准的三步法，能让您更灵活地应对不同的数据下载需求。

希望这份指南和代码能助您顺利获取TCGA数据！如果您在具体操作中遇到参数选择或其他问题，欢迎随时追问。