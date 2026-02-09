<template>
  <div class="demo-container">
    <!-- 自定义头部的抽屉 -->
    <h4>自定义头部的抽屉</h4>
    <CrystalButton type="danger" @click="drawerVisibleCustomHeader = true">打开自定义头部抽屉</CrystalButton>
    <CrystalDrawer v-model="drawerVisibleCustomHeader" width="600px">
      <template #header>
        <div class="custom-header">
          <el-icon class="custom-header-icon"><Menu /></el-icon>
          <span class="custom-header-title">自定义头部抽屉</span>
          <CrystalButton type="primary" size="small" @click="drawerVisibleCustomHeader = false">关闭</CrystalButton>
        </div>
      </template>
      <div class="drawer-content">
        <p>这个抽屉使用了自定义的头部内容。</p>
        <p>可以根据需要完全自定义抽屉的头部样式和内容。</p>
        <div class="demo-content-image">
          <el-image
            src="https://img0.baidu.com/it/u=1458184935,3221340444&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
            fit="cover"
            style="width: 100%; height: 200px; border-radius: 8px; margin-top: 20px"
          />
        </div>
      </div>
    </CrystalDrawer>

    <!-- 自定义样式抽屉 -->
    <h4>自定义样式抽屉</h4>
    <CrystalButton type="primary" gradient @click="drawerVisibleCustomStyle = true">打开自定义样式抽屉</CrystalButton>
    <CrystalDrawer v-model="drawerVisibleCustomStyle" title="自定义样式抽屉" width="700px" custom-class="custom-style-drawer">
      <div class="drawer-content">
        <p>这个抽屉使用了自定义的样式，可以通过 custom-class 属性添加自定义类名。</p>
        <p>自定义样式可以包括背景色、边框、阴影等。</p>
        <div class="custom-content">
          <el-card shadow="hover">
            <template #header>
              <div class="card-header">
                <span>自定义内容区域</span>
              </div>
            </template>
            <div class="card-body">
              <p>这是一个带有卡片的自定义内容区域</p>
              <CrystalButton type="primary" size="small">操作按钮</CrystalButton>
            </div>
          </el-card>
        </div>
      </div>
    </CrystalDrawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { CrystalButton, CrystalDrawer } from "crystalplus-ui";
import { Menu } from "@element-plus/icons-vue";

const drawerVisibleCustomHeader = ref(false);
const drawerVisibleCustomStyle = ref(false);
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

.custom-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.custom-header-icon {
  color: #409eff;
  font-size: 18px;
}

.custom-header-title {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
  flex: 1;
}

.demo-content-image {
  margin-top: 20px;
}

.custom-content {
  margin-top: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-body {
  padding: 20px;
}

/* 自定义样式抽屉 */
:deep(.custom-style-drawer) {
  border-radius: 12px 0 0 12px;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
}

:deep(.custom-style-drawer .el-drawer__header) {
  border-bottom: 1px solid #f0f0f0;
  padding: 20px;
}

:deep(.custom-style-drawer .el-drawer__body) {
  padding: 24px;
}
</style>