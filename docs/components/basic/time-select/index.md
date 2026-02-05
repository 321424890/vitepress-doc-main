# CrystalTimeSelect

CrystalTimeSelect 是基于 Element Plus 的 ElTimeSelect 组件封装的时间选择器组件，继承了 ElTimeSelect 的所有属性、事件和插槽，并提供了统一的使用方式。

## 功能特性

- ✅ 支持 Element Plus 所有时间选择器功能
- ✅ 自定义时间范围
- ✅ 自定义时间步长
- ✅ 时间限制功能
- ✅ 多种尺寸选择
- ✅ 禁用、只读、不可编辑状态
- ✅ 清空功能
- ✅ 图标自定义
- ✅ 丰富的事件支持

## 基础用法

::: demo
components/basic/time-select/examples/BasicTimeSelect.vue
:::

## 高级用法

::: demo
components/basic/time-select/examples/AdvancedTimeSelect.vue
:::

### 自定义图标

::: demo
components/basic/time-select/examples/CustomIconTimeSelect.vue
:::

使用以下属性可以自定义时间选择器的图标：

- `prefix-icon` - 前缀图标
- `suffix-icon` - 后缀图标
- `clear-icon` - 清空图标

支持 Element Plus 内置图标和 Iconify 图标。

### 自定义时间格式和禁用

::: demo
components/basic/time-select/examples/CustomTimeSelect.vue
:::

#### 无颜色样式

通过自定义样式可以移除时间选择器的颜色效果，适用于需要简洁风格的场景。

#### 自定义时间格式

使用以下属性可以自定义时间的显示和解析格式：

- `formatter` - 格式化函数，用于自定义显示格式
- `parser` - 解析函数，用于解析用户输入的时间

#### 禁用特定时间范围

使用 `min-time` 和 `max-time` 属性可以禁用特定的时间范围，用户只能选择允许范围内的时间。

#### 紧凑时间选择

使用 `fit-input-width` 属性可以使下拉菜单适应输入框宽度，创建更紧凑的布局。

### 自定义时间范围

使用 `start` 和 `end` 属性可以设置时间选择的范围，适用于特定时间段的选择场景。

### 自定义时间步长

使用 `step` 属性可以设置时间选项的步长，例如 `00:15` 表示每15分钟一个选项。

### 时间限制

使用 `min-time` 和 `max-time` 属性可以进一步限制可选择的时间范围，即使在 `start` 和 `end` 范围内也只能选择这个区间的时间。

### 不同状态

- `disabled` - 禁用状态
- `readonly` - 只读状态
- `editable` - 是否可编辑输入框
- `clearable` - 是否可清空

### 不同尺寸

使用 `size` 属性可以设置时间选择器的尺寸，可选值为 `'large'`、`'default'` 和 `'small'`。

## API

### 属性

| 属性                  | 类型                              | 默认值           | 说明               |
| --------------------- | --------------------------------- | ---------------- | ------------------ |
| v-model               | `string`                          | `''`             | 绑定值             |
| placeholder           | `string`                          | `'请选择时间'`   | 占位文本           |
| start                 | `string`                          | `'09:00'`        | 开始时间           |
| end                   | `string`                          | `'18:00'`        | 结束时间           |
| step                  | `string`                          | `'00:30'`        | 时间步长           |
| max-time              | `string`                          | `undefined`      | 最大可选时间       |
| min-time              | `string`                          | `undefined`      | 最小可选时间       |
| formatter             | `(value: string) => string`       | `undefined`      | 格式化函数         |
| parser                | `(value: string) => string`       | `undefined`      | 解析函数           |
| disabled              | `boolean \| string`               | `false`          | 是否禁用           |
| editable              | `boolean \| string`               | `true`           | 是否可编辑输入框   |
| clearable             | `boolean \| string`               | `true`           | 是否可清空         |
| size                  | `'large' \| 'default' \| 'small'` | `'default'`      | 组件尺寸           |
| prefix-icon           | `any`                             | `undefined`      | 前缀图标           |
| suffix-icon           | `any`                             | `undefined`      | 后缀图标           |
| clear-icon            | `any`                             | `undefined`      | 清空图标           |
| validate-event        | `boolean`                         | `true`           | 是否触发表单验证   |
| popper-class          | `string`                          | `''`             | 弹出层类名         |
| teleported            | `boolean`                         | `true`           | 是否使用 teleport  |
| id                    | `string`                          | `undefined`      | 组件 id            |
| name                  | `string`                          | `undefined`      | 组件 name          |
| readonly              | `boolean`                         | `false`          | 是否只读           |
| show-arrow            | `boolean`                         | `true`           | 是否显示箭头       |
| hide-disabled-options | `boolean`                         | `false`          | 是否隐藏禁用选项   |
| fit-input-width       | `boolean`                         | `false`          | 是否适应输入框宽度 |
| placement             | `string`                          | `'bottom-start'` | 弹出位置           |

### 事件

| 事件名            | 说明                   | 参数                      |
| ----------------- | ---------------------- | ------------------------- |
| update:modelValue | 绑定值更新事件         | `value: string`           |
| change            | 选择变化事件           | `value: string`           |
| blur              | 失焦事件               | `event: FocusEvent`       |
| focus             | 聚焦事件               | `event: FocusEvent`       |
| clear             | 清空事件               | `undefined`               |
| visible-change    | 弹出层显示状态变化事件 | `visible: boolean`        |
| remove-tag        | 移除标签事件           | `tag: any`                |
| input             | 输入事件               | `value: string`           |
| keydown           | 键盘按下事件           | `event: KeyboardEvent`    |
| keyup             | 键盘释放事件           | `event: KeyboardEvent`    |
| keypress          | 键盘按下并释放事件     | `event: KeyboardEvent`    |
| paste             | 粘贴事件               | `event: ClipboardEvent`   |
| copy              | 复制事件               | `event: ClipboardEvent`   |
| cut               | 剪切事件               | `event: ClipboardEvent`   |
| compositionstart  | 开始输入事件           | `event: CompositionEvent` |
| compositionupdate | 输入更新事件           | `event: CompositionEvent` |
| compositionend    | 输入结束事件           | `event: CompositionEvent` |

### 插槽

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
