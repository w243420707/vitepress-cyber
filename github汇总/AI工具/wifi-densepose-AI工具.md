# 项目名称
WiFi DensePose

# 作者或组织名
ruvnet

# 项目类别
AI工具

# 核心痛点
传统人体姿态识别需要摄像头或可穿戴设备，存在隐私泄露风险，且在某些场景下不适用

# 主要功能
- 利用环境WiFi信号实现无摄像头、无接触的人体姿态感知
- 支持DensePose全表面人体姿态估计
- 由WiPose、SenseFi、DensePose三个系统组成
- 支持实时姿态估计
- 提供Web Dashboard可视化展示

# 项目亮点
- 完全不需要摄像头或可穿戴设备
- 隐私保护好，无视觉记录
- 基于WiFi CSI（信道状态信息）技术
- 支持全表面人体姿态估计，不仅是骨骼点
- 应用场景广泛：智能健身、健康监测、智能家居、VR交互、游戏控制、康复训练、跌倒检测等

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/ruvnet/wifi-densepose [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于有Python使用经验的用户，支持Linux、macOS和Windows系统

## 前置条件检查
1. **Python版本检查**
   - 步骤目标：确认系统支持Python 3.8+
   - 执行位置：本机终端
   - 完整命令：`python --version` 或 `python3 --version`
   - 成功标志：输出显示Python 3.8或更高版本
   - 失败处理：版本过低请访问 [Python官网](https://www.python.org/downloads/) 安装

2. **WiFi硬件检查**
   - 步骤目标：确认网卡支持WiFi CSI采集
   - 执行位置：本机终端
   - 操作说明：不同网卡支持情况不同，Intel 5300、AX200等网卡通常支持
   - 成功标志：网卡型号在支持列表中
   - 失败处理：查看项目文档确认支持的网卡列表

## 主路径：安装与启动
README/仓库信息中未提供完整教程，以下为基于常见Python项目的通用步骤：

### 步骤1：克隆项目
- **步骤目标**：克隆项目代码
- **执行位置**：本机终端
- **完整命令**：
  ```bash
  git clone https://github.com/ruvnet/wifi-densepose.git
  cd wifi-densepose
  ```
- **成功标志**：项目克隆完成
- **失败处理**：检查网络连接

### 步骤2：安装依赖
- **步骤目标**：安装Python依赖
- **执行位置**：项目目录
- **完整命令**：
  ```bash
  pip install -r requirements.txt
  ```
- **成功标志**：依赖安装完成
- **失败处理：检查pip版本，使用国内镜像源加速**

## 安装成功验证
README/仓库信息中未提供明确的验证方法

## 常见错误排查
README/仓库信息中未提供常见错误排查信息

## 信息缺失说明
README/仓库信息中未提供完整的安装部署教程，更多详细信息请参考项目的README和文档。
