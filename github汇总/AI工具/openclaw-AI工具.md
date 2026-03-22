# 项目名称
OpenClaw

# 作者或组织名
Peter Steinberger和社区

# 项目类别
AI工具

# 核心痛点
需要一个个人的、本地运行的AI助手，能够在多种消息平台上提供服务，支持语音交互和可视化功能。

# 主要功能
个人AI助手，可在多种消息平台上运行，支持语音交互和Canvas功能，提供本地优先的控制平面。

# 项目亮点
- 多通道支持：WhatsApp、Telegram、Slack、Discord等多种消息平台
- 语音交互：macOS/iOS/Android上的语音唤醒和对话模式
- 实时Canvas：可控制的可视化工作区
- 本地优先：在自己的设备上运行
- 多代理路由：将入站通道/账户/对等方路由到隔离的代理

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/openclaw/openclaw [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于需要个人AI助手，希望在多种消息平台上使用AI功能的用户。

## 前置条件检查
1. Node.js ≥22
2. npm、pnpm或bun
3. 支持的平台：macOS、Linux、Windows (via WSL2)

## 主路径：安装与启动
1. **安装OpenClaw**
   - 目标：全局安装OpenClaw
   - 位置：命令行
   - 命令：`npm install -g openclaw@latest` 或 `pnpm add -g openclaw@latest`
   - 成功标志：安装完成，无错误信息
   - 失败处理：检查Node.js版本是否符合要求

2. **运行onboarding向导**
   - 目标：设置网关、工作区、通道和技能
   - 位置：命令行
   - 命令：`openclaw onboard --install-daemon`
   - 成功标志：向导完成，Gateway守护进程安装成功
   - 失败处理：检查权限，确保有足够的权限安装守护进程

3. **启动Gateway**
   - 目标：启动OpenClaw Gateway
   - 位置：命令行
   - 命令：`openclaw gateway --port 18789 --verbose`
   - 成功标志：Gateway启动成功，显示WebSocket地址
   - 失败处理：检查端口是否被占用，查看日志排查错误

4. **发送消息测试**
   - 目标：测试OpenClaw的消息发送功能
   - 位置：命令行
   - 命令：`openclaw message send --to +1234567890 --message "Hello from OpenClaw"`
   - 成功标志：消息发送成功
   - 失败处理：检查通道配置是否正确

5. **与助手对话**
   - 目标：测试与AI助手的对话功能
   - 位置：命令行
   - 命令：`openclaw agent --message "Ship checklist" --thinking high`
   - 成功标志：助手返回响应
   - 失败处理：检查模型配置是否正确

## 安装成功验证
- 访问地址：WebSocket地址（默认 ws://127.0.0.1:18789）
- 检查命令：运行测试命令
- 预期返回：助手响应正常

## 常见错误排查
1. **Node.js版本不兼容**
   - 现象：安装或运行失败
   - 可能原因：Node.js版本低于22
   - 解决步骤：升级Node.js到22或更高版本

2. **端口被占用**
   - 现象：Gateway启动失败
   - 可能原因：端口18789已被占用
   - 解决步骤：使用不同的端口，或关闭占用该端口的进程

3. **通道配置错误**
   - 现象：消息发送失败
   - 可能原因：通道配置不正确，如API密钥缺失
   - 解决步骤：检查通道配置，确保API密钥正确设置

4. **权限问题**
   - 现象：守护进程安装失败
   - 可能原因：权限不足
   - 解决步骤：使用管理员权限运行命令

## 备选部署路径
- **从源代码构建**：克隆仓库并使用pnpm构建
- **Docker部署**：使用Docker容器运行
- **Nix模式**：使用Nix进行声明式配置

## 信息缺失说明
README/仓库信息中提供了详细的安装和配置指南，可参考官方文档获取更多信息。