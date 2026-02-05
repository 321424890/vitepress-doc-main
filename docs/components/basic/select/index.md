# CrystalSelect

CrystalSelect 是基于 Element Plus 的 ElSelect 组件封装的下拉选择器组件，继承了 ElSelect 的所有属性、事件和插槽，并提供了额外的自定义功能。

## 功能特性

- ✅ 支持 Element Plus 所有下拉选择器功能
- ✅ 自定义选项图标和描述
- ✅ 选项操作按钮
- ✅ 远程搜索支持
- ✅ 无限滚动加载
- ✅ 自定义边框主题颜色
- ✅ 内置阴影效果
- ✅ 鼠标悬停和聚焦动画

## 基础用法

::: demo
components/basic/select/examples/BasicSelect.vue
:::

## 高级用法

### 多选模式

::: demo
components/basic/select/examples/MultipleSelect.vue
:::

### 带搜索功能

::: demo
components/basic/select/examples/FilterableSelect.vue
:::

### 自定义边框颜色

::: demo
components/basic/select/examples/SelectBorderColor.vue
:::

<!-- ### 远程搜索

::: demo
components/basic/select/examples/RemoteSelect.vue
::: -->

## API

### 属性

| 属性                 | 类型                                      | 默认值                   | 说明             |
| -------------------- | ----------------------------------------- | ------------------------ | ---------------- |
| v-model              | `any`                                     | `undefined`              | 绑定值           |
| options              | `any[]`                                   | `[]`                     | 选项列表         |
| optionIcons          | `Record<string | number, string>`         | `{}`                     | 选项图标映射     |
| optionActions        | `Record<string | number, OptionAction[]>` | `{}`                     | 选项操作按钮映射 |
| loading              | `boolean`                                 | `false`                  | 是否加载中       |
| loadingText          | `string`                                  | `加载中...`              | 加载文本         |
| enableInfiniteScroll | `boolean`                                 | `false`                  | 是否启用无限滚动 |
| scrollThreshold      | `number`                                  | `80`                     | 滚动触发阈值     |
| filterable           | `boolean`                                 | `false`                  | 是否可搜索       |
| filterMethod         | `(value: string, option: any) => boolean` | 默认方法                 | 搜索方法         |
| placeholder          | `string`                                  | `''`                     | 占位文本         |
| multiple             | `boolean`                                 | `false`                  | 是否多选         |
| collapseTags         | `boolean`                                 | `false`                  | 是否折叠标签     |
| clearable            | `boolean`                                 | `false`                  | 是否可清空       |
| remote               | `boolean`                                 | `false`                  | 是否远程搜索     |
| remoteMethod         | `(query: string) => void`                 | `undefined`              | 远程搜索方法     |
| borderThemeColor     | `string`                                  | `undefined`              | 自定义边框主题色 |

### 事件

| 事件名         | 说明             | 参数                |
| -------------- | ---------------- | ------------------- |
| input          | 输入事件         | `value: any`        |
| change         | 改变事件         | `value: any`        |
| clear          | 清空事件         | `undefined`         |
| visible-change | 下拉框显示状态变化 | `visible: boolean`  |
| remove-tag     | 移除标签事件     | `value: any`        |
| blur           | 失焦事件         | `event: FocusEvent` |
| focus          | 聚焦事件         | `event: FocusEvent` |
| query-change   | 查询变化事件     | `query: string`     |
| current-change | 当前选中项变化事件 | `currentVal: any`   |
| remote-search  | 远程搜索事件     | `query: string`     |
| option-action  | 选项操作按钮点击事件 | `actionName: string, option: any` |
| load-more      | 加载更多事件     | `undefined`         |

### 插槽

| 名称    | 说明         |
| ------- | ------------ |
| default | 默认插槽     |
| prefix  | 前缀插槽     |
| suffix  | 后缀插槽     |
| prepend | 前置内容插槽 |
| append  | 后置内容插槽 |
| empty   | 空选项插槽   |
| option  | 选项自定义插槽 |