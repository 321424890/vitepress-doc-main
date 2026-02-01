<template>
  <div class="text-demo">
    <CrystalText shadow>默认阴影文本</CrystalText>
    <CrystalText shadow shadowColor="#ff6b6b">红色阴影文本</CrystalText>
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