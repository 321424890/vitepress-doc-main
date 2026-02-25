# 卡片组件

## 组件介绍

CrystalCard 是基于 Element Plus 的卡片组件库，提供多种卡片类型，用于展示不同类型的数据。

## 组件列表

- `CrystalStatsCard` - 统计卡片，用于展示数字统计信息
- `CrystalProgressCard` - 进度卡片，用于展示进度信息
- `CrystalDataListCard` - 数据列表卡片，用于展示列表数据
- `CrystalTimelineListCard` - 时间线列表卡片，用于展示时间线数据
- `CrystalLineChartCard` - 折线图卡片，用于展示折线图数据
- `CrystalBarChartCard` - 柱状图卡片，用于展示柱状图数据
- `CrystalDonutChartCard` - 环形图卡片，用于展示环形图数据

## 示例

### 统计卡片

::: demo
components/basic/card/examples/CrystalStatsCard.vue
:::

### 统计卡片（自定义样式）

::: demo
components/basic/card/examples/CustomStatsCard.vue
:::

### 进度卡片

::: demo
components/basic/card/examples/CrystalProgressCard.vue
:::

### 数据列表卡片

::: demo
components/basic/card/examples/CrystalDataListCard.vue
:::

### 时间线列表卡片

::: demo
components/basic/card/examples/CrystalTimelineListCard.vue
:::

### 折线图卡片

::: demo
components/basic/card/examples/CrystalLineChartCard.vue
:::

### 柱状图卡片

::: demo
components/basic/card/examples/CrystalBarChartCard.vue
:::

### 环形图卡片

::: demo
components/basic/card/examples/CrystalDonutChartCard.vue
:::

### 图表卡片布局

::: demo
components/basic/card/examples/ChartCardsLayout.vue
:::

## API

### CrystalStatsCard 组件

| 属性            | 类型          | 默认值    | 说明         |
| --------------- | ------------- | --------- | ------------ |
| title           | string        | ""        | 卡片标题     |
| count           | number string | ""        | 统计数字     |
| description     | string        | ""        | 描述信息     |
| icon            | string        | ""        | 图标         |
| iconColor       | string        | "#fff"    | 图标颜色     |
| iconSize        | number        | 20        | 图标大小     |
| iconBgColor     | string        | "#409eff" | 图标背景颜色 |
| iconBgRadius    | number        | 4         | 图标背景圆角 |
| textColor       | string        | "#303133" | 文本颜色     |
| backgroundColor | string        | "#fff"    | 卡片背景颜色 |
| showArrow       | boolean       | false     | 是否显示箭头 |

### CrystalProgressCard 组件

| 属性            | 类型   | 默认值    | 说明         |
| --------------- | ------ | --------- | ------------ |
| title           | string | 必填      | 卡片标题     |
| percentage      | number | 必填      | 进度百分比   |
| color           | string | "#409eff" | 进度条颜色   |
| icon            | string | ""        | 图标         |
| iconColor       | string | "#fff"    | 图标颜色     |
| iconSize        | number | 20        | 图标大小     |
| iconBgColor     | string | "#409eff" | 图标背景颜色 |
| iconBgRadius    | number | 4         | 图标背景圆角 |
| backgroundColor | string | "#fff"    | 卡片背景颜色 |

### CrystalDataListCard 组件

| 属性            | 类型    | 默认值 | 说明             |
| --------------- | ------- | ------ | ---------------- |
| title           | string  | 必填   | 卡片标题         |
| subtitle        | string  | ""     | 卡片副标题       |
| list            | Array   | 必填   | 列表数据         |
| maxCount        | number  | 5      | 最大显示数量     |
| showMoreButton  | boolean | false  | 是否显示更多按钮 |
| backgroundColor | string  | "#fff" | 卡片背景颜色     |

#### list 数据结构

```typescript
interface ListItem {
  title: string; // 列表项标题
  status?: string; // 列表项状态
  time?: string; // 列表项时间
  icon?: string; // 列表项图标
  class?: string; // 列表项图标类名
}
```

#### 事件

| 事件名 | 说明               | 回调参数 |
| ------ | ------------------ | -------- |
| more   | 点击更多按钮时触发 | 无       |

### CrystalTimelineListCard 组件

| 属性            | 类型   | 默认值 | 说明         |
| --------------- | ------ | ------ | ------------ |
| title           | string | 必填   | 卡片标题     |
| subtitle        | string | ""     | 卡片副标题   |
| list            | Array  | 必填   | 时间线数据   |
| backgroundColor | string | "#fff" | 卡片背景颜色 |

#### list 数据结构

```typescript
interface TimelineItem {
  time: string; // 时间线时间
  status: string; // 时间线节点颜色
  content: string; // 时间线内容
  code?: string; // 时间线代码（可选）
}
```

## 样式定制

可以通过 CSS 变量和覆盖样式来定制卡片组件的外观。

### 示例

```css
/* 定制 CrystalStatsCard 组件 */
:deep(.stats-card) {
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

/* 定制 CrystalProgressCard 组件 */
:deep(.progress-card) {
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

/* 定制 CrystalDataListCard 组件 */
:deep(.data-list-card) {
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

/* 定制 CrystalTimelineListCard 组件 */
:deep(.timeline-list-card) {
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
```

## 常见问题

### 1. 卡片组件不显示

- **原因**：可能是没有正确引入组件或样式文件
- **解决方案**：确保已正确安装和引入组件库及样式文件

### 2. 图标不显示

- **原因**：可能是图标格式不正确或图标库未加载
- **解决方案**：使用正确的 HTML 实体格式或确保图标库已加载

### 3. 样式定制不生效

- **原因**：可能是选择器优先级不够或样式加载顺序问题
- **解决方案**：使用更具体的选择器或调整样式加载顺序

## 浏览器兼容性

- Chrome ≥ 60
- Firefox ≥ 55
- Safari ≥ 12
- Edge ≥ 79

## 性能优化

- **按需引入**：只引入需要的组件，减少打包体积
- **合理使用**：根据实际需求选择合适的卡片类型
- **样式优化**：避免过度的样式定制，减少重绘和回流

## 联系我们

- **GitHub**：[https://github.com/321424890/vitepress-doc-main](https://github.com/321424890/vitepress-doc-main)
- **邮箱**：13054397571m@sina.cn

---

**感谢您对 crystalplus UI 的支持！** 🎉
