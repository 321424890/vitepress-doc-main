<template>
  <div class="checkbox-group-basic-demo">
    <h3>基础复选框组</h3>
    <div class="demo-section">
      <h4>默认水平排列</h4>
      <CrystalCheckboxGroup v-model="hobbyValues">
        <CrystalCheckbox label="reading">阅读</CrystalCheckbox>
        <CrystalCheckbox label="sports">运动</CrystalCheckbox>
        <CrystalCheckbox label="music">音乐</CrystalCheckbox>
        <CrystalCheckbox label="travel">旅行</CrystalCheckbox>
      </CrystalCheckboxGroup>
      <div class="selected-values">
        选中的值: {{ hobbyValues }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>垂直排列</h4>
      <CrystalCheckboxGroup v-model="skillValues" direction="vertical">
        <CrystalCheckbox label="javascript">JavaScript</CrystalCheckbox>
        <CrystalCheckbox label="python">Python</CrystalCheckbox>
        <CrystalCheckbox label="java">Java</CrystalCheckbox>
        <CrystalCheckbox label="csharp">C#</CrystalCheckbox>
      </CrystalCheckboxGroup>
      <div class="selected-values">
        选中的值: {{ skillValues }}
      </div>
    </div>
    
    <h3>自动渲染选项</h3>
    <div class="demo-section">
      <h4>通过 options 属性自动渲染</h4>
      <CrystalCheckboxGroup v-model="fruitValues" :options="fruitOptions" />
      <div class="selected-values">
        选中的值: {{ fruitValues }}
      </div>
    </div>
    
    <h3>限制选择数量</h3>
    <div class="demo-section">
      <h4>最少选择2个，最多选择3个</h4>
      <CrystalCheckboxGroup v-model="subjectValues" :min="2" :max="3">
        <CrystalCheckbox label="math">数学</CrystalCheckbox>
        <CrystalCheckbox label="english">英语</CrystalCheckbox>
        <CrystalCheckbox label="physics">物理</CrystalCheckbox>
        <CrystalCheckbox label="chemistry">化学</CrystalCheckbox>
        <CrystalCheckbox label="biology">生物</CrystalCheckbox>
      </CrystalCheckboxGroup>
      <div class="selected-values">
        选中的值: {{ subjectValues }}
      </div>
    </div>
    
    <h3>禁用状态</h3>
    <div class="demo-section">
      <h4>完全禁用</h4>
      <CrystalCheckboxGroup v-model="disabledValues" disabled>
        <CrystalCheckbox label="option1">选项1</CrystalCheckbox>
        <CrystalCheckbox label="option2">选项2</CrystalCheckbox>
        <CrystalCheckbox label="option3">选项3</CrystalCheckbox>
      </CrystalCheckboxGroup>
      
      <h4>部分禁用（通过 options 设置）</h4>
      <CrystalCheckboxGroup v-model="partialDisabledValues" :options="disabledOptions" />
    </div>
    
    <h3>不同尺寸</h3>
    <div class="demo-section">
      <h4>大号</h4>
      <CrystalCheckboxGroup v-model="sizeLargeValues" size="large">
        <CrystalCheckbox label="option1">选项1</CrystalCheckbox>
        <CrystalCheckbox label="option2">选项2</CrystalCheckbox>
      </CrystalCheckboxGroup>
      
      <h4>默认尺寸</h4>
      <CrystalCheckboxGroup v-model="sizeDefaultValues">
        <CrystalCheckbox label="option1">选项1</CrystalCheckbox>
        <CrystalCheckbox label="option2">选项2</CrystalCheckbox>
      </CrystalCheckboxGroup>
      
      <h4>小号</h4>
      <CrystalCheckboxGroup v-model="sizeSmallValues" size="small">
        <CrystalCheckbox label="option1">选项1</CrystalCheckbox>
        <CrystalCheckbox label="option2">选项2</CrystalCheckbox>
      </CrystalCheckboxGroup>
    </div>
    
    <h3>带边框样式</h3>
    <div class="demo-section">
      <CrystalCheckboxGroup v-model="borderValues" border>
        <CrystalCheckbox label="option1">选项1</CrystalCheckbox>
        <CrystalCheckbox label="option2">选项2</CrystalCheckbox>
        <CrystalCheckbox label="option3">选项3</CrystalCheckbox>
      </CrystalCheckboxGroup>
      <div class="selected-values">
        选中的值: {{ borderValues }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalCheckboxGroup, CrystalCheckbox } from 'crystalplus-ui'

// 绑定值
const hobbyValues = ref(['reading', 'music'])
const skillValues = ref(['javascript'])
const fruitValues = ref(['apple', 'orange'])
const subjectValues = ref(['math', 'english'])
const disabledValues = ref(['option1'])
const partialDisabledValues = ref(['option1'])
const sizeLargeValues = ref([])
const sizeDefaultValues = ref([])
const sizeSmallValues = ref([])
const borderValues = ref([])

// 选项数据
const fruitOptions = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape' }
]

const disabledOptions = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2', disabled: true },
  { label: '选项3', value: 'option3' }
]
</script>

<style scoped>
.checkbox-group-basic-demo {
  max-width: 800px;
}

.checkbox-group-basic-demo h3 {
  margin: 30px 0 20px 0;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.checkbox-group-basic-demo h4 {
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

.selected-values {
  margin-top: 15px;
  padding: 10px;
  background: #f0f2f5;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
}

/* 美化复选框样式 */
:deep(.el-checkbox) {
  margin-right: 15px;
}

:deep(.el-checkbox__input .el-checkbox__inner) {
  border-radius: 2px;
  transition: all 0.3s ease;
}
</style>