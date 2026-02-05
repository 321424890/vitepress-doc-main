# CrystalDatePickerPane

CrystalDatePickerPane 是基于 Element Plus 的 ElDatePicker 组件封装的日期选择器组件，继承了 ElDatePicker 的所有属性、事件和插槽，并提供了统一的使用方式。

## 功能特性

- ✅ 支持 Element Plus 所有日期选择器功能
- ✅ 多种选择类型：日期、日期范围、月份、月份范围、年份、年份范围等
- ✅ 自定义日期格式
- ✅ 禁用日期支持
- ✅ 快捷选项配置
- ✅ 面板切换事件
- ✅ 完全继承 Element Plus 日期选择器的所有功能

## 基础用法

::: demo
components/basic/date-picker/examples/BasicDatePicker.vue
:::

## 高级用法

### 月份和年份选择

::: demo
components/basic/date-picker/examples/MonthYearPicker.vue
:::

### 高级日期选择

::: demo
components/basic/date-picker/examples/AdvancedDatePicker.vue
:::

### 日期范围选择

使用 `type="daterange"` 属性可以创建日期范围选择器，适用于需要选择开始和结束日期的场景。

### 月份选择

使用 `type="month"` 属性可以创建月份选择器，适用于只需要选择月份的场景。

### 年份选择

使用 `type="year"` 属性可以创建年份选择器，适用于只需要选择年份的场景。

### 禁用日期

使用 `disabled-date` 属性可以禁用特定的日期，适用于需要限制选择范围的场景。

### 快捷选项

使用 `shortcuts` 属性可以添加快捷选项，方便用户快速选择常用的日期范围。

### 自定义日期格式

使用 `format` 属性可以自定义日期的显示格式，满足不同的显示需求。

## API

### 属性

| 属性               | 类型                                      | 默认值          | 说明                     |
| ------------------ | ----------------------------------------- | --------------- | ------------------------ |
| v-model            | `Date \| Date[] \| string \| string[] \| number \| number[] \| null \| undefined` | `undefined`     | 绑定值                   |
| type               | `string`                                  | `'date'`        | 选择类型                 |
| format             | `string`                                  | `'YYYY-MM-DD'`  | 日期格式                 |
| range-separator    | `string`                                  | `'-'`           | 范围分隔符               |
| default-value      | `Date \| Date[] \| string \| string[] \| number \| number[]` | `undefined`     | 默认值                   |
| disabled-date      | `(time: Date) => boolean`                 | `undefined`     | 禁用日期                 |
| cell-class-name    | `string \| (date: Date) => string`        | `undefined`     | 单元格类名               |
| teleported         | `boolean`                                 | `true`          | 是否使用 teleport        |
| popper-class       | `string`                                  | `undefined`     | 弹出层类名               |
| placement          | `string`                                  | `undefined`     | 弹出位置                 |
| append-to-body     | `boolean`                                 | `true`          | 是否 append 到 body      |
| destroy-on-close   | `boolean`                                 | `false`         | 关闭时是否销毁           |
| unlink-panels      | `boolean`                                 | `false`         | 是否解绑面板             |
| first-day-of-week  | `number`                                  | `1`             | 每周第一天               |
| picker-options     | `Record<string, any>`                     | `undefined`     | 选择器选项               |
| shortcuts          | `any[]`                                   | `undefined`     | 快捷选项                 |
| size               | `string`                                  | `undefined`     | 组件尺寸                 |
| border             | `boolean`                                 | `false`         | 是否显示边框             |
| readonly           | `boolean`                                 | `false`         | 是否只读                 |
| clearable          | `boolean`                                 | `true`          | 是否可清空               |
| validate-event     | `boolean`                                 | `true`          | 是否触发表单验证         |
| autofocus          | `boolean`                                 | `false`         | 是否自动聚焦             |
| placeholder        | `string`                                  | `undefined`     | 占位文本                 |
| editable           | `boolean`                                 | `true`          | 是否可编辑               |
| disabled           | `boolean`                                 | `false`         | 是否禁用                 |
| allow-input        | `boolean`                                 | `false`         | 是否允许输入             |
| input-size         | `string`                                  | `undefined`     | 输入框尺寸               |
| unlink-pickers     | `boolean`                                 | `false`         | 是否解绑选择器           |
| start-placeholder  | `string`                                  | `undefined`     | 开始占位文本             |
| end-placeholder    | `string`                                  | `undefined`     | 结束占位文本             |
| selection-mode     | `string`                                  | `undefined`     | 选择模式                 |
| show-week-numbers  | `boolean`                                 | `false`         | 是否显示周数             |
| show-borders       | `boolean`                                 | `false`         | 是否显示边框             |

### 事件

| 事件名           | 说明                 | 参数                                                         |
| ---------------- | -------------------- | ------------------------------------------------------------ |
| update:modelValue | 绑定值更新事件       | `value: Date \| Date[] \| string \| string[] \| number \| number[] \| null \| undefined` |
| change           | 选择变化事件         | `value: Date \| Date[] \| string \| string[] \| number \| number[] \| null \| undefined` |
| blur             | 失焦事件             | `event: FocusEvent`                                          |
| focus            | 聚焦事件             | `event: FocusEvent`                                          |
| calendar-change  | 日历变化事件         | `value: Date \| Date[] \| string \| string[] \| number \| number[] \| null \| undefined` |
| panel-change     | 面板变化事件         | `date: Date, mode: string`                                   |
| visible-change   | 弹出层显示状态变化事件 | `visible: boolean`                                           |

### 插槽

| 名称    | 说明         |
| ------- | ------------ |
| default | 默认插槽     |
