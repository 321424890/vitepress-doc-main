<template>
  <div class="demo-container">
    <h3>基本多图片上传</h3>
    <div class="demo-item">
      <CrystalImages
        v-model:fileList="basicImages"
        :api="uploadApi"
        :limit="3"
        @upload-success="onUploadSuccess"
        @upload-error="onUploadError"
        @remove="onRemove"
      >
        <template #tip>
          <div>支持 jpg/png/gif 格式，单张不超过 5MB，最多上传 3 张</div>
        </template>
      </CrystalImages>
    </div>

    <h3>自定义大小和样式</h3>
    <div class="demo-item">
      <CrystalImages
        v-model:fileList="customStyleImages"
        :api="uploadApi"
        :width="'200px'"
        :height="'200px'"
        :borderRadius="'12px'"
        :limit="4"
      >
        <template #empty>
          <el-icon><Plus /></el-icon>
          <span>点击上传</span>
        </template>
        <template #tip>
          <div>自定义尺寸：200x200px，圆角：12px</div>
        </template>
      </CrystalImages>
    </div>

    <h3>禁用状态</h3>
    <div class="demo-item">
      <CrystalImages
        v-model:fileList="disabledImages"
        :api="uploadApi"
        :disabled="true"
      >
        <template #tip>
          <div>禁用状态下无法上传或删除图片</div>
        </template>
      </CrystalImages>
    </div>

    <h3>限制文件类型</h3>
    <div class="demo-item">
      <CrystalImages
        v-model:fileList="limitedTypeImages"
        :api="uploadApi"
        :fileType="['image/jpeg', 'image/png']"
        :limit="2"
      >
        <template #tip>
          <div>仅支持 jpg/png 格式图片</div>
        </template>
      </CrystalImages>
    </div>

    <h3>限制文件大小</h3>
    <div class="demo-item">
      <CrystalImages
        v-model:fileList="limitedSizeImages"
        :api="uploadApi"
        :fileSize="1"
        :limit="3"
      >
        <template #tip>
          <div>单张图片大小不超过 1MB</div>
        </template>
      </CrystalImages>
    </div>

    <h3>非拖拽模式</h3>
    <div class="demo-item">
      <CrystalImages
        v-model:fileList="nonDragImages"
        :api="uploadApi"
        :drag="false"
        :limit="3"
      >
        <template #tip>
          <div>非拖拽模式，点击上传</div>
        </template>
      </CrystalImages>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Plus } from '@element-plus/icons-vue';
import { CrystalImages } from "crystalplus-ui";

// 基本多图片
const basicImages = ref([]);

// 自定义样式
const customStyleImages = ref([]);

// 禁用状态
const disabledImages = ref([
  {
    uid: '1',
    name: '示例图片1.jpg',
    url: 'https://via.placeholder.com/150/409eff/ffffff?text=Image+1'
  },
  {
    uid: '2',
    name: '示例图片2.jpg',
    url: 'https://via.placeholder.com/150/67c23a/ffffff?text=Image+2'
  }
]);

// 限制文件类型
const limitedTypeImages = ref([]);

// 限制文件大小
const limitedSizeImages = ref([]);

// 非拖拽模式
const nonDragImages = ref([]);

// 模拟上传 API
const uploadApi = async (formData: FormData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 模拟返回文件 URL
      const file = formData.get('file') as Blob;
      const fileUrl = URL.createObjectURL(file);
      resolve({ fileUrl });
    }, 1000);
  });
};

// 上传成功处理
const onUploadSuccess = (response: any, file: any) => {
  console.log('上传成功:', response, file);
};

// 上传失败处理
const onUploadError = (error: any, file: any) => {
  console.error('上传失败:', error, file);
};

// 删除文件处理
const onRemove = (file: any) => {
  console.log('删除文件:', file);
};
</script>

<style scoped>
.demo-container {
  max-width: 800px;
}

.demo-item {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  background-color: #f9fafc;
}

h3 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #303133;
}

:deep(.el-upload__tip) {
  margin-top: 10px;
  font-size: 12px;
  color: #909399;
}
</style>