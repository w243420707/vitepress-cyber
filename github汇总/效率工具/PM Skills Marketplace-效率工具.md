# 项目名称
PM Skills Marketplace

# 作者或组织名
Paweł Huryn (from The Product Compass Newsletter)

# 项目类别
效率工具

# 核心痛点
产品经理工作缺乏系统化的方法论支持，大师级的PM框架只停留在书本上，难以融入日常工作流。

# 主要功能
- 8个插件共65个PM技能和36个链式工作流
- 专为Claude Code和Cowork设计，技能兼容其他AI助手
- 覆盖从发现到战略、执行、发布、增长的全流程
- 命令驱动：/discover、/strategy、/write-prd、/plan-launch、/north-star等
- 技能自动加载，也能显式强制加载
- 命令间相互衔接，完成后建议下一步

## 8个插件详情

1. **pm-product-discovery** - 创意、实验、假设测试、OST、访谈（13技能，5命令）
2. **pm-product-strategy** - 愿景、商业模式、定价、竞争格局（12技能，5命令）
3. **pm-execution** - PRD、OKR、路线图、冲刺、回顾、发布说明（15技能，10命令）
4. **pm-market-research** - 用户画像、细分、旅程图、市场规模、竞品分析（7技能，3命令）
5. **pm-data-analytics** - SQL生成、队列分析、A/B测试分析（3技能，3命令）
6. **pm-go-to-market** - 滩头阵地细分、ICP、信息传递、增长循环、GTM动作、作战卡（6技能，3命令）
7. **pm-marketing-growth** - 营销创意、定位、价值主张、命名、北极星指标（5技能，2命令）
8. **pm-toolkit** - 简历审阅、法律文件、校对（4技能，5命令）

# 项目亮点
- 内置Teresa Torres、Marty Cagan、Alberto Savoia等大师方法论
- 提供结构化的PM框架而非普通文本
- 命令式工作流，一键触发完整流程
- 技能自动加载，也能显式调用
- 支持Claude Code和Cowork，技能兼容其他AI助手

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/phuryn/pm-skills [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于产品经理，使用Claude Code或Cowork的用户。

## 前置条件检查
1. Claude Code或Cowork
2. 如使用其他AI助手，需能读取通用技能格式

## 主路径：Claude Cowork安装（推荐，适合非开发者）

### 步骤1：打开插件市场
步骤目标：在Cowork中打开插件市场
执行位置：Claude Cowork界面
完整命令或操作：
打开 Customize（左下角）
进入 Browse plugins → Personal → +
选择 Add marketplace from GitHub
成功标志：插件市场添加界面打开
失败处理：确认Cowork版本，检查网络连接

### 步骤2：添加GitHub市场
步骤目标：添加pm-skills市场
执行位置：Claude Cowork插件市场界面
完整命令或操作：
输入：phuryn/pm-skills
成功标志：8个插件自动安装完成
失败处理：确认GitHub仓库地址正确

## 备选部署路径

### 备选路径1：Claude Code (CLI)安装
```bash
# Step 1: 添加市场
claude plugin marketplace add phuryn/pm-skills

# Step 2: 安装单个插件
claude plugin install pm-toolkit@pm-skills
claude plugin install pm-product-strategy@pm-skills
# ... 安装其他插件
```

### 备选路径2：其他AI助手（仅技能）
技能/*/SKILL.md文件遵循通用技能格式，支持任何能读取它的工具。命令是Claude专用的。

示例：为OpenCode复制所有技能（项目级别）
```bash
for plugin in pm-*/; do
  mkdir -p .opencode/skills/
  cp -r "$plugin/skills/"* .opencode/skills/ 2&gt;/dev/null
done
```

## 安装成功验证
1. 在Claude Cowork/Code中能看到所有插件
2. 输入/discover等命令能触发对应工作流
3. 技能能在相关对话中自动加载

## 常见错误排查

1. **现象 -> Cowork不稳定，无法启动VM**
   可能原因 -> Windows上的已知问题
   解决步骤 -> 使用提供的PowerShell脚本创建定时任务监控CoworkVMService，或手动在services.msc中启动Claude服务

2. **现象 -> 命令无法触发**
   可能原因 -> 插件未正确安装或命令格式错误
   解决步骤 -> 确认插件已安装，检查命令格式（/command-name）

3. **现象 -> 技能未自动加载**
   可能原因 -> 对话上下文不匹配或需要显式加载
   解决步骤 -> 使用/plugin-name:skill-name或/skill-name强制加载技能
