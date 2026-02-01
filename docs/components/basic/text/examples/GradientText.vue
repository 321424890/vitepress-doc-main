<template>
  <div class="text-demo">
    <CrystalText gradient>默认渐变文本</CrystalText>
    <CrystalText gradient gradientFrom="#ff6b6b" gradientTo="#4ecdc4">
      自定义渐变文本
    </CrystalText>
  </div>
</template>

<script setup>
import { CrystalText } from "crystalplus-ui";
</script>

<style scoped>
.text-demo :deep(.crystal-text) {
  margin-right: 16px;
  font-size: 18px;
  font-weight: bold;
}
</style>