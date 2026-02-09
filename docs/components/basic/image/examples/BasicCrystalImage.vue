<template>
  <div class="crystal-image-basic-demo">
    <div class="demo-section">
      <h4>基础图片上传</h4>
      <CrystalImage 
        v-model:imageUrl="basicImageUrl" 
        :api="uploadApi" 
      />
      <div class="value-display">
        图片地址: {{ basicImageUrl }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>禁用的图片上传</h4>
      <CrystalImage 
        v-model:imageUrl="disabledImageUrl" 
        :api="uploadApi" 
        :disabled="true" 
      />
      <div class="value-display">
        图片地址: {{ disabledImageUrl }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>自定义尺寸的图片上传</h4>
      <CrystalImage 
        v-model:imageUrl="customSizeImageUrl" 
        :api="uploadApi" 
        :width="'200px'" 
        :height="'150px'" 
        :border-radius="'12px'" 
      />
      <div class="value-display">
        图片地址: {{ customSizeImageUrl }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>带提示的图片上传</h4>
      <CrystalImage 
        v-model:imageUrl="withTipImageUrl" 
        :api="uploadApi" 
      >
        <template #tip>
          <div style="color: #999; font-size: 12px;">
            支持 jpg/png/gif 格式，大小不超过 5MB
          </div>
        </template>
      </CrystalImage>
      <div class="value-display">
        图片地址: {{ withTipImageUrl }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>自定义空状态的图片上传</h4>
      <CrystalImage 
        v-model:imageUrl="customEmptyImageUrl" 
        :api="uploadApi" 
      >
        <template #empty>
          <div style="text-align: center; color: #999;">
            <el-icon><Plus /></el-icon>
            <div>点击上传图片</div>
          </div>
        </template>
      </CrystalImage>
      <div class="value-display">
        图片地址: {{ customEmptyImageUrl }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { CrystalImage } from "crystalplus-ui"
import { Plus } from "@element-plus/icons-vue"

// 基础使用
const basicImageUrl = ref('')
const disabledImageUrl = ref('')
const customSizeImageUrl = ref('')
const withTipImageUrl = ref('')
const customEmptyImageUrl = ref('')

// 模拟上传API
const uploadApi = async (formData: FormData) => {
  // 模拟上传接口，实际请替换为真实接口调用
  return new Promise<{ fileUrl: string }>((resolve) => {
    setTimeout(() => {
      resolve({ fileUrl: URL.createObjectURL(formData.get('file') as Blob) });
    }, 1000);
  });
};
</script>

<style scoped>
.crystal-image-basic-demo {
  max-width: 800px;
}

.demo-section {
  margin-bottom: 30px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
}

.demo-section h4 {
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: 500;
  color: #666;
}

.value-display {
  margin-top: 15px;
  padding: 10px;
  background: #f0f2f5;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
  word-break: break-all;
}
</style>