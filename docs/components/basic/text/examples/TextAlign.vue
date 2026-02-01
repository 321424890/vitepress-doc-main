<template>
  <div>
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="input-group">
          <h4>文本对齐</h4>
          <div style="width: 100%">
            <div style="width: 100%; text-align: left; margin-bottom: 10px">
              <CrystalText>左对齐文本</CrystalText>
            </div>
            <div style="width: 100%; text-align: center; margin-bottom: 10px">
              <CrystalText>居中对齐文本</CrystalText>
            </div>
            <div style="width: 100%; text-align: right">
              <CrystalText>右对齐文本</CrystalText>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { CrystalText } from "crystalplus-ui";
</script>

<style scoped>
.text-align-demo {
  width: 100%;
}

.text-item {
  width: 100%;
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid #eaeaea;
}
</style>