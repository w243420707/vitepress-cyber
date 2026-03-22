# Nginx Proxy Manager

## 作者或组织名
Nginx Proxy Manager

## 项目类别
运维工具

## 核心痛点
配置Nginx反向代理需要自己写配置文件，处理SSL证书申请和续期特别麻烦

## 主要功能
- 基于Docker的Nginx反向代理管理工具
- 友好的Web界面
- 支持HTTP和TCP转发
- 支持自定义Nginx配置
- 自动申请和续期Let's Encrypt SSL证书
- 支持多个用户和访问控制
- 安全日志
- Docker Compose一键部署
- Docker镜像可用

## 项目亮点
- 友好的Web界面，可视化操作，不用记命令
- 支持HTTP和TCP转发
- 支持自定义Nginx配置
- 自动申请和续期Let's Encrypt SSL证书，无需手动操作
- 支持多个用户和访问控制
- 安全日志功能
- 部署超简单，Docker Compose一条命令就能搞定
- Docker镜像直接可用
- 最受欢迎的Nginx反向代理管理工具之一

## 荣誉信息
README/仓库信息中未明确说明

## 项目地址
https://github.com/NginxProxyManager/nginx-proxy-manager [海外网络环境配置 →](/网络环境)

## 安装或部署教程

### 教程适用对象与环境范围
适用于运维人员、自托管爱好者和家庭服务器用户，支持Docker环境

### 前置条件检查
1. 系统要求：支持Windows、macOS、Linux
2. Docker环境：已安装Docker和Docker Compose
   - 检查命令：`docker --version` 和 `docker-compose --version`
   - 通过标准：Docker正常可用
3. 网络连接：可访问互联网
4. 域名：需要有域名指向服务器（用于SSL证书）

### 主路径：Docker Compose部署

#### 步骤1：创建docker-compose.yml
- 步骤目标：创建Docker Compose配置文件
- 执行位置：项目目录
- 完整内容：创建docker-compose.yml文件，包含Nginx Proxy Manager服务配置
- 成功标志：配置文件创建完成
- 失败处理：检查Docker Compose配置语法

#### 步骤2：启动服务
- 步骤目标：启动Nginx Proxy Manager
- 执行位置：项目目录
- 完整命令：`docker-compose up -d`
- 成功标志：容器启动成功
- 失败处理：检查Docker环境，查看容器日志

#### 步骤3：访问管理界面
- 步骤目标：访问Web管理界面
- 执行位置：浏览器
- 访问地址：http://[服务器IP]:81
- 默认邮箱：admin@example.com
- 默认密码：changeme
- 成功标志：能看到登录界面
- 失败处理：检查端口81是否被占用，检查容器是否正常运行

### 安装成功验证
1. 访问地址：http://[服务器IP]:81
2. 官方文档：https://nginxproxymanager.com [海外网络环境配置 →](/网络环境)

### 常见错误排查
1. 现象：容器启动失败
   - 可能原因：端口占用或配置错误
   - 解决步骤：检查端口80、443、81是否被占用，检查docker-compose.yml配置
2. 现象：SSL证书申请失败
   - 可能原因：域名解析问题或网络问题
   - 解决步骤：确认域名正确解析到服务器，检查网络连接
3. 现象：无法访问管理界面
   - 可能原因：防火墙或端口问题
   - 解决步骤：检查防火墙设置，确认端口81未被占用

### 信息缺失说明
如需深入了解详细配置和使用方法，可访问官方网站：https://nginxproxymanager.com [海外网络环境配置 →](/网络环境)
