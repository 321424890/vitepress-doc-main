# CrystalSwitch

CrystalSwitch 是基于 Element Plus 的 ElSwitch 组件封装的开关组件，继承了 ElSwitch 的所有属性、事件和插槽，提供了一致的用户体验。

## 功能特性

- ✅ 支持 Element Plus 所有开关组件功能
- ✅ 基础开关功能
- ✅ 禁用状态
- ✅ 自定义宽度
- ✅ 带文字说明
- ✅ 自定义激活和非激活值
- ✅ 带边框样式
- ✅ 自定义图标
- ✅ 开关状态变更前确认
- ✅ 与表单组件完美集成

## 基础用法

::: demo
components/basic/switch/examples/BasicSwitch.vue
:::

## 高级用法

### 自定义功能和交互

::: demo
components/basic/switch/examples/AdvancedSwitch.vue
:::

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| v-model | `boolean \| any` | `false` | 绑定值 |
| disabled | `boolean` | `false` | 是否禁用 |
| width | `number` | `40` | 开关宽度 |
| active-text | `string` | - | 激活时的文本 |
| inactive-text | `string` | - | 非激活时的文本 |
| active-value | `any` | `true` | 激活时的值 |
| inactive-value | `any` | `false` | 非激活时的值 |
| name | `string` | - | 开关的 name 属性 |
| border | `boolean` | `false` | 是否显示边框 |
| before-change | `(val: boolean) => boolean \| Promise<boolean>` | - | 开关状态变更前的回调，返回 false 可以阻止变更 |

### 事件

| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 绑定值更新时触发 | `value: boolean \| any` |
| change | 开关状态变更时触发 | `value: boolean \| any` |

### 插槽

| 插槽名 | 说明 |
| ---- | ---- |
| active-icon | 激活时的图标 |
| inactive-icon | 非激活时的图标 |

## 注意事项

1. **数据绑定**：使用 `v-model` 进行双向数据绑定，值默认为 boolean 类型，也可以通过 `active-value` 和 `inactive-value` 自定义值类型
2. **禁用状态**：通过 `disabled` 属性设置开关的禁用状态
3. **自定义文本**：通过 `active-text` 和 `inactive-text` 属性设置开关的文本说明
4. **自定义宽度**：通过 `width` 属性设置开关的宽度
5. **自定义图标**：通过 `active-icon` 和 `inactive-icon` 插槽自定义开关的图标
6. **状态确认**：通过 `before-change` 属性设置开关状态变更前的确认回调
7. **表单集成**：可以与 Element Plus 的表单组件完美集成使用

## 常见问题

### 如何自定义开关的值？

使用 `active-value` 和 `inactive-value` 属性自定义开关的激活和非激活值：

```vue
<template>
  <CrystalSwitch 
    v-model="value" 
    :active-value="'开启'" 
    :inactive-value="'关闭'" 
  />
</template>

<script setup>
import { ref } from 'vue'
import { CrystalSwitch } from 'crystal-ui'

const value = ref('关闭')
</script>
```

### 如何为开关添加确认功能？

使用 `before-change` 属性设置开关状态变更前的确认回调：

```vue
<template>
  <CrystalSwitch 
    v-model="value" 
    :before-change="handleBeforeChange" 
  />
</template>

<script setup>
import { ref } from 'vue'
import { CrystalSwitch } from 'crystal-ui'
import { ElMessageBox } from 'element-plus'

const value = ref(false)

const handleBeforeChange = async (val) => {
  try {
    await ElMessageBox.confirm(
      `确定要${val ? '开启' : '关闭'}吗？`,
      '操作确认'
    )
    return true
  } catch {
    return false
  }
}
</script>
```

### 如何自定义开关的图标？

使用 `active-icon` 和 `inactive-icon` 插槽自定义开关的图标：

```vue
<template>
  <CrystalSwitch v-model="value">
    <template #active-icon>
      <el-icon><Check /></el-icon>
    </template>
    <template #inactive-icon>
      <el-icon><Close /></el-icon>
    </template>
  </CrystalSwitch>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalSwitch } from 'crystal-ui'
import { ElIcon, Check, Close } from 'element-plus'

const value = ref(false)
</script>
```