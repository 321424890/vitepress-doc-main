<template>
  <div id="printArea" class="flex-column-page-wrap pageWrap">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">CrystalMessage 自定义配置示例</h1>
        <p class="page-description">
          展示如何自定义消息的各种配置选项，包括时长、偏移量、样式等
        </p>
      </div>
    </div>

    <!-- 自定义配置示例 -->
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="input-group">
          <h4>自定义消息配置</h4>
          <p>点击按钮显示带有自定义配置的消息提示。</p>
          <div class="button-group">
            <el-button type="primary" @click="showCustomMessage">自定义消息</el-button>
            <el-button @click="showPermanentMessage">永久消息</el-button>
            <el-button @click="showOffsetMessage">偏移消息</el-button>
            <el-button @click="closeAllMessages">关闭所有消息</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { CrystalMessage } from "crystalplus-ui";

const showCustomMessage = () => {
  CrystalMessage.show({
    message: "这是一条自定义消息",
    type: "success",
    duration: 5000,
    showClose: true,
    offset: 50,
    customClass: "custom-message"
  });
};

const showPermanentMessage = () => {
  CrystalMessage.show({
    message: "这是一条永久消息，需要手动关闭",
    type: "info",
    duration: 0,
    showClose: true,
    offset: 50
  });
};

const showOffsetMessage = () => {
  CrystalMessage.show({
    message: "这是一条带有偏移量的消息",
    type: "warning",
    duration: 3000,
    showClose: true,
    offset: 100
  });
};

const closeAllMessages = () => {
  CrystalMessage.closeAll();
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

/* 自定义消息样式 */
:deep(.custom-message) {
  background-color: #f0f9eb;
  border-color: #67c23a;
  color: #67c23a;
  box-shadow: 0 2px 12px 0 rgba(103, 194, 58, 0.2);
}
</style>