<template>
  <div class="text-demo">
    <CrystalText hoverEffect>默认悬停文本</CrystalText>
    <CrystalText hoverEffect hoverColor="#4ecdc4">自定义悬停颜色</CrystalText>
  </div>
</template>

<script setup>
import { CrystalText } from "crystalplus-ui";
</script>

<style scoped>
.text-demo :deep(.crystal-text) {
  margin-right: 16px;
  font-size: 16px;
}
</style>