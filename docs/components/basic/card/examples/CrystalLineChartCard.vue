<template>
  <div class="line-chart-card-demo">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalLineChartCard
          :isMiniChart="true"
          :value="2545"
          label="新用户"
          date="过去7天"
          :percentage="1.2"
          :height="9.5"
          :chartData="[120, 132, 101, 134, 90, 230, 210]"
        />
      </el-col>
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalLineChartCard
          :value="2545"
          label="新用户"
          :percentage="1.2"
          :height="11"
          :chartData="[120, 132, 101, 134, 90, 230, 210]"
          :showAreaColor="true"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { CrystalLineChartCard } from "crystalplus-ui";
</script>

<style scoped>
.line-chart-card-demo {
  padding: 20px;
}
</style>