# 项目名称
NautilusTrader

# 作者或组织名
Nautech Systems

# 项目类别
开发工具

# 核心痛点
量化交易者需要在历史数据上回测自动化交易策略，并将这些策略部署到实盘交易，传统方法需要在不同环境中重写代码，效率低下且容易出错。

# 主要功能
- 高性能事件驱动的回测引擎
- 无代码变更地将策略部署到实盘交易
- 支持多种资产类别：外汇、股票、期货、期权、加密货币、DeFi和博彩
- 多场所同时操作能力
- 高级订单类型和条件触发
- 可定制的组件和系统
- AI训练支持

# 项目亮点
- 核心用Rust编写，性能优异
- 异步网络通信使用tokio
- 跨平台兼容，支持Linux、macOS和Windows
- 模块化设计，支持任何REST API或WebSocket feed集成
- 提供Python原生环境，便于数据科学和AI集成
- 开源免费，采用GNU Lesser General Public License v3.0

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/nautechsystems/nautilus_trader [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于量化交易者和开发者，需要在历史数据上回测交易策略并部署到实盘交易。

## 前置条件检查
1. 系统要求：Linux、macOS或Windows
2. Python版本：3.12-3.14
3. 依赖：Rust（从源代码构建时需要）

## 主路径：安装与启动

### 从PyPI安装
1. **安装最新版本**
   - 执行位置：终端
   - 完整命令：`pip install -U nautilus_trader`
   - 成功标志：安装完成，无错误信息
   - 失败处理：检查Python版本是否符合要求

2. **安装可选依赖**
   - 执行位置：终端
   - 完整命令：`pip install -U "nautilus_trader[docker,ib]"`
   - 成功标志：安装完成，无错误信息
   - 失败处理：检查网络连接

### 从Nautech Systems包索引安装
1. **安装稳定版本**
   - 执行位置：终端
   - 完整命令：`pip install -U nautilus_trader --index-url=https://packages.nautechsystems.io/simple`
   - 成功标志：安装完成，无错误信息
   - 失败处理：检查网络连接

2. **安装开发版本**
   - 执行位置：终端
   - 完整命令：`pip install -U nautilus_trader --pre --index-url=https://packages.nautechsystems.io/simple`
   - 成功标志：安装完成，无错误信息
   - 失败处理：检查网络连接

### 从源代码构建
1. **安装rustup**
   - 执行位置：终端
   - 完整命令：
     - Linux和macOS：`curl https://sh.rustup.rs -sSf | sh`
     - Windows：下载并安装rustup-init.exe
   - 成功标志：安装完成，无错误信息
   - 失败处理：检查网络连接

2. **验证Rust安装**
   - 执行位置：终端
   - 完整命令：`rustc --version`
   - 成功标志：显示Rust版本
   - 失败处理：检查rustup是否正确安装

3. **安装clang**
   - 执行位置：终端
   - 完整命令：
     - Linux：`sudo apt-get install clang`
     - macOS：`xcode-select --install`
     - Windows：在Visual Studio Installer中添加"C++ Clang tools for Windows"
   - 成功标志：安装完成，无错误信息
   - 失败处理：检查系统权限

4. **验证clang安装**
   - 执行位置：终端
   - 完整命令：`clang --version`
   - 成功标志：显示clang版本
   - 失败处理：检查clang是否正确安装

5. **安装uv**
   - 执行位置：终端
   - 完整命令：
     - Linux和macOS：`curl -LsSf https://astral.sh/uv/install.sh | sh`
     - Windows：`irm https://astral.sh/uv/install.ps1 | iex`
   - 成功标志：安装完成，无错误信息
   - 失败处理：检查网络连接

6. **克隆源代码**
   - 执行位置：终端
   - 完整命令：`git clone --branch develop --depth 1 https://github.com/nautechsystems/nautilus_trader`
   - 成功标志：仓库克隆成功
   - 失败处理：检查网络连接

7. **安装依赖**
   - 执行位置：项目目录
   - 完整命令：`cd nautilus_trader && uv sync --all-extras`
   - 成功标志：依赖安装完成，无错误信息
   - 失败处理：检查网络连接

8. **设置环境变量（Linux和macOS）**
   - 执行位置：终端
   - 完整命令：
     ```
     # Linux only
     export LD_LIBRARY_PATH="$(python -c 'import sys; print(sys.base_prefix)')/lib:$LD_LIBRARY_PATH"
     # All systems
     export PYO3_PYTHON=$(pwd)/.venv/bin/python
     export PYTHONHOME=$(python -c "import sys; print(sys.base_prefix)")
     ```
   - 成功标志：环境变量设置成功
   - 失败处理：检查Python路径是否正确

### 使用Docker
1. **拉取Docker镜像**
   - 执行位置：终端
   - 完整命令：`docker pull ghcr.io/nautechsystems/<image_variant_tag> --platform linux/amd64`
   - 成功标志：镜像拉取完成，无错误信息
   - 失败处理：检查Docker是否正常运行

2. **运行JupyterLab容器**
   - 执行位置：终端
   - 完整命令：`docker run -p 8888:8888 ghcr.io/nautechsystems/jupyterlab:nightly`
   - 成功标志：容器启动成功，无错误信息
   - 失败处理：检查端口是否被占用

3. **访问JupyterLab**
   - 执行位置：浏览器
   - 操作：访问 http://127.0.0.1:8888/lab
   - 成功标志：JupyterLab界面加载成功
   - 失败处理：检查容器是否正常运行

## 安装成功验证
- 执行命令：`python -c "import nautilus_trader; print(nautilus_trader.__version__)"`
- 预期返回：显示NautilusTrader版本

## 常见错误排查
1. **安装失败**
   - 现象：执行安装命令后出现错误
   - 可能原因：Python版本不匹配、依赖冲突
   - 解决步骤：检查Python版本，使用虚拟环境安装

2. **从源代码构建失败**
   - 现象：执行构建命令后出现错误
   - 可能原因：Rust版本过低、缺少依赖
   - 解决步骤：更新Rust到最新版本，安装所有必要依赖

3. **Docker容器启动失败**
   - 现象：执行docker run命令后容器状态为exited
   - 可能原因：端口被占用、镜像损坏
   - 解决步骤：检查端口占用情况，重新拉取镜像

## 备选部署路径
使用Docker容器部署，适合快速开始和隔离环境。

## 信息缺失说明
README/仓库信息中未提供完整的策略开发教程，上述教程基于README中提到的安装方式整理。