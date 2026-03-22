# 项目名称
llama.cpp

# 作者或组织名
ggerganov

# 项目类别
AI工具

# 核心痛点
大语言模型推理需要复杂的依赖和配置，普通用户难以在本地高效运行，且硬件支持有限

# 主要功能
- 纯C/C++实现，无依赖
- Apple Silicon优化（ARM NEON、Accelerate、Metal）
- x86架构支持（AVX、AVX2、AVX512、AMX）
- RISC-V架构支持（RVV、ZVFH等）
- 1.5位到8位整数量化
- 自定义CUDA内核（NVIDIA GPU）
- AMD GPU支持（HIP）
- Moore Threads GPU支持（MUSA）
- Vulkan和SYCL后端支持
- CPU+GPU混合推理
- 支持海量模型：LLaMA系列、Mistral、Mixtral、DBRX、Jamba、Falcon、Qwen、Deepseek等
- 多模态支持（LLaVA、BakLLaVA等）
- llama-cli命令行工具
- llama-server（OpenAI兼容API）
- llama-perplexity、llama-bench等工具
- 多语言绑定：Python、Go、Node.js、Rust、C#、Java、PHP、Swift、Flutter等

# 项目亮点
- 纯C/C++实现，无依赖
- 硬件支持超全面
- 量化方案多，内存占用小
- 推理速度快
- 支持的模型超多
- 多语言绑定丰富
- 完全免费开源

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/ggerganov/llama.cpp [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于有基本命令行使用经验的用户

## 前置条件检查
1. **系统要求**
   - 步骤目标：确认系统支持
   - 执行位置：无
   - 操作说明：支持Linux、macOS、Windows等系统
   - 成功标志：系统满足要求
   - 失败处理：使用支持的系统

## 主路径：一键安装（推荐）
### 步骤1：选择安装方式
- **步骤目标**：选择适合的安装方式
- **执行位置：浏览器
- **操作说明**：可使用brew、nix、winget安装，或Docker，或下载预编译二进制
- **成功标志：选择了安装方式
- **失败处理：参考官方文档

### 步骤2：获取模型
- **步骤目标**：获取GGUF格式模型
- **执行位置**：浏览器或终端
- **完整命令**：
  ```bash
  # 直接使用llama-cli从Hugging Face下载
  llama-cli -hf ggml-org/gemma-3-1b-it-GGUF
  ```
- **成功标志**：模型获取成功
- **失败处理**：检查网络连接

## 安装成功验证
- **检查方式**：运行llama-cli
- **预期返回**：模型正常加载并输出

## 常见错误排查
1. **现象**：模型加载失败
   - **可能原因**：模型格式不支持
   - **解决步骤**：确认使用GGUF格式模型

2. **现象**：性能不佳
   - **可能原因**：未启用硬件加速
   - **解决步骤**：检查是否启用了CUDA、Metal等后端

3. **现象**：内存不足
   - **可能原因**：模型太大
   - **解决步骤**：使用更低位数量化的模型

## 信息缺失说明
更多详细信息请参考 [官方文档](https://github.com/ggerganov/llama.cpp)。
