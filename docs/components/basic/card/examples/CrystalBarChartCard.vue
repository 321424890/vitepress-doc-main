<template>
  <div class="bar-chart-card-demo">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalBarChartCard
          :isMiniChart="true"
          :value="15480"
          label="浏览量"
          date="过去 14 天"
          :percentage="-4.15"
          :height="9.5"
          :barWidth="'45%'"
          :chartData="[120, 100, 150, 140, 90, 120, 130]"
        />
      </el-col>
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalBarChartCard
          :value="15480"
          label="浏览量"
          :percentage="-4.15"
          :height="9.5"
          :chartData="[120, 100, 150, 140, 90, 120, 130, 110]"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { CrystalBarChartCard } from "crystalplus-ui";
</script>

<style scoped>
.bar-chart-card-demo {
  padding: 20px;
}
</style>