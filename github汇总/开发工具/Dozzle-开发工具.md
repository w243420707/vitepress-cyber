# Dozzle

## 作者或组织名
Amir Raminfar

## 项目类别
开发工具

## 核心痛点
查看Docker日志需要用命令行或复杂的监控工具

## 主要功能
- 小型轻量级的Docker日志查看器
- 实时日志查看
- 搜索和过滤功能
- 同时监控多个容器的日志
- 多个容器日志合并查看
- 深色和浅色主题
- 通过环境变量轻松配置
- 支持Docker Swarm、Docker Compose
- 支持身份认证
- Docker一键部署
- Kubernetes支持

## 项目亮点
- 用Go编写，只有一个二进制文件，非常小
- 内存占用低
- 界面简洁直观
- 实时日志查看
- 搜索和过滤功能
- 同时监控多个容器的日志
- 多个容器日志合并查看
- 深色和浅色主题
- 通过环境变量轻松配置
- 支持Docker Swarm、Docker Compose
- 支持身份认证
- Docker一键部署
- Kubernetes支持

## 荣誉信息
README/仓库信息中未明确说明

## 项目地址
https://github.com/amir20/dozzle [海外网络环境配置 →](/网络环境)

## 安装或部署教程

### 教程适用对象与环境范围
适用于使用Docker的开发者和运维人员，支持Docker环境

### 前置条件检查
1. 系统要求：支持Windows、macOS、Linux
2. Docker环境：已安装Docker
   - 检查命令：`docker --version`
   - 通过标准：Docker正常可用
3. 网络连接：可访问互联网

### 主路径：Docker一键部署

#### 步骤1：启动Dozzle
- 步骤目标：使用Docker启动Dozzle
- 执行位置：终端/命令行
- 完整命令：`docker run -d -p 8080:8080 -v /var/run/docker.sock:/var/run/docker.sock --name dozzle amir20/dozzle:latest`
- 成功标志：容器启动成功
- 失败处理：检查Docker环境，查看容器日志

#### 步骤2：访问Dozzle
- 步骤目标：在浏览器中访问Dozzle
- 执行位置：浏览器
- 访问地址：http://localhost:8080
- 成功标志：能看到Dozzle界面和Docker容器列表
- 失败处理：检查端口8080是否被占用，检查容器是否正常运行

### 安装成功验证
1. 访问地址：http://localhost:8080
2. 官方文档：https://dozzle.dev [海外网络环境配置 →](/网络环境)

### 常见错误排查
1. 现象：容器启动失败
   - 可能原因：端口占用或Docker socket挂载问题
   - 解决步骤：检查端口8080是否被占用，检查Docker socket权限
2. 现象：看不到容器列表
   - 可能原因：Docker socket未正确挂载
   - 解决步骤：确认容器启动命令中正确挂载了/var/run/docker.sock
3. 现象：无法查看日志
   - 可能原因：权限问题或容器未运行
   - 解决步骤：检查Docker权限，确认容器正在运行

### 信息缺失说明
如需深入了解详细配置和使用方法，可访问官方网站：https://dozzle.dev [海外网络环境配置 →](/网络环境)
