<template>
  <div class="tree-select-demo">
    <h4>高级树选择</h4>
    <div class="flex flex-wrap gap-4">
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">默认展开全部</p>
        <CrystalTreeSelect 
          v-model="expandAllValue" 
          :data="treeData" 
          node-key="id"
          :default-expand-all="true"
          style="width: 240px"
        />
      </div>

      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">严格勾选模式</p>
        <CrystalTreeSelect 
          v-model="strictValue" 
          :data="treeData" 
          node-key="id"
          :show-checkbox="true"
          :check-strictly="true"
          style="width: 240px"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">带图标节点</p>
        <CrystalTreeSelect 
          v-model="iconValue" 
          :data="treeDataWithIcons" 
          node-key="id"
          style="width: 240px"
        >
          <template #node="{ data }">
            <div class="flex items-center">
              <span v-if="data.icon" class="mr-2">{{ data.icon }}</span>
              <span>{{ data.label }}</span>
            </div>
          </template>
        </CrystalTreeSelect>
      </div>
    
    </div>
    
    <div class="value-display" style="margin-top: 20px;">
      <h4>选择值</h4>
      <p>默认展开全部: {{ expandAllValue }}</p>

      <p>严格勾选模式: {{ strictValue }}</p>
      <p>带图标节点: {{ iconValue }}</p>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalTreeSelect } from 'crystalplus-ui'

const expandAllValue = ref('')
const accordionValue = ref('')
const strictValue = ref([])
const iconValue = ref('')
const greenValue = ref('')
const redValue = ref('')

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

// 带图标的树数据
const treeDataWithIcons = [
  {
    id: 1,
    label: '一级菜单',
    icon: '📁',
    children: [
      {
        id: 11,
        label: '二级菜单 1',
        icon: '📂',
        children: [
          { id: 111, label: '三级菜单 1-1', icon: '📄' },
          { id: 112, label: '三级菜单 1-2', icon: '📄' }
        ]
      },
      {
        id: 12,
        label: '二级菜单 2',
        icon: '📂',
        children: [
          { id: 121, label: '三级菜单 2-1', icon: '📄' },
          { id: 122, label: '三级菜单 2-2', icon: '📄' }
        ]
      }
    ]
  },
  {
    id: 2,
    label: '一级菜单 2',
    icon: '📁',
    children: [
      {
        id: 21,
        label: '二级菜单 3',
        icon: '📂',
        children: [
          { id: 211, label: '三级菜单 3-1', icon: '📄' },
          { id: 212, label: '三级菜单 3-2', icon: '📄' }
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

.items-center {
  align-items: center;
}

.mr-2 {
  margin-right: 8px;
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
