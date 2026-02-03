# CrystalButton

基于 Element Plus 按钮组件的二次封装，提供更丰富的功能和更好的用户体验，支持渐变效果、自定义圆角等特性。

## 功能特性

- ✅ 支持 Element Plus 所有按钮功能
- ✅ 渐变效果支持
- ✅ 自定义圆角控制
- ✅ 图标支持
- ✅ 响应式设计
- ✅ **内置异步操作 loading 状态管理**
- ✅ **简化异步操作代码，提高开发效率**
- ✅ **内置点击节流功能，防止重复操作**
- ✅ **可配置节流时间，适应不同场景**

## 基础用法

通过 `type` 属性设置按钮类型，支持 `primary`、`success`、`warning`、`danger`、`info` 和 `default`。

::: demo collapsed
components/basic/button/examples/BasicButtons.vue
:::

## 尺寸

通过 `size` 属性设置按钮大小，可选值为 `large`、`default` 和 `small`。

::: demo collapsed
components/basic/button/examples/ButtonSize.vue
:::

## 状态

通过 `plain`、`round`、`circle`、`loading` 和 `disabled` 属性设置按钮状态。

::: demo collapsed
components/basic/button/examples/ButtonStatus.vue
:::

## 渐变效果

通过 `gradient` 属性启用渐变效果，`gradientFrom` 和 `gradientTo` 属性设置渐变颜色。

::: demo collapsed
components/basic/button/examples/ButtonGradient.vue
:::

## 自定义圆角

通过 `borderRadius` 属性设置按钮圆角。

::: demo collapsed
components/basic/button/examples/ButtonBorderRadius.vue
:::

## 图标按钮

通过 `icon` 属性设置按钮图标，支持 Element Plus 所有图标。

::: demo collapsed
components/basic/button/examples/ButtonIcon.vue
:::

## 组合使用

结合 Element Plus 原生属性和 CrystalButton 扩展属性。

::: demo collapsed
components/basic/button/examples/ButtonCombined.vue
:::

## 异步操作

CrystalButton 提供了内置的异步操作 loading 状态管理功能，通过 `auto-loading` 属性可以实现点击按钮时自动显示 loading 状态，操作完成后自动关闭。
每个按钮都有自己独立的 loading 状态，互不影响。所有异步按钮的 loading 状态管理方式保持一致，提高代码可维护性。无论异步操作成功失败，都能确保 loading 状态被正确关闭

### 异步操作示例

::: demo collapsed
components/basic/button/examples/ButtonAsync.vue
:::

## 点击节流

CrystalButton 提供了内置的点击节流功能，通过 `throttle` 属性可以设置点击节流时间（毫秒），防止用户在短时间内重复点击按钮，导致多次触发相同的操作。

1. **防止重复操作**：避免用户在短时间内重复点击按钮，导致多次触发相同的操作
2. **提高用户体验**：减少因快速点击导致的不必要的加载和响应
3. **保护服务器**：减少因重复点击导致的多余 API 请求，减轻服务器负担
4. **灵活配置**：可以根据不同操作的需要设置不同的节流时间
5. **易于使用**：只需设置 `throttle` 属性即可启用节流功能，无需编写额外的节流逻辑

### 点击节流示例

::: demo
components/basic/button/examples/ButtonThrottle.vue
:::

## API

### 属性

| 属性            | 类型                | 默认值      | 说明                                                                   |
| --------------- | ------------------- | ----------- | ---------------------------------------------------------------------- |
| type            | `string`            | `'default'` | 按钮类型：`primary`、`success`、`warning`、`danger`、`info`、`default` |
| size            | `string`            | `'default'` | 按钮尺寸：`large`、`default`、`small`                                  |
| plain           | `boolean`           | `false`     | 是否为朴素按钮                                                         |
| round           | `boolean`           | `false`     | 是否为圆角按钮                                                         |
| circle          | `boolean`           | `false`     | 是否为圆形按钮                                                         |
| loading         | `boolean`           | `false`     | 是否加载中状态                                                         |
| disabled        | `boolean`           | `false`     | 是否禁用状态                                                           |
| icon            | `string  Component` | `undefined` | 按钮图标                                                               |
| autofocus       | `boolean`           | `false`     | 是否自动获取焦点                                                       |
| nativeType      | `string`            | `'button'`  | 原生 type 属性                                                         |
| autoInsertSpace | `boolean`           | `false`     | 自动在文本和图标之间插入空格                                           |
| tag             | `string`            | `'button'`  | 自定义元素标签                                                         |
| gradient        | `boolean`           | `false`     | 是否启用渐变效果                                                       |
| gradientFrom    | `string`            | `'#1890ff'` | 渐变起始颜色                                                           |
| gradientTo      | `string`            | `'#52c41a'` | 渐变结束颜色                                                           |
| borderRadius    | `string`            | `''`        | 自定义圆角                                                             |
| auto-loading    | `boolean`           | `false`     | 是否启用自动 loading 状态管理                                          |
| throttle        | `number`            | `0`         | 点击节流时间（毫秒），0 表示禁用节流                                   |

### 事件

| 事件名      | 说明         | 参数                                  |
| ----------- | ------------ | ------------------------------------- |
| click       | 点击事件     | `event: MouseEvent`                   |
| mousedown   | 鼠标按下事件 | `event: MouseEvent`                   |
| mouseup     | 鼠标释放事件 | `event: MouseEvent`                   |
| mouseenter  | 鼠标进入事件 | `event: MouseEvent`                   |
| mouseleave  | 鼠标离开事件 | `event: MouseEvent`                   |
| async-click | 异步点击事件 | `event: MouseEvent, done: () => void` |

### 插槽

| 名称    | 说明         |
| ------- | ------------ |
| default | 按钮内容插槽 |
