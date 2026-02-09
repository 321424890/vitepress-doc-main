# CrystalDialog

CrystalDialog 是基于 Element Plus Dialog 组件封装的增强版弹窗组件，添加了全屏/退出全屏功能，继承了原组件的所有属性和事件。

## 功能特性

- ✅ 支持 Element Plus Dialog 所有功能
- ✅ 全屏/退出全屏切换功能
- ✅ 自定义头部内容
- ✅ 支持所有 Element Plus Dialog 事件
- ✅ 支持所有 Element Plus Dialog 插槽
- ✅ 响应式设计
- ✅ 高度可定制

## 基本用法

::: demo
components/basic/dialog/examples/BasicDialog.vue
:::

## 高级用法

::: demo
components/basic/dialog/examples/AdvancedDialog.vue
:::

## 自定义用法

::: demo
components/basic/dialog/examples/CustomDialog.vue
:::

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| ------ | ---- | ------ | ---- |
| `modelValue / v-model` | `boolean` | `false` | 弹窗显示状态 |
| `title` | `string` | `""` | 弹窗标题 |
| `width` | `string / number` | `"50%"` | 弹窗宽度 |
| `fullscreen` | `boolean` | `false` | 是否全屏显示 |
| `top` | `string` | `"15vh"` | 弹窗距离顶部的距离 |
| `modal` | `boolean` | `true` | 是否显示遮罩层 |
| `modal-append-to-body` | `boolean` | `true` | 遮罩层是否插入到 body 元素下 |
| `append-to-body` | `boolean` | `false` | 弹窗是否插入到 body 元素下 |
| `lock-scroll` | `boolean` | `true` | 是否锁定背景滚动 |
| `custom-class` | `string` | `""` | 自定义类名 |
| `close-on-click-modal` | `boolean` | `true` | 点击遮罩层是否关闭弹窗 |
| `close-on-press-escape` | `boolean` | `true` | 按下 ESC 键是否关闭弹窗 |
| `show-close` | `boolean` | `true` | 是否显示关闭按钮 |
| `center` | `boolean` | `false` | 是否居中显示 |
| `destroy-on-close` | `boolean` | `false` | 关闭时是否销毁弹窗内容 |
| `draggable` | `boolean` | `false` | 是否可拖拽 |
| `resize` | `boolean` | `false` | 是否可调整大小 |

### 事件

| 事件名 | 参数 | 说明 |
| ------ | ---- | ---- |
| `open` | - | 弹窗打开时触发 |
| `opened` | - | 弹窗打开动画结束时触发 |
| `close` | - | 弹窗关闭时触发 |
| `closed` | - | 弹窗关闭动画结束时触发 |
| `update:modelValue` | `value: boolean` | 弹窗显示状态变化时触发 |
| `update:isFullscreen` | `value: boolean` | 全屏状态变化时触发 |

### 插槽

| 插槽名 | 说明 |
| ------ | ---- |
| `default` | 弹窗内容 |
| `header` | 弹窗头部内容 |
| `footer` | 弹窗底部内容 |

## 注意事项

1. **全屏功能**：点击弹窗右上角的全屏图标可以切换全屏状态
2. **自定义头部**：使用 `header` 插槽可以完全自定义弹窗头部内容
3. **事件传递**：所有 Element Plus Dialog 的事件都会被传递，可以正常监听
4. **属性继承**：所有 Element Plus Dialog 的属性都可以正常使用
5. **响应式**：弹窗会根据屏幕尺寸自动调整

## 常见问题

### 如何实现全屏功能？

CrystalDialog 组件内置了全屏功能，点击弹窗右上角的全屏图标即可切换全屏状态。

```vue
<template>
  <CrystalDialog v-model="dialogVisible" title="全屏弹窗" width="800px">
    <div class="dialog-content">
      <p>点击右上角的全屏图标可以切换全屏状态</p>
    </div>
  </CrystalDialog>
</template>

<script setup>
import { ref } from "vue";
import { CrystalDialog } from "crystalplus-ui";

const dialogVisible = ref(false);
</script>
```

### 如何自定义弹窗头部？

使用 `header` 插槽可以完全自定义弹窗头部内容：

```vue
<template>
  <CrystalDialog v-model="dialogVisible" width="600px">
    <template #header>
      <div class="custom-header">
        <el-icon class="custom-header-icon"><MessageBox /></el-icon>
        <span class="custom-header-title">自定义头部弹窗</span>
      </div>
    </template>
    <div class="dialog-content">
      <p>这是一个自定义头部的弹窗</p>
    </div>
  </CrystalDialog>
</template>

<script setup>
import { ref } from "vue";
import { CrystalDialog } from "crystalplus-ui";
import { MessageBox } from "@element-plus/icons-vue";

const dialogVisible = ref(false);
</script>

<style scoped>
.custom-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.custom-header-icon {
  color: #409eff;
  font-size: 18px;
}

.custom-header-title {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
}
</style>
```

### 如何添加底部按钮？

使用 `footer` 插槽可以添加自定义底部按钮：

```vue
<template>
  <CrystalDialog v-model="dialogVisible" title="带底部按钮的弹窗" width="600px">
    <div class="dialog-content">
      <p>这是一个带底部按钮的弹窗</p>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确认</el-button>
      </div>
    </template>
  </CrystalDialog>
</template>

<script setup>
import { ref } from "vue";
import { CrystalDialog } from "crystalplus-ui";

const dialogVisible = ref(false);
</script>

<style scoped>
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
```