# CrystalCalendar

CrystalCalendar 是基于 Element Plus 的 ElCalendar 组件封装的日历组件，继承了 ElCalendar 的所有属性、事件和插槽，并提供了额外的自定义功能，如任务管理、自定义颜色等。

## 功能特性

- ✅ 支持 Element Plus 所有日历组件功能
- ✅ 基础日历展示
- ✅ 带边框样式
- ✅ 不同尺寸选项（大号、默认、小号）
- ✅ 显示周数
- ✅ 自定义选中颜色和悬停颜色
- ✅ 任务管理功能，支持按日期显示任务
- ✅ 自定义日期单元格内容
- ✅ 禁用特定日期
- ✅ 事件处理支持
- ✅ 与表单组件完美集成

## 基础用法

::: demo
components/basic/calendar/examples/BasicCalendar.vue
:::

## 高级用法

### 任务管理和自定义功能

::: demo
components/basic/calendar/examples/AdvancedCalendar.vue
:::

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| v-model | `Date \| Date[] \| string \| string[] \| null` | `new Date()` | 绑定值 |
| type | `string` | `'date'` | 类型 |
| format | `string` | `'YYYY-MM-DD'` | 日期格式 |
| range-separator | `string` | `'-'` | 范围分隔符 |
| start-placeholder | `string` | `''` | 开始占位符 |
| end-placeholder | `string` | `''` | 结束占位符 |
| first-day-of-week | `number` | `1` | 每周的第一天 |
| disabled-date | `function` | - | 禁用日期的函数 |
| cell-class-name | `string \| function` | - | 单元格类名 |
| popper-class | `string` | - | 弹出框类名 |
| teleported | `boolean` | - | 是否使用 teleport |
| show-week-numbers | `boolean` | `false` | 是否显示周数 |
| show-borders | `boolean` | `false` | 是否显示边框 |
| size | `string` | `'default'` | 尺寸，可选值：large, default, small |
| border | `boolean` | `false` | 是否显示边框 |
| readonly | `boolean` | `false` | 是否只读 |
| clearable | `boolean` | `true` | 是否可清空 |
| validate-event | `boolean` | `true` | 是否触发验证事件 |
| autofocus | `boolean` | `false` | 是否自动聚焦 |
| placeholder | `string` | `''` | 占位符 |
| disabled | `boolean` | `false` | 是否禁用 |
| allow-input | `boolean` | `false` | 是否允许输入 |
| input-size | `string` | - | 输入框尺寸 |
| selection-mode | `string` | - | 选择模式 |
| selected-dates | `Date[] \| string[]` | `[]` | 选中的日期 |
| selected-color | `string` | `'#409EFF'` | 选中日期颜色 |
| hover-color | `string` | `'#ecf5ff'` | 鼠标悬停颜色 |
| color | `string` | `''` | 默认颜色 |
| text-color | `string` | `''` | 文本颜色 |
| tasks | `Record<string, Task[]>` | `{}` | 按日期分组的任务列表 |

### 事件

| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | 绑定值更新时触发 | `value: Date \| Date[] \| string \| string[] \| null` |
| change | 值改变时触发 | `value: Date \| Date[] \| string \| string[] \| null` |
| blur | 失焦时触发 | `event: FocusEvent` |
| focus | 聚焦时触发 | `event: FocusEvent` |
| calendar-change | 日历变化时触发 | `value: Date \| Date[] \| string \| string[] \| null` |
| panel-change | 面板变化时触发 | `date: Date, mode: string` |
| day-click | 日期点击时触发 | `day: string` |
| task-click | 任务点击时触发 | `task: Task, day: string` |
| task-edit | 任务编辑时触发 | `task: Task, day: string` |
| task-delete | 任务删除时触发 | `task: Task, day: string` |

### 插槽

| 名称 | 说明 |
| ---- | ---- |
| date-cell | 日期单元格插槽，参数为 `{ data }` |

## 类型定义

### Task 接口

```typescript
interface Task {
  id: string
  title: string
  startTime?: string
  endTime?: string
  type?: string
  status?: string
  [key: string]: any
}
```

## 注意事项

1. **数据绑定**：使用 `v-model` 进行双向数据绑定，值为 Date 对象或日期字符串
2. **任务管理**：通过 `tasks` 属性传入按日期分组的任务列表，支持任务点击事件
3. **自定义颜色**：通过 `selected-color` 和 `hover-color` 属性自定义颜色
4. **禁用日期**：通过 `disabled-date` 属性设置禁用的日期
5. **自定义单元格**：通过 `date-cell` 插槽自定义日期单元格的显示内容
6. **事件处理**：支持多种事件处理，如日期点击、任务点击、日历变化等
7. **尺寸设置**：通过 `size` 属性设置日历的尺寸，可选值为 large、default、small

## 常见问题

### 如何实现任务管理功能？

使用 `tasks` 属性传入按日期分组的任务列表：

```vue
<template>
  <CrystalCalendar 
    v-model="value" 
    :tasks="tasks"
    @task-click="handleTaskClick"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CrystalCalendar } from 'crystalplus-ui'

const value = ref(new Date())
const tasks = ref({
  '2024-01-15': [
    { id: '1', title: '浇水任务', type: 'water' },
    { id: '2', title: '健康检查', type: 'health' }
  ],
  '2024-01-16': [
    { id: '3', title: '喂食任务', type: 'feed' }
  ]
})

const handleTaskClick = (task, day) => {
  console.log('任务点击:', task, day)
}
</script>
```

### 如何自定义日期单元格？

使用 `date-cell` 插槽自定义日期单元格的显示内容：

```vue
<template>
  <CrystalCalendar v-model="value">
    <template #date-cell="{ data }">
      <div class="custom-date-cell">
        <span>{{ data.day.split('-').slice(2).join('-') }}</span>
        <span v-if="isToday(data.day)" class="today-badge">今天</span>
      </div>
    </template>
  </CrystalCalendar>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalCalendar } from 'crystalplus-ui'

const value = ref(new Date())

const isToday = (dateStr) => {
  const today = new Date().toISOString().split('T')[0]
  return dateStr === today
}
</script>
```

### 如何禁用特定日期？

使用 `disabled-date` 属性设置禁用的日期：

```vue
<template>
  <CrystalCalendar 
    v-model="value" 
    :disabled-date="disabledDate"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CrystalCalendar } from 'crystalplus-ui'

const value = ref(new Date())

const disabledDate = (time) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const current = new Date(time)
  current.setHours(0, 0, 0, 0)
  
  // 禁用过去的日期
  return current < today
}
</script>
```

### 如何自定义选中颜色？

使用 `selected-color` 和 `hover-color` 属性自定义颜色：

```vue
<template>
  <CrystalCalendar 
    v-model="value" 
    selected-color="#67c23a" 
    hover-color="#f0f9eb"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CrystalCalendar } from 'crystalplus-ui'

const value = ref(new Date())
</script>
```