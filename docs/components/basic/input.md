# CrystalInput

CrystalInput 是基于 Element Plus 的 ElInput 组件封装的输入框组件，继承了 ElInput 的所有属性、事件和插槽，并提供了额外的自定义功能。

## 功能特性

- ✅ 支持 Element Plus 所有输入框功能
- ✅ 自定义样式支持
- ✅ 响应式设计
- ✅ 自定义边框主题颜色
- ✅ 内置阴影效果
- ✅ 鼠标悬停和聚焦动画

## 基础用法

::: demo
components/basic/input/examples/BasicInput.vue
:::

## 高级用法

::: demo
components/basic/input/examples/AdvancedInput.vue
:::

## 自定义边框颜色和阴影效果

CrystalInput 提供了自定义边框主题颜色的功能，通过 `border-theme-color` 属性可以设置输入框的边框颜色，同时还内置了鼠标悬停和聚焦时的阴影效果。

### 自定义边框颜色示例

::: demo
components/basic/input/examples/InputBorderColor.vue
:::

## 相关组件

- [数字输入框](/components/basic/input/inputnumber/) - 基于 Element Plus 的数字输入框组件，支持范围限制、千分位格式化等功能

## API

### 属性

| 属性               | 类型                | 默认值      | 说明             |
| ------------------ | ------------------- | ----------- | ---------------- |
| type               | `string`            | `'text'`    | 输入框类型       |
| v-model            | `string  number`    | `''`        | 绑定值           |
| placeholder        | `string`            | `''`        | 占位文本         |
| disabled           | `boolean`           | `false`     | 是否禁用         |
| size               | `string`            | `'default'` | 输入框尺寸       |
| clearable          | `boolean`           | `false`     | 是否可清空       |
| prefix-icon        | `string  Component` | `undefined` | 前缀图标         |
| suffix-icon        | `string  Component` | `undefined` | 后缀图标         |
| readonly           | `boolean`           | `false`     | 是否只读         |
| maxlength          | `number`            | `undefined` | 最大输入长度     |
| minlength          | `number`            | `undefined` | 最小输入长度     |
| show-word-limit    | `boolean`           | `false`     | 是否显示字数统计 |
| autocomplete       | `string`            | `'off'`     | 自动补全         |
| autofocus          | `boolean`           | `false`     | 是否自动获取焦点 |
| name               | `string`            | `''`        | 原生 name 属性   |
| validate-event     | `boolean`           | `true`      | 是否触发表单验证 |
| border-theme-color | `string`            | `'#409eff'` | 自定义边框主题色 |

### 事件

| 事件名 | 说明     | 参数                |
| ------ | -------- | ------------------- |
| input  | 输入事件 | `value: string`     |
| change | 改变事件 | `value: string`     |
| focus  | 聚焦事件 | `event: FocusEvent` |
| blur   | 失焦事件 | `event: FocusEvent` |
| clear  | 清空事件 | `undefined`         |

### 插槽

| 名称    | 说明         |
| ------- | ------------ |
| prefix  | 前缀插槽     |
| suffix  | 后缀插槽     |
| prepend | 前置内容插槽 |
| append  | 后置内容插槽 |
