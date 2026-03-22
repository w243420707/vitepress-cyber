# 项目名称
OpenSandbox

# 作者或组织名
alibaba（阿里巴巴）

# 项目类别
开发工具

# 核心痛点
AI应用缺乏安全可靠的沙箱环境，代码智能体、GUI智能体等运行时存在安全风险

# 主要功能
- 通用沙箱平台，为AI应用设计
- 多语言SDK（Python、Java/Kotlin、JavaScript/TypeScript、C#/.NET）
- 统一沙箱API和协议
- Docker和Kubernetes运行时支持
- 支持本地运行和大规模分布式调度
- 网络策略和强隔离（gVisor、Kata Containers、Firecracker）
- 丰富的示例：代码解释器、Claude Code集成、浏览器自动化、桌面环境、强化学习训练等

# 项目亮点
- 阿里巴巴出品，质量有保障
- 多语言SDK支持
- Docker和Kubernetes运行时
- 企业级安全特性
- 丰富的示例，上手容易
- 应用场景广泛：代码智能体、GUI智能体、智能体评估、AI代码执行、强化学习训练等

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/alibaba/OpenSandbox [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于有Python和Docker使用经验的用户

## 前置条件检查
1. **Docker检查**
   - 步骤目标：确认已安装Docker
   - 执行位置：本机终端
   - 完整命令：`docker --version`
   - 成功标志：显示Docker版本号
   - 失败处理：访问 [Docker官网](https://www.docker.com/) 安装

2. **Python检查**
   - 步骤目标：确认已安装Python 3.10+
   - 执行位置：本机终端
   - 完整命令：`python --version` 或 `python3 --version`
   - 成功标志：输出显示Python 3.10或更高版本
   - 失败处理：版本过低请访问 [Python官网](https://www.python.org/downloads/) 安装

## 主路径：安装与使用
### 步骤1：安装沙箱服务器
- **步骤目标**：安装OpenSandbox服务器
- **执行位置**：本机终端
- **完整命令**：
  ```bash
  uv pip install opensandbox-server
  opensandbox-server init-config ~/.sandbox.toml --example docker
  ```
- **成功标志**：安装完成，配置文件生成
- **失败处理**：检查网络连接，确认uv已安装

### 步骤2：启动沙箱服务器
- **步骤目标**：启动OpenSandbox服务器
- **执行位置**：本机终端
- **完整命令**：
  ```bash
  opensandbox-server
  ```
- **成功标志**：服务器启动成功
- **失败处理**：查看错误日志

### 步骤3：安装代码解释器SDK
- **步骤目标**：安装代码解释器SDK
- **执行位置**：本机终端
- **完整命令**：
  ```bash
  uv pip install opensandbox-code-interpreter
  ```
- **成功标志**：SDK安装完成
- **失败处理**：检查网络连接

## 安装成功验证
- **检查方式**：运行项目提供的示例代码
- **预期返回**：示例代码正常执行，输出预期结果

## 常见错误排查
1. **现象**：Docker无法启动
   - **可能原因**：Docker服务未运行
   - **解决步骤**：启动Docker服务

2. **现象**：沙箱创建失败
   - **可能原因**：镜像拉取失败
   - **解决步骤**：检查网络连接，配置Docker镜像加速

3. **现象**：SDK调用失败
   - **可能原因**：服务器未启动或配置错误
   - **解决步骤**：确认服务器运行，检查配置文件

## 信息缺失说明
更多详细信息请参考 [OpenSandbox官方文档](https://github.com/alibaba/OpenSandbox)。
