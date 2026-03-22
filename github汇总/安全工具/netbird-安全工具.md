# 项目名称
NetBird

# 作者或组织名
netbirdio

# 项目类别
安全工具

# 核心痛点
传统VPN配置复杂，需要打开端口、配置防火墙规则，且缺乏细粒度的访问控制

# 主要功能
- 将无配置的点对点专用网络和集中式访问控制系统结合
- 基于WireGuard的覆盖网络，自动连接机器
- 无需打开端口、复杂防火墙规则、VPN网关
- 细粒度访问策略，直观管理
- SSO & MFA支持、访问控制（组和规则）、活动日志
- 设备状态检查、IdP集成、私有DNS
- 支持Linux、Mac、Windows、Android、iOS、OpenWRT、Docker等几乎所有平台
- 有NetBird Cloud可以直接使用，也支持自托管

# 项目亮点
- 无配置，使用简单
- 基于WireGuard，安全高效
- 细粒度访问控制
- 企业级特性（SSO、MFA、审计日志等）
- 跨平台支持，几乎所有平台都支持
- 有云服务可以直接使用，也支持自托管

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/netbirdio/netbird [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于想使用NetBird Cloud的普通用户，或想自托管的有Docker和Linux使用经验的用户

## 前置条件检查（自托管）
1. **Docker检查**
   - 步骤目标：确认已安装Docker和Docker Compose
   - 执行位置：本机终端
   - 完整命令：`docker --version` 和 `docker-compose --version`
   - 成功标志：显示Docker和Docker Compose版本号
   - 失败处理：访问 [Docker官网](https://www.docker.com/) 安装

2. **基础设施要求**
   - 步骤目标：确认基础设施满足要求
   - 执行位置：无
   - 操作说明：需要Linux VM（至少1CPU、2GB内存）、公网IP、公网域名、TCP 80/443和UDP 3478端口开放
   - 成功标志：基础设施满足要求
   - 失败处理：准备符合要求的基础设施

## 主路径：使用NetBird Cloud（推荐）
### 步骤1：下载安装
- **步骤目标**：下载并安装NetBird
- **执行位置**：浏览器
- **操作说明**：访问 https://app.netbird.io/install 下载安装对应平台的客户端
- **成功标志**：客户端安装完成
- **失败处理**：参考官方安装文档

### 步骤2：注册登录
- **步骤目标**：注册并登录NetBird
- **执行位置**：NetBird客户端
- **操作说明**：使用Google、Microsoft、GitHub或邮箱注册登录
- **成功标志**：登录成功
- **失败处理**：检查网络连接

### 步骤3：添加机器
- **步骤目标**：添加更多机器到网络
- **执行位置**：NetBird管理界面
- **操作说明**：在管理界面添加更多机器
- **成功标志**：机器添加成功
- **失败处理**：参考官方文档

## 备选部署路径：自托管
### 步骤1：运行安装脚本
- **步骤目标**：运行自托管安装脚本
- **执行位置**：Linux服务器终端
- **完整命令**：
  ```bash
  export NETBIRD_DOMAIN=netbird.example.com; curl -fsSL https://github.com/netbirdio/netbird/releases/latest/download/getting-started.sh | bash
  ```
- **成功标志**：脚本执行完成
- **失败处理**：检查网络连接，确认域名和服务器配置

## 安装成功验证
- **检查方式**：访问NetBird管理界面
- **预期返回**：管理界面正常显示，可以管理机器和访问策略

## 常见错误排查
1. **现象**：机器无法连接
   - **可能原因**：网络问题、防火墙限制
   - **解决步骤**：检查网络连接，确认防火墙开放必要端口

2. **现象**：自托管安装失败
   - **可能原因**：基础设施不满足要求
   - **解决步骤**：确认基础设施满足要求

3. **现象**：访问策略不生效
   - **可能原因**：策略配置错误
   - **解决步骤**：检查访问策略配置

## 官方文档与补充入口
项目地址：https://github.com/netbirdio/netbird [海外网络环境配置 →](/网络环境)
官方文档：https://docs.netbird.io
NetBird Cloud：https://app.netbird.io
