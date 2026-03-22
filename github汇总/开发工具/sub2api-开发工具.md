# 项目名称
Sub2API

# 作者或组织名
Wei-Shaw

# 项目类别
开发工具

# 核心痛点
AI产品订阅的API配额难以安全地分享给多个用户，缺乏细粒度的管理和计费功能

# 主要功能
- AI API网关平台
- 分发和管理AI产品订阅的API配额
- 多账号管理（OAuth、API Key）
- API Key分发和管理
- Token级使用追踪和成本计算
- 智能调度和会话粘性
- 并发控制和速率限制
- 管理后台
- 支持Docker一键部署

# 项目亮点
- 无需直接分享上游API密钥
- 细粒度的访问控制
- Token级精确计费
- 智能调度和负载均衡
- 部署简单，支持多种方式
- Web管理界面

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/Wei-Shaw/sub2api [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于有Docker或Linux使用经验的用户

## 前置条件检查
1. **Docker检查（Docker方式）**
   - 步骤目标：确认已安装Docker和Docker Compose
   - 执行位置：本机终端
   - 完整命令：`docker --version` 和 `docker-compose --version`
   - 成功标志：显示Docker和Docker Compose版本号
   - 失败处理：访问 [Docker官网](https://www.docker.com/) 安装

2. **系统要求（脚本方式）**
   - 步骤目标：确认Linux系统环境
   - 执行位置：本机终端
   - 操作说明：需要Linux服务器（amd64或arm64）、PostgreSQL 15+、Redis 7+、Root权限
   - 成功标志：环境满足要求
   - 失败处理：准备符合要求的服务器环境

## 主路径：Docker Compose部署（推荐）
### 步骤1：创建部署目录
- **步骤目标**：创建部署目录
- **执行位置**：本机终端
- **完整命令**：
  ```bash
  mkdir -p sub2api-deploy && cd sub2api-deploy
  ```
- **成功标志**：目录创建成功
- **失败处理**：检查目录权限

### 步骤2：下载部署脚本
- **步骤目标**：下载并运行部署准备脚本
- **执行位置**：部署目录
- **完整命令**：
  ```bash
  curl -sSL https://raw.githubusercontent.com/Wei-Shaw/sub2api/main/deploy/docker-deploy.sh | bash
  ```
- **成功标志**：脚本执行完成
- **失败处理**：检查网络连接

### 步骤3：启动服务
- **步骤目标**：启动Docker Compose服务
- **执行位置**：部署目录
- **完整命令**：
  ```bash
  docker-compose up -d
  ```
- **成功标志**：服务启动成功
- **失败处理**：查看Docker日志排查错误

## 安装成功验证
- **访问地址**：http://YOUR_SERVER_IP:8080
- **预期返回**：Sub2API管理界面正常显示

## 常见错误排查
1. **现象**：服务启动失败
   - **可能原因**：端口被占用、配置错误
   - **解决步骤**：检查端口占用，查看.env配置

2. **现象**：无法访问管理界面
   - **可能原因**：防火墙问题
   - **解决步骤**：检查防火墙设置，开放8080端口

3. **现象**：上游API连接失败
   - **可能原因**：API密钥配置错误、网络问题
   - **解决步骤**：检查API密钥配置，确认网络能访问上游服务

## 备选部署路径
### 脚本安装（Linux）
```bash
curl -sSL https://raw.githubusercontent.com/Wei-Shaw/sub2api/main/deploy/install.sh | sudo bash
```

### 从源码构建
需要Go 1.21+、Node.js 18+、PostgreSQL 15+、Redis 7+

## 官方文档与补充入口
项目地址：https://github.com/Wei-Shaw/sub2api [海外网络环境配置 →](/网络环境)
