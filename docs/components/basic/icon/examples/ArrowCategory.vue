<template>
  <div class="icon-demo">
    <h3>箭头图标</h3>
    <div class="icon-grid">
      <CrystalIcon icon="Arrow" size="24" color="#1890ff" />
      <CrystalIcon icon="ArrowLeft" size="24" color="#ff4d4f" />
      <CrystalIcon icon="ArrowUp" size="24" color="#52c41a" />
      <CrystalIcon icon="ArrowRight" size="24" color="#faad14" />
      <CrystalIcon icon="ArrowDown" size="24" color="#1890ff" />
      <CrystalIcon icon="ArrowLeftBold" size="24" color="#ff4d4f" />
      <CrystalIcon icon="ArrowUpBold" size="24" color="#52c41a" />
      <CrystalIcon icon="ArrowRightBold" size="24" color="#faad14" />
      <CrystalIcon icon="ArrowDownBold" size="24" color="#1890ff" />
      <CrystalIcon icon="DArrowRight" size="24" color="#ff4d4f" />
      <CrystalIcon icon="DArrowLeft" size="24" color="#52c41a" />
      <CrystalIcon icon="Download" size="24" color="#faad14" />
      <CrystalIcon icon="Upload" size="24" color="#1890ff" />
      <CrystalIcon icon="Top" size="24" color="#ff4d4f" />
      <CrystalIcon icon="Bottom" size="24" color="#52c41a" />
      <CrystalIcon icon="Back" size="24" color="#faad14" />
      <CrystalIcon icon="Right" size="24" color="#1890ff" />
      <CrystalIcon icon="TopRight" size="24" color="#ff4d4f" />
      <CrystalIcon icon="TopLeft" size="24" color="#52c41a" />
      <CrystalIcon icon="BottomRight" size="24" color="#faad14" />
      <CrystalIcon icon="BottomLeft" size="24" color="#1890ff" />
      <CrystalIcon icon="Sort" size="24" color="#ff4d4f" />
      <CrystalIcon icon="SortUp" size="24" color="#52c41a" />
      <CrystalIcon icon="SortDown" size="24" color="#faad14" />
      <CrystalIcon icon="Rank" size="24" color="#1890ff" />
      <CrystalIcon icon="CaretLeft" size="24" color="#ff4d4f" />
      <CrystalIcon icon="CaretTop" size="24" color="#52c41a" />
      <CrystalIcon icon="CaretRight" size="24" color="#faad14" />
      <CrystalIcon icon="CaretBottom" size="24" color="#1890ff" />
      <CrystalIcon icon="DCaret" size="24" color="#ff4d4f" />
      <CrystalIcon icon="Expand" size="24" color="#52c41a" />
      <CrystalIcon icon="Fold" size="24" color="#faad14" />
    </div>
  </div>
</template>

<script setup>
import { CrystalIcon } from 'crystalplus-ui'
</script>

<style scoped>
.icon-demo {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  margin-top: 16px;
}

.icon-grid .crystal-icon {
  transition: all 0.3s ease;
}

.icon-grid .crystal-icon:hover {
  transform: scale(1.1);
}
</style>
