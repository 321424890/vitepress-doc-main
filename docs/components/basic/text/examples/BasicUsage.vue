<template>
  <div class="text-demo">
    <CrystalText>默认文本</CrystalText>
    <CrystalText type="primary">主要文本</CrystalText>
    <CrystalText type="success">成功文本</CrystalText>
    <CrystalText type="info">信息文本</CrystalText>
    <CrystalText type="warning">警告文本</CrystalText>
    <CrystalText type="danger">危险文本</CrystalText>
  </div>
</template>

<script setup>
import { CrystalText } from "crystalplus-ui";
</script>

<style scoped>
.text-demo :deep(.crystal-text) {
  margin-right: 16px;
}
</style>