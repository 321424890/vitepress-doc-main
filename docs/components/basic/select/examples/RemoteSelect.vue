<template>
  <div class="remote-select-demo">
    <h3>远程搜索</h3>
    <div class="input-group">
      <CrystalSelect 
        v-model="value1" 
        :options="remoteOptions" 
        placeholder="远程搜索示例" 
        remote
        :remote-method="handleRemoteSearch"
        :loading="loading"
      />
      <CrystalSelect 
        v-model="value2" 
        :options="remoteOptions" 
        placeholder="远程搜索多选" 
        remote
        multiple
        :remote-method="handleRemoteSearch"
        :loading="loading"
      />
    </div>
    <div class="input-values">
      <h4>选择值展示：</h4>
      <p>远程搜索: {{ value1 }}</p>
      <p>远程搜索多选: {{ value2 }}</p>
    </div>
    <div class="tips">
      <h4>提示：</h4>
      <p>1. 输入关键词进行远程搜索</p>
      <p>2. 本示例使用模拟数据，实际项目中应调用真实API</p>
      <p>3. 搜索关键词建议：选项、测试、示例等</p>
    </div>
  </div>
</template>

<script setup>
import { CrystalSelect } from 'crystalplus-ui'
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref([])
const remoteOptions = ref([])
const loading = ref(false)

const handleRemoteSearch = (query) => {
  if (query) {
    loading.value = true
    // 模拟远程搜索延迟
    setTimeout(() => {
      loading.value = false
      // 模拟搜索结果
      remoteOptions.value = [
        { value: `option_${query}_1`, label: `选项 ${query} 1` },
        { value: `option_${query}_2`, label: `选项 ${query} 2` },
        { value: `option_${query}_3`, label: `选项 ${query} 3` },
        { value: `option_${query}_4`, label: `选项 ${query} 4` },
        { value: `option_${query}_5`, label: `选项 ${query} 5` }
      ]
    }, 1000)
  } else {
    remoteOptions.value = []
  }
}
</script>

<style scoped>
.remote-select-demo {
  max-width: 800px;
}

.remote-select-demo h3 {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

.input-values {
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 6px;
  border-left: 4px solid #409eff;
  margin-bottom: 30px;
}

.input-values h4 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.input-values p {
  margin: 8px 0;
  font-size: 14px;
  color: #606266;
}

.tips {
  background-color: #ecf5ff;
  padding: 20px;
  border-radius: 6px;
  border-left: 4px solid #66b1ff;
}

.tips h4 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.tips p {
  margin: 8px 0;
  font-size: 14px;
  color: #606266;
}

/* 美化选择器样式 */
:deep(.el-select) {
  width: 100%;
}

:deep(.el-select__wrapper) {
  border-radius: 6px;
  transition: all 0.3s ease;
}

</style>