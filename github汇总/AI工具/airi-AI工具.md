# 项目名称
AIRI

# 作者或组织名
moeru-ai

# 项目类别
AI工具

# 核心痛点
现有的AI聊天应用主要局限于文字对话，缺乏游戏游玩、视觉互动等更丰富的交互能力，且Neuro-sama等优秀虚拟主播项目未开源，用户无法拥有自己的数字生命

# 主要功能
- 支持多种LLM提供商（30+种，包括OpenAI、Claude、Gemini等）
- 虚拟角色可以游玩Minecraft、Factorio等游戏
- 支持语音合成和语音识别
- VRM和Live2D模型支持，包含自动眨眼、自动注视等动画
- 支持浏览器、桌面、移动设备多平台部署
- 记忆系统和RAG支持

# 项目亮点
- 基于Web技术栈（WebGPU、WebAssembly、WebSocket等）开发，跨平台能力强
- 桌面版本支持NVIDIA CUDA和Apple Metal原生加速
- 包含完整的生态系统，有多个子项目
- 支持Telegram、Discord等多平台交互
- 纯浏览器数据库支持（DuckDB WASM、pglite）

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/moeru-ai/airi [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于有基本前端开发经验的用户，支持浏览器、桌面、移动设备多平台

## 前置条件检查
1. **Node.js和pnpm检查**
   - 步骤目标：确认已安装Node.js和pnpm
   - 执行位置：本机终端
   - 完整命令：`node --version` 和 `pnpm --version`
   - 成功标志：显示Node.js和pnpm版本号
   - 失败处理：访问 [Node.js官网](https://nodejs.org/) 安装Node.js，然后运行`npm install -g pnpm`安装pnpm

## 主路径：安装与启动
### 步骤1：克隆项目并安装依赖
- **步骤目标**：克隆项目并安装依赖
- **执行位置**：本机终端
- **完整命令**：
  ```bash
  git clone https://github.com/moeru-ai/airi.git
  cd airi
  pnpm i
  ```
- **成功标志**：依赖安装完成无错误提示
- **失败处理**：检查网络连接，确认Node.js和pnpm版本符合要求

### 步骤2：启动开发服务器
- **步骤目标**：启动Stage Web（浏览器版本）
- **执行位置**：项目目录
- **完整命令**：
  ```bash
  pnpm dev
  ```
- **成功标志**：开发服务器启动成功，终端显示访问地址
- **失败处理**：检查端口占用情况，查看错误日志

## 安装成功验证
- **访问地址**：浏览器访问终端显示的本地地址（通常是http://localhost:5173）
- **预期返回**：AIRI的Web界面正常显示

## 常见错误排查
1. **现象**：依赖安装失败
   - **可能原因**：网络问题或pnpm版本过旧
   - **解决步骤**：检查网络连接，更新pnpm到最新版本

2. **现象**：开发服务器启动失败
   - **可能原因**：端口被占用
   - **解决步骤**：使用`netstat`或`lsof`检查端口占用，修改配置使用其他端口

3. **现象**：LLM连接失败
   - **可能原因**：API Key未配置或网络问题
   - **解决步骤**：检查API Key配置，确认网络能访问LLM提供商

## 备选部署路径
### Stage Tamagotchi（桌面版本）
```bash
pnpm dev:tamagotchi
```

### Stage Pocket（移动版本）
```bash
# iOS
pnpm dev:pocket:ios --target <DEVICE_ID_OR_SIMULATOR_NAME>
```

### Windows用户（Scoop安装）
```powershell
scoop bucket add airi https://github.com/moeru-ai/airi
scoop install airi/airi
```

## 信息缺失说明
README/仓库信息中未提供完整的生产环境部署教程，更多详细信息请参考项目的CONTRIBUTING.md文档。
