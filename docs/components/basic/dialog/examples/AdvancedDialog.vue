<template>
  <div class="demo-container">
    <!-- 带底部按钮的弹窗 -->
    <h4>带底部按钮的弹窗</h4>
    <CrystalButton type="success" @click="dialogVisibleWithFooter = true">打开带底部按钮的弹窗</CrystalButton>
    <CrystalDialog v-model="dialogVisibleWithFooter" title="带底部按钮的弹窗" width="500px">
      <div class="dialog-content">
        <p>这个弹窗带有自定义底部按钮，同时支持全屏功能。</p>
        <el-form label-position="top">
          <el-form-item label="姓名">
            <el-input placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input placeholder="请输入邮箱" type="email" />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <CrystalButton round  @click="dialogVisibleWithFooter = false">取消</CrystalButton>
          <CrystalButton round  type="primary" @click="dialogVisibleWithFooter = false">确认</CrystalButton>
        </span>
      </template>
    </CrystalDialog>

    <!-- 居中显示弹窗 -->
    <h4>居中显示弹窗</h4>
    <CrystalButton type="warning" @click="dialogVisibleCenter = true">打开居中弹窗</CrystalButton>
    <CrystalDialog v-model="dialogVisibleCenter" title="居中弹窗" width="600px" center>
      <div class="dialog-content">
        <p>这个弹窗是居中显示的，同样支持全屏功能。</p>
        <div class="demo-content-image">
          <el-image
            src="https://img0.baidu.com/it/u=1458184935,3221340444&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
            fit="cover"
            style="width: 100%; height: 200px; border-radius: 8px"
          />
        </div>
      </div>
    </CrystalDialog>

    <!-- 可拖拽弹窗 -->
    <h4>可拖拽弹窗</h4>
    <CrystalButton type="primary" @click="dialogVisibleDraggable = true">打开可拖拽弹窗</CrystalButton>
    <CrystalDialog v-model="dialogVisibleDraggable" title="可拖拽弹窗" width="600px" draggable>
      <div class="dialog-content">
        <p>这个弹窗是可拖拽的，支持全屏功能。</p>
        <p>可以通过拖动弹窗头部来改变弹窗位置。</p>
        <p>点击右上角的全屏图标可以切换全屏状态。</p>
      </div>
    </CrystalDialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { CrystalDialog, CrystalButton } from "crystalplus-ui";

const dialogVisibleWithFooter = ref(false);
const dialogVisibleCenter = ref(false);
const dialogVisibleDraggable = ref(false);
</script>

<style scoped>
.demo-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.demo-container h4 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

.demo-container h4:first-child {
  margin-top: 0;
}

.dialog-content {
  padding: 20px 0;
  line-height: 1.6;
}

.dialog-content p {
  margin: 10px 0;
}

.demo-content-image {
  margin-top: 16px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>