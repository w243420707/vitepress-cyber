# 项目名称
Ruff

# 作者或组织名
astral-sh

# 项目类别
开发工具

# 核心痛点
1. 现有的Python代码检查工具速度太慢
2. 需要同时安装和配置多个工具（Flake8、Black、isort等）
3. 大型代码库检查时间过长
4. 工具之间配置不一致
5. 缺乏统一的代码质量解决方案

# 主要功能
1. 极速Python代码检查和格式化
2. 用Rust编写，速度比现有工具快10-100倍
3. 支持通过pip安装
4. 支持pyproject.toml配置
5. 兼容Python 3.14
6. 可替代Flake8、Black、isort、pydocstyle、pyupgrade、autoflake等工具
7. 内置超过800条规则
8. 原生重新实现流行的Flake8插件
9. 支持自动修复
10. 内置缓存系统
11. 支持VS Code等编辑器集成
12. 单体仓库友好

# 项目亮点
1. 极速性能，比Flake8和Black快10-100倍
2. 一站式解决方案，替代多个工具
3. 用Rust编写，性能优异
4. 内置超过800条规则
5. 被众多大型开源项目采用（Apache Airflow、FastAPI、Hugging Face、Pandas等）
6. 由Astral公司（uv和ty的创建者）支持

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/astral-sh/ruff [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 1. 教程适用对象与环境范围
适用于Python开发者，支持Linux、macOS、Windows等主流操作系统，兼容Python 3.10及以上版本

## 2. 前置条件检查
- 已安装Python 3.10或更高版本
- 已安装pip或uv包管理器
- 如需使用编辑器集成，需安装对应编辑器

## 3. 主路径：安装与启动

### 步骤1：使用pip安装
步骤目标：使用pip安装Ruff
执行位置：终端（本机）
完整命令：
```bash
pip install ruff
```
成功标志：终端显示安装成功，可运行`ruff --version`查看版本
失败处理：检查Python和pip是否正确安装，或尝试使用uv安装

### 步骤2：使用uv安装（推荐）
步骤目标：使用uv安装Ruff
执行位置：终端（本机）
完整命令：
```bash
# 全局安装
uv tool install ruff@latest

# 或添加到项目开发依赖
uv add --dev ruff
```
成功标志：终端显示安装成功，可运行`ruff --version`查看版本
失败处理：检查uv是否正确安装，或尝试使用pip安装

### 步骤3：运行代码检查
步骤目标：检查当前目录的Python代码
执行位置：项目目录（终端）
完整命令：
```bash
# 检查当前目录所有文件
ruff check

# 检查指定路径
ruff check path/to/code/

# 检查并自动修复
ruff check --fix
```
成功标志：终端显示检查结果，无错误或显示发现的问题
失败处理：检查路径是否正确，确保有Python文件，或查看Ruff文档

### 步骤4：运行代码格式化
步骤目标：格式化当前目录的Python代码
执行位置：项目目录（终端）
完整命令：
```bash
# 格式化当前目录所有文件
ruff format

# 格式化指定路径
ruff format path/to/code/
```
成功标志：终端显示格式化结果，文件被格式化
失败处理：检查路径是否正确，确保有Python文件，或查看Ruff文档

## 4. 安装成功验证
- 运行`ruff --version`，显示版本号
- 在项目目录运行`ruff check`，能正常检查代码
- 在项目目录运行`ruff format`，能正常格式化代码

## 5. 常见错误排查
1. 现象 -> ruff命令找不到
   可能原因 -> 环境变量未正确配置或安装位置不在PATH中
   解决步骤 -> 重新打开终端，或使用`python -m ruff`运行，检查安装位置并添加到PATH

2. 现象 -> 检查代码时提示Python版本不兼容
   可能原因 -> Ruff配置的目标Python版本与实际使用的不匹配
   解决步骤 -> 在pyproject.toml或ruff.toml中配置正确的target-version，或使用--target-version参数

3. 现象 -> 自动修复功能不工作
   可能原因 -> 规则未启用或某些规则不支持自动修复
   解决步骤 -> 检查配置文件是否启用了可修复的规则，查看Ruff文档了解哪些规则支持自动修复

## 6. 备选部署路径
- 使用pipx安装：`pipx install ruff`
- 使用Homebrew安装：`brew install ruff`
- 使用Conda安装：`conda install -c conda-forge ruff`
- 使用独立安装脚本（macOS/Linux）：`curl -LsSf https://astral.sh/ruff/install.sh | sh`
- 使用独立安装脚本（Windows）：`powershell -c "irm https://astral.sh/ruff/install.ps1 | iex"`

## 7. 信息缺失说明
更多详细配置和使用教程请访问Ruff官方文档：https://docs.astral.sh/ruff [海外网络环境配置 →](/网络环境)
