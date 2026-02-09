# CrystalTable

CrystalTable 是基于 Element Plus 表格组件封装的增强型表格组件，提供了丰富的功能，包括数据展示、分页、搜索、列控制、操作按钮、排序和筛选等。

## 功能特性

- ✅ 支持基础表格数据展示
- ✅ 内置搜索表单功能
- ✅ 分页控件集成
- ✅ 表格大小控制
- ✅ 列显示隐藏控制
- ✅ 行选择功能（单选/多选）
- ✅ 操作按钮列定制
- ✅ 表格刷新功能
- ✅ 工具栏插槽
- ✅ 高度自适应
- ✅ 支持合计行
- ✅ 字典值转换
- ✅ 支持列排序功能
- ✅ 支持列筛选功能

## 基本用法

::: demo
components/basic/table/examples/BasicTableDemo.vue
:::

## 带排序和筛选的表格

::: demo
components/basic/table/examples/TableWithSortAndFilterDemo.vue
:::

## 带操作按钮的表格

::: demo
components/basic/table/examples/TableWithActionsDemo.vue
:::

## 带自定义列的表格

::: demo
components/basic/table/examples/TableWithCustomColumnsDemo.vue
:::

## 带可编辑行的表格

::: demo
components/basic/table/examples/TableWithEditableRowsDemo.vue
:::

## 带分页的表格

::: demo
components/basic/table/examples/TableWithPaginationDemo.vue
:::

## 带搜索功能的表格

::: demo
components/basic/table/examples/TableWithSearchDemo.vue
:::

## 带选择功能的表格

::: demo
components/basic/table/examples/TableWithSelectionDemo.vue
:::

## 带单选功能的表格

::: demo
components/basic/table/examples/TableWithSingleSelectDemo.vue
:::

## 综合示例

::: demo
components/basic/table/examples/ComprehensiveDemo.vue
:::

## API

### 属性

| 属性名              | 类型                                     | 默认值  | 说明             |
| ------------------- | ---------------------------------------- | ------- | ---------------- |
| `tableData`         | `any[]`                                  | `[]`    | 表格数据         |
| `columns`           | `Column[]`                               | `[]`    | 表格列配置       |
| `border`            | `boolean`                                | `false` | 是否显示边框     |
| `stripe`            | `boolean`                                | `false` | 是否显示斑马纹   |
| `showSelection`     | `boolean`                                | `false` | 是否显示选择列   |
| `huhao`             | `boolean`                                | `true`  | 是否显示序号列   |
| `selectionType`     | `string`                                 | -       | 选择类型         |
| `rowKey`            | `string`                                 | `"id"`  | 行唯一标识       |
| `actions`           | `any[]`                                  | `[]`    | 操作按钮配置     |
| `actionLabel`       | `string`                                 | "操作"  | 操作列标题       |
| `actionWidth`       | `string`                                 | -       | 操作列宽度       |
| `actionwidthnew`    | `string`                                 | -       | 新的操作列宽度   |
| `showPagination`    | `boolean`                                | `false` | 是否显示分页     |
| `queryConfigStatus` | `boolean`                                | `false` | 是否显示搜索表单 |
| `queryConfig`       | `any[]`                                  | `[]`    | 搜索表单配置     |
| `basicHeight`       | `string`                                 | -       | 基础高度         |
| `singleSelect`      | `boolean`                                | `false` | 是否单选         |
| `selectedRow`       | `any`                                    | `null`  | 当前选中行       |
| `showSummary`       | `boolean`                                | `false` | 是否显示合计行   |
| `summaryMethod`     | `function`                               | -       | 合计方法         |
| `dictConverters`    | `Record<string, (value: any) => string>` | `{}`    | 字典值转换       |

### 事件

| 事件名                     | 参数                                         | 说明                 |
| -------------------------- | -------------------------------------------- | -------------------- |
| `selection-change`         | `val: any[]`                                 | 选择变化时触发       |
| `single-select-change`     | `val: any`                                   | 单选变化时触发       |
| `page-change`              | `page: { pageNo: number; pageSize: number }` | 页码变化时触发       |
| `search`                   | `params: any`                                | 搜索时触发           |
| `reset`                    | `formData: any`                              | 重置时触发           |
| `field-click`              | `val: any, formRef?: any`                    | 字段点击时触发       |
| `size-change`              | `size: string`                               | 表格大小变化时触发   |
| `column-visibility-change` | `columns: string[]`                          | 列显示隐藏变化时触发 |
| `refresh`                  | -                                            | 刷新时触发           |

### 插槽

| 插槽名       | 说明         |
| ------------ | ------------ |
| `toolLeft`   | 左侧工具栏   |
| `toolRight`  | 右侧工具栏   |
| 列的 prop 值 | 自定义列内容 |

## 注意事项

1. **表格数据**：`tableData` 属性需要传入完整的表格数据数组
2. **列配置**：`columns` 属性需要传入列配置数组，每列需要包含 `prop` 和 `label` 属性
3. **搜索表单**：当 `queryConfigStatus` 为 true 时，需要传入 `queryConfig` 配置
4. **操作按钮**：当需要操作按钮时，需要传入 `actions` 配置数组
5. **行选择**：使用 `showSelection` 或 `singleSelect` 开启选择功能

## 常见问题

### 如何配置表格列？

表格列通过 `columns` 属性配置，示例：

```vue
<template>
  <CrystalTable :table-data="tableData" :columns="columns" />
</template>

<script setup>
import { ref } from "vue";
import { CrystalTable } from "crystalplus-ui";

const tableData = ref([
  { id: 1, name: "张三", age: 20 },
  { id: 2, name: "李四", age: 25 },
]);

const columns = ref([
  { prop: "id", label: "ID", width: "80", align: "center" },
  { prop: "name", label: "姓名", width: "120", align: "center" },
  { prop: "age", label: "年龄", width: "80", align: "center" },
]);
</script>
```

### 如何添加操作按钮？

通过 `actions` 属性配置操作按钮：

```vue
<template>
  <CrystalTable :table-data="tableData" :columns="columns" :actions="actions" />
</template>

<script setup>
import { ref } from "vue";
import { CrystalTable } from "crystalplus-ui";

const tableData = ref([
  { id: 1, name: "张三", age: 20 },
  { id: 2, name: "李四", age: 25 },
]);

const columns = ref([
  { prop: "id", label: "ID", width: "80", align: "center" },
  { prop: "name", label: "姓名", width: "120", align: "center" },
  { prop: "age", label: "年龄", width: "80", align: "center" },
]);

const actions = ref([
  {
    label: "编辑",
    type: "primary",
    size: "small",
    handler: (row) => {
      console.log("编辑", row);
    },
  },
  {
    label: "删除",
    type: "danger",
    size: "small",
    handler: (row) => {
      console.log("删除", row);
    },
  },
]);
</script>
```

### 如何使用搜索功能？

通过 `queryConfigStatus` 和 `queryConfig` 属性配置搜索功能：

```vue
<template>
  <CrystalTable
    :table-data="tableData"
    :columns="columns"
    :query-config-status="true"
    :query-config="queryConfig"
    @search="handleSearch"
    @reset="handleReset"
  />
</template>

<script setup>
import { ref } from "vue";
import { CrystalTable } from "crystalplus-ui";

const tableData = ref([
  { id: 1, name: "张三", age: 20, address: "北京市" },
  { id: 2, name: "李四", age: 25, address: "上海市" },
]);

const columns = ref([
  { prop: "id", label: "ID", width: "80", align: "center" },
  { prop: "name", label: "姓名", width: "120", align: "center" },
  { prop: "age", label: "年龄", width: "80", align: "center" },
  { prop: "address", label: "地址", minWidth: "150", align: "center" },
]);

const queryConfig = ref([
  {
    prop: "name",
    label: "姓名",
    type: "input",
    placeholder: "请输入姓名",
  },
  {
    prop: "address",
    label: "地址",
    type: "input",
    placeholder: "请输入地址",
  },
]);

const handleSearch = (params) => {
  console.log("搜索参数:", params);
  // 这里可以根据搜索参数过滤数据
};

const handleReset = (formData) => {
  console.log("重置后的表单数据:", formData);
  // 这里可以重置数据
};
</script>
```
