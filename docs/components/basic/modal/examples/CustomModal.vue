<template>
  <div id="printArea" class="flex-column-page-wrap pageWrap">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">CrystalModal 自定义内容示例</h1>
        <p class="page-description">
          展示如何在对话框中添加自定义内容，如表单、表格等复杂组件
        </p>
      </div>
    </div>

    <!-- 自定义内容示例 -->
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="input-group">
          <h4>带表单的对话框</h4>
          <p>点击按钮打开一个包含表单的对话框，用于输入用户信息。</p>
          <el-button type="primary" @click="dialogVisible = true">打开对话框</el-button>
          <CrystalModal
            v-model="dialogVisible"
            title="用户信息"
            width="60%"
            @confirm="handleConfirm"
          >
            <el-form :model="userForm" label-width="80px">
              <el-form-item label="姓名">
                <el-input v-model="userForm.name" placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="年龄">
                <el-input v-model.number="userForm.age" placeholder="请输入年龄"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio-group v-model="userForm.gender">
                  <el-radio label="male">男</el-radio>
                  <el-radio label="female">女</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="userForm.email" placeholder="请输入邮箱"></el-input>
              </el-form-item>
              <el-form-item label="地址">
                <el-input v-model="userForm.address" type="textarea" placeholder="请输入地址"></el-input>
              </el-form-item>
            </el-form>
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
const userForm = ref({
  name: "",
  age: 0,
  gender: "male",
  email: "",
  address: ""
});

const handleConfirm = () => {
  ElMessage.success(`用户信息：${JSON.stringify(userForm.value)}`);
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

/* 表单样式 */
:deep(.el-form) {
  margin-top: 10px;
}

:deep(.el-form-item) {
  margin-bottom: 16px;
}
</style>