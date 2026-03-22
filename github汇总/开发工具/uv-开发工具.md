# uv

## 作者或组织名
Astral

## 项目类别
开发工具

## 核心痛点
Python包管理速度慢，需要多个工具配合使用

## 主要功能
- 极快的Python包管理工具和项目解析器
- 用Rust编写，速度极快
- 可替代pip、pip-tools、poetry、pipenv、virtualenv等
- 支持pip和pip-tools的所有功能
- 可作为Poetry和Pipenv的直接替代品
- 可扩展的项目工作区支持
- 自动管理Python安装
- 锁文件、依赖关系树可视化等丰富功能
- 跨平台支持（Linux、macOS、Windows）

## 项目亮点
- 用Rust编写，速度极快（比pip快10-100倍，pip-compile快10-100倍，pip sync快100倍，virtualenv快10倍）
- 一个工具替代多个工具（pip、pip-tools、poetry、pipenv、virtualenv）
- 支持pip和pip-tools的所有功能
- 可作为Poetry和Pipenv的直接替代品
- 可扩展的项目工作区支持
- 自动管理Python安装
- 锁文件、依赖关系树可视化等丰富功能
- 跨平台支持（Linux、macOS、Windows）
- 来自Astral团队，品质有保障

## 荣誉信息
README/仓库信息中未明确说明

## 项目地址
https://github.com/astral-sh/uv [海外网络环境配置 →](/网络环境)

## 安装或部署教程

### 教程适用对象与环境范围
适用于Python开发者，支持Windows、macOS、Linux

### 前置条件检查
1. 系统要求：支持Windows、macOS、Linux
2. Python：可选，uv可自动管理Python安装
3. 网络连接：可访问互联网

### 主路径：安装uv

#### 步骤1：安装uv
- 步骤目标：安装uv包管理工具
- 执行位置：终端/命令行
- macOS/Linux安装命令：`curl -LsSf https://astral.sh/uv/install.sh | sh`
- Windows安装命令：`irm https://astral.sh/uv/install.ps1 | iex`
- 使用pip安装（备选）：`pip install uv`
- 成功标志：安装完成，可运行`uv --version`查看版本
- 失败处理：检查网络连接，查看官方安装文档

#### 步骤2：验证安装
- 步骤目标：验证uv是否安装成功
- 执行位置：终端/命令行
- 完整命令：`uv --version`
- 成功标志：显示uv版本号
- 失败处理：重新执行安装步骤，检查PATH环境变量

### 安装成功验证
1. 检查命令：`uv --version`
2. 预期返回：显示uv版本号
3. 官方文档：https://docs.astral.sh/uv [海外网络环境配置 →](/网络环境)

### 常见错误排查
1. 现象：安装失败
   - 可能原因：网络问题或权限问题
   - 解决步骤：检查网络连接，使用管理员权限（Windows）或sudo（Linux/macOS）
2. 现象：命令找不到
   - 可能原因：PATH环境变量未配置
   - 解决步骤：将uv的安装目录添加到PATH
3. 现象：包安装失败
   - 可能原因：网络问题或依赖冲突
   - 解决步骤：检查网络连接，查看依赖关系

### 信息缺失说明
如需深入了解详细使用方法，可访问官方文档：https://docs.astral.sh/uv [海外网络环境配置 →](/网络环境)
