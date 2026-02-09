<template>
  <div class="tree-advanced-demo">
    <h3>高级树形组件</h3>
    <div class="demo-section">
      <h4>自定义节点内容</h4>
      <CrystalTree v-model="customValue" :data="defaultData">
        <template #default="{ scope }">
          <div class="custom-node">
            <el-button type="primary" size="small" @click.stop="handleNodeClick(scope.node)">
              操作
            </el-button>
            <span>{{ scope.node.label }}</span>
            <el-tag size="small" v-if="scope.node.id % 2 === 0">偶数节点</el-tag>
          </div>
        </template>
      </CrystalTree>
      <div class="selected-value">
        选中的值: {{ customValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>自定义展开/折叠图标</h4>
      <CrystalTree v-model="iconValue" :data="defaultData">
        <template #default="{ scope }">
          <span>{{ scope.node.label }}</span>
        </template>
        <template #default-expand-icon="{ scope }">
          <el-icon v-if="!scope.expanded"><ArrowRight /></el-icon>
          <el-icon v-else><ArrowDown /></el-icon>
        </template>
        <template #default-collapse-icon="{ scope }">
          <el-icon><ArrowDown /></el-icon>
        </template>
      </CrystalTree>
      <div class="selected-value">
        选中的值: {{ iconValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>带筛选功能的树形结构</h4>
      <el-input
        v-model="filterText"
        placeholder="输入关键词筛选"
        style="margin-bottom: 10px; width: 200px;"
      />
      <CrystalTree
        v-model="filterValue"
        :data="defaultData"
        :filter-node-method="filterNode"
        ref="treeRef"
      >
        <template #default="{ scope }">
          <span>{{ scope.node.label }}</span>
        </template>
      </CrystalTree>
      <div class="selected-value">
        选中的值: {{ filterValue }}
      </div>
    </div>
    
    <div class="demo-section">
      <h4>异步加载树形结构</h4>
      <CrystalTree
        v-model="lazyValue"
        :data="lazyData"
        lazy
        :load="loadNode"
        show-checkbox
      >
        <template #default="{ scope }">
          <span>{{ scope.node.label }}</span>
        </template>
      </CrystalTree>
      <div class="selected-value">
        选中的值: {{ lazyValue }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { CrystalTree } from 'crystalplus-ui'
import { ArrowRight, ArrowDown } from '@element-plus/icons-vue'

// 绑定值
const customValue = ref([])
const iconValue = ref([])
const filterValue = ref([])
const lazyValue = ref([])

// 引用
const treeRef = ref(null)

// 筛选文本
const filterText = ref('')

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

// 懒加载数据
const lazyData = [
  {
    id: 1,
    label: '异步节点 1',
    hasChildren: true
  },
  {
    id: 2,
    label: '异步节点 2',
    hasChildren: true
  }
]

// 处理节点点击
const handleNodeClick = (node) => {
  console.log('点击节点:', node)
  customValue.value = [node.id]
}

// 筛选节点方法
const filterNode = (value, data) => {
  if (!value) return true
  return data.label.includes(value)
}

// 监听筛选文本变化
watch(filterText, (val) => {
  if (treeRef.value) {
    treeRef.value.filter(val)
  }
})

// 异步加载节点方法
const loadNode = (node, resolve) => {
  setTimeout(() => {
    const children = []
    for (let i = 1; i <= 3; i++) {
      children.push({
        id: `${node.id}-${i}`,
        label: `${node.label}-${i}`,
        hasChildren: node.level < 2
      })
    }
    resolve(children)
  }, 500)
}
</script>

<style scoped>
.tree-advanced-demo {
  max-width: 800px;
}

.tree-advanced-demo h3 {
  margin: 30px 0 20px 0;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.tree-advanced-demo h4 {
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

.custom-node {
  display: flex;
  align-items: center;
  gap: 10px;
}

.custom-node .el-button {
  margin-right: 10px;
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
  height: 36px;
  line-height: 36px;
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
</style>