# 项目名称
DataGouv MCP Server

# 作者或组织名
datagouv

# 项目类别
开发工具

# 核心痛点
使用法国国家开放数据平台data.gouv.fr需要手动浏览网站，效率低下

# 主要功能
- Model Context Protocol服务器
- 让AI聊天机器人可以直接搜索、探索和分析data.gouv.fr的数据集
- 支持多种工具：搜索数据集、获取详细信息、列出资源、查询数据、搜索数据服务、获取指标统计
- 提供公共实例，免费使用，无需API密钥
- 支持多种客户端：Claude Code、Claude Desktop、Cursor、VS Code、ChatGPT、Gemini CLI等

# 项目亮点
- 让AI直接查询开放数据，无需手动浏览
- 功能全面，支持多种操作
- 提供公共实例，免费使用
- 支持多种主流AI客户端
- 配置简单

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/datagouv/datagouv-mcp [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于想使用公共实例的普通用户，或想自托管的有Docker使用经验的用户

## 前置条件检查（自托管）
1. **Docker检查**
   - 步骤目标：确认已安装Docker和Docker Compose
   - 执行位置：本机终端
   - 完整命令：`docker --version` 和 `docker-compose --version`
   - 成功标志：显示Docker和Docker Compose版本号
   - 失败处理：访问 [Docker官网](https://www.docker.com/) 安装

## 主路径：使用公共实例（推荐）
### 步骤1：配置客户端
- **步骤目标**：配置AI客户端连接公共实例
- **执行位置**：根据不同客户端配置
- **操作说明**：
  - Claude Code：`claude mcp add --transport http datagouv https://mcp.data.gouv.fr/mcp`
  - Claude Desktop：在配置文件中添加相应配置
  - 其他客户端：参考项目文档配置
- **成功标志**：客户端配置完成
- **失败处理**：参考项目文档的详细配置说明

## 备选部署路径：自托管
### 步骤1：克隆项目
- **步骤目标**：克隆项目代码
- **执行位置**：本机终端
- **完整命令**：
  ```bash
  git clone https://github.com/datagouv/datagouv-mcp.git
  cd datagouv-mcp
  ```
- **成功标志**：项目克隆完成
- **失败处理**：检查网络连接

### 步骤2：启动服务
- **步骤目标**：启动Docker Compose服务
- **执行位置**：项目目录
- **完整命令**：
  ```bash
  docker compose up -d
  ```
- **成功标志**：服务启动成功
- **失败处理**：查看Docker日志排查错误

## 安装成功验证
- **检查命令**：访问健康检查端点 http://localhost:8000/health
- **预期返回**：`{"status":"ok","timestamp":"..."}`

## 常见错误排查
1. **现象**：客户端连接失败
   - **可能原因**：网络问题、配置错误
   - **解决步骤**：检查网络连接，确认配置正确

2. **现象**：工具调用失败
   - **可能原因**：MCP服务器问题
   - **解决步骤**：查看服务器日志

3. **现象**：数据查询超时
   - **可能原因**：data.gouv.fr响应慢
   - **解决步骤**：稍后重试

## 官方文档与补充入口
项目地址：https://github.com/datagouv/datagouv-mcp [海外网络环境配置 →](/网络环境)
