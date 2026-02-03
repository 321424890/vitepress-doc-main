<template>
  <div class="input-number-border-demo">
    <h4>自定义边框颜色和阴影效果</h4>
    <div class="flex flex-wrap gap-4">
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">默认蓝色</p>
        <CrystalInputNumber v-model="defaultValue" placeholder="默认蓝色边框" />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">红色</p>
        <CrystalInputNumber v-model="redValue" placeholder="红色边框" border-theme-color="#ff4d4f" />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">绿色</p>
        <CrystalInputNumber v-model="greenValue" placeholder="绿色边框" border-theme-color="#389e0d" />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">橙色</p>
        <CrystalInputNumber v-model="orangeValue" placeholder="橙色边框" border-theme-color="#faad14" />
      </div>
    </div>
    <p style="margin-top: 16px; font-size: 14px; color: #606266">
      提示：鼠标经过输入框时会显示阴影效果，点击输入框获得焦点时阴影效果会更加明显
    </p>
    
    <div class="value-display" style="margin-top: 20px;">
      <h4>输入值</h4>
      <p>默认蓝色: {{ defaultValue }}</p>
      <p>红色: {{ redValue }}</p>
      <p>绿色: {{ greenValue }}</p>
      <p>橙色: {{ orangeValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalInputNumber } from 'crystalplus-ui'
const defaultValue = ref(100)
const redValue = ref(200)
const greenValue = ref(300)
const orangeValue = ref(400)
</script>

<style scoped>
.input-number-border-demo {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #eaeaea;
}

.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.gap-4 {
  gap: 16px;
}

.value-display {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eaeaea;
}

.value-display h4 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
}

.value-display p {
  margin: 5px 0;
  font-size: 14px;
  color: #606266;
}
</style>