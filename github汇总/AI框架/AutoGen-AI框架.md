# AutoGen

## 作者或组织名
Microsoft

## 项目类别
AI框架

## 核心痛点
开发多代理AI应用门槛高，需要处理复杂的交互逻辑，缺乏统一的框架和工具链

## 主要功能
- 用于创建多代理AI应用的框架
- 支持代理自主行动或与人类协作
- 提供分层可扩展设计
- 支持.NET和Python跨语言开发
- 包含无代码GUI工具AutoGen Studio

## 项目亮点
- 由微软开发维护，生态系统完善
- 提供核心框架、开发者工具和应用方案
- 支持在不同抽象层级上使用，从高级API到底层组件
- 包含AgentChat API用于快速原型开发
- 包含Extensions API扩展能力
- 提供AutoGen Studio无代码GUI工具

## 荣誉信息
README/仓库信息中未明确说明

## 项目地址
https://github.com/microsoft/autogen [海外网络环境配置 →](/网络环境)

## 安装或部署教程

### 教程适用对象与环境范围
适用于想要开发多代理AI应用的开发者，支持Python 3.10或更高版本

### 前置条件检查
1. 系统要求：支持Windows、macOS、Linux
2. Python版本：Python 3.10或更高版本
   - 检查命令：`python --version`
   - 通过标准：版本号≥3.10
3. OpenAI API密钥（如使用OpenAI模型）
4. 网络连接（用于安装依赖和访问模型API）

### 主路径：安装与启动

#### 步骤1：安装AutoGen和OpenAI客户端
- 步骤目标：安装AutoGen框架和必要的依赖
- 执行位置：终端/命令行
- 完整命令：`pip install -U "autogen-agentchat" "autogen-ext[openai]"`
- 成功标志：命令执行完成，无错误提示
- 失败处理：检查Python版本是否符合要求，网络连接是否正常，使用`pip install --upgrade pip`更新pip后重试

#### 步骤2：（可选）安装AutoGen Studio（无代码GUI）
- 步骤目标：安装无代码GUI工具
- 执行位置：终端/命令行
- 完整命令：`pip install -U "autogenstudio"`
- 成功标志：命令执行完成，无错误提示
- 失败处理：检查Python版本是否符合要求，网络连接是否正常

#### 步骤3：配置OpenAI API密钥
- 步骤目标：配置OpenAI API密钥以便使用OpenAI模型
- 执行位置：终端/命令行
- 完整命令（macOS/Linux）：`export OPENAI_API_KEY="sk-你的密钥"`
- 完整命令（Windows PowerShell）：`$env:OPENAI_API_KEY="sk-你的密钥"`
- 成功标志：环境变量设置成功
- 失败处理：确保替换为真实的API密钥，检查密钥格式是否正确

#### 步骤4：（可选）启动AutoGen Studio
- 步骤目标：启动无代码GUI界面
- 执行位置：终端/命令行
- 完整命令：`autogenstudio ui --port 8080 --appdir ./my-app`
- 成功标志：服务启动，可在浏览器访问http://localhost:8080
- 失败处理：检查端口8080是否被占用，可修改为其他端口

### 安装成功验证
1. 访问地址：http://localhost:8080（如启动了AutoGen Studio）
2. 检查命令：运行简单的Python脚本测试导入
   ```python
   from autogen_agentchat.agents import AssistantAgent
   print("导入成功")
   ```
3. 预期返回：无错误，打印"导入成功"

### 常见错误排查
1. 现象：Python版本不兼容
   - 可能原因：Python版本低于3.10
   - 解决步骤：升级Python到3.10或更高版本
2. 现象：pip安装失败
   - 可能原因：网络问题或pip版本过旧
   - 解决步骤：更新pip（`pip install --upgrade pip`），检查网络连接，或使用国内镜像源
3. 现象：API密钥无效
   - 可能原因：密钥错误或格式不正确
   - 解决步骤：确认API密钥正确，检查环境变量设置是否成功

### 备选部署路径
README/仓库信息中未提供完整备选方案

### 信息缺失说明
README中未提供Docker部署方案，也未详细说明所有可用的扩展功能，如需深入了解可访问官方文档：https://github.com/microsoft/autogen [海外网络环境配置 →](/网络环境)
