# crystalplus UI 快速上手

## 项目介绍

crystalplus UI 是一个基于 Element Plus 的 Vue 3 组件库，旨在提供一致且优雅的用户界面体验。通过本快速上手指南，您将了解如何在项目中集成和使用 crystalplus UI。

## 📦 安装

### 前提条件

在安装 crystalplus UI 之前，请确保您的项目满足以下条件：

- **Vue 3**：crystalplus UI 仅支持 Vue 3
- **Element Plus**：作为基础依赖
- **Node.js**：版本 16.0 或更高

### 安装步骤

#### 1. 安装依赖包

::: code-group

```bash [npm]
npm install crystalplus-ui element-plus @element-plus/icons-vue
```

```bash [yarn]
yarn add crystalplus-ui element-plus @element-plus/icons-vue
```

```bash [pnpm]
pnpm add crystalplus-ui element-plus @element-plus/icons-vue
```

:::

#### 2. 导入样式

在您的项目入口文件中，导入必要的样式文件：

```typescript
// main.ts 或 main.js
import "element-plus/dist/index.css";
import "crystalplus-ui/dist/index.css";
```

## 🛠️ 基本使用

### 方法一：全局注册

在项目入口文件中全局注册 crystalplus UI：

```typescript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import CrystalUI from "crystalplus-ui";
import "element-plus/dist/index.css";
import "crystalplus-ui/dist/index.css";

const app = createApp(App);
app.use(CrystalUI);
app.mount("#app");
```

### 方法二：按需导入

您也可以只导入需要的组件：

```typescript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import { CrystalButton, CrystalInput, CrystalTable } from "crystalplus-ui";
import "element-plus/dist/index.css";
import "crystalplus-ui/dist/index.css";

const app = createApp(App);
app.use(CrystalButton);
app.use(CrystalInput);
app.use(CrystalTable);
app.mount("#app");
```

### 方法三：组件内导入

在单个组件中直接导入使用：

```vue
<template>
  <div>
    <CrystalButton type="primary">主要按钮</CrystalButton>
    <CrystalInput placeholder="请输入内容" />
  </div>
</template>

<script setup lang="ts">
import { CrystalButton, CrystalInput } from "crystalplus-ui";
</script>
```

## 📁 本地开发配置

如果您需要在本地开发环境中使用 crystalplus UI 的源代码，可以通过以下方式配置：

### 1. 目录结构

确保您的项目结构如下：

```
├── element-plus-wrapper/
│   └── packages/
│       └── crystal-ui/        # crystalplus UI 源代码
└── your-project/               # 您的项目
    ├── src/
    └── package.json
```

### 2. Vite 配置

在您的 Vite 配置文件中添加别名，指向本地的 crystalplus UI 源代码：

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "crystalplus-ui": resolve(
        __dirname,
        "../element-plus-wrapper/packages/crystal-ui/src/index.ts",
      ),
    },
  },
});
```

### 3. 开发流程

1.
 **启动 crystalplus UI 开发环境**：
   ```bash
   cd element-plus-wrapper
   pnpm install
   pnpm dev
   ```

2. **启动您的项目**：
   ```bash
   cd your-project
   pnpm install
   pnpm dev
   ```

## 🎯 快速示例

### 示例 1：基础组件

```vue
<template>
  <div class="demo-container">
    <h3>基础组件示例</h3>
    
    <!-- 按钮组件 -->
    <div class="demo-section">
      <h4>按钮</h4>
      <CrystalButton type="primary">主要按钮</CrystalButton>
      <CrystalButton type="success">成功按钮</CrystalButton>
      <CrystalButton type="warning">警告按钮</CrystalButton>
      <CrystalButton type="danger">危险按钮</CrystalButton>
    </div>
    
    <!-- 输入框组件 -->
    <div class="demo-section">
      <h4>输入框</h4>
      <CrystalInput placeholder="请输入文本" />
      <CrystalInput type="password" placeholder="请输入密码" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CrystalButton, CrystalInput } from "crystalplus-ui";
</script>

<style scoped>
.demo-container {
  padding: 20px;
}

.demo-section {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
}

.demo-section h4 {
  margin-bottom: 10px;
  color: var(--vp-c-text-1);
}

/* 组件间距 */
:deep(.crystal-button) {
  margin-right: 10px;
  margin-bottom: 10px;
}

:deep(.crystal-input) {
  width: 200px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
```

### 示例 2：表格组件

```vue
<template>
  <div class="demo-container">
    <h3>表格组件示例</h3>
    
    <CrystalTable 
      :data="tableData" 
      :columns="columns"
      :selection="true"
      :actions="actions"
      @selection-change="handleSelectionChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CrystalTable } from "crystalplus-ui";

// 表格数据
const tableData = ref([
  { id: 1, name: "张三", age: 28, email: "zhangsan@example.com" },
  { id: 2, name: "李四", age: 32, email: "lisi@example.com" },
  { id: 3, name: "王五", age: 25, email: "wangwu@example.com" }
]);

// 列配置
const columns = ref([
  { prop: "id", label: "ID", width: 80 },
  { prop: "name", label: "姓名" },
  { prop: "age", label: "年龄", width: 80 },
  { prop: "email", label: "邮箱" }
]);

// 操作按钮
const actions = ref([
  {
    label: "编辑",
    type: "primary",
    size: "small",
    handle: (row: any) => {
      console.log("编辑:", row);
    }
  },
  {
    label: "删除",
    type: "danger",
    size: "small",
    handle: (row: any) => {
      console.log("删除:", row);
    }
  }
]);

// 选择事件
const handleSelectionChange = (rows: any[]) => {
  console.log("选中的行:", rows);
};
</script>

<style scoped>
.demo-container {
  padding: 20px;
}
</style>
```

## 📚 文档结构

本文档项目包含以下主要部分：

- **快速上手**：本文档，介绍如何开始使用 crystalplus UI
- **组件文档**：详细的组件使用说明和示例
- **API 参考**：完整的组件 API 文档
- **开发指南**：高级开发技巧和最佳实践

## 🔧 常见问题

### Q: 为什么组件没有样式？

**A:** 请确保您已经正确导入了样式文件：
```typescript
import "element-plus/dist/index.css";
import "crystalplus-ui/dist/index.css";
```

### Q: 如何自定义组件样式？

**A:** 您可以通过以下方式自定义样式：
1. **CSS 变量**：覆盖 Element Plus 的 CSS 变量
2. **深度选择器**：使用 `:deep()` 选择器修改组件内部样式
3. **主题定制**：参考 Element Plus 的主题定制文档

### Q: 组件不显示或报错怎么办？

**A:** 请检查：
1. 是否正确安装了所有依赖
2. 是否正确导入了组件
3. 是否符合 Vue 3 的语法要求
4. 浏览器控制台是否有错误信息

### Q: 如何贡献代码？

**A:** 欢迎贡献代码！请按照以下步骤：
1. Fork 仓库
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 打开 Pull Request

## 📞 支持与反馈

如果您在使用过程中遇到任何问题，或有任何建议，欢迎通过以下方式联系我们：

- **GitHub Issues**：[提交问题](https://github.com/yourusername/crystalplus-ui/issues)
- **邮箱**：contact@crystalplus-ui.com
- **社区**：加入我们的开发者社区

---

**祝您使用愉快！** 🎉