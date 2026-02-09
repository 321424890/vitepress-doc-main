<template>
  <div class="datepicker-demo-container">
    <!-- 页面头部 -->
    <div class="demo-header">
      <h1 class="demo-title">CrystalCalendar 组件</h1>
      <p class="demo-description">
        基于 Element Plus 的 el-calendar 组件封装的日历组件，提供了选中高亮、可编辑等增强功能，同时保持了原组件的所有基本功能
      </p>
    </div>

    <!-- 示例区域 -->
    <div class="demo-content">
      <div class="demo-section">
        <h3 class="section-title">基础使用</h3>
        <div class="demo-grid">
          <!-- 示例1: 基础日历 -->
          <div class="demo-card">
            <h4 class="card-title">基础日历</h4>
            <p class="card-desc">最基础的日历功能</p>
            <CrystalCalendar v-model="selectedDate" />
            <div class="value-display">选中日期: {{ selectedDate }}</div>
          </div>

          <!-- 示例2: 带边框的日历 -->
          <div class="demo-card">
            <h4 class="card-title">带边框的日历</h4>
            <p class="card-desc">显示边框的日历组件</p>
            <CrystalCalendar v-model="selectedDate2" :show-borders="true" />
            <div class="value-display">选中日期: {{ selectedDate2 }}</div>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h3 class="section-title">选中高亮</h3>
        <div class="demo-grid">
          <!-- 示例3: 自定义选中颜色 -->
          <div class="demo-card">
            <h4 class="card-title">自定义选中颜色</h4>
            <p class="card-desc">设置选中日期的颜色</p>
            <CrystalCalendar
              v-model="selectedDate3"
              :selected-dates="selectedDates"
              :selected-color="'#67C23A'"
              :hover-color="'red'"
            />
            <div class="value-display">选中日期: {{ selectedDate3 }}</div>
          </div>

          <!-- 示例4: 多日期选中 -->
          <div class="demo-card">
            <h4 class="card-title">多日期选中</h4>
            <p class="card-desc">同时选中多个日期</p>
            <CrystalCalendar v-model="selectedDate4" :selected-dates="multipleSelectedDates" :selected-color="'#F56C6C'" />
            <div class="value-display">选中日期数组: {{ multipleSelectedDates }}</div>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h3 class="section-title">交互控制</h3>
        <div class="demo-grid">
          <!-- 示例7: 禁用日期 -->
          <div class="demo-card">
            <h4 class="card-title">禁用日期</h4>
            <p class="card-desc">禁用过去的日期</p>
            <CrystalCalendar v-model="selectedDate7" :disabled-date="disabledDate" />
          </div>

          <!-- 示例8: 只读模式 -->
          <div class="demo-card">
            <h4 class="card-title">只读模式</h4>
            <p class="card-desc">日历组件只读，不可选择</p>
            <CrystalCalendar v-model="selectedDate8" :readonly="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { CrystalCalendar } from "crystalplus-ui"

// 基础使用
const selectedDate = ref(new Date())
const selectedDate2 = ref(new Date())

// 选中高亮
const selectedDate3 = ref(new Date())
const selectedDates = ref(["2025-12-29", "2025-12-30", "2025-12-31"])

const selectedDate4 = ref(new Date())
const multipleSelectedDates = ref(["2025-12-10", "2025-12-15", "2025-12-20"])

// 交互控制
const selectedDate7 = ref(new Date())

const disabledDate = (time: Date) => {
  return time.getTime() < Date.now() - 8.64e7 // 禁用过去的日期
}

const selectedDate8 = ref(new Date())
</script>

<style scoped>
.demo-header {
  margin-bottom: 40px;
  padding: 20px;
  background: #f5f7fa;
  border-radius: 8px;
}

.demo-title {
  margin: 0 0 10px 0;
  font-size: 28px;
  font-weight: 600;
  color: #303133;
}

.demo-description {
  margin: 0;
  font-size: 14px;
  color: #606266;
}

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
</style>