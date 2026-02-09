<template>
  <div class="radio-advanced-demo">
    <h3>事件处理</h3>
    <div class="demo-section">
      <h4>值变化事件</h4>
      <div class="radio-group">
        <CrystalRadio v-model="eventValue" label="option1" @change="handleChange">选项1</CrystalRadio>
        <CrystalRadio v-model="eventValue" label="option2" @change="handleChange">选项2</CrystalRadio>
        <CrystalRadio v-model="eventValue" label="option3" @change="handleChange">选项3</CrystalRadio>
      </div>
      <div class="event-log" v-if="eventLog">
        事件日志: {{ eventLog }}
      </div>
      <div class="selected-value">
        选中的值: {{ eventValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>点击事件</h4>
      <div class="radio-group">
        <CrystalRadio v-model="clickValue" label="option1" @click="handleClick">选项1</CrystalRadio>
        <CrystalRadio v-model="clickValue" label="option2" @click="handleClick">选项2</CrystalRadio>
        <CrystalRadio v-model="clickValue" label="option3" @click="handleClick">选项3</CrystalRadio>
      </div>
      <div class="event-log" v-if="clickLog">
        点击日志: {{ clickLog }}
      </div>
      <div class="selected-value">
        选中的值: {{ clickValue }}
      </div>
    </div>
    
    <h3>自定义选项</h3>
    <div class="demo-section">
      <h4>带描述的选项</h4>
      <div class="radio-group">
        <div class="custom-radio-item">
          <CrystalRadio v-model="customValue" label="option1">
            <div class="radio-content">
              <div class="radio-title">选项1</div>
              <div class="radio-desc">这是选项1的详细描述，包含更多信息</div>
            </div>
          </CrystalRadio>
        </div>
        <div class="custom-radio-item">
          <CrystalRadio v-model="customValue" label="option2">
            <div class="radio-content">
              <div class="radio-title">选项2</div>
              <div class="radio-desc">这是选项2的详细描述，包含更多信息</div>
            </div>
          </CrystalRadio>
        </div>
        <div class="custom-radio-item">
          <CrystalRadio v-model="customValue" label="option3">
            <div class="radio-content">
              <div class="radio-title">选项3</div>
              <div class="radio-desc">这是选项3的详细描述，包含更多信息</div>
            </div>
          </CrystalRadio>
        </div>
      </div>
      <div class="selected-value">
        选中的值: {{ customValue }}
      </div>
    </div>
    
    <h3>动态单选框</h3>
    <div class="demo-section">
      <h4>根据数据动态生成</h4>
      <div class="radio-group">
        <CrystalRadio 
          v-for="option in dynamicOptions" 
          :key="option.value"
          v-model="dynamicValue"
          :label="option.value"
        >
          {{ option.label }}
        </CrystalRadio>
      </div>
      <div class="action-buttons">
        <button @click="addOption" class="add-btn">添加选项</button>
        <button @click="removeOption" class="remove-btn">移除选项</button>
      </div>
      <div class="selected-value">
        选中的值: {{ dynamicValue }}
      </div>
    </div>
    
    <h3>点亮点功能高级用法</h3>
    <div class="demo-section">
      <h4>带点亮点的单选框</h4>
      <div class="radio-group">
        <CrystalRadio v-model="highlightAdvancedValue" label="option1" highlight>选项1 (带点亮点)</CrystalRadio>
        <CrystalRadio v-model="highlightAdvancedValue" label="option2" highlight>选项2 (带点亮点)</CrystalRadio>
        <CrystalRadio v-model="highlightAdvancedValue" label="option3" highlight>选项3 (带点亮点)</CrystalRadio>
      </div>
      <div class="selected-value">
        选中的值: {{ highlightAdvancedValue }}
      </div>
      <div class="tip">
        提示: 点击单选框时会显示高亮效果，增强用户交互体验
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalRadio } from 'crystalplus-ui'

// 事件处理
const eventValue = ref('option1')
const eventLog = ref('')

const handleChange = (val) => {
  eventLog.value = `值已更改为: ${val}，时间: ${new Date().toLocaleTimeString()}`
  // 3秒后清除日志
  setTimeout(() => {
    eventLog.value = ''
  }, 3000)
}

// 点击事件
const clickValue = ref('option1')
const clickLog = ref('')

const handleClick = (event) => {
  clickLog.value = `点击了选项，时间: ${new Date().toLocaleTimeString()}`
  // 2秒后清除日志
  setTimeout(() => {
    clickLog.value = ''
  }, 2000)
}

// 自定义选项
const customValue = ref('option1')

// 动态选项
const dynamicOptions = ref([
  { label: '动态选项1', value: 'dynamic1' },
  { label: '动态选项2', value: 'dynamic2' },
  { label: '动态选项3', value: 'dynamic3' }
])
const dynamicValue = ref('dynamic1')
let optionCount = 3

const addOption = () => {
  optionCount++
  dynamicOptions.value.push({
    label: `动态选项${optionCount}`,
    value: `dynamic${optionCount}`
  })
}

const removeOption = () => {
  if (dynamicOptions.value.length > 1) {
    const removedOption = dynamicOptions.value.pop()
    if (removedOption && dynamicValue.value === removedOption.value) {
      dynamicValue.value = dynamicOptions.value[0].value
    }
  }
}

// 点亮点功能
const highlightAdvancedValue = ref('option1')
</script>

<style scoped>
.radio-advanced-demo {
  max-width: 800px;
}

.radio-advanced-demo h3 {
  margin: 30px 0 20px 0;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.radio-advanced-demo h4 {
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: 500;
  color: #666;
}

.demo-section {
  margin-bottom: 30px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 15px;
}

.event-log {
  margin-bottom: 10px;
  padding: 10px;
  background: #e6f7ff;
  border-radius: 4px;
  font-size: 14px;
  color: #1890ff;
}

.selected-value {
  padding: 10px;
  background: #f0f2f5;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
}

.tip {
  margin-top: 10px;
  padding: 10px;
  background: #f6ffed;
  border-radius: 4px;
  font-size: 14px;
  color: #52c41a;
}

/* 自定义选项样式 */
.custom-radio-item {
  margin-bottom: 10px;
}

.radio-content {
  display: flex;
  flex-direction: column;
}

.radio-title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.radio-desc {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

/* 动态选项样式 */
.action-buttons {
  margin: 15px 0;
}

.add-btn, .remove-btn {
  padding: 6px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
}

.add-btn:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background: #ecf5ff;
}

.remove-btn:hover {
  color: #f56c6c;
  border-color: #fbc4c4;
  background: #fef0f0;
}

/* 美化单选框样式 */
:deep(.el-radio) {
  margin-right: 20px;
}

:deep(.el-radio__input .el-radio__inner) {
  border-radius: 50%;
  transition: all 0.3s ease;
}
</style>