<template>
  <div class="button-group">
    <h3>异步操作示例</h3>
    
    <!-- 基础异步按钮 -->
    <CrystalButton
      type="primary"
      :auto-loading="true"
      @async-click="handleAsyncClick"
    >
      提交表单
    </CrystalButton>

    <!-- 多个独立的异步按钮 -->
    <CrystalButton
      type="success"
      :auto-loading="true"
      @async-click="(event, done) => handleAsyncOperation(1000, done)"
      style="margin-left: 10px"
    >
      操作 1s
    </CrystalButton>

    <CrystalButton
      type="warning"
      :auto-loading="true"
      @async-click="(event, done) => handleAsyncOperation(2000, done)"
      style="margin-left: 10px"
    >
      操作 2s
    </CrystalButton>

    <CrystalButton
      type="danger"
      :auto-loading="true"
      @async-click="handleAsyncError"
      style="margin-left: 10px"
    >
      模拟错误
    </CrystalButton>
  </div>
</template>

<script setup>
import { CrystalButton } from 'crystalplus-ui'
import { ElMessage } from 'element-plus'

// 处理表单提交
const handleAsyncClick = async (event, done) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    ElMessage.success('表单提交成功！')
  } catch (error) {
    ElMessage.error('表单提交失败，请重试')
    console.error('表单提交失败:', error)
  } finally {
    done()
  }
}

// 处理通用异步操作
const handleAsyncOperation = async (delay, done) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, delay))
    ElMessage.success(`操作完成，延迟 ${delay}ms`)
  } catch (error) {
    ElMessage.error('操作失败，请重试')
  } finally {

    done()
  }
}

// 处理异步错误
const handleAsyncError = async (event, done) => {
  try {

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('模拟异步操作失败'))
      }, 1000)
    })
  } catch (error) {
    console.error('异步操作失败:', error)
    ElMessage.error('操作失败，这是一个模拟错误')
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