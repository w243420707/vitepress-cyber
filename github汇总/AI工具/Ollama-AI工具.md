# Ollama

## 作者或组织名
Ollama

## 项目类别
AI工具

## 核心痛点
在本地运行大语言模型需要自己下载模型、配置环境、处理各种依赖，特别麻烦

## 主要功能
- 在本地电脑上轻松运行大语言模型
- 超简单的命令行工具
- 一条命令就能下载和运行模型
- REST API，可在应用中集成
- 支持超多模型（Llama 3、Phi 3、Mistral、Gemma等）
- 跨平台支持（macOS、Windows、Linux）
- 支持自定义模型，可导入GGUF模型
- 支持Web UI

## 项目亮点
- 超简单的命令行工具，一条命令就能下载和运行模型
- 支持超多模型（Llama 3、Phi 3、Mistral、Gemma等）
- 跨平台支持（macOS、Windows、Linux）
- 安装超简单，下载安装包或用Docker
- 支持自定义模型，可导入GGUF模型
- 提供REST API，可在应用中集成
- 支持Web UI，方便在浏览器中使用
- 保护隐私，数据不离开本地
- 最受欢迎的本地LLM运行工具之一

## 荣誉信息
README/仓库信息中未明确说明

## 项目地址
https://github.com/ollama/ollama [海外网络环境配置 →](/网络环境)

## 安装或部署教程

### 教程适用对象与环境范围
适用于想在本地体验大语言模型的开发者和爱好者，支持macOS、Windows、Linux

### 前置条件检查
1. 系统要求：支持macOS、Windows、Linux
2. 网络连接：可访问互联网下载模型

### 主路径：安装Ollama

#### 步骤1：安装Ollama
- 步骤目标：安装Ollama
- 执行位置：根据系统选择方式
- macOS/Windows：访问https://ollama.com下载安装包安装
- Linux：使用安装脚本 `curl -fsSL https://ollama.com/install.sh | sh`
- Docker：`docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama`
- 成功标志：安装完成，可运行`ollama --version`
- 失败处理：查看官方安装文档

#### 步骤2：运行模型
- 步骤目标：下载并运行模型
- 执行位置：终端/命令行
- 完整命令：`ollama run llama3`
- 成功标志：模型下载完成，进入交互模式
- 失败处理：检查网络连接，确认模型名称正确

### 安装成功验证
1. 检查命令：`ollama --version`
2. 运行模型：`ollama run llama3`
3. 官方网站：https://ollama.com [海外网络环境配置 →](/网络环境)

### 常见错误排查
1. 现象：安装失败
   - 可能原因：系统不兼容或权限问题
   - 解决步骤：确认系统符合要求，使用管理员权限（Windows）或sudo（Linux）
2. 现象：模型下载失败
   - 可能原因：网络问题或模型名称错误
   - 解决步骤：检查网络连接，确认模型名称正确
3. 现象：模型运行慢
   - 可能原因：硬件配置不足
   - 解决步骤：考虑使用更小的模型，或升级硬件

### 信息缺失说明
如需深入了解详细使用方法和模型列表，可访问官方网站：https://ollama.com [海外网络环境配置 →](/网络环境)
