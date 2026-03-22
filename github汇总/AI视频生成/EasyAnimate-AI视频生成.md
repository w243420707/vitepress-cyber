# 项目名称
EasyAnimate

# 作者或组织名
阿里巴巴PAI团队

# 项目类别
AI视频生成

# 核心痛点
视频生成门槛高、专业设备要求高、生成效果不稳定、缺少易用工具

# 主要功能
- 文本到视频生成
- 图像到视频生成
- 视频到视频生成
- 控制视频生成（Canny、Pose、Depth、轨迹控制、相机控制等）
- 支持多种分辨率（512、768、1024）
- 中英文双语预测
- 支持模型训练（VAE、DiT、Lora）

# 项目亮点
- 阿里巴巴PAI团队开发，质量可靠
- 最新V5.1版本使用Qwen2 VL作为文本编码器
- 使用Flow作为采样方法
- 支持多种控制方式
- 中英文双语支持
- 已集成到Diffusers
- 支持多种GPU显存配置

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/aigc-apps/EasyAnimate [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于想要使用EasyAnimate进行视频生成的开发者，支持Windows和Linux，需要NVIDIA GPU。

## 前置条件检查
1. 系统要求：Windows 10或Linux（Ubuntu 20.04、CentOS）
2. Python版本：Python 3.10或3.11
3. PyTorch版本：torch 2.2.0
4. CUDA版本：11.8或12.1
5. CUDNN版本：8+
6. GPU要求：NVIDIA GPU，16GB显存起步，推荐24GB以上
7. 磁盘空间：约60GB可用空间

## 主路径：Docker安装（推荐）

### 步骤1：拉取Docker镜像
**步骤目标**：获取EasyAnimate的Docker镜像
**执行位置**：命令行终端
**完整命令或操作**：运行 `docker pull mybigpai-public-registry.cn-beijing.cr.aliyuncs.com/easycv/torch_cuda:easyanimate`
**成功标志**：镜像拉取完成
**失败处理**：检查Docker是否正常运行

### 步骤2：启动Docker容器
**步骤目标**：启动EasyAnimate的Docker容器
**执行位置**：命令行终端
**完整命令或操作**：运行 `docker run -it -p 7860:7860 --network host --gpus all --security-opt seccomp:unconfined --shm-size 200g mybigpai-public-registry.cn-beijing.cr.aliyuncs.com/easycv/torch_cuda:easyanimate`
**成功标志**：容器启动成功并进入容器
**失败处理**：检查NVIDIA Docker是否安装

### 步骤3：克隆代码
**步骤目标**：获取EasyAnimate代码
**执行位置**：Docker容器内
**完整命令或操作**：运行 `git clone https://github.com/aigc-apps/EasyAnimate.git && cd EasyAnimate`
**成功标志**：代码克隆完成
**失败处理**：检查网络连接

### 步骤4：下载模型权重
**步骤目标**：获取预训练模型权重
**执行位置**：Docker容器内
**完整命令或操作**：创建models目录，从Hugging Face或ModelScope下载权重
**成功标志**：权重下载完成
**失败处理**：检查网络连接

### 步骤5：运行推理
**步骤目标**：开始使用EasyAnimate生成视频
**执行位置**：Docker容器内
**完整命令或操作**：运行Python脚本或启动Gradio WebUI
**成功标志**：推理成功运行，生成视频
**失败处理**：检查显存是否足够

## 安装成功验证
运行推理命令，成功生成视频文件，或访问Gradio WebUI界面正常显示。

## 常见错误排查
1. **现象**：显存不足
   - **可能原因**：GPU显存不够
   - **解决步骤**：使用model_cpu_offload或model_cpu_offload_and_qfloat8选项

2. **现象**：模型权重下载失败
   - **可能原因**：网络问题
   - **解决步骤**：参考 [海外网络环境配置 →](/网络环境)，或使用ModelScope镜像

3. **现象**：不支持bfloat16
   - **可能原因**：GPU不支持（如2080ti、V100）
   - **解决步骤**：将weight_dtype改为torch.float16

## 备选部署路径：本地安装
如Docker不适用，可参考README中的本地安装指南进行安装。

## 信息缺失说明
README提供了较为完整的安装指引。
