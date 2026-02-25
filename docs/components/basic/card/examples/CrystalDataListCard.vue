<template>
  <div class="data-list-card-demo">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalDataListCard
          :list="dataList"
          title="待办事项"
          subtitle="今日待处理任务"
        />
      </el-col>
      <el-col :xs="24" :sm="12" :md="12">
        <CrystalDataListCard
          :maxCount="4"
          :list="dataList"
          title="最近活动"
          subtitle="近期活动列表"
          :showMoreButton="true"
          @more="handleMore"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CrystalDataListCard } from "crystalplus-ui";

const dataList = ref([
  {
    title: "新加坡之行",
    status: "进行中",
    time: "5分钟",
    icon: "Location",
    class: "bg-primary",
  },
  {
    title: "归档数据",
    status: "进行中",
    time: "10分钟",
    icon: "Document",
    class: "bg-secondary",
  },
  {
    title: "客户会议",
    status: "待处理",
    time: "15分钟",
    icon: "ChatLineRound",
    class: "bg-warning",
  },
  {
    title: "筛选任务团队",
    status: "进行中",
    time: "20分钟",
    icon: "User",
    class: "bg-danger",
  },
  {
    title: "发送信封给小王",
    status: "已完成",
    time: "20分钟",
    icon: "Message",
    class: "bg-success",
  },
]);

const handleMore = () => {
  console.log("点击了更多按钮");
};
</script>

<style scoped>
.data-list-card-demo {
  padding: 20px;
}

.bg-primary {
  background-color: #409eff;
}

.bg-secondary {
  background-color: #909399;
}

.bg-warning {
  background-color: #e6a23c;
}

.bg-danger {
  background-color: #f56c6c;
}

.bg-success {
  background-color: #67c23a;
}
</style>