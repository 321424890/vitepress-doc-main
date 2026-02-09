<template>
  <div class="cascader-search-demo">
    <h3>搜索级联选择器</h3>
    <div class="cascader-group">
      <CrystalCascader
        v-model="searchValue"
        :options="options"
        filterable
        placeholder="可搜索"
      />
      <CrystalCascader
        v-model="highlightValue"
        :options="options"
        filterable
        highlight-search-text
        placeholder="搜索高亮"
      />
      <CrystalCascader
        v-model="debounceValue"
        :options="options"
        filterable
        :debounce="500"
        placeholder="自定义防抖时间"
      />
    </div>
    
    <h3>禁用状态</h3>
    <div class="cascader-group">
      <CrystalCascader
        v-model="disabledValue"
        :options="options"
        disabled
        placeholder="完全禁用"
      />
      <CrystalCascader
        v-model="partialDisabledValue"
        :options="disabledOptions"
        placeholder="部分禁用"
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
  },
  {
    value: 'shanghai',
    label: '上海',
    children: [
      {
        value: 'pudong',
        label: '浦东',
        children: [
          { value: 'lujiazui', label: '陆家嘴' },
          { value: 'jinqiao', label: '金桥' }
        ]
      },
      {
        value: 'huangpu',
        label: '黄浦',
        children: [
          { value: 'nanjingroad', label: '南京路' },
          { value: 'thebund', label: '外滩' }
        ]
      }
    ]
  }
]

// 包含禁用选项的数据
const disabledOptions = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖' },
          { value: 'xiasha', label: '下沙', disabled: true }
        ]
      },
      {
        value: 'ningbo',
        label: '宁波',
        disabled: true,
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
      }
    ]
  }
]

// 绑定值
const searchValue = ref([])
const highlightValue = ref([])
const debounceValue = ref([])
const disabledValue = ref([])
const partialDisabledValue = ref([])
</script>

<style scoped>
.cascader-search-demo {
  max-width: 800px;
}

.cascader-search-demo h3 {
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