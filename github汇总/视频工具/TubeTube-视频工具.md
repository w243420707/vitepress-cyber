# 项目名称
TubeTube

# 作者或组织名
MattBlackOnly

# 项目类别
视频工具

# 核心痛点
需要一个简单易用的YouTube视频下载工具，支持多线程下载、自定义格式和位置，以及移动端访问。

# 主要功能
- 多线程下载：快速、同时进行的下载
- 自定义位置和格式：基于YAML的设置
- 移动端优化：专为小屏幕设计
- 下载选项：选择音频或视频
- 直播视频支持：支持多个直播流

# 项目亮点
- 简单易用：通过Docker Compose快速部署
- 高度可配置：通过YAML文件和环境变量进行自定义
- 移动端友好：针对小屏幕进行了优化
- 支持字幕：可以写入文件或嵌入视频
- 开源免费：完全免费使用

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/MattBlackOnly/TubeTube [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于需要下载YouTube视频的用户，支持Docker环境。

## 前置条件检查
1. 系统要求：安装了Docker和Docker Compose
2. 网络要求：能够访问YouTube
3. 权限要求：有足够的权限创建和管理Docker容器

## 主路径：安装与启动

1. **创建docker-compose.yml文件**
   - 执行位置：本地目录
   - 完整命令：创建包含以下内容的docker-compose.yml文件
   ```yaml
   services:
     tubetube:
       image: ghcr.io/mattblackonly/tubetube:latest
       container_name: tubetube
       ports:
         - 6543:6543
       volumes:
         - /path/to/general:/data/General
         - /path/to/music:/data/Music
         - /path/to/podcasts:/data/Podcast
         - /path/to/videos:/data/Video
         - /path/to/config:/config
         - /path/to/temp:/temp # Optional. Temp files are deleted on startup.
         - /etc/localtime:/etc/localtime:ro # Optional. Sync time with host.
         - /etc/timezone:/etc/timezone:ro # Optional. Sync timezone with host.
       environment:
         - PUID=1000
         - PGID=1000
       restart: unless-stopped
   ```
   - 成功标志：文件创建成功
   - 失败处理：检查文件格式是否正确

2. **创建settings.yaml文件**
   - 执行位置：/path/to/config目录
   - 完整命令：创建包含以下内容的settings.yaml文件
   ```yaml
   General:
     audio_ext: m4a
     audio_format_id: '140'
     video_ext: mp4
     video_format_id: '625'
   Music:
     audio_ext: mp3
     audio_format_id: '140'
   Podcast:
     audio_ext: m4a
     audio_format_id: '140'
   Video:
     audio_format_id: '140'
     video_ext: mp4
     video_format_id: '625'
   ```
   - 成功标志：文件创建成功
   - 失败处理：检查文件格式是否正确

3. **启动容器**
   - 执行位置：docker-compose.yml所在目录
   - 完整命令：`docker-compose up -d`
   - 成功标志：容器启动成功，无错误信息
   - 失败处理：检查Docker是否正常运行，配置文件是否正确

## 安装成功验证
- 访问地址：http://localhost:6543
- 预期返回：TubeTube的Web界面

## 常见错误排查
1. **容器启动失败**
   - 现象：执行docker-compose up -d后容器状态为exited
   - 可能原因：配置文件错误、权限问题
   - 解决步骤：检查docker-compose.yml和settings.yaml文件，确保路径正确，权限设置合理

2. **无法访问Web界面**
   - 现象：访问http://localhost:6543无响应
   - 可能原因：端口映射错误、容器未正常启动
   - 解决步骤：检查端口映射是否正确，查看容器日志

3. **下载失败**
   - 现象：提交下载任务后失败
   - 可能原因：网络问题、YouTube限制
   - 解决步骤：检查网络连接，尝试使用代理

## 备选部署路径
README/仓库信息中未提供其他部署方式。

## 信息缺失说明
README/仓库信息中未提供完整的配置选项说明，上述教程基于README中提到的配置方式整理。