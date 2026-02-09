<template>
  <div class="radio-basic-demo">
    <h3>基础单选框</h3>
    <div class="demo-section">
      <h4>默认单选框</h4>
      <div class="radio-group">
        <CrystalRadio v-model="defaultValue" label="option1">选项1</CrystalRadio>
        <CrystalRadio v-model="defaultValue" label="option2">选项2</CrystalRadio>
        <CrystalRadio v-model="defaultValue" label="option3">选项3</CrystalRadio>
      </div>
      <div class="selected-value">
        选中的值: {{ defaultValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>禁用状态</h4>
      <div class="radio-group">
        <CrystalRadio v-model="disabledValue" label="option1">可选选项</CrystalRadio>
        <CrystalRadio v-model="disabledValue" label="option2" disabled>禁用选项</CrystalRadio>
        <CrystalRadio v-model="disabledValue" label="option3">可选选项</CrystalRadio>
      </div>
      <div class="selected-value">
        选中的值: {{ disabledValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>带边框单选框</h4>
      <div class="radio-group">
        <CrystalRadio v-model="borderValue" label="option1" border>选项1</CrystalRadio>
        <CrystalRadio v-model="borderValue" label="option2" border>选项2</CrystalRadio>
        <CrystalRadio v-model="borderValue" label="option3" border>选项3</CrystalRadio>
      </div>
      <div class="selected-value">
        选中的值: {{ borderValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>不同尺寸</h4>
      <div class="radio-group">
        <CrystalRadio v-model="sizeValue" label="large" size="large" border>大号</CrystalRadio>
        <CrystalRadio v-model="sizeValue" label="default" border>默认尺寸</CrystalRadio>
        <CrystalRadio v-model="sizeValue" label="small" size="small" border>小号</CrystalRadio>
      </div>
      <div class="selected-value">
        选中的值: {{ sizeValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>点亮点功能</h4>
      <div class="radio-group">
        <CrystalRadio v-model="highlightValue" label="option1" highlight>点亮点功能</CrystalRadio>
        <CrystalRadio v-model="highlightValue" label="option2" highlight>点亮点功能</CrystalRadio>
        <CrystalRadio v-model="highlightValue" label="option3" highlight>点亮点功能</CrystalRadio>
      </div>
      <div class="selected-value">
        选中的值: {{ highlightValue }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalRadio } from 'crystalplus-ui'

// 绑定值
const defaultValue = ref('option1')
const disabledValue = ref('option1')
const borderValue = ref('option1')
const sizeValue = ref('default')
const highlightValue = ref('option1')
</script>

<style scoped>
.radio-basic-demo {
  max-width: 800px;
}

.radio-basic-demo h3 {
  margin: 30px 0 20px 0;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.radio-basic-demo h4 {
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
  gap: 10px;
  margin-bottom: 15px;
}

.selected-value {
  padding: 10px;
  background: #f0f2f5;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
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