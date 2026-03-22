# 项目名称
Douyin_TikTok_Download_API

# 作者或组织名
Evil0ctal

# 项目类别
视频工具

# 核心痛点
需要一个能够下载抖音和TikTok无水印视频的工具，同时提供API接口方便开发者集成。

# 主要功能
- Web端批量解析抖音和TikTok视频链接
- 在线下载无水印视频或图集
- 提供丰富的API接口
- 支持iOS快捷指令无水印下载
- 数据爬取API

# 项目亮点
- 基于PyWebIO、FastAPI、HTTPX，快速异步
- 使用X-Bogus算法和A-Bogus算法应对平台风控
- 提供多种部署方式：一键部署脚本和Docker部署
- 支持批量解析和下载
- 开源免费，采用Apache-2.0许可证

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/Evil0ctal/Douyin_TikTok_Download_API [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于需要下载抖音和TikTok无水印视频的用户，支持Linux和Docker环境。

## 前置条件检查
1. 系统要求：Linux系统（推荐Ubuntu 20.04 LTS）或安装了Docker的系统
2. 网络要求：能够访问抖音和TikTok
3. 权限要求：有足够的权限执行部署脚本或管理Docker容器

## 主路径：安装与启动

### 方式一：Linux一键部署
1. **下载并运行安装脚本**
   - 执行位置：Linux终端
   - 完整命令：`wget -O install.sh https://raw.githubusercontent.com/Evil0ctal/Douyin_TikTok_Download_API/main/bash/install.sh && sudo bash install.sh`
   - 成功标志：脚本执行完成，服务启动成功
   - 失败处理：检查网络连接，确保系统满足要求

2. **控制服务**
   - 启动服务：`sudo systemctl start Douyin_TikTok_Download_API.service`
   - 停止服务：`sudo systemctl stop Douyin_TikTok_Download_API.service`
   - 设置开机自启：`sudo systemctl enable Douyin_TikTok_Download_API.service`
   - 取消开机自启：`sudo systemctl disable Douyin_TikTok_Download_API.service`

3. **更新项目**
   - 执行位置：项目bash目录
   - 完整命令：`cd /www/wwwroot/Douyin_TikTok_Download_API/bash && sudo bash update.sh`
   - 成功标志：更新完成，服务重启成功
   - 失败处理：检查网络连接，确保虚拟环境正常

### 方式二：Docker部署
1. **拉取Docker镜像**
   - 执行位置：终端
   - 完整命令：`docker pull evil0ctal/douyin_tiktok_download_api:latest`
   - 成功标志：镜像拉取完成，无错误信息
   - 失败处理：检查Docker是否正常运行，网络连接是否通畅

2. **运行Docker容器**
   - 执行位置：终端
   - 完整命令：`docker run -d --name douyin_tiktok_api -p 80:80 evil0ctal/douyin_tiktok_download_api`
   - 成功标志：容器启动成功，无错误信息
   - 失败处理：检查端口是否被占用，Docker是否正常运行

3. **验证容器运行状态**
   - 执行位置：终端
   - 完整命令：`docker ps`
   - 成功标志：容器状态为运行中
   - 失败处理：查看容器日志，排查错误原因

4. **停止并移除容器**
   - 停止容器：`docker stop douyin_tiktok_api`
   - 移除容器：`docker rm douyin_tiktok_api`

## 配置文件修改
项目的大部分配置可以在以下几个目录中的config.yaml文件进行修改：
- /crawlers/douyin/web/config.yaml
- /crawlers/tiktok/web/config.yaml
- /crawlers/tiktok/app/config.yaml

## 安装成功验证
- 访问地址：http://localhost 或 http://服务器IP
- 预期返回：Web界面或API文档

## 常见错误排查
1. **API无法使用**
   - 现象：API返回错误或无响应
   - 可能原因：Cookie过期或风控
   - 解决步骤：获取新的Cookie并更新配置文件

2. **Docker容器启动失败**
   - 现象：执行docker run命令后容器状态为exited
   - 可能原因：端口被占用、配置错误
   - 解决步骤：检查端口占用情况，修改端口映射

3. **TikTok视频下载失败**
   - 现象：TikTok视频无法下载
   - 可能原因：直接访问TikTok视频链接会出现HTTP 403错误
   - 解决步骤：使用项目API中的/api/download接口进行下载

## 备选部署路径
README/仓库信息中未提供其他部署方式。

## 信息缺失说明
README/仓库信息中未提供完整的配置选项说明，上述教程基于README中提到的部署方式整理。