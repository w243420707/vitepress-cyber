# 项目名称
AIOX Squad (aios-core)

# 作者或组织名
SynkraAI

# 项目类别
AI工具

# 核心痛点
AI辅助开发中存在规划不一致和上下文丢失的问题，导致开发效率低下。

# 主要功能
开源AI编排框架，提供专门的AI代理、工作流和CLI优先体验，支持多种IDE集成，适用于任何领域的开发。

# 项目亮点
- 规划代理：analyst、pm、architect等专门代理协作创建详细的PRD和架构文档
- 上下文开发：sm代理将计划转化为详细的开发故事
- CLI优先：所有功能都可通过命令行访问
- 多IDE集成：支持Claude Code、Gemini CLI、Codex CLI、Cursor等
- Squads系统：可扩展到任何领域，如创意写作、商业战略等
- Autonomous Development Engine (ADE)：完整的自主开发系统

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/SynkraAI/aios-core [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于需要AI辅助开发的开发者和团队，支持多种平台和IDE。

## 前置条件检查
1. Node.js >=18.0.0 (v20+推荐)
2. npm >=9.0.0
3. GitHub CLI (可选，团队协作需要)

## 主路径：安装与使用
1. **创建新项目**
   - 目标：创建新的AIOX项目
   - 位置：命令行
   - 命令：`npx aiox-core init meu-projeto`
   - 成功标志：项目创建完成，显示安装成功信息
   - 失败处理：检查Node.js版本是否符合要求

2. **在现有项目中安装**
   - 目标：在现有项目中安装AIOX
   - 位置：项目目录
   - 命令：`cd seu-projeto && npx aiox-core install`
   - 成功标志：安装完成，显示成功信息
   - 失败处理：检查项目目录是否正确，Node.js版本是否符合要求

3. **配置IDE**
   - 目标：配置IDE以支持AIOX
   - 位置：IDE设置
   - 命令：根据IDE类型按照README中的说明进行配置
   - 成功标志：IDE配置完成，可识别AIOX命令
   - 失败处理：检查IDE版本，确保按照正确的步骤配置

4. **激活代理**
   - 目标：激活AIOX代理
   - 位置：IDE或CLI
   - 命令：根据IDE类型使用相应的激活命令
   - 成功标志：代理激活成功，显示greeting信息
   - 失败处理：检查代理配置，确保IDE集成正确

## 安装成功验证
- 访问地址：项目目录
- 检查命令：运行 `npx aiox-core doctor`
- 预期返回：系统诊断通过，显示所有检查项通过

## 常见错误排查
1. **安装失败**
   - 现象：npx命令执行失败
   - 可能原因：Node.js版本过低，或网络连接问题
   - 解决步骤：升级Node.js到18+，检查网络连接

2. **IDE集成问题**
   - 现象：IDE无法识别AIOX命令
   - 可能原因：IDE配置不正确
   - 解决步骤：重新按照README中的说明配置IDE

3. **代理激活失败**
   - 现象：无法激活AIOX代理
   - 可能原因：代理配置错误，或IDE集成问题
   - 解决步骤：检查代理配置，确保IDE集成正确

4. **系统诊断失败**
   - 现象：npx aiox-core doctor显示错误
   - 可能原因：依赖缺失，或配置错误
   - 解决步骤：根据诊断信息修复问题，或重新安装AIOX

## 备选部署路径
- **从源代码构建**：克隆仓库并构建
  ```bash
  git clone https://github.com/SynkraAI/aiox-core.git
  cd aiox-core
  npm install
  npm run install:aiox
  ```

## 信息缺失说明
README/仓库信息中提供了详细的安装和使用指南，可参考官方文档获取更多信息。