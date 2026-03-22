# 项目名称
Perplexica

# 作者或组织名
ItzCrazyKns

# 项目类别
AI工具

# 核心痛点
- 传统搜索引擎只返回链接，不理解用户意图
- Perplexity AI等工具需要付费
- 缺少开源的AI搜索引擎方案
- 难以在本地部署AI驱动的搜索

# 主要功能
- 开源的AI驱动搜索引擎，受Perplexity AI启发
- 理解用户问题意图，提供智能回答
- 支持Docker部署和本地安装
- 支持连接Ollama实现本地模型运行
- 可配置SearXNG作为搜索源
- 使用TypeScript开发

# 项目亮点
- 开源免费，零付费使用
- GitHub星标已超两万五千
- 支持本地模型运行，保护隐私
- 理解用户意图，提供智能回答
- 部署简单，支持Docker

# 荣誉信息
README/仓库信息中未明确说明，但GitHub星标已超两万五千

# 项目地址
https://github.com/ItzCrazyKns/Perplexica [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
本教程适用于想要使用Perplexica搭建AI搜索引擎的用户，支持Windows、Linux和MacOS系统。

## 前置条件检查

### 1. Node.js版本检查
- 步骤目标：确认Node.js版本满足要求
- 执行位置：本机终端
- 完整命令：`node --version`
- 成功标志：显示Node.js 18.0或更高版本
- 失败处理：请安装或升级Node.js至18.0+版本

### 2. Docker检查（可选）
- 步骤目标：确认Docker已安装（使用Docker部署时）
- 执行位置：本机终端
- 完整命令：`docker --version`
- 成功标志：显示Docker版本信息
- 失败处理：请安装Docker

### 3. 网络访问检查
- 步骤目标：确认可以访问GitHub
- 执行位置：本机浏览器
- 检查方法：访问https://github.com/ItzCrazyKns/Perplexica
- 成功标志：可以正常访问项目页面
- 失败处理：请配置海外网络环境 [海外网络环境配置 →](/网络环境)

## 主路径：Docker部署（推荐）

### 步骤1：克隆项目仓库
- 步骤目标：从GitHub克隆Perplexica项目
- 执行位置：本机终端
- 完整命令：`git clone https://github.com/ItzCrazyKns/Perplexica.git`
- 成功标志：项目克隆完成
- 失败处理：检查网络连接

### 步骤2：进入项目目录
- 步骤目标：进入Perplexica项目目录
- 执行位置：本机终端
- 完整命令：`cd Perplexica`
- 成功标志：当前目录变为Perplexica
- 失败处理：确保克隆成功

### 步骤3：使用Docker Compose启动
- 步骤目标：启动Perplexica服务
- 执行位置：项目目录终端
- 完整命令：`docker-compose up -d`
- 成功标志：Docker容器启动成功
- 失败处理：检查Docker是否正常运行

### 步骤4：访问界面
- 步骤目标：打开浏览器访问Perplexica
- 执行位置：本机浏览器
- 访问地址：http://localhost:3000
- 成功标志：看到Perplexica界面
- 失败处理：检查容器是否正常运行

## 备选路径：本地安装

### 步骤1：克隆项目并安装依赖
- 步骤目标：安装项目依赖
- 执行位置：项目目录终端
- 完整命令：`npm install`
- 成功标志：依赖安装完成
- 失败处理：检查网络连接

### 步骤2：构建项目
- 步骤目标：构建Perplexica
- 执行位置：项目目录终端
- 完整命令：`npm run build`
- 成功标志：构建完成
- 失败处理：查看错误信息

### 步骤3：启动项目
- 步骤目标：启动Perplexica
- 执行位置：项目目录终端
- 完整命令：`npm run start`
- 成功标志：项目启动成功
- 失败处理：查看错误信息

## 安装成功验证

### 1. 访问界面
- 访问方式：浏览器
- 访问地址：http://localhost:3000
- 预期返回：看到Perplexica界面

### 2. 配置SearXNG
- 测试方法：在设置中填写SearXNG地址
- 预期返回：可以正常配置

### 3. 测试搜索
- 测试方法：尝试搜索一个问题
- 预期返回：可以正常搜索并获得回答

## 常见错误排查

### 现象1：Node.js版本过低
- 可能原因：Node.js版本不满足最低要求
- 解决步骤：
  1. 检查当前Node.js版本：node --version
  2. 下载并安装Node.js 18.0或更高版本
  3. 重新打开终端并验证版本

### 现象2：Docker启动失败
- 可能原因：Docker未运行或配置问题
- 解决步骤：
  1. 确认Docker已启动
  2. 检查端口3000是否被占用
  3. 查看Docker日志了解错误原因

### 现象3：搜索无法使用
- 可能原因：未配置SearXNG或配置错误
- 解决步骤：
  1. 确认已正确配置SearXNG地址
  2. 检查SearXNG服务是否正常运行
  3. 查看浏览器控制台错误信息

## 信息缺失说明
基于公开可验证信息整理，完整教程请参考项目GitHub仓库的README文档。

更多详细文档请参考：
- GitHub仓库：https://github.com/ItzCrazyKns/Perplexica [海外网络环境配置 →](/网络环境)
