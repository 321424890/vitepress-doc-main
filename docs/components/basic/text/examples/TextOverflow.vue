<template>
  <div class="text-demo">
    <CrystalText maxWidth="150px" textOverflow="ellipsis">
      这是一段很长的文本，当宽度超过限制时会显示省略号
    </CrystalText>
  </div>
</template>

<script setup>
import { CrystalText } from "crystalplus-ui";
</script>

<style scoped>
.text-demo :deep(.crystal-text) {
  display: inline-block;
  border: 1px solid #eaeaea;
  padding: 4px;
}
</style>