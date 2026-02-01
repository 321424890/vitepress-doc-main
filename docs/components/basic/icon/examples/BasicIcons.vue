<template>
  <div class="icon-demo">
    <h3>基础图标</h3>
    <div class="icon-grid">
      <CrystalIcon icon="Plus" size="24" />
      <CrystalIcon icon="Minus" size="24" />
      <CrystalIcon icon="CirclePlus" size="24" />
      <CrystalIcon icon="Search" size="24" />
      <CrystalIcon icon="Female" size="24" />
      <CrystalIcon icon="Male" size="24" />
      <CrystalIcon icon="Aim" size="24" />
      <CrystalIcon icon="House" size="24" />
      <CrystalIcon icon="FullScreen" size="24" />
      <CrystalIcon icon="Loading" size="24" />
      <CrystalIcon icon="Link" size="24" />
      <CrystalIcon icon="Service" size="24" />
      <CrystalIcon icon="Pointer" size="24" />
      <CrystalIcon icon="Star" size="24" />
      <CrystalIcon icon="Notification" size="24" />
      <CrystalIcon icon="Connection" size="24" />
      <CrystalIcon icon="ChatDotRound" size="24" />
      <CrystalIcon icon="Setting" size="24" />
      <CrystalIcon icon="Clock" size="24" />
      <CrystalIcon icon="Position" size="24" />
      <CrystalIcon icon="Discount" size="24" />
      <CrystalIcon icon="Odometer" size="24" />
      <CrystalIcon icon="ChatSquare" size="24" />
      <CrystalIcon icon="ChatRound" size="24" />
      <CrystalIcon icon="ChatLineRound" size="24" />
      <CrystalIcon icon="ChatLineSquare" size="24" />
      <CrystalIcon icon="ChatDotSquare" size="24" />
      <CrystalIcon icon="View" size="24" />
      <CrystalIcon icon="Hide" size="24" />
      <CrystalIcon icon="Unlock" size="24" />
      <CrystalIcon icon="Lock" size="24" />
      <CrystalIcon icon="RefreshRight" size="24" />
      <CrystalIcon icon="RefreshLeft" size="24" />
      <CrystalIcon icon="Refresh" size="24" />
      <CrystalIcon icon="Bell" size="24" />
      <CrystalIcon icon="MuteNotification" size="24" />
      <CrystalIcon icon="User" size="24" />
      <CrystalIcon icon="Check" size="24" />
      <CrystalIcon icon="CircleCheck" size="24" />
      <CrystalIcon icon="Warning" size="24" />
      <CrystalIcon icon="CircleClose" size="24" />
      <CrystalIcon icon="Close" size="24" />
      <CrystalIcon icon="PieChart" size="24" />
      <CrystalIcon icon="More" size="24" />
      <CrystalIcon icon="Compass" size="24" />
      <CrystalIcon icon="Filter" size="24" />
      <CrystalIcon icon="Switch" size="24" />
      <CrystalIcon icon="Select" size="24" />
      <CrystalIcon icon="SemiSelect" size="24" />
      <CrystalIcon icon="CloseBold" size="24" />
      <CrystalIcon icon="EditPen" size="24" />
      <CrystalIcon icon="Edit" size="24" />
      <CrystalIcon icon="Message" size="24" />
      <CrystalIcon icon="MessageBox" size="24" />
      <CrystalIcon icon="TurnOff" size="24" />
      <CrystalIcon icon="Finished" size="24" />
      <CrystalIcon icon="Delete" size="24" />
      <CrystalIcon icon="Crop" size="24" />
      <CrystalIcon icon="SwitchButton" size="24" />
      <CrystalIcon icon="Operation" size="24" />
      <CrystalIcon icon="Open" size="24" />
      <CrystalIcon icon="Remove" size="24" />
      <CrystalIcon icon="ZoomOut" size="24" />
      <CrystalIcon icon="ZoomIn" size="24" />
      <CrystalIcon icon="InfoFilled" size="24" />
      <CrystalIcon icon="CircleCheckFilled" size="24" />
      <CrystalIcon icon="SuccessFilled" size="24" />
      <CrystalIcon icon="WarningFilled" size="24" />
      <CrystalIcon icon="CircleCloseFilled" size="24" />
      <CrystalIcon icon="QuestionFilled" size="24" />
      <CrystalIcon icon="WarnTriangleFilled" size="24" />
      <CrystalIcon icon="UserFilled" size="24" />
      <CrystalIcon icon="MoreFilled" size="24" />
      <CrystalIcon icon="Tools" size="24" />
      <CrystalIcon icon="HomeFilled" size="24" />
      <CrystalIcon icon="Menu" size="24" />
      <CrystalIcon icon="UploadFilled" size="24" />
      <CrystalIcon icon="Avatar" size="24" />
      <CrystalIcon icon="HelpFilled" size="24" />
      <CrystalIcon icon="Share" size="24" />
      <CrystalIcon icon="StarFilled" size="24" />
      <CrystalIcon icon="Comment" size="24" />
      <CrystalIcon icon="Histogram" size="24" />
      <CrystalIcon icon="Grid" size="24" />
      <CrystalIcon icon="Promotion" size="24" />
      <CrystalIcon icon="DeleteFilled" size="24" />
      <CrystalIcon icon="RemoveFilled" size="24" />
      <CrystalIcon icon="CirclePlusFilled" size="24" />
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
