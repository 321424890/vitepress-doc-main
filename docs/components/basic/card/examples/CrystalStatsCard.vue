<template>
  <div class="stats-card-demo">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalStatsCard
          title="销售产品"
          count="1235"
          description="鞋子、牛仔裤、派对服装、手表"
          icon="Goods"
          showArrow
        />
      </el-col>
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalStatsCard
          title="活跃用户"
          count="5000"
          description="日活跃用户超过5,000+"
          icon="User"
          iconColor="#fff"
          iconBgColor="#67c23a"
        />
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalStatsCard
          title="总收入"
          count="35000"
          description="月收入超过¥350,000+"
          icon="Money"
          iconColor="#fff"
          iconBgColor="#e6a23c"
        />
      </el-col>
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalStatsCard
          title="客户评价"
          count="4800"
          description="平均评分4.8/5"
          icon="Star"
          iconColor="#fff"
          iconBgColor="#f56c6c"
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