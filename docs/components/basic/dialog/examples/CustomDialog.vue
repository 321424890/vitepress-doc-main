<template>
  <div class="demo-container">
    <!-- 自定义头部弹窗 -->
    <h4>自定义头部弹窗</h4>
    <el-button type="info" @click="dialogVisibleCustomHeader = true">打开自定义头部弹窗</el-button>
    <CrystalDialog v-model="dialogVisibleCustomHeader" width="600px">
      <template #header>
        <div class="custom-header">
          <el-icon class="custom-header-icon"><MessageBox /></el-icon>
          <span class="custom-header-title">自定义头部弹窗</span>
        </div>
      </template>
      <div class="dialog-content">
        <p>这个弹窗使用了自定义的头部内容，支持全屏功能。</p>
        <p>可以根据需要完全自定义弹窗的头部样式和内容。</p>
      </div>
    </CrystalDialog>

    <!-- 自定义样式弹窗 -->
    <h4>自定义样式弹窗</h4>
    <el-button type="danger" @click="dialogVisibleCustomStyle = true">打开自定义样式弹窗</el-button>
    <CrystalDialog v-model="dialogVisibleCustomStyle" title="自定义样式弹窗" width="700px" custom-class="custom-style-dialog">
      <div class="dialog-content">
        <p>这个弹窗使用了自定义的样式，可以通过 custom-class 属性添加自定义类名。</p>
        <p>自定义样式可以包括背景色、边框、阴影等。</p>
        <div class="custom-content">
          <el-card shadow="hover">
            <template #header>
              <div class="card-header">
                <span>自定义内容区域</span>
              </div>
            </template>
            <div class="card-body">
              <p>这是一个带有卡片的自定义内容区域</p>
              <el-button type="primary" size="small">操作按钮</el-button>
            </div>
          </el-card>
        </div>
      </div>
    </CrystalDialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { CrystalDialog } from "crystalplus-ui";
import { MessageBox } from "@element-plus/icons-vue";

const dialogVisibleCustomHeader = ref(false);
const dialogVisibleCustomStyle = ref(false);
</script>

<style scoped>
.demo-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.demo-container h4 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

.demo-container h4:first-child {
  margin-top: 0;
}

.dialog-content {
  padding: 20px 0;
  line-height: 1.6;
}

.dialog-content p {
  margin: 10px 0;
}

.custom-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.custom-header-icon {
  color: #409eff;
  font-size: 18px;
}

.custom-header-title {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
}

.custom-content {
  margin-top: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-body {
  padding: 20px;
}

/* 自定义样式弹窗 */
:deep(.custom-style-dialog) {
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

:deep(.custom-style-dialog .el-dialog__header) {
  border-bottom: 1px solid #f0f0f0;
  padding: 20px;
}

:deep(.custom-style-dialog .el-dialog__body) {
  padding: 24px;
}
</style>