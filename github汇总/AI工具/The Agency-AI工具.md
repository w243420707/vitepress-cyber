# 项目名称
The Agency

# 作者或组织名
msitarzewski

# 项目类别
AI工具

# 核心痛点
- 个人和小团队无法负担完整专业团队
- 通用AI提示词缺乏专业深度
- 跨领域项目需要多种专业技能
- 新工具上手成本高，缺乏专业指导
- 没有经过实战检验的工作流程和成功指标

# 主要功能
- 12个专业领域：工程、设计、付费媒体、销售、营销、产品、项目管理、测试、支持、空间计算、游戏开发、学术
- 144个专业AI代理：每个代理都有独特个性、专业领域知识、明确可交付成果、实战工作流程和成功指标
- 多工具支持：Claude Code、GitHub Copilot、Antigravity、Gemini CLI、OpenCode、Cursor、Aider、Windsurf、OpenClaw、Qwen Code
- 一键安装：提供转换和安装脚本，快速集成到常用工具
- 实战用例：提供Startup MVP构建、营销活动Launch、企业功能开发等真实场景示例

# 项目亮点
- 诞生于Reddit讨论帖，经过数月实战迭代
- 144个专业代理，覆盖12个不同领域
- 每个代理都不是通用模板，而是有深度专业知识
- 支持10+主流AI开发工具
- 提供转换和安装脚本，一键部署
- 有真实的代码示例和成功案例
- 在Reddit上12小时内收到50+请求

# 荣誉信息
- 诞生于Reddit讨论，12小时内收到50+请求
- 拥有144个专业代理，10000+行代码和示例
- 经过数月实战迭代和生产环境检验
- 有社区维护的中文翻译版本

# 项目地址
https://github.com/msitarzewski/agency-agents [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 1. 教程适用对象与环境范围
本教程适用于希望使用The Agency AI代理的开发者，支持Claude Code、GitHub Copilot、Antigravity、Gemini CLI、OpenCode、Cursor、Aider、Windsurf、OpenClaw、Qwen Code等多种工具。

## 2. 前置条件检查
- Git：用于克隆仓库
- 你常用的AI开发工具（Claude Code、GitHub Copilot、Cursor等至少一种）
- 网络连接：用于克隆仓库

## 3. 主路径：与Claude Code配合使用（推荐）

### 步骤1：克隆仓库
- 步骤目标：获取The Agency源代码
- 执行位置：本机
- 完整命令或操作：
```bash
git clone https://github.com/msitarzewski/agency-agents.git [海外网络环境配置 →](/网络环境)
cd agency-agents
```
- 成功标志：仓库克隆成功
- 失败处理：检查网络连接，或尝试使用GitHub镜像

### 步骤2：复制代理到Claude Code目录
- 步骤目标：将代理安装到Claude Code
- 执行位置：项目目录
- 完整命令或操作：
```bash
cp -r agency-agents/* ~/.claude/agents/
```
- 成功标志：代理文件复制完成
- 失败处理：检查~/.claude/agents/目录是否存在，如不存在需先创建

### 步骤3：在Claude Code中激活代理
- 步骤目标：开始使用代理
- 执行位置：Claude Code会话中
- 完整命令或操作：例如"Hey Claude, activate Frontend Developer mode and help me build a React component"
- 成功标志：Claude Code识别并激活对应代理
- 失败处理：检查代理文件是否正确复制到~/.claude/agents/目录

## 4. 备选部署路径：一键安装到多种工具

### 步骤1：生成集成文件
- 步骤目标：为所有支持的工具生成集成文件
- 执行位置：项目目录
- 完整命令或操作：
```bash
./scripts/convert.sh
```
或更快的并行版本：
```bash
./scripts/convert.sh --parallel
```
- 成功标志：集成文件生成完成
- 失败处理：检查脚本权限，必要时使用chmod +x scripts/convert.sh

### 步骤2：交互式安装
- 步骤目标：安装到检测到的工具
- 执行位置：项目目录
- 完整命令或操作：
```bash
./scripts/install.sh
```
或更快的并行版本：
```bash
./scripts/install.sh --no-interactive --parallel
```
- 成功标志：安装程序扫描系统并显示复选框UI，选择后安装完成
- 失败处理：检查脚本权限，确认你的工具已正确安装

### 步骤3：指定工具安装
- 步骤目标：安装到特定工具
- 执行位置：项目目录
- 完整命令或操作：
```bash
./scripts/install.sh --tool cursor
./scripts/install.sh --tool copilot
./scripts/install.sh --tool aider
```
- 成功标志：指定工具安装完成
- 失败处理：检查工具是否已安装，确认安装路径正确

## 5. 安装成功验证
- Claude Code：在会话中尝试激活一个代理，如"Use the Frontend Developer agent to review this component"
- Cursor：在项目中查看.cursor/rules/目录是否生成了.mdc规则文件
- Aider：查看项目根目录是否生成了CONVENTIONS.md文件
- 预期返回：工具正确识别并应用代理

## 6. 常见错误排查
- 现象：代理文件复制失败
  - 可能原因：目标目录不存在或权限不足
  - 解决步骤：手动创建目标目录，或使用sudo运行命令
- 现象：工具无法识别代理
  - 可能原因：代理文件位置不正确或格式有问题
  - 解决步骤：检查代理文件是否在正确的位置，参考integrations/目录下各工具的README
- 现象：脚本运行失败
  - 可能原因：脚本权限不足或依赖缺失
  - 解决步骤：使用chmod +x scripts/*.sh添加执行权限，检查系统是否安装了必要的依赖（如bash）

## 7. 信息缺失说明
README/仓库信息中未明确说明Windows系统下的详细安装步骤，建议使用WSL或手动复制文件。如需了解更多细节，可参考项目官方文档或各工具集成目录下的README。
