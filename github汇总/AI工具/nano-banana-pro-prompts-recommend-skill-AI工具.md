# 项目名称
nano-banana-pro-prompts-recommend-skill

# 作者或组织名
YouMind-OpenLab

# 项目类别
AI工具

# 核心痛点
需要花费大量时间寻找合适的AI图像提示词，尤其是针对Nano Banana Pro（Gemini图像模型）的高质量提示词。

# 主要功能
- 智能搜索10,000+个Nano Banana Pro提示词
- 根据用户需求推荐最匹配的提示词
- 每个提示词包含示例图片
- 支持内容remix模式，根据用户内容定制提示词
- 提示词库每天更新两次
- 支持多语言

# 项目亮点
- 提示词库庞大且分类明确
- 每个提示词都有示例图片，便于预览效果
- 智能语义搜索，准确匹配用户需求
- 支持多种AI助手平台
- 开源免费，采用MIT许可证

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于需要使用Nano Banana Pro（Gemini图像模型）生成图像的用户，支持多种AI助手平台。

## 前置条件检查
1. 系统要求：安装了Node.js 20+
2. 依赖：pnpm（用于开发环境）
3. 权限要求：有足够的权限安装AI助手技能

## 主路径：安装与启动

### OpenClaw（推荐）
1. **安装技能**
   - 执行位置：OpenClaw命令行
   - 完整命令：`clawhub install nano-banana-pro-prompts-recommend`
   - 成功标志：安装完成，无错误信息
   - 失败处理：检查OpenClaw是否正确安装

2. **在OpenClaw聊天中安装**
   - 执行位置：OpenClaw聊天界面
   - 操作：输入"Install the nano banana pro prompts skill from clawhub"
   - 成功标志：安装完成，无错误信息
   - 失败处理：检查网络连接

### Claude Code
1. **安装技能**
   - 执行位置：终端
   - 完整命令：`npx skills i YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill`
   - 成功标志：安装完成，无错误信息
   - 失败处理：检查Node.js是否正确安装

### 其他AI助手（Cursor、Codex、Gemini CLI、Windsurf）
1. **安装技能**
   - 执行位置：终端
   - 完整命令：`npx skills i YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill`
   - 成功标志：安装完成，无错误信息
   - 失败处理：检查Node.js是否正确安装

### 手动安装 / openskills
1. **安装技能**
   - 执行位置：终端
   - 完整命令：`npx openskills install YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill`
   - 成功标志：安装完成，无错误信息
   - 失败处理：检查Node.js是否正确安装

## 开发环境设置
1. **安装依赖**
   - 执行位置：项目目录
   - 完整命令：`pnpm install`
   - 成功标志：依赖安装完成，无错误信息
   - 失败处理：检查Node.js和pnpm是否正确安装

2. **配置环境变量**
   - 执行位置：项目目录
   - 完整命令：创建.env文件并添加以下内容
     ```
     CMS_HOST=your_host
     CMS_API_KEY=your_key
     ```
   - 成功标志：文件创建成功
   - 失败处理：检查文件格式是否正确

3. **生成引用**
   - 执行位置：项目目录
   - 完整命令：`pnpm run generate`
   - 成功标志：引用生成完成，无错误信息
   - 失败处理：检查环境变量是否正确配置

## 安装成功验证
- 执行命令：在AI助手中描述需要的提示词，如"Find me a cyberpunk-style avatar prompt"
- 预期返回：返回3个匹配的提示词，包含标题、描述、示例图片和提示词内容

## 常见错误排查
1. **安装失败**
   - 现象：执行安装命令后出现错误
   - 可能原因：Node.js版本过低、网络连接问题
   - 解决步骤：更新Node.js到20+版本，检查网络连接

2. **提示词搜索无结果**
   - 现象：描述需求后返回无匹配提示词
   - 可能原因：描述不够具体、提示词库中无相关内容
   - 解决步骤：尝试更具体的描述，或使用不同的关键词

3. **示例图片加载失败**
   - 现象：提示词推荐中示例图片无法显示
   - 可能原因：网络连接问题、图片链接失效
   - 解决步骤：检查网络连接，尝试重新搜索

## 备选部署路径
README/仓库信息中未提供其他部署方式。

## 信息缺失说明
README/仓库信息中未提供完整的开发环境配置教程，上述教程基于README中提到的安装方式整理。