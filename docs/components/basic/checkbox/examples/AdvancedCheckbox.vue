<template>
  <div class="checkbox-advanced-demo">
    <h3>复选框组</h3>
    <div class="checkbox-group">
      <CrystalCheckbox v-model="hobbyValues" label="reading">阅读</CrystalCheckbox>
      <CrystalCheckbox v-model="hobbyValues" label="sports">运动</CrystalCheckbox>
      <CrystalCheckbox v-model="hobbyValues" label="music">音乐</CrystalCheckbox>
      <CrystalCheckbox v-model="hobbyValues" label="travel">旅行</CrystalCheckbox>
    </div>
    <div class="selected-values">
      选中的值: {{ hobbyValues }}
    </div>
    
    <h3>全选功能</h3>
    <div class="checkbox-group">
      <CrystalCheckbox v-model="selectAll" :indeterminate="isIndeterminate" @change="handleSelectAllChange">
        全选
      </CrystalCheckbox>
      <div class="sub-checkbox-group">
        <CrystalCheckbox v-model="fruitValues" label="apple" @change="handleFruitChange">苹果</CrystalCheckbox>
        <CrystalCheckbox v-model="fruitValues" label="banana" @change="handleFruitChange">香蕉</CrystalCheckbox>
        <CrystalCheckbox v-model="fruitValues" label="orange" @change="handleFruitChange">橙子</CrystalCheckbox>
        <CrystalCheckbox v-model="fruitValues" label="grape" @change="handleFruitChange">葡萄</CrystalCheckbox>
      </div>
    </div>
    <div class="selected-values">
      选中的水果: {{ fruitValues }}
    </div>
    
    <h3>带限制的复选框组</h3>
    <div class="checkbox-group">
      <CrystalCheckbox v-model="skillValues" label="javascript">JavaScript</CrystalCheckbox>
      <CrystalCheckbox v-model="skillValues" label="python">Python</CrystalCheckbox>
      <CrystalCheckbox v-model="skillValues" label="java">Java</CrystalCheckbox>
      <CrystalCheckbox v-model="skillValues" label="csharp">C#</CrystalCheckbox>
      <CrystalCheckbox v-model="skillValues" label="go">Go</CrystalCheckbox>
    </div>
    <div class="selected-values">
      选中的技能 (最多选3个): {{ skillValues }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { CrystalCheckbox } from 'crystalplus-ui'

// 爱好选择
const hobbyValues = ref(['reading', 'music'])

// 水果选择（全选功能）
const fruitValues = ref(['apple', 'banana'])
const selectAll = ref(false)
const isIndeterminate = computed(() => {
  return fruitValues.value.length > 0 && fruitValues.value.length < 4
})

// 处理全选变化
const handleSelectAllChange = (val) => {
  if (val) {
    fruitValues.value = ['apple', 'banana', 'orange', 'grape']
  } else {
    fruitValues.value = []
  }
}

// 处理水果选择变化
const handleFruitChange = () => {
  if (fruitValues.value.length === 4) {
    selectAll.value = true
  } else if (fruitValues.value.length === 0) {
    selectAll.value = false
  }
  // isIndeterminate 会自动计算
}

// 技能选择（带限制）
const skillValues = ref(['javascript', 'python'])

// 监听技能选择，限制最多选3个
watch(skillValues, (newVal) => {
  if (newVal.length > 3) {
    skillValues.value = newVal.slice(0, 3)
  }
}, { deep: true })
</script>

<style scoped>
.checkbox-advanced-demo {
  max-width: 800px;
}

.checkbox-advanced-demo h3 {
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

.sub-checkbox-group {
  margin-left: 24px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.selected-values {
  margin-top: 12px;
  padding: 12px;
  background: #f5f7fa;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
}

/* 美化复选框样式 */
:deep(.el-checkbox) {
  margin-right: 0;
}

:deep(.el-checkbox__input .el-checkbox__inner) {
  border-radius: 2px;
  transition: all 0.3s ease;
}
</style>