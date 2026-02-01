<template>
  <div class="demo-container">
    <div class="demo-content">
      <Suspense>
        <component :is="demoComponent" v-if="demoComponent" />
        <template #fallback>
          <div style="padding: 24px; text-align: center; color: #666;">加载中...</div>
        </template>
      </Suspense>
    </div>
    <div class="demo-code">
      <div class="demo-code-header">
        <div class="demo-code-title">{{ title }}</div>
        <div class="demo-code-actions">
          <button class="demo-code-action" @click="copyCode" title="复制代码">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
          <button class="demo-code-action" @click="toggleCode" title="显示/隐藏代码">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <div class="demo-code-content" v-show="showCode">
        <pre><code :class="`language-${lang}`">{{ code }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, shallowRef, defineAsyncComponent, h, Suspense } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  componentName: {
    type: String,
    default: ''
  },
  importPath: {
    type: String,
    default: ''
  },
  lang: {
    type: String,
    default: 'vue'
  },
  title: {
    type: String,
    default: ''
  }
})

const showCode = ref(false)
const demoComponent = shallowRef<any>(null)

// 添加调试信息
console.log('Demo 组件被调用，props:', {
  code: props.code ? props.code.substring(0, 50) + '...' : '无',
  componentName: props.componentName,
  importPath: props.importPath,
  lang: props.lang,
  title: props.title
})

// 使用 import.meta.glob 预加载所有组件，避免动态导入路径问题
// 这样可以避免 MIME 类型错误
// @ts-ignore - Vite 的 import.meta.glob 在 TypeScript 中需要忽略类型检查
const componentModules = import.meta.glob('../../components/**/*.vue', { eager: false })

// 使用 defineAsyncComponent 动态导入组件
if (props.importPath) {
  console.log('[Demo] 开始设置动态导入，路径:', props.importPath)
  
  // 构建正确的导入路径
  let importPath = props.importPath
  
  // 确保路径以 .vue 结尾
  if (!importPath.endsWith('.vue')) {
    importPath += '.vue'
  }
  
  // 移除可能的 /docs/ 前缀和开头的 /
  importPath = importPath.replace(/^\/?docs\//, '').replace(/^\//, '')
  
  // 构建 glob 匹配的路径格式
  // import.meta.glob 使用的是相对于当前文件的路径
  // 从 .vitepress/theme/components/ 到 docs/components/ 的路径
  const globPath = `../../../${importPath}`
  
  console.log('[Demo] 原始路径:', props.importPath)
  console.log('[Demo] 转换后路径:', importPath)
  console.log('[Demo] Glob 路径:', globPath)
  console.log('[Demo] 可用的组件模块:', Object.keys(componentModules))
  
  // 查找匹配的组件
  const matchedPath = Object.keys(componentModules).find(key => {
    // 匹配路径，例如: ../../components/basic/text/examples/BasicUsage.vue
    const normalizedKey = key.replace(/\\/g, '/')
    const normalizedImport = globPath.replace(/\\/g, '/')
    return normalizedKey === normalizedImport || normalizedKey.endsWith(importPath)
  })
  
  console.log('[Demo] 匹配的路径:', matchedPath)
  
  if (matchedPath && componentModules[matchedPath]) {
    // 使用预加载的组件
    demoComponent.value = defineAsyncComponent({
      loader: async () => {
        try {
          const module = await componentModules[matchedPath]()
          console.log('[Demo] 从 glob 加载成功，模块:', module)
          if (module && (module.default || module)) {
            return module.default || module
          }
          throw new Error('组件模块格式不正确')
        } catch (error: any) {
          console.error('[Demo] 从 glob 加载失败:', error)
          throw error
        }
      }
    })
  } else {
    // 如果 glob 中没有找到，尝试直接导入（降级方案）
    console.warn('[Demo] 在 glob 中未找到组件，尝试直接导入')
    const pathsToTry = [
      globPath, // ../../components/basic/text/examples/BasicUsage.vue
      `../../../../${importPath}`, // 相对路径
    ]
    
    demoComponent.value = defineAsyncComponent({
      loader: async () => {
        try {
          let lastError: any = null
          for (const path of pathsToTry) {
            try {
              console.log(`[Demo] 尝试直接导入路径: ${path}`)
              const module = await import(/* @vite-ignore */ path)
              console.log('[Demo] 直接导入成功:', path)
              if (module && (module.default || module)) {
                return module.default || module
              }
            } catch (e: any) {
              lastError = e
              console.error(`[Demo] 路径 ${path} 导入失败:`, e.message)
              continue
            }
          }
          throw new Error(`无法加载组件: ${props.importPath}`)
        } catch (error: any) {
          console.error('组件加载错误:', error)
          return {
            default: () => h('div', { 
              style: 'color: red; padding: 16px; border: 1px solid red; border-radius: 4px; margin: 16px;' 
            }, [
              h('div', { style: 'font-weight: bold; margin-bottom: 8px;' }, '组件加载失败'),
              h('div', { style: 'font-size: 12px; color: #999;' }, `路径: ${props.importPath}`),
              h('div', { style: 'font-size: 12px; color: #999; margin-top: 4px;' }, `错误: ${error.message || '未知错误'}`),
              h('div', { style: 'font-size: 11px; color: #666; margin-top: 8px; padding-top: 8px; border-top: 1px solid #eee;' }, 
                '提示: 请确保组件路径正确，并且组件文件存在。'
              )
            ])
          }
        }
      },
      errorComponent: {
        render: () => h('div', { 
          style: 'color: red; padding: 16px; border: 1px solid red; border-radius: 4px;' 
        }, `组件加载失败: ${props.importPath}`)
      },
      loadingComponent: {
        render: () => h('div', { 
          style: 'color: #666; padding: 16px; text-align: center;' 
        }, '加载中...')
      },
      delay: 200,
      timeout: 5000
    })
  }
} else if (props.componentName) {
  // 如果没有导入路径，显示提示
  demoComponent.value = {
    render: () => h('div', { 
      style: 'color: orange; padding: 16px; border: 1px solid orange; border-radius: 4px;' 
    }, `请提供组件导入路径。组件名称: ${props.componentName}`)
  }
}

const copyCode = () => {
  navigator.clipboard.writeText(props.code).then(() => {
    // 可以添加复制成功的提示
    console.log('代码已复制')
  })
}

const toggleCode = () => {
  showCode.value = !showCode.value
}

onMounted(() => {
  // 高亮代码
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block as HTMLElement)
  })
})
</script>

<style scoped>
.demo-container {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
}

.demo-content {
  padding: 24px;
  background-color: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-border);
}

.demo-code {
  background-color: var(--vp-c-bg-alt);
}

.demo-code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-border);
}

.demo-code-title {
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.demo-code-actions {
  display: flex;
  gap: 8px;
}

.demo-code-action {
  background: none;
  border: none;
  color: var(--vp-c-text-2);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
}

.demo-code-action:hover {
  background-color: var(--vp-c-border);
  color: var(--vp-c-text-1);
}

.demo-code-content {
  padding: 0;
  overflow: auto;
}

.demo-code-content pre {
  margin: 0;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
}

.demo-code-content code {
  font-family: var(--vp-font-family-mono);
}
</style>