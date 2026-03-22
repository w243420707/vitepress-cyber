# light-novel-library_Wenku8_Android

## 项目名称
light-novel-library_Wenku8_Android

## 作者或组织名
MewX

## 项目类别
阅读工具

## 核心痛点
轻小说爱好者在手机上找不到好用的阅读工具，无法方便地搜索、阅读和管理轻小说。

## 主要功能
Material Design风格的轻小说文库Android应用，支持小说搜索、排行榜浏览、本地书架管理、左右滑动阅读和上下滑动阅读两种模式，支持缓存下载小说到本地离线阅读，阅读器支持自定义字体、背景、亮度调节和翻页动画效果。

## 项目亮点
- 完全开源免费，代码量超过2万行
- 采用Material Design设计风格，界面美观流畅
- 支持左右滑动阅读和上下滑动阅读两种模式
- 支持缓存下载小说到本地，离线也能阅读
- 阅读器支持自定义字体、背景、亮度调节
- 从2014年开始持续维护，用心打造

## 荣誉信息
README/仓库信息中未明确说明

## 项目地址
https://github.com/MewX/light-novel-library_Wenku8_Android [海外网络环境配置 →](/网络环境)

## 安装或部署教程

### 教程适用对象与环境范围
本教程适用于想要编译运行light-novel-library_Wenku8_Android源码的Android开发者。需要具备基本的Android开发环境。

### 前置条件检查

1. **检查Java版本**
   - 执行命令：`java -version`
   - 通过标准：显示Java 8或更高版本

2. **检查Android Studio是否安装**
   - 执行命令：无命令行检查，需确认Android Studio已安装
   - 通过标准：Android Studio能正常启动

3. **检查Android SDK**
   - 执行命令：无命令行检查，在Android Studio中确认
   - 通过标准：SDK Manager中已安装对应版本的SDK

### 主路径：安装与启动

**步骤1：克隆项目**
- 目标：获取项目源码
- 位置：本地开发目录
- 命令：`git clone https://github.com/MewX/light-novel-library_Wenku8_Android.git`
- 成功标志：项目目录创建成功，包含完整源码
- 失败处理：检查网络连接，或尝试使用镜像站点

**步骤2：打开项目**
- 目标：在Android Studio中打开项目
- 位置：Android Studio
- 操作：File → Open → 选择项目目录中的studio-android文件夹
- 成功标志：项目成功加载，Gradle同步完成
- 失败处理：检查Android Studio版本，更新Gradle插件

**步骤3：编译运行**
- 目标：编译并在模拟器或真机上运行
- 位置：Android Studio
- 操作：点击Run按钮或按Shift+F10
- 成功标志：应用成功安装并启动
- 失败处理：检查SDK版本配置，确保模拟器或真机已连接

### 安装成功验证
- 应用成功启动后，可以看到Material Design风格的启动界面
- 进入主界面后可以浏览小说排行榜
- 搜索功能可以正常使用

### 常见错误排查

1. **Gradle同步失败**
   - 可能原因：网络问题或Gradle版本不匹配
   - 解决步骤：检查网络连接，在gradle-wrapper.properties中调整Gradle版本

2. **编译报错找不到SDK**
   - 可能原因：Android SDK路径未正确配置
   - 解决步骤：在Android Studio中配置SDK路径，File → Project Structure → SDK Location

3. **应用安装失败**
   - 可能原因：设备API版本过低
   - 解决步骤：检查app的build.gradle中的minSdkVersion，确保设备满足最低要求

### 信息缺失说明
README/仓库信息中未提供完整的API配置说明，项目源码中可能需要额外配置wenku8的API相关信息才能正常获取数据。
