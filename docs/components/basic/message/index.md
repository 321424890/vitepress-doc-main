# CrystalMessage

CrystalMessage 是基于 Element Plus 的 ElMessage 封装的消息提示组件，提供了更简洁的 API 和默认配置，用于在页面顶部显示消息提示。

## 功能特性

- ✅ 支持多种消息类型：成功、警告、错误、信息
- ✅ 支持自定义消息内容和配置
- ✅ 支持自动关闭和手动关闭
- ✅ 支持自定义显示时长和偏移量
- ✅ 支持自定义样式类名
- ✅ 提供简洁的静态方法调用

## 基本用法

::: demo
components/basic/message/examples/BasicMessage.vue
:::

## 不同类型的消息

::: demo
components/basic/message/examples/MessageTypes.vue
:::

## 自定义配置

::: demo
components/basic/message/examples/CustomMessage.vue
:::

## API

### 静态方法

| 方法名 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `show(options)` | `options: CrystalMessageOptions \| string` | `MessageHandle` | 显示消息，支持字符串或配置对象 |
| `success(message, options?)` | `message: string, options?: Omit<CrystalMessageOptions, 'message' \| 'type'>` | `MessageHandle` | 显示成功消息 |
| `warning(message, options?)` | `message: string, options?: Omit<CrystalMessageOptions, 'message' \| 'type'>` | `MessageHandle` | 显示警告消息 |
| `error(message, options?)` | `message: string, options?: Omit<CrystalMessageOptions, 'message' \| 'type'>` | `MessageHandle` | 显示错误消息 |
| `info(message, options?)` | `message: string, options?: Omit<CrystalMessageOptions, 'message' \| 'type'>` | `MessageHandle` | 显示信息消息 |
| `closeAll()` | 无 | `void` | 关闭所有消息 |

### 配置选项

| 选项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `message` | `string` | `''` | 消息内容 |
| `type` | `'success' \| 'warning' \| 'info' \| 'error'` | - | 消息类型 |
| `duration` | `number` | `3000` | 显示时长（毫秒），0 表示不自动关闭 |
| `showClose` | `boolean` | `true` | 是否显示关闭按钮 |
| `offset` | `number` | `20` | 偏移量（像素） |
| `customClass` | `string` | - | 自定义样式类名 |

### 返回值

`MessageHandle` 对象具有以下方法：

| 方法名 | 说明 |
| --- | --- |
| `close()` | 关闭当前消息 |

## 示例代码

### 基本使用

```vue
<template>
  <div>
    <el-button type="primary" @click="showMessage">显示消息</el-button>
  </div>
</template>

<script setup>
import { CrystalMessage } from "crystalplus-ui";

const showMessage = () => {
  CrystalMessage.show("这是一条消息");
};
</script>
```

### 不同类型消息

```vue
<template>
  <div>
    <el-button type="success" @click="showSuccess">成功消息</el-button>
    <el-button type="warning" @click="showWarning">警告消息</el-button>
    <el-button type="danger" @click="showError">错误消息</el-button>
    <el-button type="info" @click="showInfo">信息消息</el-button>
  </div>
</template>

<script setup>
import { CrystalMessage } from "crystalplus-ui";

const showSuccess = () => {
  CrystalMessage.success("操作成功");
};

const showWarning = () => {
  CrystalMessage.warning("警告信息");
};

const showError = () => {
  CrystalMessage.error("操作失败");
};

const showInfo = () => {
  CrystalMessage.info("提示信息");
};
</script>
```

### 自定义配置

```vue
<template>
  <div>
    <el-button @click="showCustomMessage">自定义消息</el-button>
    <el-button @click="closeAllMessages">关闭所有消息</el-button>
  </div>
</template>

<script setup>
import { CrystalMessage } from "crystalplus-ui";

const showCustomMessage = () => {
  CrystalMessage.show({
    message: "这是一条自定义消息",
    type: "success",
    duration: 5000,
    showClose: true,
    offset: 100,
    customClass: "custom-message"
  });
};

const closeAllMessages = () => {
  CrystalMessage.closeAll();
};
</script>

<style scoped>
.custom-message {
  background-color: #f0f9eb;
  border-color: #67c23a;
  color: #67c23a;
}
</style>
```

## 注意事项

1. **消息叠加**：当同时显示多条消息时，它们会自动叠加显示
2. **自动关闭**：默认情况下，消息会在 3 秒后自动关闭，可以通过 `duration` 选项自定义
3. **手动关闭**：可以通过点击关闭按钮或调用返回的 `close()` 方法手动关闭消息
4. **偏移量**：`offset` 选项控制消息距离页面顶部的距离
5. **样式定制**：可以通过 `customClass` 选项添加自定义样式类名

## 常见问题

### 如何让消息不自动关闭？

设置 `duration` 为 0：

```javascript
CrystalMessage.show({
  message: "这条消息不会自动关闭",
  duration: 0
});
```

### 如何关闭指定的消息？

使用返回的 `MessageHandle` 对象：

```javascript
const message = CrystalMessage.show("这条消息可以手动关闭");
// 稍后关闭
setTimeout(() => {
  message.close();
}, 2000);
```

### 如何关闭所有消息？

使用 `closeAll()` 方法：

```javascript
CrystalMessage.closeAll();
```