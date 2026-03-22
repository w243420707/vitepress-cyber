# pentagi

## 项目名称
pentagi

## 作者或组织名
vxcontrol

## 项目类别
安全工具

## 核心痛点
传统渗透测试需要大量人工操作和专业知识，门槛高、效率低。

## 主要功能
AI驱动的自动化渗透测试工具，在隔离的Docker沙箱环境中自主执行安全测试。内置20多种专业安全工具（nmap、metasploit、sqlmap等）。支持智能记忆系统，长期存储研究结果。集成知识图谱（Neo4j）、网络情报收集、外部搜索系统。支持10多种大语言模型提供商（OpenAI、Anthropic、Google AI、Ollama、DeepSeek等）。提供REST和GraphQL API，支持Bearer令牌认证。包含Grafana/Prometheus监控和详细报告生成。

## 项目亮点
- 完全自主的AI驱动渗透测试
- Docker沙箱隔离，安全可控
- 内置20多种专业安全工具
- 智能记忆系统和知识图谱
- 支持多种LLM提供商
- 可完全本地化部署
- 提供完整的REST和GraphQL API

## 荣誉信息
README/仓库信息中未明确说明

## 项目地址
https://github.com/vxcontrol/pentagi [海外网络环境配置 →](/网络环境)

## 安装或部署教程

### 教程适用对象与环境范围
本教程适用于想要部署和使用PentAGI进行自动化渗透测试的安全专业人员。

### 前置条件检查

1. **检查Docker是否安装**
   - 执行命令：`docker -v`
   - 通过标准：显示Docker版本号

2. **检查Docker Compose是否安装**
   - 执行命令：`docker compose version`
   - 通过标准：显示Docker Compose版本号

3. **检查系统资源**
   - 执行命令：无命令行检查
   - 通过标准：至少8GB内存，20GB磁盘空间

### 主路径：Docker Compose部署

**步骤1：克隆项目**
- 目标：获取项目源码
- 位置：本地目录
- 命令：`git clone https://github.com/vxcontrol/pentagi.git`
- 成功标志：项目目录创建成功
- 失败处理：检查网络连接 [海外网络环境配置 →](/网络环境)

**步骤2：配置环境变量**
- 目标：设置API密钥等配置
- 位置：项目目录
- 操作：复制环境变量模板并编辑
- 命令：`cp .env.example .env`
- 成功标志：.env文件创建成功
- 失败处理：确认文件存在

**步骤3：启动服务**
- 目标：启动所有服务容器
- 位置：项目目录
- 命令：`docker compose up -d`
- 成功标志：所有容器启动成功
- 失败处理：检查Docker服务是否运行

**步骤4：访问Web界面**
- 目标：打开PentAGI Web界面
- 位置：浏览器
- 操作：访问 http://localhost:8080
- 成功标志：Web界面正常显示
- 失败处理：检查端口是否被占用

### 安装成功验证
- 所有Docker容器正常运行（docker ps查看）
- Web界面可以正常访问
- 可以创建新的渗透测试任务

### 常见错误排查

1. **Docker容器启动失败**
   - 可能原因：端口冲突或资源不足
   - 解决步骤：检查端口占用，增加系统资源

2. **API连接失败**
   - 可能原因：API密钥未配置或无效
   - 解决步骤：检查.env文件中的API密钥配置

3. **Web界面无法访问**
   - 可能原因：端口被占用或防火墙阻止
   - 解决步骤：修改端口映射或开放防火墙端口

### 官方文档
- [PentAGI Documentation](https://github.com/vxcontrol/pentagi) [海外网络环境配置 →](/网络环境)
