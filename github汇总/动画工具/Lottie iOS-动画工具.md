# 项目名称
Lottie iOS

# 作者或组织名
Airbnb

# 项目类别
动画工具

# 核心痛点
传统移动应用中，设计师制作好复杂动画后，工程师需要手动用代码重写动画效果，耗时且难以保证效果一致性；同时不同平台需要分别实现，增加开发成本和维护难度。

# 主要功能
- 跨平台支持iOS、macOS、tvOS和visionOS
- 原生渲染After Effects导出的bodymovin JSON格式矢量动画
- 支持多种安装方式：Swift Package Manager、CocoaPods、Carthage
- 动画控制功能：播放、缩放、循环、加速、减速、反向播放
- 交互式 scrub 拖动进度条控制
- 支持播放动画片段
- 运行时动态修改动画属性（颜色、位置等关键帧值）
- 隐私友好，不收集任何数据
- 提供隐私清单支持

# 项目亮点
- 设计师和工程师协作更高效，设计师做的动画可直接在应用中使用
- 基于JSON的动画文件体积小但复杂度高
- 提供专门优化的小体积版本(lottie-spm)供快速下载
- 支持Xcode签名验证，安全性有保障
- 完整的单元测试和快照测试体系

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/airbnb/lottie-ios [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于iOS、macOS、tvOS或visionOS开发者，需要在应用中集成矢量动画的场景。

## 前置条件检查
1. Xcode版本：需要支持当前Apple官方App Store提交要求的最低Swift/Xcode版本
2. 项目类型：iOS、macOS、tvOS或visionOS应用项目
3. 依赖管理：可选择Swift Package Manager、CocoaPods或Carthage任一方式

## 主路径：Swift Package Manager安装（推荐）

### 步骤1：添加包依赖
步骤目标：在Xcode项目中添加Lottie依赖
执行位置：Xcode IDE
完整命令或操作：
在Xcode中，选择「File」→「Add Packages...」
输入URL：https://github.com/airbnb/lottie-spm.git
成功标志：Xcode成功加载包信息并显示版本选择
失败处理：检查网络连接，确认URL正确，或尝试使用主仓库地址

### 步骤2：选择版本
步骤目标：选择适合项目的Lottie版本
执行位置：Xcode包添加界面
完整命令或操作：选择从4.5.2版本开始的合适版本
成功标志：版本选择完成，点击「Add Package」
失败处理：查看Swift Package Index了解支持的Swift版本

### 步骤3：导入使用
步骤目标：在代码中导入并使用Lottie
执行位置：项目源代码文件
完整命令或操作：
```swift
import Lottie
```
成功标志：编译无错误，可正常使用Lottie相关API
失败处理：确认包已正确添加到目标中，检查Build Settings

## 备选部署路径

### 备选路径1：CocoaPods安装

步骤目标：使用CocoaPods安装Lottie
执行位置：项目根目录终端
完整命令或操作：
1. 在Podfile中添加：`pod 'lottie-ios'`
2. 运行：`pod install`
成功标志：pod install成功执行，生成.xcworkspace文件
失败处理：更新CocoaPods版本，检查Ruby环境

### 备选路径2：Carthage安装

步骤目标：使用Carthage安装Lottie
执行位置：项目根目录终端
完整命令或操作：
1. 在Cartfile中添加：`github "airbnb/lottie-ios" "master"`
2. 运行：`carthage update`
3. 在应用目标「General」选项卡的「Linked Frameworks and Libraries」部分，拖放Carthage/Build/iOS目录中的lottie-ios.framework
成功标志：framework成功添加到项目中
失败处理：检查Carthage版本，确认Xcode命令行工具已安装

### 备选路径3：直接包含源码

步骤目标：直接克隆仓库并包含项目
执行位置：项目目录
完整命令或操作：
克隆仓库：`git clone https://github.com/airbnb/lottie-ios.git`
将Lottie.xcodeproj包含到项目中
成功标志：项目可正常编译
失败处理：确认项目结构正确，检查依赖关系

## 安装成功验证
1. 在代码中导入Lottie模块，编译无错误
2. 尝试创建一个Lottie动画视图并加载示例JSON动画
3. 运行应用，确认动画可以正常播放

## 常见错误排查

1. **现象 -> 编译错误，找不到Lottie模块**
   可能原因 -> 包未正确添加到目标中
   解决步骤 -> 检查Build Phases中的Link Binary With Libraries，确认Lottie已添加

2. **现象 -> Swift Package Manager下载缓慢**
   可能原因 -> 主仓库体积较大(300+MB)
   解决步骤 -> 改用lottie-spm仓库(小于500KB)，地址：https://github.com/airbnb/lottie-spm.git

3. **现象 -> 动画无法加载或显示空白**
   可能原因 -> JSON文件格式不正确或路径错误
   解决步骤 -> 确认JSON文件是有效的bodymovin格式，检查文件路径和Bundle资源配置
