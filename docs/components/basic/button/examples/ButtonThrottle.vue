<template>
  <div class="button-group">
    <h3>点击节流示例</h3>
    
    <!-- 基础节流按钮 -->
    <CrystalButton
      type="primary"
      :throttle="1000"
      @click="handleClick"
    >
      点击我（1秒节流）
    </CrystalButton>

    <!-- 结合 autoLoading 使用 -->
    <CrystalButton
      type="success"
      :auto-loading="true"
      :throttle="2000"
      @async-click="handleAsyncClick"
      style="margin-left: 10px"
    >
      异步操作（2秒节流）
    </CrystalButton>

    <!-- 不同节流时间 -->
    <CrystalButton
      type="warning"
      :throttle="500"
      @click="handleClick"
      style="margin-left: 10px"
    >
      快速操作（0.5秒节流）
    </CrystalButton>

    <CrystalButton
      type="danger"
      :throttle="3000"
      @click="handleClick"
      style="margin-left: 10px"
    >
      慢速操作（3秒节流）
    </CrystalButton>

    <!-- 无节流按钮（对比） -->
    <CrystalButton
      type="info"
      @click="handleClick"
      style="margin-left: 10px"
    >
      无节流（对比）
    </CrystalButton>
  </div>
</template>

<script setup>
import { CrystalButton } from 'crystalplus-ui'
import { ElMessage } from 'element-plus'

// 处理点击事件
const handleClick = () => {
  ElMessage.success('按钮被点击了！')
  console.log('按钮被点击了！')
}

// 处理异步点击事件
const handleAsyncClick = async (event, done) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    ElMessage.success('异步操作完成！')
  } catch (error) {
    ElMessage.error('异步操作失败，请重试')
  } finally {
    done()
  }
}
</script>

<style scoped>
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
}

h3 {
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  width: 100%;
}
</style>