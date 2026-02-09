# ClSearchForm

ClSearchForm 是基于 crystalplus-ui 封装的动态搜索表单组件，用于快速构建复杂的搜索表单，支持通过配置生成多种类型的搜索字段。

## 功能特性

- ✅ 支持多种表单控件类型（输入框、选择器、日期选择器、数字输入框、开关等）
- ✅ 通过配置自动生成搜索表单
- ✅ 字段可见性配置（通过配置面板）
- ✅ 字段展开/收起功能
- ✅ 内置表单验证功能
- ✅ 字段级事件监听
- ✅ 响应式表单数据绑定
- ✅ 搜索和重置方法
- ✅ 远程搜索支持
- ✅ 高度可定制的样式和行为

## 基本用法

::: demo
components/basic/search-form/examples/BasicSearchForm.vue
:::

## 高级用法

::: demo
components/basic/search-form/examples/AdvancedSearchForm.vue
:::

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| ------ | ---- | ------ | ---- |
| `queryConfig` | `QueryItem[]` | `[]` | 搜索字段配置数组 |
| `Searchcolumns` | `Column[]` | `[]` | 表格列配置数组（用于自动生成搜索字段） |

### QueryItem 类型

| 属性名 | 类型 | 默认值 | 说明 |
| ------ | ---- | ------ | ---- |
| `prop` | `string` | 必填 | 字段属性名 |
| `label` | `string` | 必填 | 字段标签 |
| `type` | `string` | `"input"` | 字段类型（input、select、date、number、switch） |
| `value` | `any` | `""` | 初始值 |
| `width` | `string` | `"200px"` | 字段宽度 |
| `required` | `boolean` | `false` | 是否必填 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `rules` | `any[]` | `[]` | 验证规则 |
| `props` | `Record<string, any>` | `{}` | 字段组件属性 |
| `onChange` | `(val: any) => void` | - | 字段变化回调 |
| `onRemoteSearch` | `(query: string) => Promise<void>` | - | 远程搜索回调 |

### Column 类型

| 属性名 | 类型 | 默认值 | 说明 |
| ------ | ---- | ------ | ---- |
| `prop` | `string` | 必填 | 列属性名 |
| `label` | `string` | 必填 | 列标签 |
| `type` | `string` | `"input"` | 字段类型 |
| `placeholder` | `string` | - | 占位符 |
| `options` | `any[]` | `[]` | 选项列表（用于选择器） |

### 事件

| 事件名 | 参数 | 说明 |
| ------ | ---- | ---- |
| `search` | `params: Record<string, any>` | 搜索事件，返回搜索参数 |
| `reset` | `formData: Record<string, any>` | 重置事件，返回重置后的表单数据 |
| `field-click` | `queryItem: QueryItem` | 字段点击事件（只读状态下触发） |
| `field-change` | `queryItem: QueryItem, val: any` | 字段值变化事件 |
| `config-change` | `config: { visibleFields: string[] }` | 配置变化事件，返回可见字段列表 |

### 支持的控件类型

| 类型 | 说明 | 底层组件 |
| ---- | ---- | -------- |
| `input` / `el-input` | 文本输入框 | `CrystalInput` |
| `select` / `el-select` | 下拉选择器 | `CrystalSelect` |
| `date` / `el-date-picker` | 日期选择器 | `CrystalDatePickerPane` |
| `number` / `el-input-number` | 数字输入框 | `CrystalInputNumber` |
| `switch` / `el-switch` | 开关 | `CrystalSwitch` |

## 注意事项

1. **配置优先级**：如果同时提供了 `queryConfig` 和 `Searchcolumns`，会优先使用 `queryConfig` 的配置。

2. **字段可见性**：默认情况下，只显示 `queryConfig` 中的字段。可以通过配置面板调整可见字段。

3. **展开/收起**：当字段数量超过 4 个时，会自动显示展开/收起按钮。

4. **验证规则**：可以在 `QueryItem` 中设置 `rules` 属性来添加验证规则，也可以设置 `required: true` 来添加必填验证。

5. **远程搜索**：对于选择器类型的字段，可以通过 `onRemoteSearch` 回调实现远程搜索功能。

## 常见问题

### 如何配置搜索字段？

通过 `queryConfig` 属性配置搜索字段，每个字段包含 `prop`、`label`、`type` 等基本配置，以及针对不同类型字段的特定配置。

```vue
<template>
  <ClSearchForm :query-config="queryConfig" @search="handleSearch" @reset="handleReset" />
</template>

<script setup>
import { ref } from "vue";
import { ClSearchForm } from "crystalplus-ui";

const queryConfig = ref([
  {
    prop: "name",
    label: "姓名",
    type: "input",
    placeholder: "请输入姓名",
    width: "200px"
  },
  {
    prop: "gender",
    label: "性别",
    type: "select",
    options: [
      { label: "男", value: "male" },
      { label: "女", value: "female" }
    ],
    width: "150px"
  }
]);

const handleSearch = (params) => {
  console.log("搜索参数:", params);
};

const handleReset = (formData) => {
  console.log("重置后的表单数据:", formData);
};
</script>
```

### 如何使用远程搜索？

对于选择器类型的字段，可以通过 `onRemoteSearch` 回调实现远程搜索功能。

```vue
<template>
  <ClSearchForm :query-config="remoteQueryConfig" @search="handleSearch" />
</template>

<script setup>
import { ref } from "vue";
import { ClSearchForm } from "crystalplus-ui";

const remoteQueryConfig = ref([
  {
    prop: "user",
    label: "用户",
    type: "select",
    props: {
      filterable: true,
      remote: true,
      loading: false,
      placeholder: "请输入用户名搜索"
    },
    onRemoteSearch: async (query) => {
      console.log("远程搜索:", query);
      // 模拟远程搜索
      await new Promise(resolve => setTimeout(resolve, 1000));
      // 更新选项
      remoteQueryConfig.value[0].props.options = [
        { label: `用户 ${query} 1`, value: `user1` },
        { label: `用户 ${query} 2`, value: `user2` }
      ];
      remoteQueryConfig.value[0].props.loading = false;
    }
  }
]);

const handleSearch = (params) => {
  console.log("搜索参数:", params);
};
</script>
```

### 如何通过表格列配置自动生成搜索字段？

可以通过 `Searchcolumns` 属性传入表格列配置，组件会自动根据列配置生成对应的搜索字段。

```vue
<template>
  <ClSearchForm :Searchcolumns="columns" @search="handleSearch" />
</template>

<script setup>
import { ref } from "vue";
import { ClSearchForm } from "crystalplus-ui";

const columns = ref([
  {
    prop: "name",
    label: "姓名",
    type: "input"
  },
  {
    prop: "gender",
    label: "性别",
    type: "select",
    options: [
      { label: "男", value: "male" },
      { label: "女", value: "female" }
    ]
  },
  {
    prop: "age",
    label: "年龄",
    type: "number"
  }
]);

const handleSearch = (params) => {
  console.log("搜索参数:", params);
};
</script>
```