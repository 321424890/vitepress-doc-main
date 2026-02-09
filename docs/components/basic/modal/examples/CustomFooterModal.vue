<template>
  <div id="printArea" class="flex-column-page-wrap pageWrap">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">CrystalModal 自定义底部按钮示例</h1>
        <p class="page-description">
          展示如何自定义对话框的底部按钮，包括按钮数量、样式和文本
        </p>
      </div>
    </div>

    <!-- 自定义底部按钮示例 -->
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="input-group">
          <h4>自定义底部按钮</h4>
          <p>点击按钮打开一个带有自定义底部按钮的对话框。</p>
          <el-button type="primary" @click="dialogVisible = true">打开对话框</el-button>
          <CrystalModal
            v-model="dialogVisible"
            title="自定义底部"
            width="50%"
          >
            <span>这是一段内容，底部按钮已自定义为三个不同功能的按钮。</span>
            <template #footer>
              <el-button @click="handleCancel">关闭</el-button>
              <el-button type="primary" @click="handleSave">保存</el-button>
              <el-button type="success" @click="handleSubmit">提交</el-button>
            </template>
          </CrystalModal>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CrystalModal } from "crystalplus-ui";
import { ElMessage } from "element-plus";

const dialogVisible = ref(false);

const handleCancel = () => {
  ElMessage.info("关闭按钮被点击");
  dialogVisible.value = false;
};

const handleSave = () => {
  ElMessage.success("保存按钮被点击");
  dialogVisible.value = false;
};

const handleSubmit = () => {
  ElMessage.success("提交按钮被点击");
  dialogVisible.value = false;
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
</style>