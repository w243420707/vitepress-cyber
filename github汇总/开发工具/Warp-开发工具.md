# Warp

Warp

# 作者或组织名

warpdotdev

# 项目类别

开发工具

# 核心痛点

传统终端工具在功能性和用户体验上已无法满足现代开发者的需求。开发者在终端中工作时面临输入效率低、命令历史管理困难、缺乏智能补全、与 AI 协作不顺畅等问题。Warp 旨在解决这些痛点，将终端带入 21 世纪。

# 主要功能

- **AI 驱动的智能终端**：内置 AI 助手 Oz，支持自然语言命令生成和解释
- **现代代码编辑体验**：支持块编辑、语法高亮、自动补全、命令搜索
- **团队协作功能**：支持命令分享、工作流共享、团队知识库
- **多平台支持**：支持 macOS、Linux 和 Windows 系统
- **GPU 加速**：基于 Rust 构建，提供流畅的终端体验
- **Agentic 开发环境**：支持多 AI Agent 协作，从编码到部署的全流程

# 项目亮点

- **21 世纪的终端**：重新设计终端体验，将现代 IDE 的编辑功能带入终端
- **AI 原生设计**：从底层架构支持 AI 协作，不仅是简单的 AI 插件
- **高性能**：基于 Rust 和 GPU 加速，提供极速响应
- **开源生态**：主题、工作流等扩展点已开源，社区可参与贡献
- **企业级融资**：获得 2300 万美元融资，持续迭代更新

# 荣誉信息

- GitHub Stars：24.4k+
- 获得 2300 万美元融资
- 每周四发布更新，持续迭代
- 社区活跃，Slack 和 Discord 用户众多

# 项目地址

https://github.com/warpdotdev/Warp [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围

适用于需要使用现代化终端提升开发效率的开发者。支持 macOS、Linux 和 Windows 系统。

## 前置条件检查

- 操作系统：macOS 10.14+ / Linux (Ubuntu 18.04+, Fedora 30+, Debian 10+) / Windows 10+
- 网络环境：需要访问海外网络下载安装包
- 硬件要求：支持 GPU 加速的显卡可获得最佳体验

## 主路径：安装与启动

### macOS

1. 访问官网下载页面：https://www.warp.dev/download
2. 下载 `.dmg` 安装包
3. 打开安装包，将 Warp 拖入 Applications 文件夹
4. 首次启动时可能需要授权（系统偏好设置 → 安全性与隐私）

### Linux

```bash
# Ubuntu/Debian
curl -fsSL https://releases.warp.dev/linux/keys/warp.asc | sudo gpg --dearmor -o /usr/share/keyrings/warp-archive-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/warp-archive-keyring.gpg] https://releases.warp.dev/linux/deb stable main" | sudo tee /etc/apt/sources.list.d/warp.list
sudo apt update
sudo apt install warp-terminal
```

### Windows

1. 访问官网下载页面：https://www.warp.dev/download
2. 下载 Windows 安装程序
3. 运行安装程序并按提示完成安装

## 安装成功验证

1. 打开 Warp 终端
2. 首次启动会引导完成初始设置
3. 输入 `warp --version` 查看版本信息
4. 尝试使用 AI 功能（按 `Ctrl+Space` 唤出 AI 助手）

## 常见错误排查

- **无法启动**：检查系统版本是否满足最低要求
- **网络连接问题**：确保可以访问 warp.dev 域名
- **权限问题**：macOS 用户需要在系统偏好设置中授权
- **字体显示异常**：安装推荐字体（如 JetBrains Mono、Fira Code）

## 备选部署路径

- **Homebrew (macOS)**：`brew install --cask warp`
- **Preview 版本**：访问 https://www.warp.dev/download-preview 获取最新实验功能

## 信息缺失说明

- 详细的自托管部署方案 README 中未明确说明
- 企业版功能详情需要联系官方获取
- 完整的 API 文档需参考官方文档站点

# 官方资源

- 官网：https://www.warp.dev/
- 文档：https://docs.warp.dev/
- 博客：https://www.warp.dev/blog
- Slack 社区：https://go.warp.dev/join-preview
- Discord：https://discord.com/invite/warpdotdev
