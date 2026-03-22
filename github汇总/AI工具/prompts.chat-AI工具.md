# prompts.chat

## 项目名称
prompts.chat

## 作者或组织名
f

## 项目类别
AI工具

## 核心痛点
用户在使用AI时不知道怎么写提示词，找不到好用的提示词模板，缺乏系统性的提示词学习资源。

## 主要功能
全球最大的开源AI提示词库，收录海量精选提示词示例，支持ChatGPT、Claude、Gemini、Llama、Mistral等多种AI模型。提供互动式提示词学习指南，包含25个章节，覆盖从基础到高级技巧如思维链推理、少样本学习、AI代理等。提供儿童互动游戏，教8到14岁孩子如何与AI交流。支持自托管部署，可搭建私有提示词库。提供CLI工具、Claude Code插件、MCP服务器等多种集成方式。

## 项目亮点
- 全球最大开源AI提示词库
- 超过14万GitHub星标
- 被Forbes报道，被哈佛、哥伦比亚等名校引用
- 40多篇学术论文引用
- Hugging Face上最受欢迎的数据集
- GitHub Staff Pick
- 第一个提示词库（2022年12月创建）
- 提供互动式学习指南和儿童教育游戏

## 荣誉信息
- 143k+ GitHub stars
- GitHub Staff Pick
- Featured in Forbes
- Referenced by Harvard, Columbia
- 40+ academic citations
- Most liked dataset on Hugging Face
- First prompt library (Dec 2022)

## 项目地址
https://github.com/f/prompts.chat [海外网络环境配置 →](/网络环境)

## 安装或部署教程

### 教程适用对象与环境范围
本教程适用于想要使用prompts.chat提示词库或自托管部署的用户。

### 前置条件检查

1. **检查Node.js版本**（自托管需要）
   - 执行命令：`node -v`
   - 通过标准：显示Node.js版本号

2. **检查npm是否安装**（自托管需要）
   - 执行命令：`npm -v`
   - 通过标准：显示npm版本号

### 主路径：直接使用在线版本（推荐）

**步骤1：访问提示词库**
- 目标：浏览和使用提示词
- 位置：浏览器
- 操作：访问 https://prompts.chat
- 成功标志：页面正常加载，可以看到提示词列表
- 失败处理：检查网络连接

**步骤2：浏览和使用提示词**
- 目标：找到需要的提示词
- 位置：网页
- 操作：浏览分类或搜索关键词，点击提示词查看详情
- 成功标志：找到合适的提示词
- 失败处理：尝试不同的搜索关键词

### 备选路径1：使用CLI工具

**步骤1：运行CLI**
- 目标：通过命令行访问提示词
- 位置：终端
- 命令：`npx prompts.chat`
- 成功标志：CLI工具启动，显示提示词列表
- 失败处理：检查Node.js和npm是否正确安装

### 备选路径2：自托管部署

**步骤1：克隆项目**
- 目标：获取项目源码
- 位置：本地开发目录
- 命令：`git clone https://github.com/f/prompts.chat.git`
- 成功标志：项目目录创建成功
- 失败处理：检查网络连接

**步骤2：安装依赖**
- 目标：安装项目依赖
- 位置：项目目录
- 命令：`cd prompts.chat && npm install && npm run setup`
- 成功标志：依赖安装完成，设置向导启动
- 失败处理：检查npm版本

**步骤3：启动服务**
- 目标：启动自托管服务
- 位置：项目目录
- 命令：`npm run dev` 或 `npm start`
- 成功标志：服务启动，可以访问本地地址
- 失败处理：检查端口是否被占用

### 安装成功验证
- 在线版本：页面正常加载，可以浏览和搜索提示词
- CLI版本：命令行显示提示词列表
- 自托管版本：本地服务正常启动，可以访问

### 常见错误排查

1. **CLI命令无法运行**
   - 可能原因：Node.js未安装或版本过低
   - 解决步骤：安装或更新Node.js到最新LTS版本

2. **自托管服务启动失败**
   - 可能原因：端口被占用
   - 解决步骤：修改配置文件中的端口号

3. **依赖安装失败**
   - 可能原因：网络问题或npm源问题
   - 解决步骤：切换npm源为国内镜像

### 官方文档
- [Self-Hosting Guide](https://github.com/f/prompts.chat#-self-hosting) [海外网络环境配置 →](/网络环境)
- [Docker Guide](https://github.com/f/prompts.chat#-docker-guide) [海外网络环境配置 →](/网络环境)
