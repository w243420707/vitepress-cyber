# Prompt-Engineering-Guide

## 项目名称
Prompt-Engineering-Guide

## 作者或组织名
dair-ai

## 项目类别
AI工具

## 核心痛点
开发者想要系统学习提示词工程但找不到权威、全面的资料。

## 主要功能
全面的提示词工程指南，包含所有关于大语言模型提示词工程的最新论文、学习指南、讲座、参考资料和工具。涵盖提示词工程的基础知识（LLM设置、提示词基础、提示词元素、设计技巧）和高级技术（零样本提示、少样本提示、思维链推理、自一致性、知识生成提示、提示链、思维树、检索增强生成、自动推理与工具使用等）。提供针对不同模型（ChatGPT、Gemini、GPT-4、LLaMA、Mistral等）的专门指南。包含风险与误用分析、论文集、工具集、笔记本和数据集。

## 项目亮点
- 支持13种语言
- 帮助超过300万学习者
- 曾在Hacker News排名第一
- 提供1小时视频讲座
- 包含代码笔记本和数据集
- 被Wall Street Journal、Forbes等媒体报道

## 荣誉信息
- 300万+学习者
- Hacker News排名第一
- 被Wall Street Journal、Forbes、Markettechpost等媒体报道

## 项目地址
https://github.com/dair-ai/Prompt-Engineering-Guide [海外网络环境配置 →](/网络环境)

## 安装或部署教程

### 教程适用对象与环境范围
本教程适用于想要本地运行Prompt-Engineering-Guide网站的用户。

### 前置条件检查

1. **检查Node.js版本**
   - 执行命令：`node -v`
   - 通过标准：显示Node.js 18.0.0或更高版本

2. **检查pnpm是否安装**
   - 执行命令：`pnpm -v`
   - 通过标准：显示pnpm版本号

### 主路径：使用在线版本（推荐）

**步骤1：访问在线指南**
- 目标：直接使用在线版本学习
- 位置：浏览器
- 操作：访问 https://www.promptingguide.ai/
- 成功标志：页面正常加载
- 失败处理：检查网络连接

### 备选路径：本地运行

**步骤1：克隆项目**
- 目标：获取项目源码
- 位置：本地开发目录
- 命令：`git clone https://github.com/dair-ai/Prompt-Engineering-Guide.git`
- 成功标志：项目目录创建成功
- 失败处理：检查网络连接

**步骤2：安装依赖**
- 目标：安装项目依赖
- 位置：项目目录
- 命令：`pnpm i next react react-dom nextra nextra-theme-docs`
- 成功标志：依赖安装完成
- 失败处理：检查pnpm是否正确安装

**步骤3：启动开发服务**
- 目标：启动本地网站
- 位置：项目目录
- 命令：`pnpm dev`
- 成功标志：服务启动，显示本地地址
- 失败处理：检查端口是否被占用

**步骤4：访问本地网站**
- 目标：在浏览器中查看
- 位置：浏览器
- 操作：访问 http://localhost:3000/
- 成功标志：网站正常显示
- 失败处理：检查服务是否正常运行

### 安装成功验证
- 在线版本：页面正常加载，可以浏览各章节内容
- 本地版本：本地服务正常启动，可以访问localhost:3000

### 常见错误排查

1. **pnpm命令不存在**
   - 可能原因：pnpm未安装
   - 解决步骤：运行 `npm install -g pnpm` 安装pnpm

2. **依赖安装失败**
   - 可能原因：网络问题
   - 解决步骤：切换npm源或使用代理

3. **端口3000被占用**
   - 可能原因：其他服务占用端口
   - 解决步骤：修改启动端口或关闭占用服务

### 官方文档
- [Prompt Engineering Guide Website](https://www.promptingguide.ai/) [海外网络环境配置 →](/网络环境)
