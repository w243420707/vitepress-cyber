# 项目名称
Bun

# 作者或组织名
oven-sh

# 项目类别
开发工具

# 核心痛点
JavaScript和TypeScript开发中使用Node.js存在启动时间长、内存占用高、需要安装多个工具（运行时、打包器、测试运行器、包管理器）等问题，导致开发效率低下。

# 主要功能
一个面向JavaScript和TypeScript的全能开发工具包，包含运行时、打包器、测试运行器和包管理器。

# 项目亮点
1. 用Zig语言编写，基于JavaScriptCore，速度极快
2. 启动时间短，内存占用少
3. 内置测试运行器、脚本运行器和兼容Node.js的包管理器，一个工具顶多个
4. 支持Linux、macOS和Windows跨平台
5. 对现有Node.js项目几乎无需修改即可使用，切换成本低

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/oven-sh/bun [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于前端开发者、Node.js开发者，支持Linux（x64 & arm64）、macOS（x64 & Apple Silicon）、Windows（x64 & arm64）。Linux用户强烈建议内核版本5.6或更高，最低5.1。

## 前置条件检查
1. 检查操作系统版本：
   - 执行位置：本机终端
   - 完整命令：`uname -a`（Linux/macOS）或 `winver`（Windows）
   - 成功标志：显示系统版本信息
   - 失败处理：确认系统是否在支持列表中

2. 检查是否已安装其他Node.js环境（可选）：
   - 执行位置：本机终端
   - 完整命令：`node -v`
   - 成功标志：显示Node.js版本号（如果已安装）
   - 失败处理：无Node.js环境也可以直接安装Bun

## 主路径：安装与启动

### 步骤1：安装Bun
- 步骤目标：在系统上安装Bun
- 执行位置：本机终端
- 完整命令（推荐方式）：
  - Linux/macOS：`curl -fsSL https://bun.com/install | bash`
  - Windows：`powershell -c "irm bun.sh/install.ps1 | iex"`
  - 使用npm：`npm install -g bun`
  - 使用Homebrew：`brew tap oven-sh/bun && brew install bun`
  - 使用Docker：`docker pull oven/bun`
- 成功标志：安装完成后显示Bun版本号
- 失败处理：检查网络连接，或尝试其他安装方式

### 步骤2：验证安装
- 步骤目标：确认Bun已正确安装
- 执行位置：本机终端
- 完整命令：`bun -v`
- 成功标志：显示Bun版本号
- 失败处理：重新安装或检查环境变量配置

### 步骤3：运行第一个脚本
- 步骤目标：测试Bun运行时
- 执行位置：项目目录
- 完整命令：`bun run index.ts`
- 成功标志：脚本正常执行
- 失败处理：检查脚本文件是否存在，语法是否正确

## 安装成功验证
1. 访问方式：终端命令
2. 检查命令：`bun -v`
3. 预期返回：Bun版本号
4. 页面特征（如适用）：无

## 常见错误排查
1. 现象：安装失败
   - 可能原因：网络问题、权限不足
   - 解决步骤：检查网络连接，使用sudo（Linux/macOS）或以管理员身份运行（Windows）

2. 现象：执行命令提示"command not found"
   - 可能原因：环境变量未配置
   - 解决步骤：重新打开终端，或手动添加Bun到PATH

3. 现象：运行现有Node.js项目出错
   - 可能原因：某些Node.js特性不完全兼容
   - 解决步骤：查阅Bun官方文档，查看兼容性说明

## 备选部署路径
1. 使用Docker：`docker run --rm --init --ulimit memlock=-1:-1 oven/bun`
2. 升级到最新版本：`bun upgrade`
3. 升级到canary版本：`bun upgrade --canary`

## 信息缺失说明
无，README中提供了完整的安装和使用说明。
