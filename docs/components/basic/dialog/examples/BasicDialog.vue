<template>
  <div class="demo-container">
    <h4>基础弹窗</h4>
    <el-button type="primary" @click="dialogVisible = true">打开基础弹窗</el-button>
    <CrystalDialog v-model="dialogVisible" title="基础弹窗" width="800px">
      <div class="dialog-content">
        <p>这是一个基础的增强版弹窗，支持全屏功能。</p>
        <p>点击右上角的全屏图标可以切换全屏状态。</p>
        <p>点击右上角的关闭图标可以关闭弹窗。</p>
      </div>
    </CrystalDialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { CrystalDialog } from "crystalplus-ui";

const dialogVisible = ref(false);
</script>

<style scoped>
.demo-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.dialog-content {
  padding: 20px 0;
  line-height: 1.6;
}

.dialog-content p {
  margin: 10px 0;
}
</style>