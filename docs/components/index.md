# 组件库

<script setup>
import { CrystalText, CrystalButton } from 'crystalplus-ui'
</script>

## 什么是 crystalplus UI？

crystalplus UI 是一个基于 Element Plus 封装的现代化、易用、美观的 Vue 3 组件库，专为企业级应用设计。它提供了丰富的组件和工具，帮助开发者快速构建高质量的用户界面。

## 特性

- 🎨 **现代化设计**：采用简洁、美观的设计风格，支持浅色和深色主题
- 🚀 **易用性**：基于 Element Plus 封装，保持 API 兼容性，学习成本低
- 📦 **丰富组件**：提供基础组件、布局组件、反馈组件等多种类型的组件
- 🎯 **类型安全**：完整的 TypeScript 类型支持
- 🌙 **主题定制**：支持自定义主题和深色模式
- 📱 **响应式**：适配不同屏幕尺寸
- 🔧 **高度可定制**：支持组件的自定义和扩展

## 安装指南

### 使用包管理器安装

```bash
# 使用 npm
npm install crystalplus-ui

# 使用 yarn
yarn add crystalplus-ui

# 使用 pnpm
pnpm add crystalplus-ui
```

### 依赖要求

- Vue 3.2+
- Element Plus 2.0+

## 快速开始

### 全局导入

在 `main.ts` 或 `main.js` 中：

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import CrystalPlus from "crystalplus-ui";
import "crystalplus-ui/dist/index.css";

const app = createApp(App);
app.use(CrystalPlus);
app.mount("#app");
```

### 按需导入

```vue
<template>
  <div>
    <CrystalButton type="primary">主要按钮</CrystalButton>
    <CrystalInput v-model="value" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { CrystalButton, CrystalInput } from "crystalplus-ui";

const value = ref("");
</script>
```

## 组件分类

### 基础组件

- **文本**：用于显示文本内容，支持多种类型和样式
- **按钮**：用于触发操作，支持多种类型、尺寸和状态
- **输入框**：用于接收用户输入，支持多种类型和验证
- **数字输入框**：专门用于数字输入，支持范围限制和格式化
- **选择器**：用于从选项中选择，支持单选、多选和搜索
- **复选框**：用于多选操作，支持单独使用和分组
- **单选框**：用于单选操作，支持单独使用和分组
- **开关**：用于切换状态，支持自定义样式和大小
- **时间选择器**：用于选择时间，支持多种格式
- **日期选择器**：用于选择日期，支持多种范围和格式
- **时间选择**：用于选择具体时间点
- **日历**：用于显示和选择日期
- **图标**：提供丰富的图标库
- **图片上传**：用于上传图片，支持多种上传方式

### 布局组件

- **表格**：用于展示数据，支持排序、筛选和分页

### 反馈组件

- **对话框**：用于显示重要信息或操作确认
- **抽屉**：从侧边弹出的对话框，用于展示详细信息
- **消息提示**：用于显示操作结果的轻量级提示
- **模态框**：用于显示需要用户关注的内容
- **警告**：用于显示警告信息
- **通知**：用于显示系统通知

### 表单组件

- **FormGroup**：用于表单分组，支持复杂表单布局
- **From表单**：用于创建完整的表单，支持验证和提交
- **搜索表单**：专门用于搜索功能的表单
- **富文本编辑器**：用于富文本内容的编辑，支持多种编辑功能

### 选择组件

- **树选择器**：用于从树形结构中选择
- **树形组件**：用于展示树形结构数据
- **级联选择器**：用于从级联数据中选择

## 主题定制

### 深色模式

crystalplus UI 内置支持深色模式，您可以通过以下方式启用：

1. **自动检测系统主题**
2. **手动切换主题**
3. **通过配置默认主题**

### 自定义主题

您可以通过覆盖 CSS 变量来自定义主题颜色、字体等样式：

```css
:root {
  --cp-primary-color: #409eff;
  --cp-success-color: #67c23a;
  --cp-warning-color: #e6a23c;
  --cp-danger-color: #f56c6c;
  --cp-info-color: #909399;
}
```

## 浏览器兼容性

- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90

## 使用建议

1. **组件选择**：根据功能需求选择合适的组件
2. **性能优化**：对于大型应用，建议使用按需导入
3. **样式定制**：通过主题定制实现品牌一致性
4. **响应式设计**：考虑不同屏幕尺寸的适配

## 贡献指南

我们欢迎社区贡献，包括：

- 提交 Bug 报告
- 提出新功能建议
- 提交代码 PR
- 改进文档

## 许可证

crystalplus UI 采用 MIT 许可证，您可以自由使用、修改和分发。

## 示例

### 基础文本

<CrystalText>默认文本</CrystalText>
<CrystalText type="primary">主要文本</CrystalText>
<CrystalText type="success">成功文本</CrystalText>

### 基础按钮

<CrystalButton type="primary">主要按钮</CrystalButton>
<CrystalButton>默认按钮</CrystalButton>
<CrystalButton type="success">成功按钮</CrystalButton>

## 下一步

- 查看 [基础组件](./basic/) 了解详细的组件使用方法
- 阅读 [API 文档](./api/) 获取完整的组件 API 参考
- 探索 [示例项目](./examples/) 学习实际应用场景

---

感谢您选择 crystalplus UI 组件库！如果您有任何问题或建议，欢迎联系我们。
