<template>
  <div class="switch-basic-demo">
    <div class="demo-section">
      <h4>基础开关</h4>
      <CrystalSwitch v-model="basicValue" />
      <div class="value-display">
        开关状态: {{ basicValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>禁用的开关</h4>
      <CrystalSwitch v-model="disabledValue" disabled />
      <div class="value-display">
        开关状态: {{ disabledValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>带文字的开关</h4>
      <CrystalSwitch v-model="textValue" active-text="开" inactive-text="关" />
      <div class="value-display">
        开关状态: {{ textValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>自定义宽度的开关</h4>
      <CrystalSwitch v-model="widthValue" :width="60" active-text="开启" inactive-text="关闭" />
      <div class="value-display">
        开关状态: {{ widthValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>带边框的开关</h4>
      <CrystalSwitch v-model="borderValue" border />
      <div class="value-display">
        开关状态: {{ borderValue }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { CrystalSwitch } from "crystalplus-ui"

// 基础使用
const basicValue = ref(false)
const disabledValue = ref(false)
const textValue = ref(false)
const widthValue = ref(false)
const borderValue = ref(false)
</script>

<style scoped>
.switch-basic-demo {
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
</style>