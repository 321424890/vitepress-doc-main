<template>
  <div id="printArea" class="flex-column-page-wrap pageWrap">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">CrystalAlert 基本使用示例</h1>
        <p class="page-description">
          基于 Element Plus 的 ElAlert 封装的警告提示组件，提供了更简洁的 API 和默认配置
        </p>
      </div>
    </div>

    <!-- 基本使用示例 -->
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="input-group">
          <h4>基本警告</h4>
          <p>展示基本的警告提示，包含标题和关闭按钮。</p>
          <CrystalAlert
            title="这是一条基本警告信息"
            type="info"
            closable
            @close="handleClose"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { CrystalAlert } from "crystalplus-ui";
import { ElMessage } from "element-plus";

const handleClose = () => {
  ElMessage.info("警告被关闭");
};
</script>

<style scoped>
.pageWrap {
  padding: 20px;
}

/* 页面头部样式 */
.page-header {
  padding: 20px 0;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 20px;
}

.page-title {
  color: #303133;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
}

.page-description {
  color: #606266;
  font-size: 14px;
  margin: 0;
}

/* 示例组样式 */
.input-group {
  margin-bottom: 20px;
  padding: 16px;
  background-color: white;
  border: 1px solid #ebeef5;
  border-radius: 4px;
}

.input-group h4 {
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

.input-group p {
  margin-bottom: 16px;
  color: #606266;
  line-height: 1.5;
}

/* 警告样式 */
:deep(.el-alert) {
  margin-bottom: 10px;
}
</style>