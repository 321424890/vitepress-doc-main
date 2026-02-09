# CrystalCheckbox

CrystalCheckbox 是基于 Element Plus 的 ElCheckbox 组件封装的复选框组件，继承了 ElCheckbox 的所有属性、事件和插槽，并提供了额外的自定义功能。

## 功能特性

- ✅ 支持 Element Plus 所有复选框功能
- ✅ 基础复选框功能，支持选中/未选中状态
- ✅ 禁用状态支持
- ✅ 带边框样式
- ✅ 不同尺寸选项（大号、默认、小号）
- ✅ 点亮点功能，增强用户交互体验
- ✅ 复选框组支持
- ✅ 全选功能和不确定状态
- ✅ 支持自定义标签和值

## 基础用法

::: demo
components/basic/checkbox/examples/BasicCheckbox.vue
:::

## 高级用法

### 复选框组和全选功能

::: demo
components/basic/checkbox/examples/AdvancedCheckbox.vue
:::

## API

### 属性

| 属性          | 类型                        | 默认值      | 说明                                |
| ------------- | --------------------------- | ----------- | ----------------------------------- |
| v-model       | `boolean \| any`            | `false`     | 绑定值                              |
| label         | `any`                       | -           | 选中状态的值                        |
| true-label    | `any`                       | -           | 选中时的值                          |
| false-label   | `any`                       | -           | 未选中时的值                        |
| disabled      | `boolean`                   | `false`     | 是否禁用                            |
| border        | `boolean`                   | `false`     | 是否显示边框                        |
| size          | `string`                    | `'default'` | 尺寸，可选值：large, default, small |
| name          | `string`                    | -           | 原生 name 属性                      |
| checked       | `boolean`                   | `false`     | 是否默认选中                        |
| indeterminate | `boolean`                   | `false`     | 是否为不确定状态                    |
| before-change | `(val: boolean) => boolean` | -           | 改变前的钩子函数                    |
| highlight     | `boolean`                   | `false`     | 是否启用点亮点功能                  |

### 事件

| 事件名            | 说明             | 参数             |
| ----------------- | ---------------- | ---------------- |
| update:modelValue | 绑定值更新时触发 | `value: boolean` |
| change            | 值改变时触发     | `value: boolean` |

### 插槽

| 名称    | 说明                               |
| ------- | ---------------------------------- |
| default | 默认插槽，用于自定义复选框标签内容 |

## 注意事项

1. **数据绑定**：使用 `v-model` 进行双向数据绑定，支持布尔值或自定义值
2. **禁用状态**：通过 `disabled` 属性设置禁用状态，禁用时复选框不可点击
3. **边框样式**：通过 `border` 属性启用带边框的复选框样式
4. **尺寸设置**：通过 `size` 属性设置复选框的尺寸，可选值为 large、default、small
5. **点亮点功能**：通过 `highlight` 属性启用点亮点功能，点击时会显示高亮效果
6. **全选功能**：结合 `indeterminate` 属性实现全选功能中的不确定状态

## 常见问题

### 如何实现全选功能？

使用一个主复选框控制所有子复选框的选中状态，结合 `indeterminate` 属性实现不确定状态：

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
    <div v-for="item in items" :key="item.id">
      <CrystalCheckbox
        v-model="selectedItems"
        :label="item.id"
        @change="handleItemChange"
      >
        {{ item.name }}
      </CrystalCheckbox>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { CrystalCheckbox } from "crystalplus-ui";

const items = [
  { id: 1, name: "选项1" },
  { id: 2, name: "选项2" },
  { id: 3, name: "选项3" },
];

const selectedItems = ref([1]);
const selectAll = ref(false);

const isIndeterminate = computed(() => {
  return (
    selectedItems.value.length > 0 && selectedItems.value.length < items.length
  );
});

const handleSelectAllChange = (val) => {
  if (val) {
    selectedItems.value = items.map((item) => item.id);
  } else {
    selectedItems.value = [];
  }
};

const handleItemChange = () => {
  if (selectedItems.value.length === items.length) {
    selectAll.value = true;
  } else if (selectedItems.value.length === 0) {
    selectAll.value = false;
  }
};
</script>
```

### 如何使用复选框组？

使用多个复选框，通过相同的 `v-model` 和不同的 `label` 属性实现复选框组：

```vue
<template>
  <div>
    <CrystalCheckbox v-model="hobbies" label="reading">阅读</CrystalCheckbox>
    <CrystalCheckbox v-model="hobbies" label="sports">运动</CrystalCheckbox>
    <CrystalCheckbox v-model="hobbies" label="music">音乐</CrystalCheckbox>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { CrystalCheckbox } from "crystalplus-ui";

const hobbies = ref(["reading"]);
</script>
```

### 如何启用点亮点功能？

通过 `highlight` 属性启用点亮点功能：

```vue
<CrystalCheckbox v-model="value" highlight>点亮点功能</CrystalCheckbox>
```

启用后，点击复选框时会显示高亮效果，增强用户交互体验。
