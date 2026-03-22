# 项目名称
Excalidraw

# 作者或组织名
excalidraw

# 项目类别
效率工具

# 核心痛点
传统绘图工具画出来的图表过于正式，缺乏亲和力，且团队协作不方便

# 主要功能
- 手绘风格的虚拟白板工具
- 支持创建美观的图表、线框图
- 无限画布、深色模式、图片插入、形状库、多语言
- 导出PNG、SVG、开放格式
- 在线版本支持PWA（离线可用）、实时协作、端到端加密、本地优先保存、可分享链接
- 被Google Cloud、Meta、CodeSandbox、Obsidian、Notion等集成

# 项目亮点
- 手绘风格，亲和力强
- 功能全面，满足各种绘图需求
- 在线版本支持实时协作
- 端到端加密，安全可靠
- 被众多大公司和产品集成
- 完全免费开源

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/excalidraw/excalidraw [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 不适用原因说明
这是一个在线工具，主要通过浏览器使用，npm包用于集成到自己的应用中

## 可执行的最小上手路径
### 在线使用（推荐）
1. **访问在线版本**
   - 步骤目标：使用Excalidraw在线版本
   - 执行位置：浏览器
   - 操作说明：访问 https://excalidraw.com
   - 成功标志：Excalidraw界面正常显示

### 集成到自己的应用
1. **安装npm包**
   - 步骤目标：安装Excalidraw npm包
   - 执行位置：项目目录
   - 完整命令：
     ```bash
     npm install react react-dom @excalidraw/excalidraw
     # 或
     yarn add react react-dom @excalidraw/excalidraw
     ```
   - 成功标志：安装完成
   - 失败处理：检查npm版本，使用国内镜像源加速

## 环境与权限要求
- 在线使用：任意现代浏览器
- 集成使用：Node.js环境

## 成功验证方式
在线版本成功打开，或npm包成功安装

## 常见错误排查
1. **现象**：在线版本无法访问
   - **可能原因**：网络限制
   - **解决步骤**：配置网络环境 [海外网络环境配置 →](/网络环境)

2. **现象**：npm安装失败
   - **可能原因**：网络问题
   - **解决步骤**：使用国内npm镜像源

## 官方文档与补充入口
项目地址：https://github.com/excalidraw/excalidraw [海外网络环境配置 →](/网络环境)
在线使用：https://excalidraw.com
