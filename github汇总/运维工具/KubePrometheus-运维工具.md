# 项目名称
kube-prometheus

# 作者或组织名
Prometheus Operator

# 项目类别
运维工具

# 核心痛点
Kubernetes集群监控配置复杂、组件管理困难、缺少完整的端到端解决方案

# 主要功能
- 使用Prometheus Operator的端到端Kubernetes集群监控
- 收集Grafana仪表板和Prometheus规则
- 使用Jsonnet的声明式配置

# 项目亮点
- Prometheus官方项目，质量可靠
- 端到端解决方案，开箱即用
- 声明式配置，易于管理
- 集成Grafana仪表板
- 社区维护，持续更新

# 荣誉信息
README/仓库信息中未明确说明

# 项目地址
https://github.com/prometheus-operator/kube-prometheus [海外网络环境配置 →](/网络环境)

# 安装或部署教程

## 教程适用对象与环境范围
适用于想要在Kubernetes集群中部署完整监控解决方案的运维人员，需要Kubernetes集群环境。

## 前置条件检查
1. 系统要求：已运行的Kubernetes集群（1.29或更高版本）
2. 工具要求：kubectl正确配置连接到集群
3. 存储要求：集群中有可用的持久卷或StorageClass（可选）

## 主路径：快速部署（推荐新手）

### 步骤1：创建命名空间和CRDs
**步骤目标**：创建监控命名空间和Prometheus Operator的CRDs
**执行位置**：命令行终端
**完整命令或操作**：运行 `kubectl apply --server-side -f manifests/setup/`
**成功标志**：资源创建成功
**失败处理**：检查kubectl配置是否正确，集群是否正常

### 步骤2：等待CRDs建立
**步骤目标**：确认CRDs在API服务器中建立
**执行位置**：命令行终端
**完整命令或操作**：运行 `until kubectl get servicemonitors --all-namespaces ; do date; sleep 1; echo ""; done`
**成功标志**：能够列出ServiceMonitors
**失败处理**：检查集群状态

### 步骤3：部署监控堆栈
**步骤目标**：部署完整的监控组件
**执行位置**：命令行终端
**完整命令或操作**：运行 `kubectl apply -f manifests/`
**成功标志**：所有资源部署成功
**失败处理**：查看Pod日志排查问题

### 步骤4：访问Grafana
**步骤目标**：访问Grafana仪表板
**执行位置**：浏览器
**完整命令或操作**：运行 `kubectl --namespace monitoring port-forward svc/grafana 3000`，然后访问 http://localhost:3000
**成功标志**：Grafana登录页面显示
**失败处理**：确认端口转发正常

## 安装成功验证
所有Pod正常运行，能够访问Prometheus、Alertmanager和Grafana界面。

## 常见错误排查
1. **现象**：Pod处于Pending状态
   - **可能原因**：缺少可用节点或存储
   - **解决步骤**：检查节点资源和持久卷配置

2. **现象**：无法访问监控界面
   - **可能原因**：Service类型或端口转发问题
   - **解决步骤**：使用NodePort或LoadBalancer暴露服务，或正确配置端口转发

3. **现象**：指标收集失败
   - **可能原因**：RBAC权限或ServiceMonitor配置
   - **解决步骤**：检查RBAC配置和ServiceMonitor选择器

## 备选部署路径：自定义配置
如需要自定义配置，可参考README中的Jsonnet配置指南。

## 信息缺失说明
README提供了完整的部署指引，但高级自定义配置需要参考进一步的文档。
