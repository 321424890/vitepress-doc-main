# CrystalNotify

CrystalNotify 是基于 Element Plus 的 ElNotification 封装的通知组件，提供了更简洁的 API 和默认配置，用于在页面右上角显示通知消息。

## 功能特性

- ✅ 支持多种通知类型：成功、警告、信息、错误
- ✅ 支持自定义标题和内容
- ✅ 支持自动关闭和手动关闭
- ✅ 支持自定义显示时长和偏移量
- ✅ 支持自定义样式类名
- ✅ 提供简洁的静态方法调用

## 基本用法

::: demo
components/basic/notify/examples/BasicNotify.vue
:::

## 不同类型的通知

::: demo
components/basic/notify/examples/NotifyTypes.vue
:::

## 自定义配置

::: demo
components/basic/notify/examples/CustomNotify.vue
:::

## API

### 静态方法

| 方法名 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `show(options)` | `options: CrystalNotifyOptions` | `NotificationHandle` | 显示通知，支持配置对象 |
| `success(message, title?, options?)` | `message: string, title?: string, options?: Omit<CrystalNotifyOptions, 'message' \| 'title' \| 'type'>` | `NotificationHandle` | 显示成功通知 |
| `warning(message, title?, options?)` | `message: string, title?: string, options?: Omit<CrystalNotifyOptions, 'message' \| 'title' \| 'type'>` | `NotificationHandle` | 显示警告通知 |
| `error(message, title?, options?)` | `message: string, title?: string, options?: Omit<CrystalNotifyOptions, 'message' \| 'title' \| 'type'>` | `NotificationHandle` | 显示错误通知 |
| `info(message, title?, options?)` | `message: string, title?: string, options?: Omit<CrystalNotifyOptions, 'message' \| 'title' \| 'type'>` | `NotificationHandle` | 显示信息通知 |
| `closeAll()` | 无 | `void` | 关闭所有通知 |

### 配置选项

| 选项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `title` | `string` | - | 通知标题 |
| `message` | `string` | - | 通知内容 |
| `type` | `'success' \| 'warning' \| 'info' \| 'error'` | - | 通知类型 |
| `duration` | `number` | `3000` | 显示时长（毫秒），0 表示不自动关闭 |
| `showClose` | `boolean` | `true` | 是否显示关闭按钮 |
| `offset` | `number` | `20` | 偏移量（像素） |
| `customClass` | `string` | `''` | 自定义样式类名 |
| `borderRadius` | `string` | - | 圆角大小 |

### 返回值

`NotificationHandle` 对象具有以下方法：

| 方法名 | 说明 |
| --- | --- |
| `close()` | 关闭当前通知 |

## 示例代码

### 基本使用

```vue
<template>
  <div>
    <el-button type="primary" @click="showNotify">显示通知</el-button>
  </div>
</template>

<script setup>
import { CrystalNotify } from "crystalplus-ui";

const showNotify = () => {
  CrystalNotify.show({
    title: "通知标题",
    message: "这是一条通知消息"
  });
};
</script>
```

### 不同类型通知

```vue
<template>
  <div>
    <el-button type="success" @click="showSuccess">成功通知</el-button>
    <el-button type="warning" @click="showWarning">警告通知</el-button>
    <el-button type="danger" @click="showError">错误通知</el-button>
    <el-button type="info" @click="showInfo">信息通知</el-button>
  </div>
</template>

<script setup>
import { CrystalNotify } from "crystalplus-ui";

const showSuccess = () => {
  CrystalNotify.success("操作成功", "成功");
};

const showWarning = () => {
  CrystalNotify.warning("警告信息", "警告");
};

const showError = () => {
  CrystalNotify.error("操作失败", "错误");
};

const showInfo = () => {
  CrystalNotify.info("提示信息", "信息");
};
</script>
```

### 自定义配置

```vue
<template>
  <div>
    <el-button @click="showCustomNotify">自定义通知</el-button>
    <el-button @click="showPermanentNotify">永久通知</el-button>
    <el-button @click="closeAllNotifies">关闭所有通知</el-button>
  </div>
</template>

<script setup>
import { CrystalNotify } from "crystalplus-ui";

const showCustomNotify = () => {
  CrystalNotify.show({
    title: "自定义通知",
    message: "这是一条带有自定义配置的通知",
    type: "success",
    duration: 5000,
    showClose: true,
    offset: 100,
    customClass: "custom-notify"
  });
};

const showPermanentNotify = () => {
  CrystalNotify.show({
    title: "永久通知",
    message: "这是一条不会自动关闭的通知",
    type: "info",
    duration: 0,
    showClose: true
  });
};

const closeAllNotifies = () => {
  CrystalNotify.closeAll();
};
</script>

<style scoped>
:deep(.custom-notify) {
  background-color: #f0f9eb;
  border-color: #67c23a;
  color: #67c23a;
}
</style>
```

## 注意事项

1. **通知叠加**：当同时显示多条通知时，它们会自动叠加显示
2. **自动关闭**：默认情况下，通知会在 3 秒后自动关闭，可以通过 `duration` 选项自定义
3. **手动关闭**：可以通过点击关闭按钮或调用返回的 `close()` 方法手动关闭通知
4. **偏移量**：`offset` 选项控制通知距离页面顶部的距离
5. **样式定制**：可以通过 `customClass` 选项添加自定义样式类名

## 常见问题

### 如何让通知不自动关闭？

设置 `duration` 为 0：

```javascript
CrystalNotify.show({
  title: "永久通知",
  message: "这条通知不会自动关闭",
  duration: 0
});
```

### 如何关闭指定的通知？

使用返回的 `NotificationHandle` 对象：

```javascript
const notify = CrystalNotify.show({
  title: "可关闭的通知",
  message: "这条通知可以手动关闭"
});
// 稍后关闭
setTimeout(() => {
  notify.close();
}, 2000);
```

### 如何关闭所有通知？

使用 `closeAll()` 方法：

```javascript
CrystalNotify.closeAll();
```