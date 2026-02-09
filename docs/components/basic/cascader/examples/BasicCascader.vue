<template>
  <div class="cascader-basic-demo">
    <h3>基础级联选择器</h3>
    <div class="cascader-group">
      <CrystalCascader
        v-model="defaultValue"
        :options="options"
        placeholder="请选择地区"
      />
      <CrystalCascader
        v-model="clearableValue"
        :options="options"
        clearable
        placeholder="可清空"
      />
      <CrystalCascader
        v-model="lastLevelValue"
        :options="options"
        :show-all-levels="false"
        placeholder="只显示最后一级"
      />
      <CrystalCascader
        v-model="separatorValue"
        :options="options"
        separator=" > "
        placeholder="自定义分隔符"
      />
    </div>
    
    <h3>多选级联选择器</h3>
    <div class="cascader-group">
      <CrystalCascader
        v-model="multipleValue"
        :options="options"
        :multiple-limit="3"
        placeholder="基础多选"
      />
      <CrystalCascader
        v-model="collapseValue"
        :options="options"
        :multiple-limit="3"
        collapse-tags
        placeholder="折叠标签"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalCascader } from 'crystalplus-ui'

// 级联选择器选项
const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖' },
          { value: 'xiasha', label: '下沙' }
        ]
      },
      {
        value: 'ningbo',
        label: '宁波',
        children: [
          { value: 'haishu', label: '海曙' },
          { value: 'jiangbei', label: '江北' }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          { value: 'xuanwu', label: '玄武' },
          { value: 'jianye', label: '建邺' }
        ]
      },
      {
        value: 'suzhou',
        label: '苏州',
        children: [
          { value: 'gusu', label: '姑苏' },
          { value: 'huqiu', label: '虎丘' }
        ]
      }
    ]
  }
]

// 绑定值
const defaultValue = ref([])
const clearableValue = ref([])
const lastLevelValue = ref([])
const separatorValue = ref([])
const multipleValue = ref([])
const collapseValue = ref([])
</script>

<style scoped>
.cascader-basic-demo {
  max-width: 1000px;
}

.cascader-basic-demo h3 {
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.cascader-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

/* 美化级联选择器样式 */
:deep(.el-cascader) {
  width: 240px;
}

:deep(.el-cascader__wrapper) {
  border-radius: 6px;
  transition: all 0.3s ease;
}
</style>