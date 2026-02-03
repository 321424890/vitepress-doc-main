<template>
  <div class="button-group">
    <CrystalButton icon="Search" type="primary">搜索</CrystalButton>
    <CrystalButton icon="Edit" type="success">编辑</CrystalButton>
    <CrystalButton icon="Delete" type="danger">删除</CrystalButton>
    <CrystalButton  type="primary" circle icon="Search" />
    <CrystalButton  type="primary" circle icon="Star" />
    <CrystalButton  type="primary" circle icon="Check"  />
  </div>

  <div class="demo-section">
    <h3>类型演示：</h3>
    <div class="icon-button-group">
      <CrystalButton type="default" circle icon="Pointer" />
      <CrystalButton type="primary" circle icon="Pointer" />
      <CrystalButton type="success" circle icon="Pointer" />
      <CrystalButton type="warning" circle icon="Pointer" />
      <CrystalButton type="danger" circle icon="Pointer" />
    </div>
  </div>

  <div class="demo-section">
    <h3>实际使用场景：</h3>
    <div class="icon-button-group">
      <CrystalButton type="primary" circle icon="ArrowRight" />
      <CrystalButton type="danger" circle icon="Delete" />
      <CrystalButton type="success" circle icon="Check" />
      <CrystalButton type="warning" circle icon="Warning" />
      <CrystalButton type="info" circle icon="Pointer" />

    </div>
  </div>

</template>

<script setup>
import { CrystalButton } from 'crystalplus-ui'
import { ElButton } from 'element-plus'
import { Search, Edit, Check, Message, Star, Delete, Pointer, ArrowRight, Warning } from '@element-plus/icons-vue'
</script>

<style scoped>
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
:deep(.el-button.is-circle) {
  border-radius: 50%;
  padding: 8px;
  width: 32px;
  /* display: flex; */
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}
</style>
