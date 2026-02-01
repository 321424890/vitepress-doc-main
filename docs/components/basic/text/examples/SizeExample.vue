<template>
  <div class="text-demo">
    <CrystalText size="large">大号文本</CrystalText>
    <CrystalText>默认文本</CrystalText>
    <CrystalText size="small">小号文本</CrystalText>
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