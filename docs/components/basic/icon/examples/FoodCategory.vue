<template>
  <div class="icon-category">
    <h4>美食图标</h4>
    <div class="icon-grid">
      <crystal-icon icon="Food" size="24" color="#1890ff" />
      <crystal-icon icon="Watermelon" size="24" color="#ff4d4f" />
      <crystal-icon icon="Pear" size="24" color="#52c41a" />
      <crystal-icon icon="NoSmoking" size="24" color="#faad14" />
      <crystal-icon icon="Smoking" size="24" color="#1890ff" />
      <crystal-icon icon="Mug" size="24" color="#ff4d4f" />
      <crystal-icon icon="GobletSquareFull" size="24" color="#52c41a" />
      <crystal-icon icon="GobletFull" size="24" color="#faad14" />
      <crystal-icon icon="KnifeFork" size="24" color="#1890ff" />
      <crystal-icon icon="Sugar" size="24" color="#ff4d4f" />
      <crystal-icon icon="Bowl" size="24" color="#52c41a" />
      <crystal-icon icon="MilkTea" size="24" color="#faad14" />
      <crystal-icon icon="Lollipop" size="24" color="#1890ff" />
      <crystal-icon icon="Coffee" size="24" color="#ff4d4f" />
      <crystal-icon icon="Chicken" size="24" color="#52c41a" />
      <crystal-icon icon="Dish" size="24" color="#faad14" />
      <crystal-icon icon="IceTea" size="24" color="#1890ff" />
      <crystal-icon icon="ColdDrink" size="24" color="#ff4d4f" />
      <crystal-icon icon="CoffeeCup" size="24" color="#52c41a" />
      <crystal-icon icon="DishDot" size="24" color="#faad14" />
      <crystal-icon icon="IceDrink" size="24" color="#1890ff" />
      <crystal-icon icon="IceCream" size="24" color="#ff4d4f" />
      <crystal-icon icon="Dessert" size="24" color="#52c41a" />
      <crystal-icon icon="IceCreamSquare" size="24" color="#faad14" />
      <crystal-icon icon="ForkSpoon" size="24" color="#1890ff" />
      <crystal-icon icon="IceCreamRound" size="24" color="#ff4d4f" />
      <crystal-icon icon="Food" size="24" color="#52c41a" />
      <crystal-icon icon="HotWater" size="24" color="#faad14" />
      <crystal-icon icon="Grape" size="24" color="#1890ff" />
      <crystal-icon icon="Fries" size="24" color="#ff4d4f" />
      <crystal-icon icon="Apple" size="24" color="#52c41a" />
      <crystal-icon icon="Burger" size="24" color="#faad14" />
      <crystal-icon icon="Goblet" size="24" color="#1890ff" />
      <crystal-icon icon="GobletSquare" size="24" color="#ff4d4f" />
      <crystal-icon icon="Orange" size="24" color="#52c41a" />
      <crystal-icon icon="Cherry" size="24" color="#faad14" />
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