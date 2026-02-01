<template>
  <div class="text-demo">
    <!-- 字体粗细 -->
    <CrystalText fontWeight="bold">粗体文本</CrystalText>
    <CrystalText fontWeight="lighter">轻量文本</CrystalText>

    <!-- 字体样式 -->
    <CrystalText fontStyle="italic">斜体文本</CrystalText>

    <!-- 文本装饰 -->
    <CrystalText textDecoration="underline">下划线文本</CrystalText>
    <CrystalText textDecoration="line-through">删除线文本</CrystalText>
  </div>
</template>

<script setup>
import { CrystalText } from "crystalplus-ui";
</script>

<style scoped>
.text-demo :deep(.crystal-text) {
  margin-right: 16px;
  margin-bottom: 8px;
  display: inline-block;
}
</style>