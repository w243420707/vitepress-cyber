# 项目名称
Zvec

# 作者或组织名
Alibaba

# 项目类别
数据库工具

# 核心痛点
传统向量数据库需要单独部署服务器，配置复杂，延迟高，不适合嵌入到应用程序中。

# 主要功能
轻量级、高速的进程内向量数据库，支持密集和稀疏向量，混合搜索，可在任何环境中运行。

# 项目亮点
- 速度快：毫秒级搜索数十亿向量
- 简单易用：无需服务器和复杂配置
- 多向量支持：同时处理密集和稀疏向量
- 混合搜索：结合语义相似性和结构化过滤器
- 跨平台：可在任何环境中运行

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/alibaba/zvec [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于需要在应用程序中集成向量搜索功能的开发者。

## 前置条件检查
1. Python 3.10-3.12（Python用户）
2. Node.js环境（Node.js用户）
3. 支持的平台：Linux (x86_64, ARM64) 或 macOS (ARM64)

## 主路径：安装与使用
1. **Python安装**
   - 目标：安装Zvec Python包
   - 位置：命令行
   - 命令：`pip install zvec`
   - 成功标志：安装完成，无错误信息
   - 失败处理：检查Python版本是否符合要求

2. **Node.js安装**
   - 目标：安装Zvec Node.js包
   - 位置：命令行
   - 命令：`npm install @zvec/zvec`
   - 成功标志：安装完成，无错误信息
   - 失败处理：检查Node.js环境是否正确

3. **创建和使用集合**
   - 目标：创建向量集合并进行搜索
   - 位置：代码中
   - 命令：
     ```python
     import zvec

     # 定义集合 schema
     schema = zvec.CollectionSchema(
         name="example",
         vectors=zvec.VectorSchema("embedding", zvec.DataType.VECTOR_FP32, 4),
     )

     # 创建集合
     collection = zvec.create_and_open(path="./zvec_example", schema=schema)

     # 插入文档
     collection.insert([
         zvec.Doc(id="doc_1", vectors={"embedding": [0.1, 0.2, 0.3, 0.4]}),
         zvec.Doc(id="doc_2", vectors={"embedding": [0.2, 0.3, 0.4, 0.1]}),
     ])

     # 按向量相似性搜索
     results = collection.query(
         zvec.VectorQuery("embedding", vector=[0.4, 0.3, 0.3, 0.1]),
         topk=10
     )

     # 结果：按相关性排序的 {'id': str, 'score': float, ...} 列表
     print(results)
     ```
   - 成功标志：代码执行成功，输出搜索结果
   - 失败处理：检查向量维度是否匹配，路径是否有写入权限

## 安装成功验证
- 访问地址：N/A（进程内库）
- 检查命令：运行示例代码
- 预期返回：输出搜索结果

## 常见错误排查
1. **安装失败**
   - 现象：pip或npm安装失败
   - 可能原因：Python/Node.js版本不兼容，或网络问题
   - 解决步骤：检查版本兼容性，使用国内镜像源

2. **向量维度不匹配**
   - 现象：插入或搜索时出错
   - 可能原因：向量维度与schema定义不一致
   - 解决步骤：确保所有向量维度与schema中定义的一致

3. **路径权限问题**
   - 现象：创建集合失败
   - 可能原因：指定路径无写入权限
   - 解决步骤：选择有写入权限的路径，或使用临时目录

## 备选部署路径
- **从源代码构建**：参考官方Building from Source指南

## 信息缺失说明
README/仓库信息中提供了基本安装和使用指南，详细文档可参考官方Docs。