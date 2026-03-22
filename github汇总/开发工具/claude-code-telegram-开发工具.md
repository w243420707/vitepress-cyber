# 项目名称
claude-code-telegram

# 作者或组织名
RichardAtCT

# 项目类别
开发工具

# 核心痛点
开发者想要在移动设备上便捷地访问和操作代码库，但传统终端工具在手机上使用体验不佳，且缺乏安全保障

# 主要功能
- 通过Telegram机器人远程访问Claude Code
- 自然语言对话模式，无需终端命令
- 自动会话持久化，按项目保存上下文
- 多用户认证和目录沙箱隔离
- Git集成和Webhook通知支持
- 经典终端模式，支持13个快捷命令

# 项目亮点
- 支持两种模式：代理模式（默认）和经典终端模式
- 内置安全机制：用户白名单、目录隔离、速率限制、审计日志
- 支持文件上传、图片分析、语音消息转录
- Webhook API服务器和调度器支持
- 可通过MCP与Claude Code原生集成

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/RichardAtCT/claude-code-telegram [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于有基本Python使用经验的开发者，支持Linux、macOS和Windows系统

## 前置条件检查
1. **系统版本检查**
   - 步骤目标：确认系统支持Python 3.11+
   - 执行位置：本机终端
   - 完整命令：`python --version` 或 `python3 --version`
   - 成功标志：输出显示Python 3.11或更高版本
   - 失败处理：版本过低请访问 [Python官网](https://www.python.org/downloads/) 安装

2. **Claude Code CLI检查**
   - 步骤目标：确认已安装Claude Code CLI
   - 执行位置：本机终端
   - 完整命令：`claude --version`
   - 成功标志：显示Claude Code版本号
   - 失败处理：按照 [Claude Code官方文档](https://anthropic.com/claude-code) 安装

3. **Telegram Bot Token获取**
   - 步骤目标：获取Telegram机器人Token
   - 执行位置：Telegram应用
   - 操作说明：在Telegram中与@BotFather对话，发送/newbot，按提示创建机器人并获取Token
   - 成功标志：获得类似1234567890:ABC-DEF1234ghIkl-zyx57W2v1u123ew11的Token
   - 失败处理：参考 [Telegram Bot官方文档](https://core.telegram.org/bots)

## 主路径：安装与启动
### 步骤1：安装项目
- **步骤目标**：安装claude-code-telegram
- **执行位置**：本机终端
- **完整命令**：
  ```bash
  # 推荐方式：使用uv安装（隔离环境）
  uv tool install git+https://github.com/RichardAtCT/claude-code-telegram@v1.3.0
  
  # 或者使用pip安装
  pip install git+https://github.com/RichardAtCT/claude-code-telegram@v1.3.0
  ```
- **成功标志**：安装完成无错误提示
- **失败处理**：检查网络连接，确认Python版本符合要求

### 步骤2：配置环境
- **步骤目标**：创建并编辑配置文件
- **执行位置**：项目目录
- **完整命令**：
  ```bash
  # 复制示例配置文件
  cp .env.example .env
  ```
- **操作说明**：编辑.env文件，填入以下必填项：
  - TELEGRAM_BOT_TOKEN：你的Telegram机器人Token
  - TELEGRAM_BOT_USERNAME：你的机器人用户名
  - APPROVED_DIRECTORY：允许访问的项目目录路径
  - ALLOWED_USERS：你的Telegram用户ID（可通过@userinfobot获取）
- **成功标志**：.env文件配置完成
- **失败处理**：检查文件权限，确认各配置项格式正确

### 步骤3：启动服务
- **步骤目标**：启动Telegram机器人
- **执行位置**：项目目录
- **完整命令**：
  ```bash
  # 生产环境启动
  make run
  
  # 调试模式启动（显示详细日志）
  make run-debug
  ```
- **成功标志**：服务启动成功，终端显示机器人运行信息
- **失败处理**：检查.env配置，查看错误日志

## 安装成功验证
- **访问地址**：在Telegram中搜索你的机器人用户名并开始对话
- **检查命令**：发送/start命令
- **预期返回**：机器人回复欢迎信息和使用说明

## 常见错误排查
1. **现象**：机器人不回复
   - **可能原因**：TELEGRAM_BOT_TOKEN配置错误、用户ID未在ALLOWED_USERS中、Claude Code CLI未正确安装
   - **解决步骤**：检查Token是否正确、确认用户ID已添加、运行make run-debug查看详细日志

2. **现象**：Claude集成不工作
   - **可能原因**：未配置ANTHROPIC_API_KEY或Claude Code CLI未认证
   - **解决步骤**：检查ANTHROPIC_API_KEY配置、运行claude auth status确认认证状态

3. **现象**：使用成本过高
   - **可能原因**：未设置成本限制
   - **解决步骤**：在.env中设置CLAUDE_MAX_COST_PER_USER限制每个用户的花费

## 备选部署路径
### 从源码安装（开发用）
```bash
git clone https://github.com/RichardAtCT/claude-code-telegram.git
cd claude-code-telegram
make dev  # 需要Poetry
```

## 信息缺失说明
README/仓库信息中未提供完整的故障排除细节，更多配置选项请参考项目的docs/setup.md文档。
