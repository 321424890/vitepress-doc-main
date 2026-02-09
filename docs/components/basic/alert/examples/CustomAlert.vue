<template>
  <div id="printArea" class="flex-column-page-wrap pageWrap">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">CrystalAlert 自定义配置示例</h1>
        <p class="page-description">
          展示如何自定义警告的各种配置选项，包括描述、效果、居中对齐等
        </p>
      </div>
    </div>

    <!-- 自定义配置示例 -->
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="input-group">
          <h4>带描述的警告</h4>
          <p>展示带有详细描述的警告提示。</p>
          <CrystalAlert
            title="警告提示"
            type="warning"
            description="这是一段警告描述信息，用于详细说明警告内容。请按照提示信息进行操作，以避免出现不必要的问题。"
            showIcon
            closable
          />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="input-group">
          <h4>居中对齐的警告</h4>
          <p>展示居中对齐的警告提示。</p>
          <CrystalAlert
            title="居中提示"
            type="info"
            center
            showIcon
            closable
          />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="input-group">
          <h4>深色效果的警告</h4>
          <p>展示深色效果的警告提示。</p>
          <CrystalAlert
            title="深色提示"
            type="success"
            effect="dark"
            showIcon
            closable
          />
          <CrystalAlert
            title="深色警告"
            type="warning"
            effect="dark"
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