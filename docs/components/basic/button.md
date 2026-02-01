# CrystalButton

基于 Element Plus 按钮组件的二次封装，提供更丰富的功能和更好的用户体验，支持渐变效果、自定义圆角等特性。

## 功能特性

- ✅ 支持 Element Plus 所有按钮功能
- ✅ 渐变效果支持
- ✅ 自定义圆角控制
- ✅ 图标支持
- ✅ 响应式设计

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

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `string` | `'default'` | 按钮类型：`primary`、`success`、`warning`、`danger`、`info`、`default` |
| size | `string` | `'default'` | 按钮尺寸：`large`、`default`、`small` |
| plain | `boolean` | `false` | 是否为朴素按钮 |
| round | `boolean` | `false` | 是否为圆角按钮 |
| circle | `boolean` | `false` | 是否为圆形按钮 |
| loading | `boolean` | `false` | 是否加载中状态 |
| disabled | `boolean` | `false` | 是否禁用状态 |
| icon | `string  Component` | `undefined` | 按钮图标 |
| autofocus | `boolean` | `false` | 是否自动获取焦点 |
| nativeType | `string` | `'button'` | 原生 type 属性 |
| autoInsertSpace | `boolean` | `false` | 自动在文本和图标之间插入空格 |
| tag | `string` | `'button'` | 自定义元素标签 |
| gradient | `boolean` | `false` | 是否启用渐变效果 |
| gradientFrom | `string` | `'#1890ff'` | 渐变起始颜色 |
| gradientTo | `string` | `'#52c41a'` | 渐变结束颜色 |
| borderRadius | `string` | `''` | 自定义圆角 |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击事件 | `event: MouseEvent` |
| mousedown | 鼠标按下事件 | `event: MouseEvent` |
| mouseup | 鼠标释放事件 | `event: MouseEvent` |
| mouseenter | 鼠标进入事件 | `event: MouseEvent` |
| mouseleave | 鼠标离开事件 | `event: MouseEvent` |

### 插槽

| 名称 | 说明 |
| --- | --- |
| default | 按钮内容插槽 |
