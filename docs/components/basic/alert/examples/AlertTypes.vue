<template>
  <div id="printArea" class="flex-column-page-wrap pageWrap">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">CrystalAlert 警告类型示例</h1>
        <p class="page-description">
          展示不同类型的警告提示，包括成功、警告、信息和错误类型
        </p>
      </div>
    </div>

    <!-- 不同类型警告示例 -->
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="input-group">
          <h4>不同类型的警告</h4>
          <p>展示四种不同类型的警告提示，每种类型都显示图标。</p>
          <CrystalAlert
            title="成功提示"
            type="success"
            showIcon
            closable
          />
          <CrystalAlert
            title="警告提示"
            type="warning"
            showIcon
            closable
          />
          <CrystalAlert
            title="信息提示"
            type="info"
            showIcon
            closable
          />
          <CrystalAlert
            title="错误提示"
            type="error"
            showIcon
            closable
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { CrystalAlert } from "crystalplus-ui";
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