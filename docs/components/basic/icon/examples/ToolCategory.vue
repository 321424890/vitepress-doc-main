<template>
  <div class="icon-category">
    <h4>工具图标</h4>
    <div class="icon-grid">
      <crystal-icon icon="Items" size="24" color="#1890ff" />
      <crystal-icon icon="Printer" size="24" color="#ff4d4f" />
      <crystal-icon icon="Calendar" size="24" color="#52c41a" />
      <crystal-icon icon="CreditCard" size="24" color="#faad14" />
      <crystal-icon icon="Box" size="24" color="#1890ff" />
      <crystal-icon icon="Money" size="24" color="#ff4d4f" />
      <crystal-icon icon="Refrigerator" size="24" color="#52c41a" />
      <crystal-icon icon="Cpu" size="24" color="#faad14" />
      <crystal-icon icon="Football" size="24" color="#1890ff" />
      <crystal-icon icon="Brush" size="24" color="#ff4d4f" />
      <crystal-icon icon="Suitcase" size="24" color="#52c41a" />
      <crystal-icon icon="SuitcaseLine" size="24" color="#faad14" />
      <crystal-icon icon="Umbrella" size="24" color="#1890ff" />
      <crystal-icon icon="AlarmClock" size="24" color="#ff4d4f" />
      <crystal-icon icon="Medal" size="24" color="#52c41a" />
      <crystal-icon icon="GoldMedal" size="24" color="#faad14" />
      <crystal-icon icon="Present" size="24" color="#1890ff" />
      <crystal-icon icon="Mouse" size="24" color="#ff4d4f" />
      <crystal-icon icon="Watch" size="24" color="#52c41a" />
      <crystal-icon icon="QuartzWatch" size="24" color="#faad14" />
      <crystal-icon icon="Magnet" size="24" color="#1890ff" />
      <crystal-icon icon="Help" size="24" color="#ff4d4f" />
      <crystal-icon icon="Soccer" size="24" color="#52c41a" />
      <crystal-icon icon="ToiletPaper" size="24" color="#faad14" />
      <crystal-icon icon="ReadingLamp" size="24" color="#1890ff" />
      <crystal-icon icon="Paperclip" size="24" color="#ff4d4f" />
      <crystal-icon icon="MagicStick" size="24" color="#52c41a" />
      <crystal-icon icon="Basketball" size="24" color="#faad14" />
      <crystal-icon icon="Baseball" size="24" color="#1890ff" />
      <crystal-icon icon="Coin" size="24" color="#ff4d4f" />
      <crystal-icon icon="Goods" size="24" color="#52c41a" />
      <crystal-icon icon="Sell" size="24" color="#faad14" />
      <crystal-icon icon="SoldOut" size="24" color="#1890ff" />
      <crystal-icon icon="Key" size="24" color="#ff4d4f" />
      <crystal-icon icon="ShoppingCart" size="24" color="#52c41a" />
      <crystal-icon icon="ShoppingCartFull" size="24" color="#faad14" />
      <crystal-icon icon="ShoppingTrolley" size="24" color="#1890ff" />
      <crystal-icon icon="Phone" size="24" color="#ff4d4f" />
      <crystal-icon icon="Scissor" size="24" color="#52c41a" />
      <crystal-icon icon="Handbag" size="24" color="#faad14" />
      <crystal-icon icon="ShoppingBag" size="24" color="#1890ff" />
      <crystal-icon icon="Trophy" size="24" color="#ff4d4f" />
      <crystal-icon icon="TrophyBase" size="24" color="#52c41a" />
      <crystal-icon icon="Stopwatch" size="24" color="#faad14" />
      <crystal-icon icon="Timer" size="24" color="#1890ff" />
      <crystal-icon icon="CollectionTag" size="24" color="#ff4d4f" />
      <crystal-icon icon="TakeawayBox" size="24" color="#52c41a" />
      <crystal-icon icon="PriceTag" size="24" color="#faad14" />
      <crystal-icon icon="Wallet" size="24" color="#1890ff" />
      <crystal-icon icon="Opportunity" size="24" color="#ff4d4f" />
      <crystal-icon icon="PhoneFilled" size="24" color="#52c41a" />
      <crystal-icon icon="WalletFilled" size="24" color="#faad14" />
      <crystal-icon icon="GoodsFilled" size="24" color="#1890ff" />
      <crystal-icon icon="Flag" size="24" color="#ff4d4f" />
      <crystal-icon icon="BrushFilled" size="24" color="#52c41a" />
      <crystal-icon icon="Briefcase" size="24" color="#faad14" />
      <crystal-icon icon="Stamp" size="24" color="#1890ff" />
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