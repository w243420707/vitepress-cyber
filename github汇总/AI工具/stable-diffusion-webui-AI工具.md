# 项目名称
Stable Diffusion WebUI

# 作者或组织名
AUTOMATIC1111

# 项目类别
AI工具

# 核心痛点
Stable Diffusion官方使用复杂，需要命令行操作，普通用户难以上手，且功能分散

# 主要功能
- 基于Gradio库的Web界面
- 原始txt2img和img2img模式
- 一键安装运行脚本
- 外扩、内补、颜色草图、提示词矩阵
- Stable Diffusion放大
- 注意力语法，指定模型关注部分
- Textual Inversion训练（8GB显存可用）
- Extras标签页：GFPGAN、CodeFormer、RealESRGAN、SwinIR、LDSR等
- 4GB显卡支持（2GB也可用）
- 生成参数保存到图片（PNG chunks、EXIF）
- 可拖拽恢复生成参数
- 多种采样方法选择
- 可中断处理
- 负提示词、样式保存、CLIP询问器
- 提示词编辑、批量处理、高分辨率修复
- 检查点合并、自定义脚本
- xformers加速、API支持

# 项目亮点
- 功能最全的Stable Diffusion Web界面
- 一键安装，使用简单
- 4GB显卡就能跑，门槛低
- 活跃的社区，大量扩展插件
- 完全免费开源

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/AUTOMATIC1111/stable-diffusion-webui [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于有Windows、Linux或macOS使用经验的用户

## 前置条件检查
1. **Python检查**
   - 步骤目标：确认已安装Python 3.10.6
   - 执行位置：本机终端
   - 完整命令：`python --version`
   - 成功标志：显示Python 3.10.6
   - 失败处理：访问 [Python官网](https://www.python.org/downloads/release/python-3106/) 安装

2. **Git检查**
   - 步骤目标：确认已安装Git
   - 执行位置：本机终端
   - 完整命令：`git --version`
   - 成功标志：显示Git版本号
   - 失败处理：访问 [Git官网](https://git-scm.com/) 安装

## 主路径：Windows一键安装（推荐）
### 步骤1：下载并解压
- **步骤目标**：下载并解压一键安装包
- **执行位置**：浏览器
- **操作说明**：从v1.0.0-pre下载sd.webui.zip并解压
- **成功标志**：解压完成
- **失败处理**：检查网络连接

### 步骤2：更新并运行
- **步骤目标**：更新并运行
- **执行位置**：解压目录
- **完整命令**：
  ```batch
  update.bat
  run.bat
  ```
- **成功标志**：WebUI启动成功
- **失败处理**：查看错误日志

## 备选路径：Windows手动安装
### 步骤1：安装Python和Git
- **步骤目标**：安装Python 3.10.6和Git
- **执行位置**：浏览器
- **操作说明**：安装Python 3.10.6时勾选"Add Python to PATH"
- **成功标志**：安装完成
- **失败处理**：参考官方安装指南

### 步骤2：克隆项目
- **步骤目标**：克隆项目代码
- **执行位置**：本机终端
- **完整命令**：
  ```bash
  git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
  ```
- **成功标志**：项目克隆完成
- **失败处理**：检查网络连接

### 步骤3：运行
- **步骤目标**：运行WebUI
- **执行位置**：项目目录
- **完整命令**：
  ```batch
  webui-user.bat
  ```
- **成功标志**：WebUI启动成功
- **失败处理**：查看错误日志

## 安装成功验证
- **访问地址**：http://localhost:7860
- **预期返回**：Stable Diffusion WebUI界面正常显示

## 常见错误排查
1. **现象**：显存不足
   - **可能原因**：配置过高
   - **解决步骤**：降低分辨率、使用低显存模式、添加--lowvram参数

2. **现象**：依赖安装失败
   - **可能原因**：网络问题
   - **解决步骤**：使用国内镜像源

3. **现象**：模型加载失败
   - **可能原因**：模型路径错误
   - **解决步骤**：检查模型文件是否在正确目录

## 信息缺失说明
更多详细信息请参考 [项目Wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki)。
