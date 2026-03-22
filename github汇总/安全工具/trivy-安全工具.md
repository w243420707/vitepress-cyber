# trivy

## 项目名称
trivy

## 作者或组织名
aquasecurity

## 项目类别
安全工具

## 核心痛点
开发者和运维人员需要多种工具才能完成全面的安全扫描，效率低下。

## 主要功能
全面多功能的安全扫描器，可扫描容器镜像、文件系统、Git仓库、虚拟机镜像、Kubernetes。可发现操作系统包和软件依赖中的已知漏洞（CVE）、基础设施即代码的配置问题、敏感信息泄露、软件许可证问题。支持大多数流行的编程语言、操作系统和平台。集成GitHub Actions、Kubernetes operator、VS Code插件等众多平台。

## 项目亮点
- 一个工具完成多种安全扫描
- 支持容器镜像、文件系统、Git仓库、Kubernetes等多种目标
- 可发现漏洞、配置问题、敏感信息、许可证问题
- 集成众多主流平台和工具
- Aqua Security开源项目

## 荣誉信息
README/仓库信息中未明确说明

## 项目地址
https://github.com/aquasecurity/trivy [海外网络环境配置 →](/网络环境)

## 安装或部署教程

### 教程适用对象与环境范围
本教程适用于想要使用Trivy进行安全扫描的开发者和运维人员。

### 前置条件检查

1. **检查操作系统**
   - 执行命令：无
   - 通过标准：macOS、Linux或Windows

### 主路径：使用Homebrew安装（macOS/Linux）

**步骤1：安装Trivy**
- 目标：通过Homebrew安装Trivy
- 位置：终端
- 命令：`brew install trivy`
- 成功标志：安装成功提示
- 失败处理：检查Homebrew是否正确安装

**步骤2：验证安装**
- 目标：确认Trivy安装成功
- 位置：终端
- 命令：`trivy --version`
- 成功标志：显示Trivy版本号
- 失败处理：重新安装

### 备选路径1：使用Docker

**步骤1：拉取镜像**
- 目标：获取Trivy Docker镜像
- 位置：终端
- 命令：`docker pull aquasec/trivy`
- 成功标志：镜像拉取成功
- 失败处理：检查Docker是否运行

**步骤2：运行扫描**
- 目标：使用Docker运行Trivy
- 位置：终端
- 命令：`docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image <镜像名>`
- 成功标志：扫描结果正常显示
- 失败处理：检查Docker权限

### 备选路径2：下载二进制文件

**步骤1：下载二进制文件**
- 目标：从GitHub Releases下载
- 位置：浏览器
- 操作：访问 https://github.com/aquasecurity/trivy/releases/latest/ 下载对应平台的二进制文件
- 成功标志：文件下载完成
- 失败处理：检查网络连接 [海外网络环境配置 →](/网络环境)

**步骤2：配置环境变量**
- 目标：将Trivy添加到PATH
- 位置：终端
- 操作：将下载的二进制文件移动到PATH目录，或添加到PATH
- 成功标志：可以直接运行trivy命令
- 失败处理：检查文件权限

### 安装成功验证

**扫描容器镜像**
- 命令：`trivy image python:3.4-alpine`
- 预期结果：显示镜像中的漏洞列表

**扫描文件系统**
- 命令：`trivy fs --scanners vuln,secret,misconfig ./`
- 预期结果：显示文件系统中的安全问题

### 常见错误排查

1. **数据库下载失败**
   - 可能原因：网络问题
   - 解决步骤：配置代理或使用离线数据库

2. **Docker扫描权限错误**
   - 可能原因：Docker socket权限
   - 解决步骤：使用sudo或添加用户到docker组

3. **扫描结果为空**
   - 可能原因：目标不存在或路径错误
   - 解决步骤：确认扫描目标正确

### 官方文档
- [Trivy Documentation](https://aquasecurity.github.io/trivy/) [海外网络环境配置 →](/网络环境)
- [Installation Guide](https://aquasecurity.github.io/trivy/latest/installation/) [海外网络环境配置 →](/网络环境)
