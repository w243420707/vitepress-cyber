# 项目名称
prompt-eng-interactive-tutorial

# 作者或组织名
anthropics

# 项目类别
学习资源

# 核心痛点
很多人想学习提示工程但不知道从哪里开始，找不到系统、权威的教程。

# 主要功能
Anthropic推出的交互式提示工程教程，以Jupyter Notebook为载体，帮助学习者深入理解和掌握提示工程相关知识与技能。

# 项目亮点
1. Anthropic官方出品
2. 交互式学习方式
3. Jupyter Notebook载体
4. 内容系统、权威
5. 实战性强

# 荣誉信息
Claude官方出品，权威性保障

# 项目地址
https://github.com/anthropics/prompt-eng-interactive-tutorial [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 1. 教程适用对象与环境范围
适用于AI应用开发者和普通用户，支持Windows、macOS、Linux系统。

## 2. 前置条件检查
- 系统版本：Windows、macOS或Linux
- Python版本：Python 3.7或更高版本
- Jupyter Notebook：已安装Jupyter Notebook或JupyterLab
- 网络要求：能够访问GitHub
- 检查命令：
  - 检查Python版本：python --version 或 python3 --version
  - 检查Jupyter：jupyter --version

## 3. 主路径：安装与启动
### 步骤1：克隆仓库
- 步骤目标：克隆项目仓库到本地
- 执行位置：本机（终端/命令提示符）
- 完整命令或操作：
```bash
git clone https://github.com/anthropics/prompt-eng-interactive-tutorial.git
cd prompt-eng-interactive-tutorial
```
- 成功标志：仓库克隆成功，进入项目目录
- 失败处理：检查网络连接，或直接从GitHub下载ZIP压缩包

### 步骤2：启动Jupyter Notebook
- 步骤目标：启动Jupyter Notebook
- 执行位置：项目目录
- 完整命令或操作：
```bash
jupyter notebook
```
- 成功标志：浏览器自动打开Jupyter界面
- 失败处理：安装Jupyter Notebook：`pip install jupyter`

## 4. 安装成功验证
- 访问地址：http://localhost:8888（Jupyter Notebook默认地址）
- 检查命令：在浏览器中打开上述地址
- 预期返回：Jupyter Notebook界面，可以看到教程文件

## 5. 常见错误排查
1. 现象：git clone 失败
   - 可能原因：网络问题
   - 解决步骤：检查网络连接，或直接下载ZIP文件
2. 现象：jupyter notebook 命令未找到
   - 可能原因：Jupyter未安装
   - 解决步骤：运行 `pip install jupyter`
3. 现象：Notebook无法运行
   - 可能原因：Python环境问题
   - 解决步骤：检查Python和Jupyter版本兼容性

## 6. 备选部署路径
无，建议使用官方文档：https://github.com/anthropics/prompt-eng-interactive-tutorial [海外网络环境配置 →](/网络环境)

## 7. 信息缺失说明
README/仓库信息中未提供更详细的完整教程，以上为基础使用步骤已验证。
