# LocalAI

## 作者或组织名
Ettore Di Giacinto (mudler)

## 项目类别
AI工具

## 核心痛点
使用AI模型需要付费API或高性能显卡

## 主要功能
- 开源的OpenAI替代品
- 可在消费级硬件上本地运行LLMs
- 支持图像生成、音频生成
- 支持文本转语音、语音转文本
- 支持函数调用和RAG
- 有些模型不需要GPU
- 兼容OpenAI API格式
- 丰富的模型支持（GGUF、GGML、Stable Diffusion等）
- 支持Docker、Kubernetes、二进制文件部署

## 项目亮点
- 开源的OpenAI替代品
- 可在消费级硬件上运行
- 有些模型不需要GPU
- 功能齐全：文本生成、图像生成、音频生成、文本转语音、语音转文本、函数调用、RAG
- 兼容OpenAI API格式，现有代码不用改就能用
- 丰富的模型支持（GGUF、GGML、Stable Diffusion等）
- 部署简单，支持Docker、Kubernetes、二进制文件
- 保护隐私，数据不离开本地

## 荣誉信息
README/仓库信息中未明确说明

## 项目地址
https://github.com/mudler/LocalAI [海外网络环境配置 →](/网络环境)

## 安装或部署教程

### 教程适用对象与环境范围
适用于想在本地运行AI模型的开发者和爱好者，支持Docker环境

### 前置条件检查
1. 系统要求：支持Windows、macOS、Linux
2. Docker环境：推荐使用Docker部署
   - 检查命令：`docker --version`
   - 通过标准：Docker正常可用
3. 网络连接：可访问互联网下载模型

### 主路径：Docker部署
- 步骤目标：使用Docker快速部署LocalAI
- 执行位置：终端/命令行
- 完整命令：`docker run -p 8080:8080 -v ./models:/models localai/localai:latest`
- 成功标志：容器启动成功，可访问http://localhost:8080
- 失败处理：检查Docker环境，查看容器日志

### 安装成功验证
1. 访问地址：http://localhost:8080
2. 官方文档：https://localai.io [海外网络环境配置 →](/网络环境)

### 常见错误排查
1. 现象：容器启动失败
   - 可能原因：端口占用或模型目录权限问题
   - 解决步骤：检查端口8080是否被占用，检查models目录权限
2. 现象：模型加载失败
   - 可能原因：模型文件不完整或格式不支持
   - 解决步骤：确认模型文件完整，检查模型格式是否支持
3. 现象：推理速度慢
   - 可能原因：硬件配置不足
   - 解决步骤：考虑使用更小的模型，或升级硬件

### 信息缺失说明
如需深入了解详细配置和模型使用，可访问官方文档：https://localai.io [海外网络环境配置 →](/网络环境)
