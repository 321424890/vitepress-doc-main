<template>
  <div id="printArea" class="flex-column-page-wrap pageWrap">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">CrystalMessage 消息类型示例</h1>
        <p class="page-description">
          展示不同类型的消息提示，包括成功、警告、错误和信息消息
        </p>
      </div>
    </div>

    <!-- 消息类型示例 -->
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="input-group">
          <h4>不同类型的消息</h4>
          <p>点击不同类型的按钮，显示对应的消息提示。</p>
          <div class="button-group">
            <el-button type="success" @click="showSuccessMessage">成功消息</el-button>
            <el-button type="warning" @click="showWarningMessage">警告消息</el-button>
            <el-button type="danger" @click="showErrorMessage">错误消息</el-button>
            <el-button type="info" @click="showInfoMessage">信息消息</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { CrystalMessage } from "crystalplus-ui";

const showSuccessMessage = () => {
  CrystalMessage.success("操作成功！数据已保存");
};

const showWarningMessage = () => {
  CrystalMessage.warning("警告：请检查输入参数");
};

const showErrorMessage = () => {
  CrystalMessage.error("操作失败：网络连接错误");
};

const showInfoMessage = () => {
  CrystalMessage.info("提示：请阅读使用说明");
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
</style>