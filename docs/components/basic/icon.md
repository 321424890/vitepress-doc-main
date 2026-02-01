# CrystalIcon

基于 Element Plus 图标组件的二次封装，提供更丰富的功能和更好的用户体验。

## 功能特性

- ✅ 支持 Element Plus 所有图标
- ✅ 自定义内容支持
- ✅ 图标动画效果（旋转、脉冲、弹跳）
- ✅ 响应式设计

## 基础用法

通过 `icon` 属性设置图标名称，支持 Element Plus 所有内置图标。基础图标部分不设置颜色，使用默认颜色。

::: demo collapsed
components/basic/icon/examples/BasicIcons.vue
:::

## 尺寸

通过 `size` 属性设置图标大小，可选值为数字或字符串。

::: demo [collapsed]
components/basic/icon/examples/IconSize.vue
:::

## 颜色

通过 `color` 属性设置图标颜色。

::: demo [collapsed]
components/basic/icon/examples/IconColor.vue
:::

## 动画效果

通过 `animate` 属性启用动画效果，`animateType` 属性设置动画类型，支持 `rotate`、`pulse` 和 `bounce`。

::: demo collapsed
components/basic/icon/examples/IconAnimation.vue
:::

## 图标分类展示

### 基础图标

::: demo collapsed
components/basic/icon/examples/BasicIcons.vue
:::

### 箭头图标

::: demo collapsed
components/basic/icon/examples/ArrowCategory.vue
:::

### 状态图标

::: demo collapsed
components/basic/icon/examples/StatusCategory.vue
:::

### 社交图标

::: demo collapsed
components/basic/icon/examples/SocialCategory.vue
:::

### 文件图标

::: demo collapsed
components/basic/icon/examples/FileCategory.vue
:::

### 媒体图标

::: demo collapsed
components/basic/icon/examples/MediaCategory.vue
:::

### 位置图标

::: demo collapsed
components/basic/icon/examples/LocationCategory.vue
:::

### 美食图标

::: demo collapsed
components/basic/icon/examples/FoodCategory.vue
:::

### 工具图标

::: demo collapsed
components/basic/icon/examples/ToolCategory.vue
:::

### 天气图标

::: demo collapsed
components/basic/icon/examples/WeatherCategory.vue
:::

### 其他图标

::: demo collapsed
components/basic/icon/examples/OtherCategory.vue
:::

## API

### 属性

| 属性        | 类型             | 默认值    | 说明                                  |
| ----------- | ---------------- | --------- | ------------------------------------- |
| icon        | `string`         | `-`       | Element Plus 图标名称                 |
| size        | `number  string` | `default` | 图标大小                              |
| color       | `string`         | `#333`    | 图标颜色                              |
| animate     | `boolean`        | `false`   | 是否启用动画效果                      |
| animateType | `string`         | `rotate`  | 动画类型：`rotate`、`pulse`、`bounce` |
|             |

### 插槽

| 名称    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |
