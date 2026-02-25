<template>
  <div class="timeline-list-card-demo">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="8">
        <CrystalTimelineListCard
          :list="timelineData"
          title="最近交易"
          subtitle="2024年12月20日"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CrystalTimelineListCard } from "crystalplus-ui";

const timelineData = ref([
  {
    time: "上午 09:30",
    status: "rgb(73, 190, 255)",
    content: "收到 John Doe 支付的 385.90 美元",
  },
  {
    time: "上午 10:00",
    status: "rgb(54, 158, 255)",
    content: "新销售记录",
    code: "ML-3467",
  },
  {
    time: "上午 12:00",
    status: "rgb(103, 232, 207)",
    content: "向 Michael 支付了 64.95 美元",
  },
  {
    time: "下午 14:30",
    status: "rgb(255, 193, 7)",
    content: "系统维护通知",
    code: "MT-2023",
  },
  {
    time: "下午 15:45",
    status: "rgb(255, 105, 105)",
    content: "紧急订单取消提醒",
    code: "OR-9876",
  },
]);
</script>

<style scoped>
.timeline-list-card-demo {
  padding: 20px;
}
</style>