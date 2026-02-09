# 图片上传组件

图片上传组件是基于 Element Plus 的上传组件封装的，提供了单图片上传和多图片上传两种模式，支持拖拽上传、文件验证、自定义样式等功能。

## 组件列表

- **CrystalImage**：单图片上传组件
- **CrystalImages**：多图片上传组件

## CrystalImage 组件

### 基本用法

<CrystalImageDemo />

### 属性

| 属性名         | 类型                            | 默认值                                     | 说明                            |
| -------------- | ------------------------------- | ------------------------------------------ | ------------------------------- |
| `imageUrl`     | `string`                        | `""`                                       | 图片地址，支持 v-model 双向绑定 |
| `api`          | `(params: any) => Promise<any>` | 必填                                       | 上传图片的 API 方法             |
| `drag`         | `boolean`                       | `true`                                     | 是否支持拖拽上传                |
| `disabled`     | `boolean`                       | `false`                                    | 是否禁用上传组件                |
| `fileSize`     | `number`                        | `5`                                        | 图片大小限制（单位：MB）        |
| `fileType`     | `string[]`                      | `["image/jpeg", "image/png", "image/gif"]` | 图片类型限制                    |
| `height`       | `string`                        | `"150px"`                                  | 组件高度                        |
| `width`        | `string`                        | `"150px"`                                  | 组件宽度                        |
| `borderRadius` | `string`                        | `"8px"`                                    | 组件边框圆角                    |
| `wrapperStyle` | `object`                        | `{}`                                       | 自定义包装器样式                |

### 事件

| 事件名            | 参数                       | 说明             |
| ----------------- | -------------------------- | ---------------- |
| `update:imageUrl` | `value: string`            | 图片地址更新事件 |
| `upload-success`  | `response: any, file: any` | 上传成功事件     |
| `upload-error`    | `error: any, file: any`    | 上传失败事件     |

### 插槽

| 插槽名  | 说明         |
| ------- | ------------ |
| `empty` | 空状态插槽   |
| `tip`   | 提示信息插槽 |

## CrystalImages 组件

### 基本用法

<CrystalImagesDemo />

### 属性

| 属性名         | 类型                                                   | 默认值                                     | 说明                            |
| -------------- | ------------------------------------------------------ | ------------------------------------------ | ------------------------------- |
| `fileList`     | `UploadUserFile[]`                                     | `[]`                                       | 文件列表，支持 v-model 双向绑定 |
| `api`          | `(formData: FormData) => Promise<{ fileUrl: string }>` | 必填                                       | 上传接口函数                    |
| `drag`         | `boolean`                                              | `true`                                     | 是否开启拖拽上传                |
| `disabled`     | `boolean`                                              | `false`                                    | 是否禁用上传                    |
| `limit`        | `number`                                               | `5`                                        | 最大上传数量                    |
| `multiple`     | `boolean`                                              | `true`                                     | 是否支持多选上传                |
| `fileSize`     | `number`                                               | `5`                                        | 单个文件大小限制（单位：MB）    |
| `fileType`     | `ImageMimeType[]`                                      | `["image/jpeg", "image/png", "image/gif"]` | 支持的图片类型                  |
| `height`       | `string`                                               | `"150px"`                                  | 上传区域高度                    |
| `width`        | `string`                                               | `"150px"`                                  | 上传区域宽度                    |
| `borderRadius` | `string`                                               | `"8px"`                                    | 上传区域圆角                    |

### 事件

| 事件名            | 参数                              | 说明             |
| ----------------- | --------------------------------- | ---------------- |
| `update:fileList` | `value: UploadUserFile[]`         | 文件列表变化事件 |
| `upload-success`  | `response: any, file: UploadFile` | 上传成功回调     |
| `upload-error`    | `error: any, file: UploadFile`    | 上传失败回调     |
| `remove`          | `file: UploadFile`                | 删除文件时触发   |

### 插槽

| 插槽名  | 说明         |
| ------- | ------------ |
| `empty` | 空状态插槽   |
| `tip`   | 提示信息插槽 |

## 类型定义

### ImageMimeType

```typescript
type ImageMimeType =
  | "image/jpeg"
  | "image/png"
  | "image/gif"
  | "image/webp"
  | "image/svg+xml";
```

### UploadUserFile

```typescript
interface UploadUserFile {
  uid: string;
  name: string;
  url: string;
  status?: string;
  response?: any;
}
```

## 示例代码

### CrystalImage 基本用法

```vue
<template>
  <CrystalImage
    v-model:imageUrl="imageUrl"
    :api="uploadApi"
    :width="'200px'"
    :height="'200px'"
    :borderRadius="'8px'"
  >
    <template #tip>
      <div>支持 jpg/png/gif 格式，单张不超过 5MB</div>
    </template>
  </CrystalImage>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CrystalImage from "crystalplus-ui";

const imageUrl = ref("");

const uploadApi = async (formData: FormData) => {
  // 模拟上传接口
  return new Promise((resolve) => {
    setTimeout(() => {
      const file = formData.get("file") as Blob;
      resolve({ fileUrl: URL.createObjectURL(file) });
    }, 1000);
  });
};
</script>
```

### CrystalImages 基本用法

```vue
<template>
  <CrystalImages v-model:fileList="fileList" :api="uploadApi" :limit="3">
    <template #tip>
      <div>支持 jpg/png/gif 格式，单张不超过 5MB，最多上传 3 张</div>
    </template>
  </CrystalImages>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CrystalImages from "crystalplus-ui";

const fileList = ref([]);

const uploadApi = async (formData: FormData) => {
  // 模拟上传接口
  return new Promise((resolve) => {
    setTimeout(() => {
      const file = formData.get("file") as Blob;
      resolve({ fileUrl: URL.createObjectURL(file) });
    }, 1000);
  });
};
</script>
```

## 注意事项

1. **API 方法**：组件需要传入一个返回 Promise 的 API 方法，用于处理实际的文件上传逻辑。

2. **响应格式**：API 方法的返回值需要包含 `fileUrl` 字段，或者 `data.fileUrl` 字段，用于更新图片地址。

3. **文件验证**：组件内置了文件类型和大小的验证，超出限制会自动提示错误信息。

4. **样式自定义**：可以通过 `width`、`height`、`borderRadius` 等属性自定义组件样式，也可以通过 `wrapperStyle` 属性进行更详细的样式配置。

5. **表单集成**：组件支持与 Element Plus 的表单组件集成，自动触发表单验证。

<script setup>
import CrystalImageDemo from './examples/BasicCrystalImage.vue';
import CrystalImagesDemo from './examples/AdvancedCrystalImages.vue';
</script>
