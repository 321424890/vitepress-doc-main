<template>
  <div class="donut-chart-card-demo">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalDonutChartCard
          :value="36358"
          title="粉丝量"
          :percentage="18"
          percentageLabel="较去年"
          :data="[50, 40]"
          :height="9.5"
          currentValue="2022"
          previousValue="2021"
          :radius="['50%', '70%']"
        />
      </el-col>
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalDonutChartCard
          :value="36358"
          title="粉丝量"
          :percentage="-18"
          percentageLabel="较2021年"
          :data="[70, 30]"
          :height="11"
          currentValue="12月"
          previousValue="11月"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { CrystalDonutChartCard } from "crystalplus-ui";
</script>

<style scoped>
.donut-chart-card-demo {
  padding: 20px;
}
</style>