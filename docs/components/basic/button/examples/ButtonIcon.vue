<template>
  <div class="button-group">
    <CrystalButton icon="Search" type="primary">搜索</CrystalButton>
    <CrystalButton icon="Edit" type="success">编辑</CrystalButton>
    <CrystalButton icon="Delete" type="danger">删除</CrystalButton>
    <CrystalButton circle icon="Search" type="info" />
    <CrystalButton circle icon="Star" type="warning" />
    <CrystalButton circle icon="Check" type="success" />
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