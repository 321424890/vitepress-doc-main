<template>
  <div class="stats-card-demo">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalStatsCard
          title="自定义样式1"
          count="¥99,999"
          description="个性化主题卡片"
          icon="Money"
          iconColor="#fff"
          iconBgColor="#9c27b0"
          iconBgRadius="12"
          iconSize="24"
          textColor="#333"
          backgroundColor="#f3e5f5"
          showArrow
        />
      </el-col>
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalStatsCard
          title="自定义样式2"
          count="100%"
          description="高对比度设计"
          icon="Star"
          iconColor="#000"
          iconBgColor="#ffeb3b"
          iconBgRadius="50"
          iconSize="20"
          textColor="#000"
          backgroundColor="#fff3e0"
          showArrow
        />
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalStatsCard
          title="自定义样式3"
          count="5,200"
          description="简约现代风格"
          icon="Goods"
          iconColor="#fff"
          iconBgColor="#00bcd4"
          iconBgRadius="8"
          iconSize="18"
          textColor="#263238"
          backgroundColor="#e0f7fa"
        />
      </el-col>
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalStatsCard
          title="自定义样式4"
          count="24/7"
          description="全天候服务"
          icon="Clock"
          iconColor="#fff"
          iconBgColor="#ff5722"
          iconBgRadius="16"
          iconSize="22"
          textColor="#37474f"
          backgroundColor="#fbe9e7"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { CrystalStatsCard } from "crystalplus-ui";
</script>

<style scoped>
.stats-card-demo {
  padding: 20px;
}
</style>