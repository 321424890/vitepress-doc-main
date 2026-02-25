<template>
  <div class="chart-cards-container">
    <!-- 小图表卡片 -->
    <h3 class="section-title">图表卡片（小图表）</h3>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12">
        <CrystalLineChartCard
          :isMiniChart="true"
          :value="2545"
          :label="'新用户'"
          :date="'过去7天'"
          :percentage="1.2"
          :height="9.5"
          :chartData="[120, 132, 101, 134, 90, 230, 210]"
        />
      </el-col>
      <el-col :xs="24" :sm="12">
        <CrystalBarChartCard
          :isMiniChart="true"
          :value="15480"
          :label="'浏览量'"
          :date="'过去14天'"
          :percentage="-4.15"
          :height="9.5"
          :barWidth="'45%'"
          :chartData="[120, 100, 150, 140, 90, 120, 130]"
        />
      </el-col>
      <el-col :xs="24" :sm="12">
        <CrystalLineChartCard
          :isMiniChart="true"
          :value="2545"
          :label="'粉丝数'"
          :date="'过去30天'"
          :percentage="1.2"
          :height="9.5"
          :showAreaColor="true"
          :chartData="[150, 180, 160, 200, 180, 220, 240]"
        />
      </el-col>
      <el-col :xs="24" :sm="12">
        <CrystalDonutChartCard
          :value="36358"
          :title="'粉丝量'"
          :percentage="18"
          :percentageLabel="'较去年'"
          :data="[50, 40]"
          :height="9.5"
          :currentValue="'2022'"
          :previousValue="'2021'"
          :radius="['50%', '70%']"
        />
      </el-col>
    </el-row>

    <!-- 大图表卡片 -->
    <h3 class="section-title">图表卡片（大图表）</h3>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12">
        <CrystalLineChartCard
          :value="2545"
          :label="'新用户'"
          :percentage="1.2"
          :height="9.5"
          :chartData="[120, 132, 101, 134, 90, 230, 210]"
        />
      </el-col>
      <el-col :xs="24" :sm="12">
        <CrystalBarChartCard
          :value="15480"
          :label="'浏览量'"
          :percentage="-4.15"
          :height="9.5"
          :chartData="[120, 100, 150, 140, 90, 120, 130, 110]"
        />
      </el-col>
      <el-col :xs="24" :sm="12">
        <CrystalLineChartCard
          :value="2545"
          :label="'粉丝数'"
          :percentage="1.2"
          :height="9.5"
          :showAreaColor="true"
          :chartData="[150, 180, 160, 200, 180, 220, 240]"
        />
      </el-col>
      <el-col :xs="24" :sm="12">
        <CrystalDonutChartCard
          :value="36358"
          :title="'粉丝量'"
          :percentage="1.2"
          :percentageLabel="'较2021年'"
          :data="[70, 30]"
          :height="9.5"
          :currentValue="'12月'"
          :previousValue="'11月'"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { CrystalLineChartCard, CrystalBarChartCard, CrystalDonutChartCard } from 'crystalplus-ui'
</script>

<style scoped>
.chart-cards-container {
  padding: 16px 0;
}

.section-title {
  font-size: 18px;
  font-weight: 500;
  color: #303133;
  margin: 0 0 16px 0;
}

.el-row {
  margin-bottom: 32px;
  row-gap: 20px;
}

/* 深色模式适配 */
html.dark .section-title {
  color: #e0e0e0;
}
</style>