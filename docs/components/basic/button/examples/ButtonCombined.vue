<template>
  <div class="button-group">
    <CrystalButton gradient size="large">大尺寸渐变</CrystalButton>
    <CrystalButton gradient plain type="success">朴素渐变</CrystalButton>
    <CrystalButton gradient icon="Search">渐变带图标</CrystalButton>
    <CrystalButton gradient round>渐变圆角</CrystalButton>
    <el-button-group>
      <CrystalButton type="primary" icon="ArrowLeft">上一页</CrystalButton>
      <CrystalButton type="primary">下一页</CrystalButton>
    </el-button-group>
  </div>
</template>

<script setup>
import { CrystalButton } from 'crystalplus-ui'
</script>

<style scoped>
.button-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.button-group > div {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>