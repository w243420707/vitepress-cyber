# TradingAgents

TradingAgents

# 作者或组织名

TauricResearch

# 项目类别

金融工具

# 核心痛点

传统量化交易系统依赖单一模型或固定规则，难以适应复杂多变的市场环境。投资者缺乏能够模拟专业交易团队协作决策的智能系统，无法充分利用多维度市场信息（技术面、基本面、新闻情绪等）进行综合判断。

# 主要功能

TradingAgents 是一个基于多智能体大语言模型的金融交易决策框架，通过模拟真实交易公司的专业分工和协作决策流程，实现智能化的股票分析和交易决策。

- **多智能体协作架构**：包含协调员、市场分析师、基本面分析师、新闻分析师、情绪分析师、风险管理师等多个专业智能体
- **多维度市场分析**：整合技术分析、基本面分析、新闻情绪分析、社交媒体情绪等多源数据
- **智能决策流程**：支持辩论机制、风险讨论、深度思考等决策环节
- **实时数据支持**：可接入在线数据源获取实时市场信息
- **可扩展配置**：支持自定义 LLM 提供商（OpenAI、Google、DeepSeek、Qwen、GLM、Azure OpenAI 等）
- **Docker 部署支持**：提供容器化部署方案，支持跨平台运行

# 项目亮点

- 🤖 **多智能体协作**：模拟真实交易公司的专业分工，各智能体协同工作
- 🧠 **AI 驱动决策**：基于大语言模型的推理能力进行复杂市场分析
- 📈 **实战导向**：专注于实际交易决策和风险管理
- 🔬 **前沿技术融合**：将最新的多智能体 AI 技术应用到金融领域
- 🐳 **容器化支持**：提供 Docker 部署方案，便于快速启动
- 🌐 **多模型支持**：支持多种主流 LLM 提供商，灵活选择

# 荣誉信息

README/仓库信息中未明确说明

# 项目地址

https://github.com/TauricResearch/TradingAgents [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围

适用对象：金融分析师、量化交易开发者、AI 研究者、对智能交易系统感兴趣的技术人员
环境范围：支持 Python 3.9+，可通过 pip 安装或 Docker 部署

## 前置条件检查

- Python 3.9 或更高版本
- 有效的 LLM API 密钥（OpenAI、DeepSeek、Google 等）
- 可选：Docker 环境（用于容器化部署）

## 主路径：安装与启动

### 方式一：pip 安装

```bash
# 克隆仓库
git clone https://github.com/TauricResearch/TradingAgents.git
cd TradingAgents

# 安装依赖
pip install -r requirements.txt

# 配置环境变量
cp .env.example .env
# 编辑 .env 文件，填入您的 API 密钥
```

### 方式二：Docker 部署

```bash
# 克隆仓库
git clone https://github.com/TauricResearch/TradingAgents.git
cd TradingAgents

# 构建并运行 Docker 容器
docker build -t tradingagents .
docker run -it --rm -v $(pwd)/.env:/app/.env tradingagents
```

## 基本使用示例

```python
from tradingagents.graph.trading_graph import TradingAgentsGraph
from tradingagents.default_config import DEFAULT_CONFIG

# 使用默认配置
ta = TradingAgentsGraph(debug=True, config=DEFAULT_CONFIG.copy())

# 分析苹果公司股票
state, decision = ta.propagate("AAPL", "2024-01-15")

print(f"推荐动作: {decision['action']}")
print(f"置信度: {decision['confidence']:.2f}")
print(f"推理: {decision['reasoning']}")
```

## 安装成功验证

运行示例代码后，如果成功输出分析结果（包括推荐动作、置信度和推理说明），则表示安装成功。

## 常见错误排查

- **API 密钥错误**：确保 .env 文件中填入了有效的 API 密钥
- **网络连接问题**：确保能够访问所选的 LLM 提供商服务
- **依赖安装失败**：尝试使用虚拟环境或检查 Python 版本

## 备选部署路径

- **Docker Compose**：可根据需要编写 docker-compose.yml 进行多服务部署
- **源码编译**：直接从源码运行，适合开发和调试

## 信息缺失说明

README/仓库信息中未提供完整的生产环境部署指南和性能优化建议，建议读者参考官方文档和示例代码进行深入学习。
