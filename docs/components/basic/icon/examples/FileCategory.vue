<template>
  <div class="icon-demo">
    <h3>文件图标</h3>
    <div class="icon-grid">
      <CrystalIcon icon="Document" size="24" color="#1890ff" />
      <CrystalIcon icon="DocumentAdd" size="24" color="#ff4d4f" />
      <CrystalIcon icon="Document" size="24" color="#52c41a" />
      <CrystalIcon icon="Notebook" size="24" color="#faad14" />
      <CrystalIcon icon="Tickets" size="24" color="#1890ff" />
      <CrystalIcon icon="Memo" size="24" color="#ff4d4f" />
      <CrystalIcon icon="Collection" size="24" color="#52c41a" />
      <CrystalIcon icon="Postcard" size="24" color="#faad14" />
      <CrystalIcon icon="ScaleToOriginal" size="24" color="#1890ff" />
      <CrystalIcon icon="SetUp" size="24" color="#ff4d4f" />
      <CrystalIcon icon="DocumentDelete" size="24" color="#52c41a" />
      <CrystalIcon icon="DocumentChecked" size="24" color="#faad14" />
      <CrystalIcon icon="DataBoard" size="24" color="#1890ff" />
      <CrystalIcon icon="DataAnalysis" size="24" color="#ff4d4f" />
      <CrystalIcon icon="CopyDocument" size="24" color="#52c41a" />
      <CrystalIcon icon="FolderChecked" size="24" color="#faad14" />
      <CrystalIcon icon="Files" size="24" color="#1890ff" />
      <CrystalIcon icon="Folder" size="24" color="#ff4d4f" />
      <CrystalIcon icon="FolderDelete" size="24" color="#52c41a" />
      <CrystalIcon icon="FolderRemove" size="24" color="#faad14" />
      <CrystalIcon icon="FolderOpened" size="24" color="#1890ff" />
      <CrystalIcon icon="DocumentCopy" size="24" color="#ff4d4f" />
      <CrystalIcon icon="DocumentRemove" size="24" color="#52c41a" />
      <CrystalIcon icon="FolderAdd" size="24" color="#faad14" />
      <CrystalIcon icon="FirstAidKit" size="24" color="#1890ff" />
      <CrystalIcon icon="Reading" size="24" color="#ff4d4f" />
      <CrystalIcon icon="DataLine" size="24" color="#52c41a" />
      <CrystalIcon icon="Management" size="24" color="#faad14" />
      <CrystalIcon icon="Checked" size="24" color="#1890ff" />
      <CrystalIcon icon="Ticket" size="24" color="#ff4d4f" />
      <CrystalIcon icon="Failed" size="24" color="#52c41a" />
      <CrystalIcon icon="TrendCharts" size="24" color="#faad14" />
      <CrystalIcon icon="List" size="24" color="#1890ff" />
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