# CrystalAlert

CrystalAlert 是基于 Element Plus 的 ElAlert 封装的警告提示组件，提供了更简洁的 API 和默认配置，用于在页面中显示警告信息。

## 功能特性

- ✅ 支持多种警告类型：成功、警告、信息、错误
- ✅ 支持自定义标题和描述
- ✅ 支持显示图标和关闭按钮
- ✅ 支持居中对齐
- ✅ 支持不同的效果样式
- ✅ 支持自动关闭
- ✅ 支持自定义样式和圆角

## 基本用法

::: demo
components/basic/alert/examples/BasicAlert.vue
:::

## 不同类型的警告

::: demo
components/basic/alert/examples/AlertTypes.vue
:::

## 自定义配置

::: demo
components/basic/alert/examples/CustomAlert.vue
:::

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `title` | `string` | `''` | 警告标题 |
| `type` | `'success' \| 'warning' \| 'info' \| 'error'` | `'info'` | 警告类型 |
| `closable` | `boolean` | `true` | 是否可关闭 |
| `center` | `boolean` | `false` | 是否居中显示 |
| `showIcon` | `boolean` | `false` | 是否显示图标 |
| `description` | `string` | `''` | 警告描述 |
| `effect` | `'light' \| 'dark'` | `'light'` | 警告效果 |
| `duration` | `number` | `0` | 自动关闭时长（毫秒），0 表示不自动关闭 |
| `titleTag` | `string` | `'h4'` | 标题标签 |
| `customClass` | `string` | `''` | 自定义类名 |
| `borderRadius` | `string` | `''` | 圆角大小 |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `close` | `event: MouseEvent` | 关闭警告时触发 |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| `default` | 警告内容 |
| `title` | 警告标题 |
| `close` | 关闭按钮 |

## 示例代码

### 基本使用

```vue
<template>
  <div>
    <CrystalAlert title="这是一条警告信息" />
  </div>
</template>

<script setup>
import { CrystalAlert } from "crystalplus-ui";
</script>
```

### 不同类型警告

```vue
<template>
  <div>
    <CrystalAlert title="成功提示" type="success" showIcon />
    <CrystalAlert title="警告提示" type="warning" showIcon />
    <CrystalAlert title="信息提示" type="info" showIcon />
    <CrystalAlert title="错误提示" type="error" showIcon />
  </div>
</template>

<script setup>
import { CrystalAlert } from "crystalplus-ui";
</script>

<style scoped>
:deep(.el-alert) {
  margin-bottom: 10px;
}
</style>
```

### 带描述的警告

```vue
<template>
  <div>
    <CrystalAlert
      title="警告提示"
      type="warning"
      description="这是一段警告描述信息，用于详细说明警告内容。"
      showIcon
    />
  </div>
</template>

<script setup>
import { CrystalAlert } from "crystalplus-ui";
</script>
```

### 可关闭的警告

```vue
<template>
  <div>
    <CrystalAlert
      title="可关闭的警告"
      type="info"
      closable
      @close="handleClose"
    />
  </div>
</template>

<script setup>
import { CrystalAlert } from "crystalplus-ui";
import { ElMessage } from "element-plus";

const handleClose = () => {
  ElMessage.info("警告被关闭");
};
</script>
```

### 自定义效果

```vue
<template>
  <div>
    <CrystalAlert
      title="浅色效果"
      type="info"
      effect="light"
      showIcon
    />
    <CrystalAlert
      title="深色效果"
      type="info"
      effect="dark"
      showIcon
    />
  </div>
</template>

<script setup>
import { CrystalAlert } from "crystalplus-ui";
</script>

<style scoped>
:deep(.el-alert) {
  margin-bottom: 10px;
}
</style>
```

## 注意事项

1. **类型选择**：根据不同的场景选择合适的警告类型，以便用户能够快速理解信息的重要性
2. **图标显示**：建议在重要的警告信息中显示图标，以增强视觉效果
3. **自动关闭**：对于临时性的通知，可以设置自动关闭时长
4. **描述信息**：对于复杂的警告信息，可以使用 `description` 属性添加详细说明
5. **样式定制**：可以使用 `customClass` 和 `borderRadius` 属性自定义警告的样式

## 常见问题

### 如何设置警告自动关闭？

设置 `duration` 属性为非零值：

```vue
<CrystalAlert
  title="自动关闭的警告"
  type="success"
  duration="3000"
  showIcon
/>
```

### 如何隐藏关闭按钮？

设置 `closable` 为 `false`：

```vue
<CrystalAlert
  title="不可关闭的警告"
  type="info"
  :closable="false"
/>
```

### 如何让警告居中显示？

设置 `center` 为 `true`：

```vue
<CrystalAlert
  title="居中显示的警告"
  type="warning"
  :center="true"
  showIcon
/>
```