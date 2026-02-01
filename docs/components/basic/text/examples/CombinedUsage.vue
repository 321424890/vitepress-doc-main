<template>
  <div class="text-demo">
    <CrystalText type="primary" bold underline>
      主要粗体带下划线文本
    </CrystalText>
    <CrystalText type="success" italic copyable>
      可复制的成功斜体文本
    </CrystalText>
    <CrystalText type="warning" gradient hoverEffect>
      渐变警告悬停文本
    </CrystalText>
    <CrystalText type="danger" shadow delete>阴影危险删除线文本</CrystalText>
    <CrystalText type="info" fontWeight="bold" fontStyle="italic">
      粗体斜体信息文本
    </CrystalText>
  </div>
</template>

<script setup>
import { CrystalText } from "crystalplus-ui";
</script>

<style scoped>
.text-demo :deep(.crystal-text) {
  margin-right: 16px;
  margin-bottom: 12px;
  display: inline-block;
}
</style>