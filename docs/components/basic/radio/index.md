# CrystalRadio

CrystalRadio 是基于 Element Plus 的 ElRadio 组件封装的单选框组件，继承了 ElRadio 的所有属性、事件和插槽，并提供了额外的自定义功能。

## 功能特性

- ✅ 支持 Element Plus 所有单选框功能
- ✅ 基础单选框功能，支持选中/未选中状态
- ✅ 禁用状态支持
- ✅ 带边框样式
- ✅ 不同尺寸选项（大号、默认、小号）
- ✅ 点亮点功能，增强用户交互体验
- ✅ 自定义字体颜色支持
- ✅ 事件处理支持
- ✅ 与 CrystalRadioGroup 组件完美集成

## 基础用法

::: demo
components/basic/radio/examples/BasicRadio.vue
:::

## 高级用法

### 事件处理和自定义选项

::: demo
components/basic/radio/examples/AdvancedRadio.vue
:::

## API

### 属性

| 属性          | 类型                    | 默认值      | 说明                                |
| ------------- | ----------------------- | ----------- | ----------------------------------- |
| v-model       | `any`                   | `false`     | 绑定值                              |
| label         | `any`                   | `true`      | 单选框的值                          |
| true-label    | `any`                   | -           | 选中时的值                          |
| false-label   | `any`                   | -           | 未选中时的值                        |
| disabled      | `boolean`               | `false`     | 是否禁用                            |
| border        | `boolean`               | `false`     | 是否显示边框                        |
| size          | `string`                | `'default'` | 尺寸，可选值：large, default, small |
| name          | `string`                | -           | 原生 name 属性                      |
| checked       | `boolean`               | `false`     | 是否默认选中                        |
| before-change | `(val: any) => boolean` | -           | 改变前的钩子函数                    |
| highlight     | `boolean`               | `false`     | 是否启用点亮点功能                  |
| font-color    | `string`                | -           | 文字颜色                            |

### 事件

| 事件名            | 说明             | 参数                |
| ----------------- | ---------------- | ------------------- |
| update:modelValue | 绑定值更新时触发 | `value: any`        |
| change            | 值改变时触发     | `value: any`        |
| click             | 点击时触发       | `event: MouseEvent` |

### 插槽

| 名称    | 说明                               |
| ------- | ---------------------------------- |
| default | 默认插槽，用于自定义单选框标签内容 |

## 注意事项

1. **数据绑定**：使用 `v-model` 进行双向数据绑定，值为单选框的 label 值
2. **禁用状态**：通过 `disabled` 属性设置禁用状态，禁用时单选框不可点击
3. **边框样式**：通过 `border` 属性启用带边框的单选框样式
4. **尺寸设置**：通过 `size` 属性设置单选框的尺寸，可选值为 large、default、small
5. **点亮点功能**：通过 `highlight` 属性启用点亮点功能，点击时会显示高亮效果
6. **与 RadioGroup 集成**：CrystalRadio 可以与 CrystalRadioGroup 组件完美集成，实现单选框组功能

## 常见问题

### 如何设置默认选中值？

使用 `v-model` 绑定初始值，值与对应的 `label` 属性匹配：

```vue
<template>
  <CrystalRadio v-model="value" label="option1">选项1</CrystalRadio>
  <CrystalRadio v-model="value" label="option2">选项2</CrystalRadio>
  <CrystalRadio v-model="value" label="option3">选项3</CrystalRadio>
</template>

<script setup>
import { ref } from "vue";
import { CrystalRadio } from "crystalplus-ui";

const value = ref("option2"); // 默认选中选项2
</script>
```

### 如何禁用单选框？

通过 `disabled` 属性设置禁用状态：

```vue
<template>
  <CrystalRadio v-model="value" label="option1">可选选项</CrystalRadio>
  <CrystalRadio v-model="value" label="option2" disabled>禁用选项</CrystalRadio>
</template>

<script setup>
import { ref } from "vue";
import { CrystalRadio } from "crystalplus-ui";

const value = ref("option1");
</script>
```

### 如何使用带边框的单选框？

通过 `border` 属性启用带边框的单选框样式：

```vue
<template>
  <CrystalRadio v-model="value" label="option1" border>选项1</CrystalRadio>
  <CrystalRadio v-model="value" label="option2" border>选项2</CrystalRadio>
</template>

<script setup>
import { ref } from "vue";
import { CrystalRadio } from "crystalplus-ui";

const value = ref("option1");
</script>
```

### 如何启用点亮点功能？

通过 `highlight` 属性启用点亮点功能：

```vue
<template>
  <CrystalRadio v-model="value" label="option1" highlight
    >点亮点功能</CrystalRadio
  >
  <CrystalRadio v-model="value" label="option2" highlight
    >点亮点功能</CrystalRadio
  >
</template>

<script setup>
import { ref } from "vue";
import { CrystalRadio } from "crystalplus-ui";

const value = ref("option1");
</script>
```

启用后，点击单选框时会显示高亮效果，增强用户交互体验。
