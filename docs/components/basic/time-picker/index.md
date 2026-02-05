# CrystalTimePicker

CrystalTimePicker 是基于 Element Plus 的 ElTimePicker 组件封装的时间选择器组件，继承了 ElTimePicker 的所有属性、事件和插槽，并提供了统一的使用方式。

## 功能特性

- ✅ 支持 Element Plus 所有时间选择器功能
- ✅ 时间点选择
- ✅ 时间范围选择
- ✅ 自定义占位文本
- ✅ 禁用状态支持
- ✅ 清除功能
- ✅ 箭头控制
- ✅ 图标自定义
- ✅ 多种尺寸选择

## 基础用法

::: demo
components/basic/time-picker/examples/BasicTimePicker.vue
:::

## 高级用法

::: demo
components/basic/time-picker/examples/AdvancedTimePicker.vue
:::

### 时间范围选择

使用 `is-range="true"` 属性可以创建时间范围选择器，适用于需要选择开始和结束时间的场景。

### 箭头控制

使用 `arrow-control="true"` 属性可以启用箭头控制，允许用户通过点击箭头来调整时间。

### 自定义图标

使用 `prefix-icon`、`suffix-icon` 和 `clear-icon` 属性可以自定义时间选择器的图标。

### 禁用状态

使用 `disabled="true"` 属性可以禁用时间选择器，适用于不需要用户修改时间的场景。

### 不同尺寸

使用 `size` 属性可以设置时间选择器的尺寸，可选值为 `'large'`、`'default'` 和 `'small'`。

## API

### 属性

| 属性              | 类型                                               | 默认值         | 说明               |
| ----------------- | -------------------------------------------------- | -------------- | ------------------ |
| v-model           | `string \| number \| (string \| number \| Date)[]` | `undefined`    | 绑定值             |
| placeholder       | `string`                                           | `'请选择时间'` | 占位文本           |
| disabled          | `boolean`                                          | `false`        | 是否禁用           |
| editable          | `boolean`                                          | `true`         | 是否可编辑         |
| clearable         | `boolean`                                          | `true`         | 是否可清空         |
| size              | `'large' \| 'default' \| 'small'`                  | `'default'`    | 组件尺寸           |
| prefix-icon       | `any`                                              | `undefined`    | 前缀图标           |
| suffix-icon       | `any`                                              | `undefined`    | 后缀图标           |
| clear-icon        | `any`                                              | `undefined`    | 清空图标           |
| is-range          | `boolean`                                          | `false`        | 是否为时间范围选择 |
| range-separator   | `string`                                           | `'-'`          | 范围分隔符         |
| start-placeholder | `string`                                           | `undefined`    | 开始占位文本       |
| end-placeholder   | `string`                                           | `undefined`    | 结束占位文本       |
| arrow-control     | `boolean`                                          | `false`        | 是否使用箭头控制   |

### 事件

| 事件名            | 说明                   | 参数                                                      |
| ----------------- | ---------------------- | --------------------------------------------------------- |
| update:modelValue | 绑定值更新事件         | `value: string \| number \| (string \| number \| Date)[]` |
| change            | 选择变化事件           | `value: string \| number \| (string \| number \| Date)[]` |
| blur              | 失焦事件               | `event: FocusEvent`                                       |
| focus             | 聚焦事件               | `event: FocusEvent`                                       |
| clear             | 清空事件               | `undefined`                                               |
| visible-change    | 弹出层显示状态变化事件 | `visible: boolean`                                        |
| input             | 输入事件               | `value: string \| number \| (string \| number \| Date)[]` |

### 插槽

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
