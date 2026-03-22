# claudecodeui

## 项目名称
claudecodeui

## 作者或组织名
siteboon

## 项目类别
开发工具

## 核心痛点
在终端中使用AI编码工具不够直观，无法方便地浏览文件和管理Git。

## 主要功能
为Claude Code、Codex、Gemini CLI、OpenCode等AI编码工具提供Web界面。支持响应式设计，可在桌面、平板和手机使用。内置交互式聊天界面、集成Shell终端、文件浏览器（支持语法高亮和实时编辑）、Git浏览器（查看、暂存、提交、切换分支）。支持会话管理（恢复对话、管理多个会话、跟踪历史）。提供插件系统扩展功能。支持TaskMaster AI集成进行项目管理。所有工具默认禁用，需手动启用保护安全。

## 项目亮点
- 支持多种AI编码工具（Claude Code、Codex、Gemini CLI、OpenCode）
- 响应式设计，支持移动端
- 内置文件浏览器和Git管理
- 插件系统可扩展
- 所有工具默认禁用，保护安全
- 支持CloudCLI Cloud云端部署

## 荣誉信息
README/仓库信息中未明确说明

## 项目地址
https://github.com/siteboon/claudecodeui [海外网络环境配置 →](/网络环境)

## 安装或部署教程

### 教程适用对象与环境范围
本教程适用于想要使用CloudCLI UI管理AI编码工具的用户。

### 前置条件检查

1. **检查Node.js版本**
   - 执行命令：`node -v`
   - 通过标准：显示Node.js v22或更高版本

2. **检查Claude Code是否安装**（如需使用Claude Code）
   - 执行命令：`claude --version`
   - 通过标准：显示Claude Code版本号

### 主路径：使用npx快速启动（推荐）

**步骤1：运行CloudCLI UI**
- 目标：使用npx启动服务
- 位置：终端
- 命令：`npx @siteboon/claude-code-ui`
- 成功标志：服务启动，显示访问地址
- 失败处理：检查Node.js版本

**步骤2：访问Web界面**
- 目标：打开Web界面
- 位置：浏览器
- 操作：访问 http://localhost:3001
- 成功标志：Web界面正常显示
- 失败处理：检查端口是否被占用

### 备选路径：全局安装

**步骤1：全局安装**
- 目标：安装到全局
- 位置：终端
- 命令：`npm install -g @siteboon/claude-code-ui`
- 成功标志：安装成功提示
- 失败处理：检查npm权限

**步骤2：启动服务**
- 目标：运行CloudCLI
- 位置：终端
- 命令：`cloudcli`
- 成功标志：服务启动成功
- 失败处理：检查安装是否成功

### 安装成功验证
- Web界面正常打开
- 可以看到已有的会话列表
- 文件浏览器可以正常工作

### 常见错误排查

1. **端口3001被占用**
   - 可能原因：其他服务占用端口
   - 解决步骤：关闭占用服务或修改配置端口

2. **会话列表为空**
   - 可能原因：没有现有的Claude Code会话
   - 解决步骤：先在终端中使用Claude Code创建会话

3. **工具无法使用**
   - 可能原因：工具默认禁用
   - 解决步骤：在设置中手动启用需要的工具

### 官方文档
- [CloudCLI Documentation](https://github.com/siteboon/claudecodeui#documentation) [海外网络环境配置 →](/网络环境)
