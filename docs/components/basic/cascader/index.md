# CrystalCascader

CrystalCascader 是基于 Element Plus 的 ElCascader 组件封装的级联选择器组件，继承了 ElCascader 的所有属性、事件和插槽，并提供了额外的自定义功能。

## 功能特性

- ✅ 支持 Element Plus 所有级联选择器功能
- ✅ 多层级数据选择，支持无限层级的树形数据
- ✅ 内置搜索过滤能力，支持搜索高亮显示
- ✅ 多选模式，支持标签折叠
- ✅ 自定义分隔符、防抖时间等参数
- ✅ 支持完全禁用或部分禁用选项
- ✅ 响应式设计，适配不同屏幕尺寸

## 基础用法

::: demo
components/basic/cascader/examples/BasicCascader.vue
:::

## 高级用法

### 搜索与禁用

::: demo
components/basic/cascader/examples/SearchableCascader.vue
:::

## API

### 属性

| 属性                  | 类型      | 默认值  | 说明             |
| --------------------- | --------- | ------- | ---------------- |
| v-model               | `any[]`   | `[]`    | 绑定值           |
| options               | `any[]`   | `[]`    | 选项数据         |
| size                  | `string`  | `''`    | 尺寸             |
| disabled              | `boolean` | `false` | 是否禁用         |
| clearable             | `boolean` | `false` | 是否可清空       |
| show-all-levels       | `boolean` | `true`  | 是否显示所有层级 |
| collapse-tags         | `boolean` | `false` | 是否折叠标签     |
| separator             | `string`  | `/`     | 分隔符           |
| filterable            | `boolean` | `false` | 是否可搜索       |
| highlight-search-text | `boolean` | `false` | 是否高亮搜索文本 |
| debounce              | `number`  | `300`   | 搜索防抖时间     |
| multiple              | `boolean` | `false` | 是否多选         |
| multiple-limit        | `number`  | `0`     | 多选限制数量     |
| placeholder           | `string`  | `''`    | 占位文本         |

### 事件

| 事件名         | 说明                         | 参数                |
| -------------- | ---------------------------- | ------------------- |
| change         | 值改变时触发                 | `value: any[]`      |
| visible-change | 下拉框显示/隐藏时触发        | `visible: boolean`  |
| expand-change  | 展开/收起节点时触发          | `val: any[]`        |
| remove-tag     | 移除标签时触发（多选模式下） | `value: any`        |
| clear          | 清空时触发                   | -                   |
| blur           | 失焦时触发                   | `event: FocusEvent` |
| focus          | 聚焦时触发                   | `event: FocusEvent` |

### 插槽

| 名称    | 说明           | 参数                       |
| ------- | -------------- | -------------------------- |
| default | 默认插槽       | -                          |
| option  | 选项自定义插槽 | `{ node: any, data: any }` |
| prefix  | 前缀插槽       | -                          |
| suffix  | 后缀插槽       | -                          |

## 注意事项

1. **数据格式**：options 数据需要符合树形结构，包含 value、label 和 children 字段
2. **性能优化**：对于大量数据，建议使用懒加载模式
3. **搜索功能**：启用搜索功能时，建议设置合理的防抖时间以提升性能
4. **样式定制**：可以通过 CSS 变量或直接样式覆盖来自定义组件样式

## 常见问题

### 如何设置默认值？

使用 v-model 绑定初始值，值的格式为数组，对应选项的 value 路径。

### 如何禁用某些选项？

在 options 数据中为对应的选项添加 `disabled: true` 属性。

### 如何自定义选项模板？

可以使用 option 插槽来自定义选项的显示内容：

```vue
<CrystalCascader>
  <template #option="{ node, data }">
    {{ data.label }}
  </template>
</CrystalCascader>
```

### 如何实现懒加载？

使用 `lazy` 属性和 `load` 方法实现异步加载数据：

```vue
<CrystalCascader
  :props="{
    lazy: true,
    load: (node, resolve) => {
      // 异步加载数据
      setTimeout(() => {
        resolve([
          /* 子节点数据 */
        ]);
      }, 1000);
    },
  }"
/>
```
