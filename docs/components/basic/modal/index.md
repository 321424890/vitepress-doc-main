# CrystalModal

CrystalModal 是基于 Element Plus 的 ElDialog 封装的模态对话框组件，提供了更简洁的 API 和默认配置，用于在页面中显示模态对话框。

## 功能特性

- ✅ 支持多种自定义配置选项
- ✅ 支持自定义头部、内容和底部
- ✅ 支持多种事件回调
- ✅ 支持键盘操作和点击外部关闭
- ✅ 支持自定义样式和动画
- ✅ 支持全屏模式
- ✅ 支持延迟打开和关闭

## 基本用法

::: demo
components/basic/modal/examples/BasicModal.vue
:::

## 自定义内容

::: demo
components/basic/modal/examples/CustomModal.vue
:::

## 自定义底部按钮

::: demo
components/basic/modal/examples/CustomFooterModal.vue
:::

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `boolean` | `false` | 控制对话框是否可见 |
| `title` | `string` | `''` | 对话框标题 |
| `width` | `string` | `'50%'` | 对话框宽度 |
| `top` | `string` | `'15vh'` | 对话框距离顶部的位置 |
| `modal` | `boolean` | `true` | 是否显示遮罩层 |
| `modalAppendToBody` | `boolean` | `true` | 遮罩层是否添加到 body 上 |
| `appendToBody` | `boolean` | `false` | 对话框自身是否添加到 body 上 |
| `lockScroll` | `boolean` | `true` | 是否锁定滚动 |
| `customClass` | `string` | `''` | 自定义对话框类名 |
| `openDelay` | `number` | `0` | 打开延迟时间（毫秒） |
| `closeDelay` | `number` | `0` | 关闭延迟时间（毫秒） |
| `closeOnClickModal` | `boolean` | `true` | 是否可以通过点击遮罩层关闭对话框 |
| `closeOnPressEscape` | `boolean` | `true` | 是否可以通过按下 ESC 关闭对话框 |
| `showClose` | `boolean` | `true` | 是否显示关闭按钮 |
| `center` | `boolean` | `false` | 是否居中显示 |
| `destroyOnClose` | `boolean` | `false` | 关闭时是否销毁对话框内容 |
| `fullscreen` | `boolean` | `false` | 是否全屏显示 |
| `zIndex` | `number` | `2001` | 对话框的 z-index |
| `teleported` | `boolean` | `true` | 是否使用 teleport |
| `confirmText` | `string` | `'确定'` | 确认按钮文本 |
| `cancelText` | `string` | `'取消'` | 取消按钮文本 |
| `borderRadius` | `string` | `''` | 对话框圆角 |
| `showFooter` | `boolean` | `true` | 是否显示底部按钮 |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `value: boolean` | 对话框可见性变化时触发 |
| `open` | 无 | 对话框打开时触发 |
| `opened` | 无 | 对话框打开动画结束后触发 |
| `close` | 无 | 对话框关闭时触发 |
| `closed` | 无 | 对话框关闭动画结束后触发 |
| `click-modal` | 无 | 点击遮罩层时触发 |
| `click-close` | 无 | 点击关闭按钮时触发 |
| `confirm` | 无 | 点击确认按钮时触发 |
| `cancel` | 无 | 点击取消按钮时触发 |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| `default` | 对话框内容 |
| `header` | 对话框头部 |
| `title` | 对话框标题 |
| `footer` | 对话框底部按钮 |

## 示例代码

### 基本使用

```vue
<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">打开对话框</el-button>
    <CrystalModal
      v-model="dialogVisible"
      title="提示"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    >
      <span>这是一段内容</span>
    </CrystalModal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { CrystalModal } from "crystalplus-ui";
import { ElMessage } from "element-plus";

const dialogVisible = ref(false);

const handleConfirm = () => {
  ElMessage.success("确定按钮被点击");
  dialogVisible.value = false;
};

const handleCancel = () => {
  ElMessage.info("取消按钮被点击");
  dialogVisible.value = false;
};
</script>
```

### 自定义内容

```vue
<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">打开对话框</el-button>
    <CrystalModal
      v-model="dialogVisible"
      title="用户信息"
      width="60%"
      @confirm="handleConfirm"
    >
      <el-form :model="userForm" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="userForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model.number="userForm.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="userForm.gender">
            <el-radio label="male">男</el-radio>
            <el-radio label="female">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="userForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
      </el-form>
    </CrystalModal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { CrystalModal } from "crystalplus-ui";
import { ElMessage } from "element-plus";

const dialogVisible = ref(false);
const userForm = ref({
  name: "",
  age: 0,
  gender: "male",
  email: ""
});

const handleConfirm = () => {
  ElMessage.success(`用户信息：${JSON.stringify(userForm.value)}`);
  dialogVisible.value = false;
};
</script>
```

### 自定义底部按钮

```vue
<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">打开对话框</el-button>
    <CrystalModal
      v-model="dialogVisible"
      title="自定义底部"
      width="50%"
    >
      <span>这是一段内容，底部按钮已自定义</span>
      <template #footer>
        <el-button @click="handleCancel">关闭</el-button>
        <el-button type="primary" @click="handleSave">保存</el-button>
        <el-button type="success" @click="handleSubmit">提交</el-button>
      </template>
    </CrystalModal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { CrystalModal } from "crystalplus-ui";
import { ElMessage } from "element-plus";

const dialogVisible = ref(false);

const handleCancel = () => {
  ElMessage.info("关闭按钮被点击");
  dialogVisible.value = false;
};

const handleSave = () => {
  ElMessage.success("保存按钮被点击");
  dialogVisible.value = false;
};

const handleSubmit = () => {
  ElMessage.success("提交按钮被点击");
  dialogVisible.value = false;
};
</script>
```

## 注意事项

1. **数据绑定**：使用 `v-model` 绑定 `modelValue` 属性来控制对话框的显示和隐藏
2. **事件处理**：使用 `@confirm` 和 `@cancel` 事件来处理确认和取消操作
3. **自定义内容**：可以在对话框内部放置任何内容，包括表单、表格等复杂组件
4. **性能优化**：对于复杂内容，建议使用 `destroyOnClose` 属性来在关闭时销毁内容
5. **样式定制**：可以使用 `customClass` 属性来添加自定义样式类名

## 常见问题

### 如何禁止点击遮罩层关闭对话框？

设置 `closeOnClickModal` 为 `false`：

```vue
<CrystalModal
  v-model="dialogVisible"
  title="提示"
  :closeOnClickModal="false"
>
  <span>点击遮罩层不会关闭对话框</span>
</CrystalModal>
```

### 如何禁止按 ESC 键关闭对话框？

设置 `closeOnPressEscape` 为 `false`：

```vue
<CrystalModal
  v-model="dialogVisible"
  title="提示"
  :closeOnPressEscape="false"
>
  <span>按 ESC 键不会关闭对话框</span>
</CrystalModal>
```

### 如何使对话框居中显示？

设置 `center` 为 `true`：

```vue
<CrystalModal
  v-model="dialogVisible"
  title="提示"
  :center="true"
>
  <span>对话框内容居中显示</span>
</CrystalModal>
```