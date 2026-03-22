# 项目名称
Claude-Mem

# 作者或组织名
Alex Newman (@thedotmack)

# 项目类别
AI工具

# 核心痛点
Claude Code等AI助手在会话结束后会丢失项目上下文，每次重新开始都需要重新介绍项目，效率低下。

# 主要功能
- 持久化记忆 - 跨会话保存上下文
- 渐进式披露 - 分层记忆检索，带token成本可见性
- 基于技能的搜索 - 使用mem-search技能查询项目历史
- Web查看器UI - http://localhost:37777 实时内存流
- Claude Desktop技能 - 从Claude Desktop对话中搜索记忆
- 隐私控制 - 使用&lt;private&gt;标签排除敏感内容
- 上下文配置 - 细粒度控制注入什么上下文
- 自动运行 - 无需手动干预
- 引用功能 - 通过ID引用过去的观察
- Beta渠道 - 尝试实验性功能如Endless Mode

# 项目亮点
- 自动捕获工具使用观察数据
- 生成语义摘要供未来会话使用
- 支持OpenClaw网关一键安装
- 实时推送观察数据到Telegram、Discord、Slack等
- 3层搜索工作流，节省约10倍token
- SQLite + Chroma混合语义+关键词搜索

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/thedotmack/claude-mem [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于使用Claude Code的开发者，需要跨会话保持AI助手上下文记忆。

## 前置条件检查
1. Node.js 18.0.0或更高版本
2. 最新版Claude Code（带插件支持）
3. Bun JavaScript运行时（自动安装）
4. uv Python包管理器（自动安装）

## 主路径：Claude Code插件安装（推荐）

### 步骤1：添加插件市场
步骤目标：在Claude Code中添加插件市场
执行位置：Claude Code终端
完整命令或操作：
```
/plugin marketplace add thedotmack/claude-mem
```
成功标志：插件市场添加成功
失败处理：检查网络连接，确认Claude Code版本

### 步骤2：安装插件
步骤目标：安装Claude-Mem插件
执行位置：Claude Code终端
完整命令或操作：
```
/plugin install claude-mem
```
成功标志：插件安装成功
失败处理：检查Node.js版本，查看错误日志

### 步骤3：重启Claude Code
步骤目标：重启以使插件生效
执行位置：Claude Code
完整命令或操作：重启Claude Code
成功标志：之前会话的上下文自动出现在新会话中
失败处理：检查插件是否正确安装

## 备选部署路径

### 备选路径1：OpenClaw网关安装
在OpenClaw网关上一键安装：
```bash
curl -fsSL https://install.cmem.ai/openclaw.sh | bash
```
安装器处理依赖、插件设置、AI提供商配置、Worker启动等。

## 安装成功验证
1. 重启Claude Code后，之前会话的上下文自动出现
2. 能访问http://localhost:37777查看Web UI
3. 使用mem-search技能能搜索历史

## 常见错误排查

1. **现象 -> npm命令未找到**
   可能原因 -> Node.js和npm未正确安装或未添加到PATH
   解决步骤 -> 从https://nodejs.org下载最新Node.js安装，安装后重启终端

2. **现象 -> 插件无法加载**
   可能原因 -> 依赖缺失或配置错误
   解决步骤 -> 查看~/.claude-mem/settings.json配置，检查日志

3. **现象 -> Web UI无法访问**
   可能原因 -> 端口被占用或Worker未启动
   解决步骤 -> 检查37777端口占用，查看Worker服务状态
