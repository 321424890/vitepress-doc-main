<template>
  <div class="demo-container">
    <!-- 从左侧打开抽屉 -->
    <h4>从左侧打开抽屉</h4>
    <CrystalButton type="warning" @click="drawerVisibleLeft = true">打开左侧抽屉</CrystalButton>
    <CrystalDrawer v-model="drawerVisibleLeft" title="左侧抽屉" direction="ltr" size="400px">
      <div class="drawer-content">
        <p>这个抽屉从左侧打开。</p>
        <el-menu :default-active="'1'" class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <el-icon><Management /></el-icon>
            <span>菜单选项 1</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><Document /></el-icon>
            <span>菜单选项 2</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><Setting /></el-icon>
            <span>菜单选项 3</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><Message /></el-icon>
            <span>菜单选项 4</span>
          </el-menu-item>
        </el-menu>
      </div>
    </CrystalDrawer>

    <!-- 从顶部打开抽屉 -->
    <h4>从顶部打开抽屉</h4>
    <CrystalButton type="success" @click="drawerVisibleTop = true">打开顶部抽屉</CrystalButton>
    <CrystalDrawer v-model="drawerVisibleTop" title="顶部抽屉" direction="ttb" size="300px">
      <div class="drawer-content">
        <p>这个抽屉从顶部打开。</p>
        <p>顶部抽屉常用于通知、消息提示等场景。</p>
        <div style="margin-top: 20px">
          <el-card shadow="hover" style="margin-bottom: 10px">
            <template #header>
              <div class="card-header">
                <span>通知消息</span>
                <el-button type="text" size="small">查看全部</el-button>
              </div>
            </template>
            <div class="card-content">
              <p>您有一条新的消息通知</p>
              <p>系统将于明天进行维护升级</p>
            </div>
          </el-card>
        </div>
      </div>
    </CrystalDrawer>

    <!-- 带底部按钮的抽屉 -->
    <h4>带底部按钮的抽屉</h4>
    <CrystalButton type="info" @click="drawerVisibleWithFooter = true">打开带底部按钮的抽屉</CrystalButton>
    <CrystalDrawer v-model="drawerVisibleWithFooter" title="带底部按钮的抽屉" width="500px">
      <div class="drawer-content">
        <p>这个抽屉带有自定义底部按钮。</p>
        <el-form label-position="top">
          <el-form-item label="姓名">
            <el-input placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input placeholder="请输入邮箱" type="email" />
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input placeholder="请输入手机号码" />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="drawer-footer">
          <CrystalButton @click="drawerVisibleWithFooter = false">取消</CrystalButton>
          <CrystalButton type="primary" @click="drawerVisibleWithFooter = false">确认</CrystalButton>
        </span>
      </template>
    </CrystalDrawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { CrystalButton, CrystalDrawer } from "crystalplus-ui";
import { Management, Document, Setting, Message } from "@element-plus/icons-vue";

const drawerVisibleLeft = ref(false);
const drawerVisibleTop = ref(false);
const drawerVisibleWithFooter = ref(false);
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

.drawer-content {
  padding: 20px 0;
  line-height: 1.6;
}

.drawer-content p {
  margin: 10px 0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-content {
  padding: 10px 0;
}

.card-content p {
  margin: 5px 0;
  color: #606266;
}

.drawer-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

:deep(.el-menu-vertical-demo) {
  border-right: none;
}
</style>