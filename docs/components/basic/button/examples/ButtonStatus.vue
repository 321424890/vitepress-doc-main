<template>
  <div class="button-group">
    <CrystalButton plain type="primary">朴素按钮</CrystalButton>
    <CrystalButton round type="primary">圆角按钮</CrystalButton>
    <CrystalButton circle type="primary" icon="Search" />
    <CrystalButton loading type="primary">加载中</CrystalButton>
    <CrystalButton disabled type="primary">禁用按钮</CrystalButton>
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