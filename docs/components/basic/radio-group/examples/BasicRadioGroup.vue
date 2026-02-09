<template>
  <div class="radio-group-basic-demo">
    <h3>基础单选框组</h3>
    <div class="demo-section">
      <h4>默认单选框组</h4>
      <CrystalRadioGroup v-model="defaultValue">
        <CrystalRadio label="option1">选项1</CrystalRadio>
        <CrystalRadio label="option2">选项2</CrystalRadio>
        <CrystalRadio label="option3">选项3</CrystalRadio>
      </CrystalRadioGroup>
      <div class="selected-value">
        选中的值: {{ defaultValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>禁用状态</h4>
      <CrystalRadioGroup v-model="disabledValue" disabled>
        <CrystalRadio label="option1">选项1</CrystalRadio>
        <CrystalRadio label="option2">选项2</CrystalRadio>
        <CrystalRadio label="option3">选项3</CrystalRadio>
      </CrystalRadioGroup>
      <div class="selected-value">
        选中的值: {{ disabledValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>带边框单选框组</h4>
      <CrystalRadioGroup v-model="borderValue" border>
        <CrystalRadio label="option1">选项1</CrystalRadio>
        <CrystalRadio label="option2">选项2</CrystalRadio>
        <CrystalRadio label="option3">选项3</CrystalRadio>
      </CrystalRadioGroup>
      <div class="selected-value">
        选中的值: {{ borderValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>不同尺寸</h4>
      <div class="size-groups">
        <div class="size-group">
          <h5>大号</h5>
          <CrystalRadioGroup v-model="sizeLargeValue" size="large" border>
            <CrystalRadio label="option1">选项1</CrystalRadio>
            <CrystalRadio label="option2">选项2</CrystalRadio>
          </CrystalRadioGroup>
        </div>
        <div class="size-group">
          <h5>默认尺寸</h5>
          <CrystalRadioGroup v-model="sizeDefaultValue" border>
            <CrystalRadio label="option1">选项1</CrystalRadio>
            <CrystalRadio label="option2">选项2</CrystalRadio>
          </CrystalRadioGroup>
        </div>
        <div class="size-group">
          <h5>小号</h5>
          <CrystalRadioGroup v-model="sizeSmallValue" size="small" border>
            <CrystalRadio label="option1">选项1</CrystalRadio>
            <CrystalRadio label="option2">选项2</CrystalRadio>
          </CrystalRadioGroup>
        </div>
      </div>
      <div class="selected-value">
        大号选中: {{ sizeLargeValue }}, 默认选中: {{ sizeDefaultValue }}, 小号选中: {{ sizeSmallValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>水平排列</h4>
      <CrystalRadioGroup v-model="horizontalValue">
        <CrystalRadio label="option1">选项1</CrystalRadio>
        <CrystalRadio label="option2">选项2</CrystalRadio>
        <CrystalRadio label="option3">选项3</CrystalRadio>
        <CrystalRadio label="option4">选项4</CrystalRadio>
      </CrystalRadioGroup>
      <div class="selected-value">
        选中的值: {{ horizontalValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>自定义字体颜色</h4>
      <CrystalRadioGroup v-model="radioGroup11">
        <CrystalRadio label="选项1" font-color="#409EFF">蓝色文字</CrystalRadio>
        <CrystalRadio label="选项2" font-color="#67c23a">绿色文字</CrystalRadio>
        <CrystalRadio label="选项3" font-color="#F56C6C">红色文字</CrystalRadio>
      </CrystalRadioGroup>
      <div class="selected-value">
        选中的值: {{ radioGroup11 }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalRadioGroup, CrystalRadio } from 'crystalplus-ui'

// 绑定值
const defaultValue = ref('option1')
const disabledValue = ref('option1')
const borderValue = ref('option1')
const sizeLargeValue = ref('option1')
const sizeDefaultValue = ref('option1')
const sizeSmallValue = ref('option1')
const horizontalValue = ref('option1')
const radioGroup11 = ref('选项1')
</script>

<style scoped>
.radio-group-basic-demo {
  max-width: 800px;
}

.radio-group-basic-demo h3 {
  margin: 30px 0 20px 0;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.radio-group-basic-demo h4 {
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: 500;
  color: #666;
}

.radio-group-basic-demo h5 {
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

.size-groups {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
}

.size-group {
  flex: 1;
}

.selected-value {
  margin-top: 15px;
  padding: 10px;
  background: #f0f2f5;
  border-radius: 4px;
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