<template>
  <div class="radio-group-advanced-demo">
    <h3>事件处理</h3>
    <div class="demo-section">
      <h4>值变化事件</h4>
      <CrystalRadioGroup v-model="eventValue" @change="handleChange">
        <CrystalRadio label="option1">选项1</CrystalRadio>
        <CrystalRadio label="option2">选项2</CrystalRadio>
        <CrystalRadio label="option3">选项3</CrystalRadio>
      </CrystalRadioGroup>
      <div class="event-log" v-if="eventLog">
        事件日志: {{ eventLog }}
      </div>
      <div class="selected-value">
        选中的值: {{ eventValue }}
      </div>
    </div>
    
    <h3>动态选项</h3>
    <div class="demo-section">
      <h4>根据数据动态生成选项</h4>
      <CrystalRadioGroup v-model="dynamicValue">
        <CrystalRadio 
          v-for="option in dynamicOptions" 
          :key="option.value"
          :label="option.value"
        >
          {{ option.label }}
        </CrystalRadio>
      </CrystalRadioGroup>
      <div class="action-buttons">
        <button @click="addOption" class="add-btn">添加选项</button>
        <button @click="removeOption" class="remove-btn">移除选项</button>
      </div>
      <div class="selected-value">
        选中的值: {{ dynamicValue }}
      </div>
    </div>
    
    <h3>嵌套使用</h3>
    <div class="demo-section">
      <h4>分类选择</h4>
      <div class="category-selection">
        <div class="main-category">
          <h5>主分类</h5>
          <CrystalRadioGroup v-model="mainCategoryValue">
            <CrystalRadio label="category1">分类1</CrystalRadio>
            <CrystalRadio label="category2">分类2</CrystalRadio>
            <CrystalRadio label="category3">分类3</CrystalRadio>
          </CrystalRadioGroup>
        </div>
        <div class="sub-category">
          <h5>子分类</h5>
          <CrystalRadioGroup v-model="subCategoryValue">
            <CrystalRadio label="sub1">子分类1</CrystalRadio>
            <CrystalRadio label="sub2">子分类2</CrystalRadio>
            <CrystalRadio label="sub3">子分类3</CrystalRadio>
          </CrystalRadioGroup>
        </div>
      </div>
      <div class="selected-value">
        主分类: {{ mainCategoryValue }}, 子分类: {{ subCategoryValue }}
      </div>
    </div>
    
    <h3>带点亮点功能的单选框组</h3>
    <div class="demo-section">
      <h4>点亮点功能</h4>
      <CrystalRadioGroup v-model="highlightValue">
        <CrystalRadio label="option1" highlight>选项1 (带点亮点)</CrystalRadio>
        <CrystalRadio label="option2" highlight>选项2 (带点亮点)</CrystalRadio>
        <CrystalRadio label="option3" highlight>选项3 (带点亮点)</CrystalRadio>
      </CrystalRadioGroup>
      <div class="selected-value">
        选中的值: {{ highlightValue }}
      </div>
      <div class="tip">
        提示: 点击单选框时会显示高亮效果，增强用户交互体验
      </div>
    </div>
    
    <h3>表单集成</h3>
    <div class="demo-section">
      <h4>表单中的单选框组</h4>
      <div class="form-group">
        <label class="form-label">性别:</label>
        <CrystalRadioGroup v-model="genderValue">
          <CrystalRadio label="male">男</CrystalRadio>
          <CrystalRadio label="female">女</CrystalRadio>
          <CrystalRadio label="other">其他</CrystalRadio>
        </CrystalRadioGroup>
      </div>
      <div class="form-group">
        <label class="form-label">偏好:</label>
        <CrystalRadioGroup v-model="preferenceValue" border>
          <CrystalRadio label="option1">选项1</CrystalRadio>
          <CrystalRadio label="option2">选项2</CrystalRadio>
          <CrystalRadio label="option3">选项3</CrystalRadio>
        </CrystalRadioGroup>
      </div>
      <div class="selected-value">
        性别: {{ genderValue }}, 偏好: {{ preferenceValue }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalRadioGroup, CrystalRadio } from 'crystalplus-ui'

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

// 嵌套使用
const mainCategoryValue = ref('category1')
const subCategoryValue = ref('sub1')

// 点亮点功能
const highlightValue = ref('option1')

// 表单集成
const genderValue = ref('male')
const preferenceValue = ref('option1')
</script>

<style scoped>
.radio-group-advanced-demo {
  max-width: 800px;
}

.radio-group-advanced-demo h3 {
  margin: 30px 0 20px 0;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.radio-group-advanced-demo h4 {
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: 500;
  color: #666;
}

.radio-group-advanced-demo h5 {
  margin: 0 0 10px 0;
  font-size: 14px;
  font-weight: 500;
  color: #999;
}

.demo-section {
  margin-bottom: 30px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
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
  margin-top: 15px;
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

/* 嵌套使用样式 */
.category-selection {
  display: flex;
  gap: 30px;
}

.main-category, .sub-category {
  flex: 1;
}

/* 表单集成样式 */
.form-group {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.form-label {
  width: 80px;
  font-size: 14px;
  color: #666;
}

/* 美化单选框样式 */
:deep(.el-radio) {
  margin-right: 20px;
  margin-bottom: 10px;
}

:deep(.el-radio--border) {
  margin-right: 10px;
  margin-bottom: 10px;
}

:deep(.el-radio__input .el-radio__inner) {
  border-radius: 50%;
  transition: all 0.3s ease;
}
</style>