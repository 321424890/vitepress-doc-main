<template>
  <div class="tree-select-demo">
    <h4>基础树选择</h4>
    <div class="flex flex-wrap gap-4">
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">默认树选择</p>
        <CrystalTreeSelect 
          v-model="defaultValue" 
          :data="treeData" 
          node-key="id"
          style="width: 240px"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">带复选框</p>
        <CrystalTreeSelect 
          v-model="checkboxValue" 
          :data="treeData" 
          node-key="id"
          :show-checkbox="true"
          style="width: 240px"
        />
      </div>
    </div>
    
    <div class="value-display" style="margin-top: 20px;">
      <h4>选择值</h4>
      <p>默认树选择: {{ defaultValue }}</p>
      <p>带复选框: {{ checkboxValue }}</p>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalTreeSelect } from 'crystalplus-ui'

const defaultValue = ref('')
const checkboxValue = ref([])
const colorValue = ref('')

// 树数据
const treeData = [
  {
    id: 1,
    label: '一级菜单',
    children: [
      {
        id: 11,
        label: '二级菜单 1',
        children: [
          { id: 111, label: '三级菜单 1-1' },
          { id: 112, label: '三级菜单 1-2' }
        ]
      },
      {
        id: 12,
        label: '二级菜单 2',
        children: [
          { id: 121, label: '三级菜单 2-1' },
          { id: 122, label: '三级菜单 2-2' }
        ]
      }
    ]
  },
  {
    id: 2,
    label: '一级菜单 2',
    children: [
      {
        id: 21,
        label: '二级菜单 3',
        children: [
          { id: 211, label: '三级菜单 3-1' },
          { id: 212, label: '三级菜单 3-2' }
        ]
      }
    ]
  }
]
</script>

<style scoped>
.tree-select-demo {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #eaeaea;
}

.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.gap-4 {
  gap: 16px;
}

.value-display {
  margin-top: 20px;
  padding-top: 20px;
}

.value-display h4 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
}

.value-display p {
  margin: 5px 0;
  font-size: 14px;
  color: #606266;
}
</style>
