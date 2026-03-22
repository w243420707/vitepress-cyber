# 项目名称
banana-prompt-quicker

# 作者或组织名
glidea

# 项目类别
浏览器工具

# 核心痛点
在使用AI工具时，需要手动输入或搜索高质量的提示词，效率低下。

# 主要功能
- 在Gemini官网、Google AI Studio、Gemini Enterprise等网站上快速插入AI提示词
- 在任意网站输入框中通过右键菜单插入提示词
- 支持提示词库管理
- 支持参考图添加
- 支持NSFW过滤
- 提供新手引导
- 支持查看最近更新的Prompt
- 支持灵光模式，引导完成生图需求

# 项目亮点
- 安装简单，可从Chrome Web Store直接安装
- 支持多个AI平台
- 可在任意网站使用
- 功能丰富，包括提示词管理、参考图支持等
- 开源免费

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/glidea/banana-prompt-quicker [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于使用Chrome浏览器的AI用户，需要在Gemini等平台上使用提示词。

## 前置条件检查
1. 系统要求：安装了Chrome浏览器
2. 权限要求：有足够的权限安装Chrome扩展

## 主路径：安装与启动

### 方式一：Chrome Web Store安装
1. **访问Chrome Web Store**
   - 执行位置：Chrome浏览器
   - 完整命令：访问 https://chromewebstore.google.com/detail/banana-prompt-quicker/hgfgfocicepifbolifedlokjkknigoid?authuser=0&hl=zh-CN
   - 成功标志：页面加载成功，显示扩展信息
   - 失败处理：检查网络连接，确保能够访问Chrome Web Store

2. **安装扩展**
   - 执行位置：Chrome Web Store页面
   - 操作：点击「添加至Chrome」按钮
   - 成功标志：扩展安装成功，Chrome工具栏出现扩展图标
   - 失败处理：检查Chrome浏览器版本，确保符合要求

### 方式二：手动安装
1. **下载或Clone仓库**
   - 执行位置：本地目录
   - 完整命令：`git clone https://github.com/glidea/banana-prompt-quicker.git`
   - 成功标志：仓库克隆成功
   - 失败处理：检查网络连接，确保能够访问GitHub

2. **在Chrome中加载扩展**
   - 执行位置：Chrome浏览器
   - 操作：
     1. 访问 chrome://extensions/
     2. 开启右上角的「开发者模式」
     3. 点击「加载已解压的扩展程序」
     4. 选择项目根目录下的 extension 文件夹
   - 成功标志：扩展加载成功，Chrome工具栏出现扩展图标
   - 失败处理：检查扩展文件夹是否正确，确保manifest.json文件存在

### 移动端安装
1. **下载并安装Cronmite**
   - 执行位置：移动端
   - 操作：在应用商店搜索并安装Cronmite
   - 成功标志：Cronmite安装成功
   - 失败处理：检查设备兼容性

2. **在Cronmite中安装扩展**
   - 执行位置：Cronmite
   - 操作：访问Chrome Web Store链接，点击「添加至Chrome」
   - 成功标志：扩展安装成功
   - 失败处理：检查网络连接，确保能够访问Chrome Web Store

### 油猴版本安装
1. **安装油猴脚本**
   - 执行位置：Chrome浏览器
   - 完整命令：访问 https://github.com/bxb100/Scripts/raw/refs/heads/main/banana-prompt-quicker/script.user.js
   - 成功标志：油猴脚本安装成功
   - 失败处理：检查是否已安装油猴扩展

## 安装成功验证
- 打开Gemini官网或Google AI Studio
- 预期返回：页面上出现banana-prompt-quicker的图标或按钮

## 常见错误排查
1. **扩展未显示**
   - 现象：安装后Chrome工具栏中未显示扩展图标
   - 可能原因：扩展被隐藏
   - 解决步骤：点击Chrome工具栏中的扩展图标，找到banana-prompt-quicker并固定

2. **在某些网站上无法使用**
   - 现象：在部分网站上右键菜单中没有「🍌 Insert Banana Prompts」选项
   - 可能原因：网站限制了右键菜单
   - 解决步骤：尝试在其他网站上使用，或手动输入提示词

3. **提示词插入失败**
   - 现象：点击提示词后未插入到输入框
   - 可能原因：网站输入框结构特殊
   - 解决步骤：尝试使用不同的输入框，或手动复制粘贴提示词

## 备选部署路径
油猴脚本版本，适合无法安装Chrome扩展的环境。

## 信息缺失说明
README/仓库信息中未提供完整的功能使用教程，上述教程基于README中提到的安装方式整理。