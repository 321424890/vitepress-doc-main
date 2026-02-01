<template>
  <div class="button-group">
    <CrystalButton borderRadius="8px" type="primary">基础圆角</CrystalButton>
    <CrystalButton borderRadius="10px 30px" type="success">椭圆圆角</CrystalButton>
    <CrystalButton borderRadius="50px" type="warning">圆形圆角</CrystalButton>
    <CrystalButton gradient borderRadius="16px">渐变圆角</CrystalButton>
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