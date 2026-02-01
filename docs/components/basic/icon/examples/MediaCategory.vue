<template>
  <div class="icon-category">
    <h4>媒体图标</h4>
    <div class="icon-grid">
      <crystal-icon icon="Media" size="24" color="#1890ff" />
      <crystal-icon icon="Microphone" size="24" color="#ff4d4f" />
      <crystal-icon icon="Mute" size="24" color="#52c41a" />
      <crystal-icon icon="Mic" size="24" color="#faad14" />
      <crystal-icon icon="VideoPause" size="24" color="#1890ff" />
      <crystal-icon icon="VideoCamera" size="24" color="#ff4d4f" />
      <crystal-icon icon="VideoPlay" size="24" color="#52c41a" />
      <crystal-icon icon="Headset" size="24" color="#faad14" />
      <crystal-icon icon="Monitor" size="24" color="#1890ff" />
      <crystal-icon icon="Film" size="24" color="#ff4d4f" />
      <crystal-icon icon="Camera" size="24" color="#52c41a" />
      <crystal-icon icon="Picture" size="24" color="#faad14" />
      <crystal-icon icon="PictureRounded" size="24" color="#1890ff" />
      <crystal-icon icon="Iphone" size="24" color="#ff4d4f" />
      <crystal-icon icon="Cellphone" size="24" color="#52c41a" />
      <crystal-icon icon="VideoCameraFilled" size="24" color="#faad14" />
      <crystal-icon icon="PictureFilled" size="24" color="#1890ff" />
      <crystal-icon icon="Platform" size="24" color="#ff4d4f" />
      <crystal-icon icon="CameraFilled" size="24" color="#52c41a" />
      <crystal-icon icon="BellFilled" size="24" color="#faad14" />
    </div>
  </div>
</template>

<script setup>
import { CrystalIcon } from 'crystalplus-ui'
</script>

<style scoped>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  justify-items: center;
  align-items: center;
}

.icon-category h4 {
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #303133;
}
</style>