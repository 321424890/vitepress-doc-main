<template>
  <div id="printArea" class="flex-column-page-wrap pageWrap">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">CrystalNotify 通知类型示例</h1>
        <p class="page-description">
          展示不同类型的通知消息，包括成功、警告、错误和信息类型
        </p>
      </div>
    </div>

    <!-- 不同类型通知示例 -->
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="input-group">
          <h4>不同类型的通知</h4>
          <p>点击不同类型的按钮，显示对应的通知消息。</p>
          <div class="button-group">
            <el-button type="success" @click="showSuccess">成功通知</el-button>
            <el-button type="warning" @click="showWarning">警告通知</el-button>
            <el-button type="danger" @click="showError">错误通知</el-button>
            <el-button type="info" @click="showInfo">信息通知</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { CrystalNotify } from "crystalplus-ui";

const showSuccess = () => {
  CrystalNotify.success("操作成功！数据已保存", "成功");
};

const showWarning = () => {
  CrystalNotify.warning("警告：请检查输入参数", "警告");
};

const showError = () => {
  CrystalNotify.error("操作失败：网络连接错误", "错误");
};

const showInfo = () => {
  CrystalNotify.info("提示：请阅读使用说明", "信息");
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