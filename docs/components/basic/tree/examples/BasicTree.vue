<template>
  <div class="tree-basic-demo">
    <h3>基础树形组件</h3>
    <div class="demo-section">
      <h4>默认树形结构</h4>
      <CrystalTree v-model="defaultValue" :data="defaultData">
        <template #default="{ scope }">
          <span>{{ scope.node.label }}</span>
        </template>
      </CrystalTree>
      <div class="selected-value">
        选中的值: {{ defaultValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>可复选树形结构</h4>
      <CrystalTree v-model="checkValue" :data="defaultData" show-checkbox>
        <template #default="{ scope }">
          <span>{{ scope.node.label }}</span>
        </template>
      </CrystalTree>
      <div class="selected-value">
        选中的值: {{ checkValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>禁用树形结构</h4>
      <CrystalTree v-model="disabledValue" :data="disabledData" disabled>
        <template #default="{ scope }">
          <span>{{ scope.node.label }}</span>
        </template>
      </CrystalTree>
      <div class="selected-value">
        选中的值: {{ disabledValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>默认展开指定节点</h4>
      <CrystalTree v-model="expandValue" :data="defaultData" :default-expanded-keys="[1, 3]">
        <template #default="{ scope }">
          <span>{{ scope.node.label }}</span>
        </template>
      </CrystalTree>
      <div class="selected-value">
        选中的值: {{ expandValue }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalTree } from 'crystalplus-ui'

// 绑定值
const defaultValue = ref([])
const checkValue = ref([])
const disabledValue = ref([])
const expandValue = ref([])

// 树形数据
const defaultData = [
  {
    id: 1,
    label: '一级节点 1',
    children: [
      {
        id: 2,
        label: '二级节点 1-1',
        children: [
          {
            id: 3,
            label: '三级节点 1-1-1'
          },
          {
            id: 4,
            label: '三级节点 1-1-2'
          }
        ]
      },
      {
        id: 5,
        label: '二级节点 1-2'
      }
    ]
  },
  {
    id: 6,
    label: '一级节点 2',
    children: [
      {
        id: 7,
        label: '二级节点 2-1'
      },
      {
        id: 8,
        label: '二级节点 2-2'
      }
    ]
  }
]

// 禁用状态数据
const disabledData = [
  {
    id: 1,
    label: '一级节点 1',
    disabled: true,
    children: [
      {
        id: 2,
        label: '二级节点 1-1',
        children: [
          {
            id: 3,
            label: '三级节点 1-1-1'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    label: '一级节点 2',
    children: [
      {
        id: 5,
        label: '二级节点 2-1',
        disabled: true
      }
    ]
  }
]
</script>

<style scoped>
.tree-basic-demo {
  max-width: 800px;
}

.tree-basic-demo h3 {
  margin: 30px 0 20px 0;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.tree-basic-demo h4 {
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: 500;
  color: #666;
}

.demo-section {
  margin-bottom: 30px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
}

.selected-value {
  margin-top: 15px;
  padding: 10px;
  background: #f0f2f5;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
}

/* 美化树形结构样式 */
:deep(.el-tree) {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
}

:deep(.el-tree-node) {
  padding: 2px 0;
}

:deep(.el-tree-node__content) {
  height: 32px;
  line-height: 32px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

:deep(.el-tree-node__content:hover) {
  background-color: #ecf5ff;
}

:deep(.el-tree-node.is-current > .el-tree-node__content) {
  background-color: #ecf5ff;
}

:deep(.el-tree-node.is-selected > .el-tree-node__content) {
  background-color: #ecf5ff;
}

:deep(.el-checkbox) {
  margin-right: 8px;
}
</style>