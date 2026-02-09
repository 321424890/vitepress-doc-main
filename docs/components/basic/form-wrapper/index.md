# ClFormWrapper

ClFormWrapper 是基于 crystalplus-ui 封装的动态表单组件，用于快速构建复杂的表单，支持通过配置生成多种类型的表单字段。

## 功能特性

- ✅ 支持 Element Plus 所有表单功能
- ✅ 通过配置自动生成表单字段
- ✅ 支持 19 种不同类型的表单字段
- ✅ 内置表单验证功能
- ✅ 支持自定义插槽
- ✅ 操作按钮插槽
- ✅ 字段级事件监听
- ✅ 响应式表单数据绑定
- ✅ 表单方法调用（validate、reset、clearValidate）
- ✅ 多种布局配置选项

## 基本用法

::: demo
components/basic/form-wrapper/examples/BasicFormWrapper.vue
:::

## 高级用法

::: demo
components/basic/form-wrapper/examples/AdvancedFormWrapper.vue
:::

## API

### 属性

| 属性名                    | 类型                    | 默认值      | 说明                       |
| ------------------------- | ----------------------- | ----------- | -------------------------- |
| `schema`                  | `FormField[]`           | `[]`        | 表单字段配置数组           |
| `modelValue / v-model`    | `Record<string, any>`   | `{}`        | 表单数据对象               |
| `rules`                   | `Record<string, any[]>` | `{}`        | 表单验证规则               |
| `showOperationSlot`       | `boolean`               | `false`     | 是否显示操作按钮插槽       |
| `labelPosition`           | `string`                | `"right"`   | 标签对齐方式               |
| `requireAsteriskPosition` | `string`                | `"left"`    | 必填星号位置               |
| `labelWidth`              | `string / number`       | `"120px"`   | 标签宽度                   |
| `labelSuffix`             | `string`                | `""`        | 标签后缀                   |
| `inline`                  | `boolean`               | `false`     | 是否为行内表单             |
| `inlineMessage`           | `boolean`               | `false`     | 是否为行内消息             |
| `statusIcon`              | `boolean`               | `false`     | 是否显示状态图标           |
| `showMessage`             | `boolean`               | `true`      | 是否显示校验信息           |
| `validateOnRuleChange`    | `boolean`               | `true`      | 规则变化时是否重新校验     |
| `hideRequiredAsterisk`    | `boolean`               | `false`     | 是否隐藏必填星号           |
| `scrollToError`           | `boolean`               | `false`     | 校验失败时是否滚动到错误项 |
| `scrollIntoViewOptions`   | `object`                | `undefined` | 滚动选项                   |
| `size`                    | `string`                | `"default"` | 表单大小                   |
| `disabled`                | `boolean`               | `false`     | 是否禁用                   |

### 事件

| 事件名                   | 参数                                              | 说明                           |
| ------------------------ | ------------------------------------------------- | ------------------------------ |
| `validate`               | `prop: string, isValid: boolean, message: string` | 表单验证事件                   |
| `reset`                  | -                                                 | 表单重置事件                   |
| `blur`                   | `prop: string, event: Event`                      | 表单失焦事件                   |
| `focus`                  | `prop: string, event: Event`                      | 表单聚焦事件                   |
| `update:modelValue`      | `value: Record<string, any>`                      | 表单数据更新事件               |
| `field-change`           | `field: string, value: any`                       | 字段值变化事件                 |
| `field-blur`             | `field: string, event: any`                       | 字段失焦事件                   |
| `field-focus`            | `field: string, event: any`                       | 字段聚焦事件                   |
| `field-clear`            | `field: string`                                   | 字段清除事件                   |
| `field-click`            | `field: string, event: any`                       | 字段点击事件（只读状态下触发） |
| `field-visible-change`   | `field: string, visible: boolean`                 | 下拉框可见性变化事件           |
| `field-remove-tag`       | `field: string, tag: any`                         | 标签移除事件                   |
| `field-expand-change`    | `field: string, value: any`                       | 展开/折叠变化事件              |
| `field-check-change`     | `field: string, value: any`                       | 选中状态变化事件               |
| `field-node-click`       | `field: string, value: any`                       | 节点点击事件                   |
| `field-node-contextmenu` | `field: string, value: any`                       | 节点右键菜单事件               |
| `field-current-change`   | `field: string, value: any`                       | 当前节点变化事件               |

### 插槽

| 插槽名      | 参数                  | 说明                                                      |
| ----------- | --------------------- | --------------------------------------------------------- |
| `operation` | `{ validate, reset }` | 操作按钮插槽                                              |
| `[field]`   | `{ formData, field }` | 字段自定义插槽（通过 schema 中的 slotName 或 field 指定） |

## 字段类型

| 类型         | 说明       | 底层组件                |
| ------------ | ---------- | ----------------------- |
| `input`      | 文本输入框 | `CrystalInput`          |
| `textarea`   | 文本域     | `CrystalInput`          |
| `number`     | 数字输入框 | `CrystalInputNumber`    |
| `select`     | 下拉选择器 | `CrystalSelect`         |
| `radio`      | 单选框组   | `CrystalRadioGroup`     |
| `checkbox`   | 复选框组   | `CrystalCheckboxGroup`  |
| `switch`     | 开关       | `CrystalSwitch`         |
| `date`       | 日期选择器 | `CrystalDatePickerPane` |
| `time`       | 时间选择器 | `CrystalTimePicker`     |
| `timeSelect` | 时间选择   | `CrystalTimeSelect`     |
| `inputTag`   | 标签输入   | `CrystalInput`          |
| `treeSelect` | 树形选择器 | `CrystalSelect`         |
| `cascader`   | 级联选择器 | `CrystalCascader`       |
| `tree`       | 树形控件   | `CrystalTree`           |
| `calendar`   | 日历       | `CrystalCalendar`       |
| `button`     | 按钮       | `CrystalButton`         |
| `image`      | 图片       | `CrystalImage`          |
| `text`       | 文本       | `CrystalText`           |
| `slot`       | 自定义插槽 | -                       |

## 注意事项

1. **数据绑定**：使用 `v-model` 双向绑定表单数据，确保数据的响应式更新。

2. **验证规则**：可以在 `rules` 属性中设置全局验证规则，也可以在 `schema` 的每个字段中设置单独的验证规则。

3. **自定义插槽**：当字段类型为 `slot` 时，可以通过 `slotName` 指定插槽名称，在模板中使用对应的插槽来自定义字段内容。

4. **事件处理**：可以通过 `field-*` 系列事件监听字段的各种操作，如 `field-change`、`field-click` 等。

5. **表单方法**：通过 `ref` 获取表单实例后，可以调用 `validate()`、`reset()`、`clearValidate()` 等方法。

6. **性能优化**：对于复杂的表单，建议合理使用 `schema` 配置，避免不必要的字段渲染。

## 常见问题

### 如何配置表单字段？

通过 `schema` 属性配置表单字段，每个字段包含 `field`、`label`、`type` 等基本配置，以及针对不同类型字段的特定配置。

```vue
<template>
  <ClFormWrapper :schema="formSchema" v-model="formData" />
</template>

<script setup>
import { ref } from "vue";
import { ClFormWrapper } from "crystalplus-ui";

const formData = ref({ name: "", age: 0 });

const formSchema = [
  {
    field: "name",
    label: "姓名",
    type: "input",
    required: true,
    placeholder: "请输入姓名"
  },
  {
    field: "age",
    label: "年龄",
    type: "number",
    required: true,
    placeholder: "请输入年龄",
    min: 0,
    max: 100
  }
];
</script>
```

### 如何使用自定义插槽？

当字段类型为 `slot` 时，可以通过 `slotName` 指定插槽名称，在模板中使用对应的插槽来自定义字段内容。

```vue
<template>
  <ClFormWrapper :schema="formSchema" v-model="formData">
    <template #customSlot="{ formData, field }">
      <div>
        <el-input v-model="formData[field]" placeholder="自定义内容" />
        <el-button type="primary" size="small" style="margin-left: 10px;">
          操作按钮
        </el-button>
      </div>
    </template>
  </ClFormWrapper>
</template>

<script setup>
import { ref } from "vue";
import { ClFormWrapper } from "crystalplus-ui";

const formData = ref({ customSlot: "" });

const formSchema = [
  {
    field: "customSlot",
    label: "自定义字段",
    type: "slot",
    slotName: "customSlot"
  }
];
</script>
```

### 如何处理表单提交？

通过操作按钮插槽中的 `validate` 方法进行表单验证，验证通过后进行提交操作。

```vue
<template>
  <ClFormWrapper 
    ref="formRef" 
    :schema="formSchema" 
    v-model="formData"
    show-operation-slot
  >
    <template #operation="{ validate, reset }">
      <el-button type="primary" @click="handleSubmit(validate)">提交</el-button>
      <el-button @click="reset">重置</el-button>
    </template>
  </ClFormWrapper>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { ClFormWrapper } from "crystalplus-ui";

const formData = ref({ name: "" });
const formRef = ref(null);

const formSchema = [
  {
    field: "name",
    label: "姓名",
    type: "input",
    required: true,
    placeholder: "请输入姓名"
  }
];

const handleSubmit = async (validate) => {
  const isValid = await validate();
  if (isValid) {
    ElMessage.success("表单验证通过");
    // 执行提交逻辑
    console.log("提交数据:", formData.value);
  } else {
    ElMessage.error("表单验证失败，请检查");
  }
};
</script>
```