<template>
  <div class="datepicker-demo-container">
    <!-- 示例区域 -->
    <div class="demo-content">
      <div class="demo-section">
        <h3 class="section-title">自定义日期单元格</h3>
        <div class="demo-grid">
          <!-- 示例6: 自定义日期单元格 -->
          <div class="demo-card">
            <h4 class="card-title">自定义日期单元格</h4>
            <p class="card-desc">自定义日期单元格的显示内容</p>
            <CrystalCalendar v-model="selectedDate6">
              <template #date-cell="{ data }">
                <div class="custom-date-cell">
                  <span>{{ data.day.split("-").slice(2).join("-") }}</span>
                  <el-tag v-if="isHoliday(data.day)" size="mini" type="danger">休</el-tag>
                  <el-tag v-if="isWorkday(data.day)" size="mini" type="success">班</el-tag>
                </div>
              </template>
            </CrystalCalendar>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h3 class="section-title">任务管理</h3>
        <div class="demo-grid">
          <!-- 示例9: 任务管理日历 -->
          <div class="demo-card">
            <h4 class="card-title">任务管理</h4>

            <CrystalCalendar v-model="selectedDate9" :selected-dates="taskSelectedDates" :selected-color="'#409EFF'">
              <template #date-cell="{ data }">
                <div class="custom-date-cell">
                  <span>{{ data.day.split("-").slice(2).join("-") }}</span>
                  <div class="task-list" v-if="tasks[data.day]">
                    <div
                      v-for="task in tasks[data.day]"
                      :key="task.id"
                      class="task-item"
                      @click="handleTaskClick(task, data.day)"
                    >
                      <span class="task-title">{{ task.title }}</span>
                      <span class="task-time">{{ task.startTime }} - {{ task.endTime }}</span>
                    </div>
                  </div>
                </div>
              </template>
            </CrystalCalendar>
            <div class="value-display">选中日期: {{ selectedDay }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { CrystalCalendar } from "crystalplus-ui"
import { ElTag } from "element-plus"

// 自定义日期单元格
const selectedDate6 = ref(new Date())

// 模拟节假日数据
const holidays = ["2025-12-25", "2025-12-31", "2026-01-01"]
const workdays = ["2025-12-27", "2025-12-28"]

const isHoliday = (day: string) => {
  return holidays.includes(day)
}

const isWorkday = (day: string) => {
  return workdays.includes(day)
}

// 任务管理
const selectedDate9 = ref(new Date())
const selectedDay = ref<string>("")
const taskSelectedDates = ref<string[]>([])

// 任务数据结构
interface Task {
  id: string
  title: string
  startTime: string
  endTime: string
  type: string
}

// 任务数据：按日期分组的任务列表
const tasks = reactive<Record<string, Task[]>>({
  "2025-12-23": [
    {
      id: "1",
      title: "项目会议",
      startTime: "09:00",
      endTime: "10:30",
      type: "work"
    }
  ],
  "2025-12-24": [
    {
      id: "2",
      title: "健身",
      startTime: "18:00",
      endTime: "19:00",
      type: "life"
    }
  ]
})

// 处理任务点击
const handleTaskClick = (task: Task, day: string) => {
  console.log("点击的任务:", task, "日期:", day)
  // 可以在这里打开任务详情
}
</script>

<style scoped>
.demo-content {
  margin-bottom: 40px;
}

.demo-section {
  margin-bottom: 40px;
}

.section-title {
  margin: 0 0 20px 0;
  font-size: 20px;
  font-weight: 600;
  color: #303133;
}

.demo-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.demo-card {
  padding: 20px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px;
}

.card-title {
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

.card-desc {
  margin: 0 0 20px 0;
  font-size: 14px;
  color: #606266;
}

.value-display {
  margin-top: 20px;
  padding: 10px;
  background: #f5f7fa;
  border-radius: 4px;
  font-size: 14px;
  color: #606266;
}

.custom-date-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
}

.custom-date-cell span {
  margin-bottom: 4px;
}

.task-list {
  width: 100%;
  margin-top: 4px;
}

.task-item {
  width: 100%;
  padding: 2px 4px;
  margin-bottom: 2px;
  background: #ecf5ff;
  border-radius: 2px;
  font-size: 12px;
  cursor: pointer;
}

.task-title {
  display: block;
  font-weight: 500;
}

.task-time {
  display: block;
  font-size: 10px;
  color: #606266;
}
</style>