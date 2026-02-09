# CrystalRadioGroup

CrystalRadioGroup 是基于 Element Plus 的 ElRadioGroup 组件封装的单选框组组件，继承了 ElRadioGroup 的所有属性、事件和插槽，并提供了额外的自定义功能。

## 功能特性

- ✅ 支持 Element Plus 所有单选框组功能
- ✅ 基础单选框组功能，支持单选操作
- ✅ 禁用状态支持
- ✅ 带边框样式
- ✅ 不同尺寸选项（大号、默认、小号）
- ✅ 水平排列选项
- ✅ 事件处理支持
- ✅ 动态选项生成
- ✅ 与 CrystalRadio 组件完美集成
- ✅ 表单集成支持

## 基础用法

::: demo
components/basic/radio-group/examples/BasicRadioGroup.vue
:::

## 高级用法

### 事件处理和动态选项

::: demo
components/basic/radio-group/examples/AdvancedRadioGroup.vue
:::

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| v-model | `any` | - | 绑定值 |
| disabled | `boolean` | `false` | 是否禁用 |
| size | `string` | `'default'` | 尺寸，可选值：large, default, small |
| border | `boolean` | `false` | 是否显示边框 |
| direction | `string` | `'vertical'` | 排列方向，可选值：horizontal, vertical |
| text-color | `string` | - | 文字颜色 |
| fill | `string` | - | 填充色 |

### 事件

| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 绑定值更新时触发 | `value: any` |
| change | 值改变时触发 | `value: any` |

### 插槽

| 名称 | 说明 |
| ---- | ---- |
| default | 默认插槽，用于放置 CrystalRadio 组件 |

## 注意事项

1. **数据绑定**：使用 `v-model` 进行双向数据绑定，值为选中的单选框的 label 值
2. **禁用状态**：通过 `disabled` 属性设置禁用状态，禁用时所有子单选框都不可点击
3. **边框样式**：通过 `border` 属性启用带边框的单选框组样式
4. **尺寸设置**：通过 `size` 属性设置单选框组的尺寸，可选值为 large、default、small
5. **排列方向**：通过 `direction` 属性设置单选框的排列方向，可选值为 horizontal、vertical
6. **与 Radio 集成**：CrystalRadioGroup 可以与 CrystalRadio 组件完美集成，实现单选框组功能
7. **动态选项**：支持通过数据动态生成单选框选项

## 常见问题

### 如何设置默认选中值？

使用 `v-model` 绑定初始值，值与对应的单选框的 `label` 属性匹配：

```vue
<template>
  <CrystalRadioGroup v-model="value">
    <CrystalRadio label="option1">选项1</CrystalRadio>
    <CrystalRadio label="option2">选项2</CrystalRadio>
    <CrystalRadio label="option3">选项3</CrystalRadio>
  </CrystalRadioGroup>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalRadioGroup, CrystalRadio } from 'crystalplus-ui'

const value = ref('option2') // 默认选中选项2
</script>
```

### 如何禁用单选框组？

通过 `disabled` 属性设置禁用状态：

```vue
<template>
  <CrystalRadioGroup v-model="value" disabled>
    <CrystalRadio label="option1">选项1</CrystalRadio>
    <CrystalRadio label="option2">选项2</CrystalRadio>
    <CrystalRadio label="option3">选项3</CrystalRadio>
  </CrystalRadioGroup>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalRadioGroup, CrystalRadio } from 'crystalplus-ui'

const value = ref('option1')
</script>
```

### 如何设置水平排列？

通过 `direction` 属性设置排列方向为 horizontal：

```vue
<template>
  <CrystalRadioGroup v-model="value" direction="horizontal">
    <CrystalRadio label="option1">选项1</CrystalRadio>
    <CrystalRadio label="option2">选项2</CrystalRadio>
    <CrystalRadio label="option3">选项3</CrystalRadio>
  </CrystalRadioGroup>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalRadioGroup, CrystalRadio } from 'crystalplus-ui'

const value = ref('option1')
</script>
```

### 如何使用带边框的单选框组？

通过 `border` 属性启用带边框的单选框组样式：

```vue
<template>
  <CrystalRadioGroup v-model="value" border>
    <CrystalRadio label="option1">选项1</CrystalRadio>
    <CrystalRadio label="option2">选项2</CrystalRadio>
    <CrystalRadio label="option3">选项3</CrystalRadio>
  </CrystalRadioGroup>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalRadioGroup, CrystalRadio } from 'crystalplus-ui'

const value = ref('option1')
</script>
```