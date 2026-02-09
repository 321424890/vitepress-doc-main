# CrystalFormGroup

CrystalFormGroup 是一个基于 Element Plus 表单组件封装的增强型表单组组件，提供了更灵活的表单配置方式，支持表单组、表格和操作按钮的一体化配置。

## 功能特性

- ✅ 支持表单组配置
- ✅ 支持多种表单字段类型
- ✅ 支持表格集成
- ✅ 支持操作按钮区域
- ✅ 支持表单验证
- ✅ 支持响应式布局
- ✅ 支持自定义插槽
- ✅ 支持事件回调

## 基本用法

::: demo
components/basic/form-group/examples/BasicFormGroup.vue
:::

## 带表格的表单组

::: demo
components/basic/form-group/examples/FormGroupWithTable.vue
:::

## 带操作按钮的表单组

::: demo
components/basic/form-group/examples/FormGroupWithOperation.vue
:::

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `formGroups` | `FormGroup[]` | `[]` | 表单组配置 |
| `tableConfig` | `TableConfig` | - | 表格配置 |
| `modelValue` | `Record<string, any>` | `{}` | 表单数据 |
| `showOperation` | `boolean` | `false` | 是否显示操作按钮 |
| `labelWidth` | `string` | `120px` | 标签宽度 |
| `labelPosition` | `'left' \| 'right' \| 'top'` | `'right'` | 标签位置 |
| `size` | `'large' \| 'default' \| 'small'` | `'default'` | 表单大小 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `validateOnRuleChange` | `boolean` | `true` | 规则变化时是否重新验证 |
| `hideRequiredAsterisk` | `boolean` | `false` | 是否隐藏必填星号 |
| `inline` | `boolean` | `false` | 是否为行内表单 |
| `statusIcon` | `boolean` | `false` | 是否显示状态图标 |
| `showMessage` | `boolean` | `true` | 是否显示错误信息 |
| `requireAsteriskPosition` | `'left' \| 'right'` | `'left'` | 必填星号位置 |
| `labelSuffix` | `string` | `''` | 标签后缀 |
| `inlineMessage` | `boolean` | `false` | 是否为行内错误信息 |
| `scrollToError` | `boolean` | `false` | 是否滚动到错误处 |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `value: Record<string, any>` | 表单数据变化时触发 |
| `validate` | `prop: string, isValid: boolean, message: string` | 验证时触发 |
| `reset` | - | 重置时触发 |
| `blur` | `prop: string, event: Event` | 失焦时触发 |
| `focus` | `prop: string, event: Event` | 聚焦时触发 |
| `field-change` | `field: string, value: any` | 字段变化时触发 |
| `field-blur` | `field: string, value: any` | 字段失焦时触发 |
| `field-focus` | `field: string, value: any` | 字段聚焦时触发 |
| `field-clear` | `field: string, value: any` | 字段清空时触发 |
| `size-change` | `size: number` | 表格分页大小变化时触发 |
| `current-change` | `current: number` | 表格当前页变化时触发 |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| `[fieldName]` | 字段自定义内容 |
| `table-operation` | 表格操作列内容 |
| `operation` | 操作按钮区域内容 |

### 类型定义

#### FormGroup

```typescript
interface FormGroup {
  title?: string; // 表单组标题
  rows: FormRow[]; // 表单行配置
}

interface FormRow {
  fields: FormField[]; // 表单字段配置
}

interface FormField {
  field: string; // 字段名
  label: string; // 标签名
  type: string; // 字段类型
  required?: boolean; // 是否必填
  rules?: any[]; // 验证规则
  placeholder?: string; // 占位符
  disabled?: boolean; // 是否禁用
  span?: number; // 列宽
  // 其他字段属性...
}

interface TableConfig {
  data: any[]; // 表格数据
  columns: TableColumn[]; // 表格列配置
  pagination?: TablePagination; // 分页配置
}

interface TableColumn {
  prop: string; // 列属性
  label: string; // 列标签
  width?: string | number; // 列宽度
}

interface TablePagination {
  currentPage: number; // 当前页
  pageSize: number; // 每页大小
  total: number; // 总条数
  pageSizes?: number[]; // 每页大小选项
}
```

## 示例代码

### 基本表单组

```vue
<template>
  <div>
    <CrystalFormGroup
      v-model="formData"
      :formGroups="formGroups"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CrystalFormGroup } from "crystalplus-ui";

const formData = ref({});

const formGroups = ref([
  {
    title: "基本信息",
    rows: [
      {
        fields: [
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
            placeholder: "请输入年龄"
          },
          {
            field: "gender",
            label: "性别",
            type: "radio",
            options: [
              { label: "男", value: "male" },
              { label: "女", value: "female" }
            ]
          }
        ]
      },
      {
        fields: [
          {
            field: "address",
            label: "地址",
            type: "textarea",
            placeholder: "请输入地址",
            span: 24
          }
        ]
      }
    ]
  }
]);
</script>
```

### 带表格的表单组

```vue
<template>
  <div>
    <CrystalFormGroup
      v-model="formData"
      :formGroups="formGroups"
      :tableConfig="tableConfig"
    >
      <template #table-operation="scope">
        <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </CrystalFormGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CrystalFormGroup } from "crystalplus-ui";
import { ElMessage } from "element-plus";

const formData = ref({});

const formGroups = ref([
  {
    title: "订单信息",
    rows: [
      {
        fields: [
          {
            field: "orderNo",
            label: "订单号",
            type: "input",
            placeholder: "请输入订单号"
          },
          {
            field: "customer",
            label: "客户名称",
            type: "input",
            placeholder: "请输入客户名称"
          },
          {
            field: "date",
            label: "订单日期",
            type: "date",
            placeholder: "请选择订单日期"
          }
        ]
      }
    ]
  }
]);

const tableConfig = ref({
  data: [
    { id: 1, product: "商品1", quantity: 2, price: 100 },
    { id: 2, product: "商品2", quantity: 1, price: 200 },
    { id: 3, product: "商品3", quantity: 3, price: 150 }
  ],
  columns: [
    { prop: "id", label: "ID", width: "80" },
    { prop: "product", label: "商品名称" },
    { prop: "quantity", label: "数量" },
    { prop: "price", label: "价格" },
    { prop: "operation", label: "操作", width: "150" }
  ],
  pagination: {
    currentPage: 1,
    pageSize: 10,
    total: 3
  }
});

const handleEdit = (row) => {
  ElMessage.info(`编辑商品: ${row.product}`);
};

const handleDelete = (row) => {
  ElMessage.info(`删除商品: ${row.product}`);
};
</script>
```

### 带操作按钮的表单组

```vue
<template>
  <div>
    <CrystalFormGroup
      v-model="formData"
      :formGroups="formGroups"
      :showOperation="true"
    >
      <template #operation="{ validate, reset }">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="handleSubmit(validate)">提交</el-button>
      </template>
    </CrystalFormGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CrystalFormGroup } from "crystalplus-ui";
import { ElMessage } from "element-plus";

const formData = ref({});

const formGroups = ref([
  {
    title: "用户信息",
    rows: [
      {
        fields: [
          {
            field: "username",
            label: "用户名",
            type: "input",
            required: true,
            placeholder: "请输入用户名"
          },
          {
            field: "email",
            label: "邮箱",
            type: "input",
            required: true,
            placeholder: "请输入邮箱"
          },
          {
            field: "phone",
            label: "电话",
            type: "input",
            placeholder: "请输入电话"
          }
        ]
      }
    ]
  }
]);

const handleSubmit = async (validate) => {
  const isValid = await validate();
  if (isValid) {
    ElMessage.success("提交成功");
    console.log("表单数据:", formData.value);
  }
};
</script>
```

## 注意事项

1. **表单数据**：使用 `v-model` 绑定表单数据，组件会自动初始化和更新表单数据
2. **字段类型**：支持多种字段类型，包括 input、number、select、radio、checkbox、switch、date、time 等
3. **验证规则**：可以通过 `rules` 属性设置验证规则
4. **表格配置**：当需要表格时，通过 `tableConfig` 属性配置表格数据和列
5. **操作按钮**：当需要操作按钮时，设置 `showOperation` 为 true 并使用 `operation` 插槽
6. **自定义内容**：可以通过字段名作为插槽名来自定义字段内容
7. **事件处理**：可以通过 `field-change` 等事件监听字段变化

## 常见问题

### 如何自定义字段内容？

使用插槽方式自定义字段内容：

```vue
<CrystalFormGroup
  v-model="formData"
  :formGroups="formGroups"
>
  <template #customField="{ formData, field }">
    <el-select v-model="formData[field]" placeholder="请选择">
      <el-option label="选项1" value="1"></el-option>
      <el-option label="选项2" value="2"></el-option>
    </el-select>
  </template>
</CrystalFormGroup>
```

### 如何处理表单验证？

通过操作按钮插槽中的 `validate` 方法进行验证：

```vue
<template #operation="{ validate }">
  <el-button type="primary" @click="handleSubmit(validate)">提交</el-button>
</template>

<script setup>
const handleSubmit = async (validate) => {
  const isValid = await validate();
  if (isValid) {
    // 提交逻辑
  }
};
</script>
```

### 如何集成表格？

通过 `tableConfig` 属性配置表格：

```vue
<CrystalFormGroup
  v-model="formData"
  :tableConfig="tableConfig"
>
  <template #table-operation="scope">
    <!-- 表格操作按钮 -->
  </template>
</CrystalFormGroup>
```