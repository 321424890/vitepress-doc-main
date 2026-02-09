<template>
  <div class="demo-container">
    <h4>从右侧打开抽屉</h4>
    <CrystalButton type="primary" @click="drawerVisibleRight = true">打开右侧抽屉</CrystalButton>
    <CrystalDrawer v-model="drawerVisibleRight" title="右侧抽屉" size="50%">
      <div class="drawer-content">
        <p>这是一个从右侧打开的增强版抽屉。</p>
        <p>可以通过设置不同的方向属性来控制抽屉的打开方向。</p>
        <div class="demo-content-image">
          <el-image
            src="https://img0.baidu.com/it/u=1458184935,3221340444&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
            fit="cover"
            style="width: 100%; height: 200px; border-radius: 8px; margin-top: 20px"
          />
        </div>
      </div>
    </CrystalDrawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { CrystalButton, CrystalDrawer } from "crystalplus-ui";

const drawerVisibleRight = ref(false);
</script>

<style scoped>
.demo-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.drawer-content {
  padding: 20px 0;
  line-height: 1.6;
}

.drawer-content p {
  margin: 10px 0;
}

.demo-content-image {
  margin-top: 20px;
}
</style>