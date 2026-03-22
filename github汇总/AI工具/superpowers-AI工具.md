# superpowers

## 项目名称
superpowers

## 作者或组织名
obra

## 项目类别
AI工具

## 核心痛点
AI编码代理经常直接跳进写代码，缺乏系统规划，容易偏离目标。

## 主要功能
为编码代理提供完整的软件开发工作流，基于可组合的技能集构建。包含头脑风暴技能（将模糊想法变成清晰设计）、使用Git工作树技能（创建隔离工作空间）、编写计划技能（将工作分解为小任务）、子代理驱动开发技能（按计划执行任务）、测试驱动开发技能（红绿重构循环）、请求代码审查技能、完成开发分支技能。技能自动触发，无需手动调用。

## 项目亮点
- 技能自动触发，无需手动调用
- 完整的软件开发工作流
- 强调测试驱动开发
- 支持多种AI编码工具（Claude Code、Cursor、Codex、OpenCode、Gemini CLI）
- 子代理驱动开发，可自主工作数小时

## 荣誉信息
README/仓库信息中未明确说明

## 项目地址
https://github.com/obra/superpowers [海外网络环境配置 →](/网络环境)

## 安装或部署教程

### 教程适用对象与环境范围
本教程适用于想要为AI编码工具安装Superpowers技能的用户。

### 主路径：Claude Code官方市场安装

**步骤1：打开Claude Code**
- 目标：启动Claude Code
- 位置：终端
- 操作：运行 `claude` 命令
- 成功标志：Claude Code启动成功
- 失败处理：确认Claude Code已正确安装

**步骤2：安装插件**
- 目标：从官方市场安装Superpowers
- 位置：Claude Code
- 命令：`/plugin install superpowers@claude-plugins-official`
- 成功标志：插件安装成功提示
- 失败处理：检查网络连接 [海外网络环境配置 →](/网络环境)

### 备选路径1：Cursor安装

**步骤1：打开Cursor**
- 目标：启动Cursor编辑器
- 位置：桌面或应用菜单
- 操作：打开Cursor
- 成功标志：Cursor启动成功
- 失败处理：确认Cursor已安装

**步骤2：安装插件**
- 目标：从市场安装Superpowers
- 位置：Cursor Agent聊天
- 命令：`/add-plugin superpowers`
- 成功标志：插件安装成功
- 失败处理：检查网络连接

### 备选路径2：Gemini CLI安装

**步骤1：打开终端**
- 目标：准备安装命令
- 位置：终端
- 操作：打开终端窗口
- 成功标志：终端就绪
- 失败处理：无

**步骤2：安装扩展**
- 目标：安装Superpowers扩展
- 位置：终端
- 命令：`gemini extensions install https://github.com/obra/superpowers`
- 成功标志：扩展安装成功
- 失败处理：检查Gemini CLI是否正确安装

### 安装成功验证
- 启动新的会话
- 请求帮助规划功能或调试问题
- 代理应该自动调用相关的superpowers技能

### 常见错误排查

1. **插件安装失败**
   - 可能原因：网络问题
   - 解决步骤：检查网络连接，配置代理

2. **技能不触发**
   - 可能原因：插件未正确加载
   - 解决步骤：重启AI编码工具，重新安装插件

3. **命令不被识别**
   - 可能原因：AI工具版本过低
   - 解决步骤：更新AI编码工具到最新版本

### 官方文档
- [Superpowers Documentation](https://github.com/obra/superpowers) [海外网络环境配置 →](/网络环境)
