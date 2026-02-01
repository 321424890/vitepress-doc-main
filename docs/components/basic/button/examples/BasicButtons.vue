<template>
  <div class="button-group">
    <CrystalButton>默认按钮</CrystalButton>
    <CrystalButton type="primary">主要按钮</CrystalButton>
    <CrystalButton type="success">成功按钮</CrystalButton>
    <CrystalButton type="warning">警告按钮</CrystalButton>
    <CrystalButton type="danger">危险按钮</CrystalButton>
    <CrystalButton type="info">信息按钮</CrystalButton>
  </div>
</template>

<script setup>
import { CrystalButton } from 'crystalplus-ui'
</script>

<style scoped>
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>