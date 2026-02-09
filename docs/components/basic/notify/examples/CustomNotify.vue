<template>
  <div id="printArea" class="flex-column-page-wrap pageWrap">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">CrystalNotify 自定义配置示例</h1>
        <p class="page-description">
          展示如何自定义通知的各种配置选项，包括时长、偏移量、样式等
        </p>
      </div>
    </div>

    <!-- 自定义配置示例 -->
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="input-group">
          <h4>自定义通知配置</h4>
          <p>点击按钮显示带有自定义配置的通知消息。</p>
          <div class="button-group">
            <el-button type="primary" @click="showCustomNotify">自定义通知</el-button>
            <el-button @click="showPermanentNotify">永久通知</el-button>
            <el-button @click="showOffsetNotify">偏移通知</el-button>
            <el-button @click="closeAllNotifies">关闭所有通知</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { CrystalNotify } from "crystalplus-ui";

const showCustomNotify = () => {
  CrystalNotify.show({
    title: "自定义通知",
    message: "这是一条带有自定义配置的通知，将在5秒后自动关闭",
    type: "success",
    duration: 5000,
    showClose: true,
    offset: 50,
    customClass: "custom-notify"
  });
};

const showPermanentNotify = () => {
  CrystalNotify.show({
    title: "永久通知",
    message: "这是一条不会自动关闭的通知，需要手动点击关闭按钮",
    type: "info",
    duration: 0,
    showClose: true
  });
};

const showOffsetNotify = () => {
  CrystalNotify.show({
    title: "偏移通知",
    message: "这是一条带有偏移量的通知，距离顶部100px",
    type: "warning",
    duration: 3000,
    showClose: true,
    offset: 100
  });
};

const closeAllNotifies = () => {
  CrystalNotify.closeAll();
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

/* 按钮组样式 */
.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.button-group .el-button {
  margin-bottom: 8px;
}

/* 自定义通知样式 */
:deep(.custom-notify) {
  background-color: #f0f9eb;
  border-color: #67c23a;
  color: #67c23a;
  box-shadow: 0 2px 12px 0 rgba(103, 194, 58, 0.2);
}
</style>