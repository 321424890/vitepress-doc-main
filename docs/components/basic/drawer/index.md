# CrystalDrawer

CrystalDrawer 是基于 Element Plus Drawer 组件封装的增强版抽屉组件，继承了原组件的所有属性和事件，支持从不同方向打开。

## 功能特性

- ✅ 支持 Element Plus Drawer 所有功能
- ✅ 支持从不同方向打开（右、左、上、下）
- ✅ 自定义头部内容
- ✅ 支持所有 Element Plus Drawer 事件
- ✅ 支持所有 Element Plus Drawer 插槽
- ✅ 响应式设计
- ✅ 高度可定制

## 基本用法

::: demo
components/basic/drawer/examples/BasicDrawer.vue
:::

## 高级用法

::: demo
components/basic/drawer/examples/AdvancedDrawer.vue
:::

## 自定义用法

::: demo
components/basic/drawer/examples/CustomDrawer.vue
:::

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| ------ | ---- | ------ | ---- |
| `modelValue / v-model` | `boolean` | `false` | 抽屉显示状态 |
| `title` | `string` | `""` | 抽屉标题 |
| `direction` | `string` | `"rtl"` | 抽屉打开方向 (rtl/ltr/ttb/btt) |
| `size` | `string / number` | `"30%"` | 抽屉尺寸 |
| `with-header` | `boolean` | `true` | 是否显示头部 |
| `modal` | `boolean` | `true` | 是否显示遮罩层 |
| `modal-append-to-body` | `boolean` | `true` | 遮罩层是否插入到 body 元素下 |
| `append-to-body` | `boolean` | `false` | 抽屉是否插入到 body 元素下 |
| `lock-scroll` | `boolean` | `true` | 是否锁定背景滚动 |
| `custom-class` | `string` | `""` | 自定义类名 |
| `close-on-click-modal` | `boolean` | `true` | 点击遮罩层是否关闭抽屉 |
| `close-on-press-escape` | `boolean` | `true` | 按下 ESC 键是否关闭抽屉 |
| `show-close` | `boolean` | `true` | 是否显示关闭按钮 |
| `before-close` | `function` | `-` | 关闭前的回调函数 |

### 事件

| 事件名 | 参数 | 说明 |
| ------ | ---- | ---- |
| `open` | - | 抽屉打开时触发 |
| `opened` | - | 抽屉打开动画结束时触发 |
| `close` | - | 抽屉关闭时触发 |
| `closed` | - | 抽屉关闭动画结束时触发 |
| `update:modelValue` | `value: boolean` | 抽屉显示状态变化时触发 |

### 插槽

| 插槽名 | 说明 |
| ------ | ---- |
| `default` | 抽屉内容 |
| `header` | 抽屉头部内容 |
| `footer` | 抽屉底部内容 |

## 注意事项

1. **方向设置**：通过 `direction` 属性可以设置抽屉从不同方向打开
2. **自定义头部**：使用 `header` 插槽可以完全自定义抽屉头部内容
3. **事件传递**：所有 Element Plus Drawer 的事件都会被传递，可以正常监听
4. **属性继承**：所有 Element Plus Drawer 的属性都可以正常使用
5. **响应式**：抽屉会根据屏幕尺寸自动调整

## 常见问题

### 如何设置抽屉的打开方向？

通过 `direction` 属性可以设置抽屉的打开方向：

```vue
<template>
  <!-- 从右侧打开 -->
  <CrystalDrawer v-model="drawerVisible" direction="rtl">
    <!-- 内容 -->
  </CrystalDrawer>
  
  <!-- 从左侧打开 -->
  <CrystalDrawer v-model="drawerVisible" direction="ltr">
    <!-- 内容 -->
  </CrystalDrawer>
  
  <!-- 从顶部打开 -->
  <CrystalDrawer v-model="drawerVisible" direction="ttb">
    <!-- 内容 -->
  </CrystalDrawer>
</template>

<script setup>
import { ref } from "vue";
import { CrystalDrawer } from "crystalplus-ui";

const drawerVisible = ref(false);
</script>
```

### 如何自定义抽屉头部？

使用 `header` 插槽可以完全自定义抽屉头部内容：

```vue
<template>
  <CrystalDrawer v-model="drawerVisible" width="600px">
    <template #header>
      <div class="custom-header">
        <el-icon class="custom-header-icon"><Menu /></el-icon>
        <span class="custom-header-title">自定义头部抽屉</span>
        <el-button type="primary" size="small" @click="drawerVisible = false">关闭</el-button>
      </div>
    </template>
    <div class="drawer-content">
      <p>这是一个自定义头部的抽屉</p>
    </div>
  </CrystalDrawer>
</template>

<script setup>
import { ref } from "vue";
import { CrystalDrawer } from "crystalplus-ui";
import { Menu } from "@element-plus/icons-vue";

const drawerVisible = ref(false);
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
  <CrystalDrawer v-model="drawerVisible" title="带底部按钮的抽屉" width="600px">
    <div class="drawer-content">
      <p>这是一个带底部按钮的抽屉</p>
    </div>
    <template #footer>
      <div class="drawer-footer">
        <el-button @click="drawerVisible = false">取消</el-button>
        <el-button type="primary" @click="drawerVisible = false">确认</el-button>
      </div>
    </template>
  </CrystalDrawer>
</template>

<script setup>
import { ref } from "vue";
import { CrystalDrawer } from "crystalplus-ui";

const drawerVisible = ref(false);
</script>

<style scoped>
.drawer-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
```