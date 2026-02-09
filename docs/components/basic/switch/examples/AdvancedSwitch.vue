<template>
  <div class="switch-advanced-demo">
    <div class="demo-section">
      <h4>自定义值的开关</h4>
      <CrystalSwitch 
        v-model="customValue" 
        :active-value="'开启'" 
        :inactive-value="'关闭'" 
      />
      <div class="value-display">
        开关状态: {{ customValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>带图标的开关</h4>
      <CrystalSwitch v-model="iconValue">
        <template #active-icon>
          <el-icon><Check /></el-icon>
        </template>
        <template #inactive-icon>
          <el-icon><Close /></el-icon>
        </template>
      </CrystalSwitch>
      <div class="value-display">
        开关状态: {{ iconValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>带确认的开关</h4>
      <CrystalSwitch 
        v-model="confirmValue" 
        :before-change="handleBeforeChange" 
      />
      <div class="value-display">
        开关状态: {{ confirmValue }}
      </div>
      <div class="change-log" v-if="changeLog">
        操作日志: {{ changeLog }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>开关组</h4>
      <div class="switch-group">
        <div class="switch-item">
          <span>选项1</span>
          <CrystalSwitch v-model="groupValues[0]" />
        </div>
        <div class="switch-item">
          <span>选项2</span>
          <CrystalSwitch v-model="groupValues[1]" />
        </div>
        <div class="switch-item">
          <span>选项3</span>
          <CrystalSwitch v-model="groupValues[2]" />
        </div>
      </div>
      <div class="value-display">
        开关状态: {{ groupValues }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { CrystalSwitch } from "crystalplus-ui"
import { ElIcon, Check, Close } from "element-plus"
import { ElMessage, ElMessageBox } from "element-plus"

// 自定义值
const customValue = ref('关闭')

// 带图标
const iconValue = ref(false)

// 带确认
const confirmValue = ref(false)
const changeLog = ref('')

const handleBeforeChange = async (val: boolean) => {
  try {
    await ElMessageBox.confirm(
      `确定要${val ? '开启' : '关闭'}吗？`,
      '操作确认',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    changeLog.value = `确认${val ? '开启' : '关闭'}开关`
    return true
  } catch {
    changeLog.value = `取消${val ? '开启' : '关闭'}操作`
    return false
  }
}

// 开关组
const groupValues = ref([false, true, false])
</script>

<style scoped>
.switch-advanced-demo {
  max-width: 800px;
}

.demo-section {
  margin-bottom: 30px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
}

.demo-section h4 {
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: 500;
  color: #666;
}

.value-display {
  margin-top: 15px;
  padding: 10px;
  background: #f0f2f5;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
}

.change-log {
  margin-top: 10px;
  padding: 10px;
  background: #ecf5ff;
  border-radius: 4px;
  font-size: 14px;
  color: #409eff;
}

.switch-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.switch-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ebeef5;
}

.switch-item span {
  font-size: 14px;
  color: #606266;
}
</style>