<template>
  <div class="progress-card-demo">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalProgressCard
          title="完成进度"
          percentage="75"
          color="#67c23a"
          icon="Check"

        />
      </el-col>
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalProgressCard
          title="项目进度"
          percentage="65"
          color="#409eff"
          icon="Document"
          iconColor="#fff"
          iconBgColor="#409eff"
        />
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalProgressCard
          title="学习进度"
          percentage="45"
          color="#f56c6c"
          icon="Reading"
          iconColor="#fff"
          iconBgColor="#f56c6c"
        />
      </el-col>
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalProgressCard
          title="任务进度"
          percentage="90"
          color="#909399"
          icon="Ticket"
          iconColor="#fff"
          iconBgColor="#909399"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { CrystalProgressCard } from "crystalplus-ui";
</script>

<style scoped>
.progress-card-demo {
  padding: 20px;
}
</style>