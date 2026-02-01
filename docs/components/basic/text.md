# CrystalText

## 简介

`CrystalText` 是一个基于 Element Plus `el-text` 封装的增强型文本组件，它继承了 `el-text` 的所有属性和功能，并在此基础上添加了丰富的视觉效果和设计特性，让文本展示更加生动和多样化。

### 核心特性

- ✅ **继承 Element Plus `el-text` 的所有属性**
- ✅ **渐变文字效果**：支持自定义渐变方向和颜色
- ✅ **文字阴影效果**：可调节阴影颜色和深度
- ✅ **悬停交互效果**：鼠标悬停时的动态变化
- ✅ **高级文本样式控制**：字体、行高、间距等精细调节
- ✅ **文本溢出处理**：自动省略或截断超出长度的文本
- ✅ **响应式设计**：适配不同屏幕尺寸

<script setup>
import { CrystalText } from 'crystalplus-ui'
import BasicUsage from './text/examples/BasicUsage.vue'
import SizeExample from './text/examples/SizeExample.vue'
import AdvancedStyle from './text/examples/AdvancedStyle.vue'
import GradientText from './text/examples/GradientText.vue'
import ShadowText from './text/examples/ShadowText.vue'
import HoverEffect from './text/examples/HoverEffect.vue'
import TextAlign from './text/examples/TextAlign.vue'
import TextOverflow from './text/examples/TextOverflow.vue'
import CombinedUsage from './text/examples/CombinedUsage.vue'
</script>

## 基础用法

通过 `type` 属性设置文本类型，支持多种预设颜色方案。

::: demo
components/basic/text/examples/BasicUsage
:::

## 尺寸

通过 `size` 属性设置文本尺寸，可选值为 `large`、`default` 或 `small`。

::: demo
components/basic/text/examples/SizeExample
:::

### 高级样式

通过 CSS 属性设置文本的高级样式。

::: demo
components/basic/text/examples/AdvancedStyle
:::

## 特殊效果

### 渐变文字

通过 `gradient` 属性设置渐变文字效果。

::: demo
components/basic/text/examples/GradientText
:::

### 文字阴影

通过 `shadow` 属性设置文字阴影效果。

::: demo
components/basic/text/examples/ShadowText
:::

### 悬停效果

通过 `hoverEffect` 属性设置文字悬停效果。

::: demo
components/basic/text/examples/HoverEffect
:::

## 文本布局

### 文本对齐

通过 `textAlign` 属性设置文本对齐方式。

::: demo
components/basic/text/examples/TextAlign
:::

### 文本溢出

通过 `textOverflow` 和 `maxWidth` 属性设置文本溢出处理。

::: demo
components/basic/text/examples/TextOverflow
:::

## 组合使用

可以组合使用多个属性，创建更加丰富的文本效果。

::: demo
components/basic/text/examples/CombinedUsage
:::

## API

### 属性

| 属性           | 类型                | 默认值    | 说明                                                                |
| -------------- | ------------------- | --------- | ------------------------------------------------------------------- |
| tag            | `string`            | `span`    | 文本标签                                                            |
| type           | `string`            | `''`      | 文本类型，可选值：`primary`、`success`、`info`、`warning`、`danger` |
| size           | `string`            | `''`      | 文本尺寸，可选值：`large`、`small`                                  |
| bold           | `boolean`           | `false`   | 是否粗体                                                            |
| italic         | `boolean`           | `false`   | 是否斜体                                                            |
| underline      | `boolean`           | `false`   | 是否下划线                                                          |
| delete         | `boolean`           | `false`   | 是否删除线                                                          |
| code           | `boolean`           | `false`   | 是否代码样式                                                        |
| copyable       | `boolean \| object` | `false`   | 是否可复制                                                          |
| gradient       | `boolean`           | `false`   | 是否渐变文字                                                        |
| gradientFrom   | `string`            | `#1890ff` | 渐变起始颜色                                                        |
| gradientTo     | `string`            | `#52c41a` | 渐变结束颜色                                                        |
| shadow         | `boolean`           | `false`   | 是否文字阴影                                                        |
| shadowColor    | `string`            | `#888888` | 阴影颜色                                                            |
| hoverEffect    | `boolean`           | `false`   | 是否悬停效果                                                        |
| hoverColor     | `string`            | `#1890ff` | 悬停颜色                                                            |
| fontFamily     | `string`            | `''`      | 自定义字体                                                          |
| lineHeight     | `string`            | `''`      | 行高                                                                |
| letterSpacing  | `string`            | `''`      | 字间距                                                              |
| wordSpacing    | `string`            | `''`      | 词间距                                                              |
| textDecoration | `string`            | `''`      | 文本装饰                                                            |
| textTransform  | `string`            | `none`    | 文本转换，可选值：`none`、`capitalize`、`uppercase`、`lowercase`    |
| textAlign      | `string`            | `left`    | 文本对齐，可选值：`left`、`center`、`right`、`justify`              |
| textOverflow   | `string`            | `clip`    | 文本溢出处理，可选值：`clip`、`ellipsis`                            |
| maxWidth       | `string`            | `''`      | 最大宽度（用于文本溢出）                                            |
| fontWeight     | `string \| number`  | `''`      | 字体粗细                                                            |
| fontStyle      | `string`            | `normal`  | 字体样式，可选值：`normal`、`italic`                                |

### 插槽

| 名称    | 说明     |
| ------- | -------- |
| default | 文本内容 |

<style>
.text-demo .crystal-text {
  margin-right: 16px;
  margin-bottom: 8px;
  display: inline-block;
}

.text-align-demo {
  width: 100%;
}

.text-item {
  width: 100%;
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid #eaeaea;
}
</style>
