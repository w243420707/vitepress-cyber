# prompt-optimizer

## 项目名称
prompt-optimizer

## 作者或组织名
linshenkx

## 项目类别
AI工具

## 核心痛点
用户在使用AI时不知道怎么写提示词，写出来的提示词效果不好，AI输出质量不理想。

## 主要功能
强大的AI提示词优化工具，支持一键优化提示词、多轮迭代改进、原始提示词与优化后提示词的实时对比。支持OpenAI、Gemini、DeepSeek、智谱AI、SiliconFlow等主流AI模型。支持图像生成（文生图和图生图）。高级测试模式支持上下文变量管理、多轮会话测试、工具调用（Function Calling）。支持Web应用、桌面应用、Chrome插件和Docker部署四种使用方式。支持MCP协议，可与Claude Desktop等MCP兼容应用集成。

## 项目亮点
- 支持四种使用方式：Web应用、桌面应用、Chrome插件、Docker部署
- 一键优化提示词，支持多轮迭代改进
- 支持多种主流AI模型
- 纯客户端处理，数据不经过中间服务器，保护隐私
- 支持图像生成功能
- 支持MCP协议集成

## 荣誉信息
README/仓库信息中未明确说明

## 项目地址
https://github.com/linshenkx/prompt-optimizer [海外网络环境配置 →](/网络环境)

## 安装或部署教程

### 教程适用对象与环境范围
本教程适用于想要使用prompt-optimizer的用户，提供多种部署方式供选择。

### 前置条件检查

1. **检查Node.js版本**（本地开发需要）
   - 执行命令：`node -v`
   - 通过标准：显示Node.js 18.0.0或更高版本

2. **检查pnpm是否安装**（本地开发需要）
   - 执行命令：`pnpm -v`
   - 通过标准：显示pnpm版本号

3. **检查Docker是否安装**（Docker部署需要）
   - 执行命令：`docker -v`
   - 通过标准：显示Docker版本号

### 主路径：使用在线版本（推荐）

**步骤1：访问在线版本**
- 目标：直接使用在线服务
- 位置：浏览器
- 操作：访问 https://prompt.always200.com
- 成功标志：页面正常加载，可以看到提示词优化界面
- 失败处理：检查网络连接

**步骤2：配置API密钥**
- 目标：配置AI模型API密钥
- 位置：网页右上角设置按钮
- 操作：点击"设置"→"模型管理"→选择模型→输入API密钥→保存
- 成功标志：API密钥保存成功
- 失败处理：检查API密钥是否正确

### 备选路径1：Docker部署

**步骤1：拉取并运行容器**
- 目标：使用Docker部署
- 位置：终端
- 命令：`docker run -d -p 8081:80 --restart unless-stopped --name prompt-optimizer linshen/prompt-optimizer`
- 成功标志：容器成功启动
- 失败处理：检查Docker是否正确安装

**步骤2：访问服务**
- 目标：访问部署的服务
- 位置：浏览器
- 操作：访问 http://localhost:8081
- 成功标志：页面正常加载
- 失败处理：检查端口是否被占用

### 备选路径2：下载桌面应用

**步骤1：下载应用**
- 目标：获取桌面应用安装包
- 位置：浏览器
- 操作：访问GitHub Releases页面下载对应平台的安装包
- 成功标志：安装包下载完成
- 失败处理：检查网络连接

**步骤2：安装并运行**
- 目标：安装并启动应用
- 位置：本地
- 操作：运行安装包，按提示完成安装，启动应用
- 成功标志：应用成功启动
- 失败处理：检查系统兼容性

### 安装成功验证
- 页面或应用正常打开
- 可以输入提示词并点击优化按钮
- 优化结果正常显示

### 常见错误排查

1. **API连接失败**
   - 可能原因：跨域问题（CORS）
   - 解决步骤：使用桌面版应用，或配置API中转服务

2. **macOS提示"已损坏"**
   - 可能原因：应用未经过Apple签名
   - 解决步骤：执行命令 `xattr -rd com.apple.quarantine /Applications/PromptOptimizer.app`

3. **Docker容器无法启动**
   - 可能原因：端口被占用
   - 解决步骤：修改端口映射，如 `-p 8082:80`

### 官方文档
- [Vercel部署指南](https://github.com/linshenkx/prompt-optimizer/blob/main/docs/vercel-deployment.md) [海外网络环境配置 →](/网络环境)
- [开发文档](https://github.com/linshenkx/prompt-optimizer/blob/main/docs/development.md) [海外网络环境配置 →](/网络环境)
