<template>
  <div class="input-border-color-demo">
    <h3>自定义边框颜色和阴影效果</h3>
    <div class="input-group">
      <div class="input-item">
        <p class="input-label">默认蓝色</p>
        <CrystalInput v-model="borderColor1" placeholder="默认蓝色边框" />
      </div>
      <div class="input-item">
        <p class="input-label">红色</p>
        <CrystalInput v-model="borderColor2" placeholder="红色边框" border-theme-color="#ff4d4f" />
      </div>
      <div class="input-item">
        <p class="input-label">绿色</p>
        <CrystalInput v-model="borderColor3" placeholder="绿色边框" border-theme-color="#389e0d" />
      </div>
      <div class="input-item">
        <p class="input-label">橙色</p>
        <CrystalInput v-model="borderColor4" placeholder="橙色边框" border-theme-color="#faad14" />
      </div>
    </div>
    <p class="input-tip">
      提示：鼠标经过输入框时会显示阴影效果，点击输入框获得焦点时阴影效果会更加明显
    </p>
  </div>
</template>

<script setup>
import { CrystalInput } from 'crystalplus-ui'
import { ref } from 'vue'

const borderColor1 = ref('')
const borderColor2 = ref('')
const borderColor3 = ref('')
const borderColor4 = ref('')
</script>

<style scoped>
.input-border-color-demo {
  max-width: 800px;
}

.input-border-color-demo h3 {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.input-group {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.input-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-label {
  margin: 0;
  font-size: 14px;
  color: #606266;
  font-weight: 400;
}

.input-tip {
  margin-top: 20px;
  font-size: 14px;
  color: #606266;
  line-height: 1.5;
  background-color: #f5f7fa;
  padding: 12px;
  border-radius: 4px;
  border-left: 4px solid #409eff;
}

/* 美化输入框样式 */
:deep(.el-input__wrapper) {
  border-radius: 6px;
  transition: all 0.3s ease;
}




</style>