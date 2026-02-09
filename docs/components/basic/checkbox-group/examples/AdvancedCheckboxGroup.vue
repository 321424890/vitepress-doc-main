<template>
  <div class="checkbox-group-advanced-demo">
    <h3>全选功能</h3>
    <div class="demo-section">
      <CrystalCheckbox v-model="selectAll" :indeterminate="isIndeterminate" @change="handleSelectAllChange">
        全选
      </CrystalCheckbox>
      <div class="sub-checkbox-group">
        <CrystalCheckboxGroup v-model="itemValues" @change="handleItemChange">
          <CrystalCheckbox label="item1">项目1</CrystalCheckbox>
          <CrystalCheckbox label="item2">项目2</CrystalCheckbox>
          <CrystalCheckbox label="item3">项目3</CrystalCheckbox>
          <CrystalCheckbox label="item4">项目4</CrystalCheckbox>
          <CrystalCheckbox label="item5">项目5</CrystalCheckbox>
        </CrystalCheckboxGroup>
      </div>
      <div class="selected-values">
        选中的值: {{ itemValues }}
      </div>
    </div>
    
    <h3>自定义选项</h3>
    <div class="demo-section">
      <h4>带描述的选项</h4>
      <CrystalCheckboxGroup v-model="customValues">
        <div class="custom-option">
          <CrystalCheckbox label="option1">
            <div class="option-content">
              <div class="option-title">选项1</div>
              <div class="option-desc">这是选项1的详细描述</div>
            </div>
          </CrystalCheckbox>
        </div>
        <div class="custom-option">
          <CrystalCheckbox label="option2">
            <div class="option-content">
              <div class="option-title">选项2</div>
              <div class="option-desc">这是选项2的详细描述</div>
            </div>
          </CrystalCheckbox>
        </div>
        <div class="custom-option">
          <CrystalCheckbox label="option3">
            <div class="option-content">
              <div class="option-title">选项3</div>
              <div class="option-desc">这是选项3的详细描述</div>
            </div>
          </CrystalCheckbox>
        </div>
      </CrystalCheckboxGroup>
      <div class="selected-values">
        选中的值: {{ customValues }}
      </div>
    </div>
    
    <h3>事件处理</h3>
    <div class="demo-section">
      <h4>值变化事件</h4>
      <CrystalCheckboxGroup v-model="eventValues" @change="handleGroupChange">
        <CrystalCheckbox label="event1">事件1</CrystalCheckbox>
        <CrystalCheckbox label="event2">事件2</CrystalCheckbox>
        <CrystalCheckbox label="event3">事件3</CrystalCheckbox>
      </CrystalCheckboxGroup>
      <div class="selected-values">
        选中的值: {{ eventValues }}
      </div>
      <div class="event-log" v-if="eventLog">
        事件日志: {{ eventLog }}
      </div>
    </div>
    
    <h3>动态选项</h3>
    <div class="demo-section">
      <h4>根据数据动态生成选项</h4>
      <CrystalCheckboxGroup v-model="dynamicValues" :options="dynamicOptions" />
      <div class="selected-values">
        选中的值: {{ dynamicValues }}
      </div>
      <div class="action-buttons">
        <button @click="addOption" class="add-btn">添加选项</button>
        <button @click="removeOption" class="remove-btn">移除选项</button>
      </div>
    </div>
    
    <h3>嵌套复选框组</h3>
    <div class="demo-section">
      <h4>分组管理</h4>
      <div class="nested-group">
        <div class="group-item">
          <CrystalCheckbox v-model="group1Selected" @change="handleGroup1Change">
            组1
          </CrystalCheckbox>
          <div class="sub-group">
            <CrystalCheckboxGroup v-model="group1Values">
              <CrystalCheckbox label="group1-1">组1-1</CrystalCheckbox>
              <CrystalCheckbox label="group1-2">组1-2</CrystalCheckbox>
              <CrystalCheckbox label="group1-3">组1-3</CrystalCheckbox>
            </CrystalCheckboxGroup>
          </div>
        </div>
        <div class="group-item">
          <CrystalCheckbox v-model="group2Selected" @change="handleGroup2Change">
            组2
          </CrystalCheckbox>
          <div class="sub-group">
            <CrystalCheckboxGroup v-model="group2Values">
              <CrystalCheckbox label="group2-1">组2-1</CrystalCheckbox>
              <CrystalCheckbox label="group2-2">组2-2</CrystalCheckbox>
              <CrystalCheckbox label="group2-3">组2-3</CrystalCheckbox>
            </CrystalCheckboxGroup>
          </div>
        </div>
      </div>
      <div class="selected-values">
        组1选中: {{ group1Values }}, 组2选中: {{ group2Values }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { CrystalCheckboxGroup, CrystalCheckbox } from 'crystalplus-ui'

// 全选功能
const itemValues = ref(['item1', 'item2'])
const selectAll = ref(false)
const isIndeterminate = computed(() => {
  return itemValues.value.length > 0 && itemValues.value.length < 5
})

const handleSelectAllChange = (val) => {
  if (val) {
    itemValues.value = ['item1', 'item2', 'item3', 'item4', 'item5']
  } else {
    itemValues.value = []
  }
}

const handleItemChange = () => {
  if (itemValues.value.length === 5) {
    selectAll.value = true
  } else if (itemValues.value.length === 0) {
    selectAll.value = false
  }
}

// 自定义选项
const customValues = ref(['option1'])

// 事件处理
const eventValues = ref(['event1'])
const eventLog = ref('')

const handleGroupChange = (val) => {
  eventLog.value = `值已更改为: [${val.join(', ')}]，时间: ${new Date().toLocaleTimeString()}`
  // 3秒后清除日志
  setTimeout(() => {
    eventLog.value = ''
  }, 3000)
}

// 动态选项
const dynamicOptions = ref([
  { label: '动态选项1', value: 'dynamic1' },
  { label: '动态选项2', value: 'dynamic2' },
  { label: '动态选项3', value: 'dynamic3' }
])
const dynamicValues = ref(['dynamic1'])
let optionCount = 3

const addOption = () => {
  optionCount++
  dynamicOptions.value.push({
    label: `动态选项${optionCount}`,
    value: `dynamic${optionCount}`
  })
}

const removeOption = () => {
  if (dynamicOptions.value.length > 1) {
    const removedOption = dynamicOptions.value.pop()
    if (removedOption) {
      dynamicValues.value = dynamicValues.value.filter(val => val !== removedOption.value)
    }
  }
}

// 嵌套复选框组
const group1Values = ref(['group1-1'])
const group2Values = ref(['group2-2'])
const group1Selected = ref(false)
const group2Selected = ref(false)

const handleGroup1Change = (val) => {
  if (val) {
    group1Values.value = ['group1-1', 'group1-2', 'group1-3']
  } else {
    group1Values.value = []
  }
}

const handleGroup2Change = (val) => {
  if (val) {
    group2Values.value = ['group2-1', 'group2-2', 'group2-3']
  } else {
    group2Values.value = []
  }
}
</script>

<style scoped>
.checkbox-group-advanced-demo {
  max-width: 800px;
}

.checkbox-group-advanced-demo h3 {
  margin: 30px 0 20px 0;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.checkbox-group-advanced-demo h4 {
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

.sub-checkbox-group {
  margin-left: 25px;
  margin-top: 10px;
}

.selected-values {
  margin-top: 15px;
  padding: 10px;
  background: #f0f2f5;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
}

.event-log {
  margin-top: 10px;
  padding: 10px;
  background: #e6f7ff;
  border-radius: 4px;
  font-size: 14px;
  color: #1890ff;
}

/* 自定义选项样式 */
.custom-option {
  margin-bottom: 10px;
}

.option-content {
  display: flex;
  flex-direction: column;
}

.option-title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.option-desc {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

/* 动态选项样式 */
.action-buttons {
  margin-top: 15px;
}

.add-btn, .remove-btn {
  padding: 6px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
}

.add-btn:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background: #ecf5ff;
}

.remove-btn:hover {
  color: #f56c6c;
  border-color: #fbc4c4;
  background: #fef0f0;
}

/* 嵌套复选框组样式 */
.nested-group {
  margin-top: 10px;
}

.group-item {
  margin-bottom: 15px;
}

.sub-group {
  margin-left: 25px;
  margin-top: 10px;
}

/* 美化复选框样式 */
:deep(.el-checkbox) {
  margin-right: 15px;
}

:deep(.el-checkbox__input .el-checkbox__inner) {
  border-radius: 2px;
  transition: all 0.3s ease;
}
</style>