# 项目名称
ValueCell

# 作者或组织名
ValueCell-ai

# 项目类别
AI工具

# 核心痛点
- 普通投资者信息不对称，难以获取专业级分析
- 个人投资者分析能力有限，无法覆盖多市场多资产
- 交易执行不及时，错过最佳时机
- 敏感投资信息和API密钥存在安全隐患
- 专业投资工具门槛高，仅机构可用

# 主要功能
- 多智能体系统：DeepResearch Agent自动检索分析基本面文档，Strategy Agent支持多策略智能交易，News Retrieval Agent支持个性化定时新闻推送
- 灵活集成：支持多种LLM提供商（OpenRouter、SiliconFlow、Azure、OpenAI兼容平台、Google、OpenAI、DeepSeek），覆盖美股、加密货币、港股、A股等多个市场
- 交易所连接：支持Binance、Hyperliquid、OKX、Coinbase、Gate.io、MEXC、Blockchain等多家交易所
- 本地数据存储：所有敏感信息存储在本地设备，确保核心数据安全

# 项目亮点
- 社区驱动的去中心化金融Agent社区
- 多智能体协作，覆盖投研交易全流程
- 支持多种LLM和市场数据源
- 敏感信息本地存储，安全可靠
- 提供桌面应用，无需部署即可使用

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/ValueCell-ai/valuecell [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 1. 教程适用对象与环境范围
本教程适用于希望使用ValueCell进行智能投研和交易的用户，支持MacOS、Windows和Linux系统。

## 2. 前置条件检查
### 新用户快速开始（推荐）
- 系统要求：MacOS或Windows
- 无需提前安装开发环境

### 开发者环境
- 系统版本：MacOS、Linux或Windows
- Python环境：README/仓库信息中未明确说明具体版本要求
- Git：用于克隆仓库
- 网络连接：用于下载应用和访问API

## 3. 主路径：安装与启动（新用户快速开始）

### 步骤1：下载应用
- 步骤目标：获取ValueCell桌面应用
- 执行位置：浏览器
- 完整命令或操作：访问GitHub Releases页面下载最新的ValueCell应用（MacOS或Windows版本）
- 成功标志：应用安装包下载完成
- 失败处理：检查网络连接，或尝试从其他镜像源下载

### 步骤2：安装应用
- 步骤目标：安装ValueCell桌面应用
- 执行位置：本机
- 完整命令或操作：双击下载的安装包，按照提示完成安装
- 成功标志：应用安装成功并可启动
- 失败处理：检查系统权限，或尝试以管理员身份运行安装程序

### 步骤3：配置AI模型
- 步骤目标：配置首选的LLM提供商
- 执行位置：ValueCell应用内
- 完整命令或操作：通过应用内的Web界面添加AI Model API Key
- 成功标志：API Key配置成功，模型可正常调用
- 失败处理：检查API Key是否正确，或尝试使用其他LLM提供商

### 步骤4：配置交易所（如需交易）
- 步骤目标：设置交易所API凭证
- 执行位置：ValueCell应用内
- 完整命令或操作：配置Binance/HyperLiquid/OKX/Coinbase等交易所的API凭证
- 成功标志：交易所连接成功
- 失败处理：检查API Key和Secret是否正确，确认已添加IP白名单（如需要）

## 4. 备选部署路径（开发者）

### 步骤1：克隆仓库
- 步骤目标：获取ValueCell源代码
- 执行位置：本机/服务器
- 完整命令或操作：
```bash
git clone https://github.com/ValueCell-ai/valuecell.git [海外网络环境配置 →](/网络环境)
cd valuecell
```
- 成功标志：仓库克隆成功
- 失败处理：检查网络连接，或尝试使用GitHub镜像

### 步骤2：运行应用
- 步骤目标：启动完整应用（前端、后端和agents）
- 执行位置：项目目录
- 完整命令或操作：
  - Linux / MacOS：
  ```bash
  bash start.sh
  ```
  - Windows (PowerShell)：
  ```powershell
  .\start.ps1
  ```
- 成功标志：应用启动成功，终端显示运行日志
- 失败处理：检查依赖是否完整安装，查看错误日志

### 步骤3：访问界面
- 步骤目标：访问ValueCell Web界面
- 执行位置：浏览器
- 完整命令或操作：导航到 http://localhost:1420
- 成功标志：Web界面正常显示
- 失败处理：检查端口1420是否被占用，确认应用已成功启动

## 5. 安装成功验证
- 访问地址：http://localhost:1420（开发者）或桌面应用（新用户）
- 检查命令：在应用内尝试调用一次LLM或连接一次交易所
- 预期返回：LLM正常响应，交易所连接成功

## 6. 常见错误排查
- 现象：应用无法启动
  - 可能原因：端口被占用或依赖缺失
  - 解决步骤：检查端口1420是否被占用，或重新安装依赖
- 现象：LLM调用失败
  - 可能原因：API Key错误或网络问题
  - 解决步骤：检查API Key是否正确，确认网络可访问LLM提供商
- 现象：交易所连接失败
  - 可能原因：API凭证错误或IP未白名单
  - 解决步骤：检查API Key和Secret，确认已添加IP白名单（如Binance要求）
- 现象：本地数据损坏
  - 可能原因：长期未更新或异常关闭
  - 解决步骤：删除本地数据存储（LanceDB目录、Knowledge目录、SQLite数据库文件）后重新启动

## 7. 信息缺失说明
README/仓库信息中未明确说明Python具体版本要求、详细依赖安装步骤。建议参考应用内提示或官方文档进一步了解。
