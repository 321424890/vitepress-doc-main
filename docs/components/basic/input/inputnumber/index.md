# CrystalInputNumber

CrystalInputNumber 是基于 Element Plus 的 ElInputNumber 组件封装的数字输入框组件，继承了 ElInputNumber 的所有属性、事件和插槽，并提供了额外的自定义功能。

## 功能特性

- ✅ 支持 Element Plus 所有数字输入框功能
- ✅
  范围限制和提示
- ✅ 千分位格式化
- ✅ 自定义格式化和解析
- ✅ 响应式设计
- ✅ 自定义边框主题颜色
- ✅ 内置阴影效果
- ✅ 鼠标悬停和聚焦动画

## 基础用法

::: demo
components/basic/input/inputnumber/examples/BasicInputNumber.vue
:::

## 高级用法

### 范围限制

::: demo
components/basic/input/inputnumber/examples/InputNumberRange.vue
:::

### 千分位格式化

::: demo
components/basic/input/inputnumber/examples/InputNumberThousands.vue
:::

### 自定义边框颜色

::: demo
components/basic/input/inputnumber/examples/InputNumberBorder.vue
:::

## API

### 属性

| 属性               | 类型                | 默认值      | 说明                 |
| ------------------ | ------------------- | ----------- | -------------------- |
| v-model            | `number`            | `undefined` | 绑定值               |
| min                | `number`            | `undefined` | 最小值               |
| max                | `number`            | `undefined` | 最大值               |
| step               | `number`            | `1`         | 步长                 |
| step-strictly      | `boolean`           | `false`     | 是否严格步进         |
| precision          | `number`            | `0`         | 精度                 |
| size               | `string`            | `'default'` | 尺寸                 |
| disabled           | `boolean`           | `false`     | 是否禁用             |
| controls-position  | `string`            | `''`        | 控制按钮位置         |
| controls           | `boolean`           | `true`      | 是否显示控制按钮     |
| rangeTip           | `string`            | `''`        | 范围提示文本         |
| thousands          | `boolean`           | `false`     | 是否显示千分位分隔符 |
| formatter          | `Function`          | `undefined` | 自定义格式化函数     |
| parser             | `Function`          | `undefined` | 自定义解析函数       |
| border-theme-color | `string`            | `'#409eff'` | 自定义边框主题色     |

### 事件

| 事件名     | 说明         | 参数                |
| ---------- | ------------ | ------------------- |
| input      | 输入事件     | `value: number`     |
| change     | 改变事件     | `value: number`     |
| focus      | 聚焦事件     | `event: FocusEvent` |
| blur       | 失焦事件     | `event: FocusEvent` |
| increase   | 增加事件     | `event`             |
| decrease   | 减少事件     | `event`             |
| range-exceed | 超出范围事件 | `[value, direction]` |

### 插槽

| 名称 | 说明 |
| ---- | ---- |
| default | 默认插槽 |