# CrystalTree

CrystalTree 是基于 Element Plus 的 ElTree 组件封装的树形组件，继承了 ElTree 的所有属性、事件和插槽，并提供了额外的自定义功能。

## 功能特性

- ✅ 支持 Element Plus 所有树形组件功能
- ✅ 基础树形结构展示
- ✅ 可复选树形结构
- ✅ 禁用状态支持
- ✅ 默认展开指定节点
- ✅ 自定义节点内容
- ✅ 自定义展开/折叠图标
- ✅ 带筛选功能的树形结构
- ✅ 异步加载树形结构
- ✅ 与表单组件完美集成

## 基础用法

::: demo
components/basic/tree/examples/BasicTree.vue
:::

## 高级用法

### 自定义内容和功能

::: demo
components/basic/tree/examples/AdvancedTree.vue
:::

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| v-model | `Array<string | number> | string | number` | `[]` | 绑定值 |
| data | `array` | - | 树形结构数据 |
| show-checkbox | `boolean` | `false` | 是否显示复选框 |
| default-expanded-keys | `array` | - | 默认展开的节点 key 数组 |
| default-checked-keys | `array` | - | 默认选中的节点 key 数组 |
| expand-on-click-node | `boolean` | `true` | 是否在点击节点时展开或折叠节点 |
| check-on-click-node | `boolean` | `false` | 是否在点击节点时选中节点 |
| auto-expand-parent | `boolean` | `true` | 是否在展开子节点时自动展开父节点 |
| default-expand-all | `boolean` | `false` | 是否默认展开所有节点 |
| disabled | `boolean` | `false` | 是否禁用整个树形组件 |
| node-key | `string` | - | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 |
| filter-node-method | `function` | - | 节点过滤方法 |
| lazy | `boolean` | `false` | 是否懒加载子节点，需与 load 方法配合使用 |
| load | `function` | - | 加载子节点的方法，仅当 lazy 属性为 true 时生效 |

### 事件

| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 绑定值更新时触发 | `value: Array<string | number> | string | number` |
| node-click | 节点被点击时触发 | `node: object, event: Event` |
| check-change | 节点选中状态发生变化时触发 | `node: object, checked: boolean, indeterminate: boolean` |
| check | 节点被选中时触发 | `data: object, checkedKeys: array` |
| expand-change | 节点展开或折叠时触发 | `node: object, expanded: boolean` |
| current-change | 当前选中节点变化时触发 | `currentNode: object, oldCurrentNode: object` |

### 插槽

| 名称 | 说明 |
| ---- | ---- |
| default | 默认插槽，用于自定义节点内容，参数为 `{ scope }` |
| header | 头部插槽，用于在树形组件顶部添加内容 |
| default-expand-icon | 默认展开图标插槽，参数为 `{ scope }` |
| default-collapse-icon | 默认折叠图标插槽，参数为 `{ scope }` |
| default-node-icon | 默认节点图标插槽，参数为 `{ scope }` |
| default-leaf-icon | 默认叶子节点图标插槽，参数为 `{ scope }` |

## 注意事项

1. **数据绑定**：使用 `v-model` 进行双向数据绑定，值为数组类型（当使用复选框时）或单个值类型
2. **树形数据结构**：树形数据需要包含 `id`、`label` 和 `children` 属性（可选）
3. **节点唯一性**：使用 `node-key` 属性确保每个节点有唯一标识
4. **异步加载**：通过 `lazy` 和 `load` 属性实现异步加载子节点
5. **自定义内容**：通过默认插槽可以自定义节点的显示内容
6. **事件处理**：支持多种事件处理，如节点点击、选中状态变化、展开/折叠等
7. **筛选功能**：通过 `filter-node-method` 实现节点筛选

## 常见问题

### 如何设置默认展开的节点？

使用 `default-expanded-keys` 属性设置默认展开的节点 key 数组：

```vue
<template>
  <CrystalTree
    v-model="value"
    :data="treeData"
    :default-expanded-keys="[1, 3]"
  >
    <template #default="{ scope }">
      <span>{{ scope.node.label }}</span>
    </template>
  </CrystalTree>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalTree } from 'crystalplus-ui'

const value = ref([])
const treeData = [
  {
    id: 1,
    label: '一级节点 1',
    children: [
      {
        id: 2,
        label: '二级节点 1-1',
        children: [
          {
            id: 3,
            label: '三级节点 1-1-1'
          }
        ]
      }
    ]
  }
]
</script>
```

### 如何实现树形结构的筛选功能？

使用 `filter-node-method` 属性和 `filter` 方法实现筛选功能：

```vue
<template>
  <div>
    <el-input
      v-model="filterText"
      placeholder="输入关键词筛选"
      style="margin-bottom: 10px;"
    />
    <CrystalTree
      v-model="value"
      :data="treeData"
      :filter-node-method="filterNode"
      ref="treeRef"
    >
      <template #default="{ scope }">
        <span>{{ scope.node.label }}</span>
      </template>
    </CrystalTree>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { CrystalTree } from 'crystalplus-ui'

const value = ref([])
const filterText = ref('')
const treeRef = ref(null)

const treeData = [
  // 树形数据
]

const filterNode = (value, data) => {
  if (!value) return true
  return data.label.includes(value)
}

watch(filterText, (val) => {
  if (treeRef.value) {
    treeRef.value.filter(val)
  }
})
</script>
```

### 如何实现异步加载树形结构？

使用 `lazy` 和 `load` 属性实现异步加载：

```vue
<template>
  <CrystalTree
    v-model="value"
    :data="treeData"
    lazy
    :load="loadNode"
    show-checkbox
  >
    <template #default="{ scope }">
      <span>{{ scope.node.label }}</span>
    </template>
  </CrystalTree>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalTree } from 'crystalplus-ui'

const value = ref([])
const treeData = [
  {
    id: 1,
    label: '异步节点 1',
    hasChildren: true
  }
]

const loadNode = (node, resolve) => {
  // 模拟异步加载
  setTimeout(() => {
    const children = []
    for (let i = 1; i <= 3; i++) {
      children.push({
        id: `${node.id}-${i}`,
        label: `${node.label}-${i}`,
        hasChildren: node.level < 2
      })
    }
    resolve(children)
  }, 500)
}
</script>
```