# CrystalCheckboxGroup

CrystalCheckboxGroup 是基于 Element Plus 的 ElCheckboxGroup 组件封装的复选框组组件，继承了 ElCheckboxGroup 的所有属性、事件和插槽，并提供了额外的自定义功能。

## 功能特性

- ✅ 支持 Element Plus 所有复选框组功能
- ✅ 水平/垂直排列选项
- ✅ 自动渲染选项（通过 options 属性）
- ✅ 限制选择数量（min/max 属性）
- ✅ 禁用状态支持
- ✅ 不同尺寸选项
- ✅ 带边框样式
- ✅ 与 CrystalCheckbox 组件完美集成
- ✅ 支持全选功能和不确定状态

## 基础用法

::: demo
components/basic/checkbox-group/examples/BasicCheckboxGroup.vue
:::

## 高级用法

### 全选功能和自定义选项

::: demo
components/basic/checkbox-group/examples/AdvancedCheckboxGroup.vue
:::

## API

### 属性

| 属性      | 类型      | 默认值         | 说明                                                              |
| --------- | --------- | -------------- | ----------------------------------------------------------------- |
| v-model   | `any[]`   | `[]`           | 绑定值                                                            |
| size      | `string`  | `'default'`    | 尺寸，可选值：large, default, small                               |
| disabled  | `boolean` | `false`        | 是否禁用                                                          |
| min       | `number`  | -              | 最小选择数量                                                      |
| max       | `number`  | -              | 最大选择数量                                                      |
| border    | `boolean` | `false`        | 是否显示边框                                                      |
| options   | `array`   | -              | 选项数据，格式：[{ label: '标签', value: '值', disabled: false }] |
| direction | `string`  | `'horizontal'` | 排列方向，可选值：horizontal, vertical                            |

### 事件

| 事件名            | 说明             | 参数           |
| ----------------- | ---------------- | -------------- |
| update:modelValue | 绑定值更新时触发 | `value: any[]` |
| change            | 值改变时触发     | `value: any[]` |

### 插槽

| 名称    | 说明                             |
| ------- | -------------------------------- |
| default | 默认插槽，用于自定义复选框组内容 |

## 注意事项

1. **数据绑定**：使用 `v-model` 进行双向数据绑定，值为数组类型
2. **排列方向**：通过 `direction` 属性设置水平或垂直排列
3. **自动渲染**：通过 `options` 属性可以自动渲染复选框选项
4. **选择限制**：通过 `min` 和 `max` 属性限制选择数量
5. **禁用状态**：通过 `disabled` 属性设置整个复选框组为禁用状态
6. **边框样式**：通过 `border` 属性启用带边框的复选框样式
7. **尺寸设置**：通过 `size` 属性设置复选框的尺寸，可选值为 large、default、small

## 常见问题

### 如何实现全选功能？

使用一个单独的 CrystalCheckbox 作为全选按钮，结合 `indeterminate` 属性实现不确定状态：

```vue
<template>
  <div>
    <CrystalCheckbox
      v-model="selectAll"
      :indeterminate="isIndeterminate"
      @change="handleSelectAllChange"
    >
      全选
    </CrystalCheckbox>
    <CrystalCheckboxGroup v-model="itemValues" @change="handleItemChange">
      <CrystalCheckbox label="item1">项目1</CrystalCheckbox>
      <CrystalCheckbox label="item2">项目2</CrystalCheckbox>
      <CrystalCheckbox label="item3">项目3</CrystalCheckbox>
    </CrystalCheckboxGroup>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { CrystalCheckboxGroup, CrystalCheckbox } from "crystalplus-ui";

const itemValues = ref(["item1"]);
const selectAll = ref(false);

const isIndeterminate = computed(() => {
  return itemValues.value.length > 0 && itemValues.value.length < 3;
});

const handleSelectAllChange = (val) => {
  if (val) {
    itemValues.value = ["item1", "item2", "item3"];
  } else {
    itemValues.value = [];
  }
};

const handleItemChange = () => {
  if (itemValues.value.length === 3) {
    selectAll.value = true;
  } else if (itemValues.value.length === 0) {
    selectAll.value = false;
  }
};
</script>
```

### 如何通过数据自动渲染选项？

使用 `options` 属性传入选项数据：

```vue
<template>
  <CrystalCheckboxGroup v-model="selectedValues" :options="options" />
</template>

<script setup>
import { ref } from "vue";
import { CrystalCheckboxGroup } from "crystalplus-ui";

const selectedValues = ref(["option1"]);
const options = [
  { label: "选项1", value: "option1" },
  { label: "选项2", value: "option2" },
  { label: "选项3", value: "option3", disabled: true },
];
</script>
```

### 如何限制选择数量？

使用 `min` 和 `max` 属性限制选择数量：

```vue
<template>
  <CrystalCheckboxGroup v-model="selectedValues" :min="2" :max="3">
    <CrystalCheckbox label="option1">选项1</CrystalCheckbox>
    <CrystalCheckbox label="option2">选项2</CrystalCheckbox>
    <CrystalCheckbox label="option3">选项3</CrystalCheckbox>
    <CrystalCheckbox label="option4">选项4</CrystalCheckbox>
  </CrystalCheckboxGroup>
</template>

<script setup>
import { ref } from "vue";
import { CrystalCheckboxGroup, CrystalCheckbox } from "crystalplus-ui";

const selectedValues = ref(["option1", "option2"]);
</script>
```

### 如何设置垂直排列？

使用 `direction` 属性设置为 `vertical`：

```vue
<template>
  <CrystalCheckboxGroup v-model="selectedValues" direction="vertical">
    <CrystalCheckbox label="option1">选项1</CrystalCheckbox>
    <CrystalCheckbox label="option2">选项2</CrystalCheckbox>
    <CrystalCheckbox label="option3">选项3</CrystalCheckbox>
  </CrystalCheckboxGroup>
</template>

<script setup>
import { ref } from "vue";
import { CrystalCheckboxGroup, CrystalCheckbox } from "crystalplus-ui";

const selectedValues = ref([]);
</script>
```
