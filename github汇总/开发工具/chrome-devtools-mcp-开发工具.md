# 项目名称
Chrome DevTools MCP

# 作者或组织名
Chrome DevTools

# 项目类别
开发工具

# 核心痛点
AI编码助手缺乏与浏览器的直接交互能力，无法进行自动化测试、调试和性能分析。

# 主要功能
让AI编码助手控制和检查实时Chrome浏览器，提供自动化、调试和性能分析能力。

# 项目亮点
- 支持多种AI编码助手集成
- 提供全面的Chrome DevTools功能
- 支持性能分析和网络调试
- 可靠的浏览器自动化

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/ChromeDevTools/chrome-devtools-mcp [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于需要AI助手控制浏览器进行开发、测试和调试的开发者。

## 前置条件检查
1. Node.js v20.19或更新的LTS版本
2. Chrome当前稳定版本或更新
3. npm
4. MCP客户端（如Gemini、Claude、Cursor等）

## 主路径：安装与启动
1. **安装Chrome DevTools MCP**
   - 目标：在MCP客户端中安装Chrome DevTools MCP
   - 位置：MCP客户端配置
   - 命令：在MCP客户端配置中添加以下配置
   ```json
   {
     "mcpServers": {
       "chrome-devtools": {
         "command": "npx",
         "args": ["-y", "chrome-devtools-mcp@latest"]
       }
     }
   }
   ```
   - 成功标志：配置保存成功
   - 失败处理：检查Node.js和npm是否正确安装

2. **启动MCP服务器**
   - 目标：启动Chrome DevTools MCP服务器
   - 位置：MCP客户端
   - 命令：在MCP客户端中使用相关命令启动
   - 成功标志：服务器启动成功，浏览器自动打开
   - 失败处理：检查Chrome是否正确安装，端口是否被占用

3. **测试功能**
   - 目标：测试Chrome DevTools MCP的功能
   - 位置：MCP客户端
   - 命令：输入提示词"Check the performance of https://developers.chrome.com"
   - 成功标志：浏览器打开并记录性能跟踪
   - 失败处理：检查网络连接，查看服务器日志

## 安装成功验证
- 访问地址：MCP客户端界面
- 检查命令：输入测试提示词
- 预期返回：浏览器执行操作并返回结果

## 常见错误排查
1. **浏览器启动失败**
   - 现象：MCP服务器无法启动浏览器
   - 可能原因：Chrome未正确安装，或权限不足
   - 解决步骤：检查Chrome安装路径，使用--executable-path指定路径

2. **性能分析失败**
   - 现象：无法获取性能数据
   - 可能原因：网络连接问题，或CrUX API访问受限
   - 解决步骤：使用--no-performance-crux标志禁用CrUX API调用

3. **远程调试连接失败**
   - 现象：无法连接到运行中的Chrome实例
   - 可能原因：远程调试端口未正确配置
   - 解决步骤：确保Chrome已启动并启用远程调试，检查端口配置

## 备选部署路径
- **Slim模式**：使用--slim标志启用基本浏览器功能
- **连接到现有Chrome实例**：使用--browser-url或--wsEndpoint连接到运行中的Chrome

## 信息缺失说明
README/仓库信息中提供了详细的安装和配置指南，可参考官方文档获取更多信息。