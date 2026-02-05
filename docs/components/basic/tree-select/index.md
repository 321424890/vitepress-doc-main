# CrystalTreeSelect

CrystalTreeSelect 是基于 Element Plus 的 ElTreeSelect 组件封装的树形选择器组件，继承了 ElTreeSelect 的所有属性、事件和插槽功能。

## 功能特性

- ✅ 支持 Element Plus 所有树形选择器功能
- ✅ 树形结构数据展示
- ✅ 单选和多选模式
- ✅ 复选框支持
- ✅ 自定义节点内容
- ✅ 图标支持
- ✅ 严格勾选模式

## 基础用法

::: demo
components/basic/tree-select/examples/BasicTreeSelect.vue
:::

## 高级用法

::: demo
components/basic/tree-select/examples/AdvancedTreeSelect.vue
:::

### 带复选框

使用 `show-checkbox="true"` 属性可以启用复选框模式，适用于需要多选的场景。

### 严格勾选模式

使用 `check-strictly="true"` 属性可以启用严格勾选模式，父子节点之间的勾选状态互不影响。

### 自定义节点内容

使用 `node` 插槽可以自定义节点的显示内容，支持添加图标、自定义样式等。

## API

### 属性

| 属性                 | 类型               | 默认值                                     | 说明                 |
| -------------------- | ------------------ | ------------------------------------------ | -------------------- |
| v-model              | `any \| any[]`     | `''`                                       | 绑定值               |
| data                 | `any[]`            | `[]`                                       | 树数据               |
| props                | `any`              | `{ label: 'label', children: 'children' }` | 树节点配置           |
| node-key             | `string \| number` | 必填                                       | 树节点唯一标识       |
| render-after-expand  | `boolean`          | `false`                                    | 展开后渲染           |
| show-checkbox        | `boolean`          | `false`                                    | 是否显示复选框       |
| check-strictly       | `boolean`          | `false`                                    | 是否严格勾选         |
| default-expand-all   | `boolean`          | `false`                                    | 是否默认展开所有节点 |
| default-expand-level | `number`           | `1`                                        | 默认展开级别         |
| accordion            | `boolean`          | `false`                                    | 是否启用手风琴模式   |
| style                | `any`              | `{ width: '240px' }`                       | 自定义样式           |

### 事件

| 事件名            | 说明                   | 参数                                                  |
| ----------------- | ---------------------- | ----------------------------------------------------- |
| update:modelValue | 绑定值更新事件         | `value: any`                                          |
| visible-change    | 弹出层显示状态变化事件 | `visible: boolean`                                    |
| remove-tag        | 移除标签事件           | `value: any`                                          |
| clear             | 清空事件               | `undefined`                                           |
| check-change      | 勾选状态变化事件       | `data: any, checked: boolean, indeterminate: boolean` |
| check             | 勾选事件               | `data: any, checked: boolean, indeterminate: boolean` |
| node-click        | 节点点击事件           | `data: any, node: any`                                |
| node-expand       | 节点展开事件           | `data: any, node: any`                                |
| node-collapse     | 节点折叠事件           | `data: any, node: any`                                |

### 插槽

| 名称    | 说明           | 参数                       |
| ------- | -------------- | -------------------------- |
| node    | 节点自定义插槽 | `{ data: any, node: any }` |
| default | 默认插槽       | -                          |
