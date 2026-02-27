import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import * as fs from 'fs'

import { devDependencies } from '../../package.json'
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'
import markdownItContainer from 'markdown-it-container'
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'
import { MermaidMarkdown, MermaidPlugin } from 'vitepress-plugin-mermaid';

// 路径解析函数
const pathResolve = (dir: string) => {
  return resolve(__dirname, dir)
};

import { usePosts } from './theme/untils/permalink';
const { rewrites } = await usePosts();

export default defineConfig({
  lang: 'zh-CN',
  title: "crystalplus UI",
  description: "基于 Element Plus 的 Vue 3 组件库",
  rewrites,

  // 构建时忽略死链，避免打包失败（如需严格检查可设为 false 并修复链接）
  ignoreDeadLinks: true,

  // #region fav
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  // #endregion fav

  base: '/', //网站部署到github的vitepress这个仓库里

  // cleanUrls:true, //开启纯净链接无html

  //启用深色模式
  appearance: 'dark',

  //多语言
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    },
    fr: {
      label: 'French',
      lang: 'fr',
      link: '/fr/',
    }
  },

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true,

    // toc显示一级标题
    toc: {level: [1,2,3]},

    // 使用 `!!code` 防止转换
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],

    // 开启图片懒加载
    image: {
      lazyLoading: true
    },

    config: (md) => {
      // 组件插入h1标题下
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options)
        // 不在更新日志页面显示ArticleMetadata组件
        if (tokens[idx].tag === 'h1' && !env?.path?.includes('changelog')) {
          htmlResult += `<ArticleMetadata />`
        }
        return htmlResult
      }

      // 代码组中添加图片
      md.use((md) => {
        const defaultRender = md.render
        md.render = (...args) => {
          const [content, env] = args
          const currentLang = env?.localeIndex || 'root'
          const isHomePage = env?.path === '/' || env?.relativePath === 'index.md'  // 判断是否是首页

          if (isHomePage) {
            return defaultRender.apply(md, args) // 如果是首页，直接渲染内容
          }
          // 调用原始渲染
          let defaultContent = defaultRender.apply(md, args)
          // 替换内容
          if (currentLang === 'root') {
            defaultContent = defaultContent.replace(/NOTE/g, '提醒')
              .replace(/TIP/g, '建议')
              .replace(/IMPORTANT/g, '重要')
              .replace(/WARNING/g, '警告')
              .replace(/CAUTION/g, '注意')
          } else if (currentLang === 'ko') {
            // 韩文替换
            defaultContent = defaultContent.replace(/NOTE/g, '알림')
              .replace(/TIP/g, '팁')
              .replace(/IMPORTANT/g, '중요')
              .replace(/WARNING/g, '경고')
              .replace(/CAUTION/g, '주의')
          }
          // 返回渲染的内容
          return defaultContent
        }

        // 获取原始的 fence 渲染规则
        const defaultFence = md.renderer.rules.fence?.bind(md.renderer.rules) ?? ((...args) => args[0][args[1]].content);

        // 重写 fence 渲染规则
        md.renderer.rules.fence = (tokens, idx, options, env, self) => {
          const token = tokens[idx];
          const info = token.info.trim();

          // 判断是否为 md:img 类型的代码块
          if (info.includes('md:img')) {
            // 只渲染图片，不再渲染为代码块
            return `<div class="rendered-md">${md.render(token.content)}</div>`;
          }

          // 其他代码块按默认规则渲染（如 java, js 等）
          return defaultFence(tokens, idx, options, env, self);
        };
      })
      
      md.use(groupIconMdPlugin) //代码组图标
      md.use(markdownItTaskCheckbox) //todo
      md.use(MermaidMarkdown);
      
      // 处理 demo 路径的函数
      function processDemoPath(path: string) {
        // 在 Node.js 环境中解析路径并读取文件内容
        let code = '';
        let filePath = '';
        try {
          // 尝试不同的路径解析方式
          const possiblePaths = [
            // 相对于 docs 目录
            resolve(__dirname, '../../', path + '.vue'),
            resolve(__dirname, '../../', path),
            // 相对于当前工作目录
            resolve(process.cwd(), 'docs', path + '.vue'),
            resolve(process.cwd(), 'docs', path)
          ];
          
          console.log('尝试加载文件:', possiblePaths);
          
          for (const fp of possiblePaths) {
            if (fs.existsSync(fp)) {
              console.log('找到文件:', fp);
              filePath = fp;
              code = fs.readFileSync(fp, 'utf-8');
              break;
            }
          }
          
          if (!code) {
            console.error('Demo file not found:', path);
            code = `<!-- Demo file not found: ${path} -->`;
          }
        } catch (error: any) {
          console.error('Error loading demo file:', error);
          code = `<!-- Error loading demo file: ${error.message} -->`;
        }
        
        // 转义HTML字符
        function escapeHtml(str: string) {
          return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
        }
        
        // 从路径中提取组件名称（用于在 markdown 中引用）
        // 例如: components/basic/text/examples/BasicUsage -> BasicUsage
        const pathParts = path.split('/');
        const componentName = pathParts[pathParts.length - 1];
        
        // 构建相对于 docs 的导入路径（用于动态导入）
        let importPath = path;
        if (!importPath.endsWith('.vue')) {
          importPath += '.vue';
        }
        
        // 构建Demo组件，传递代码、组件名称和导入路径
        // 注意：组件名称应该与 markdown 文件中导入的组件名一致
        console.log(`生成 Demo 组件: componentName=${componentName}, importPath=${importPath}`);
        return `<Demo code="${escapeHtml(code)}" component-name="${escapeHtml(componentName)}" import-path="${escapeHtml(importPath)}" />`;
      }
      
      // 使用 markdown-it-container 处理 ::: demo ::: 语法
      md.use(markdownItContainer, 'demo', {
        validate: (params: string) => {
          return params.trim().startsWith('demo');
        },
        render: (tokens: any[], idx: number) => {
          const token = tokens[idx];
          
          if (token.nesting === 1) {
            // 开始标签
            // 查找容器内容
            let content = '';
            let tokenIndex = idx + 1;
            
            // 收集内容并标记所有内部token为已处理
            while (tokenIndex < tokens.length && tokens[tokenIndex].type !== 'container_demo_close') {
              if (tokens[tokenIndex].type === 'inline' || tokens[tokenIndex].type === 'text') {
                content += tokens[tokenIndex].content;
              }
              // 标记所有内部token为已处理，防止默认渲染
              tokens[tokenIndex].content = '';
              tokens[tokenIndex].type = 'text'; // 转换为文本token
              tokens[tokenIndex].children = null;
              tokenIndex++;
            }
            
            content = content.trim();
            
            console.log('渲染 demo 容器，内容:', content);
            
            if (content) {
              console.log('处理 demo 容器，路径:', content);
              const result = processDemoPath(content);
              console.log('处理结果:', result.substring(0, 100) + '...');
              return result;
            }
            // 如果没有内容，返回空
            return '';
          } else {
            // 结束标签
            return '';
          }
        }
      });
      
      // 重写 inline 渲染规则，跳过 demo 容器内的文本
      const defaultInlineRender = md.renderer.rules.inline;
      md.renderer.rules.inline = (tokens, idx, options, env, self) => {
        // 检查当前 token 是否在 demo 容器内
        let inDemoContainer = false;
        for (let i = idx - 1; i >= 0; i--) {
          if (tokens[i].type === 'container_demo_open') {
            inDemoContainer = true;
            break;
          }
          if (tokens[i].type === 'container_demo_close') {
            break;
          }
        }
        
        // 如果在 demo 容器内，返回空字符串
        if (inDemoContainer) {
          return '';
        }
        
        // 否则使用默认渲染规则
        return defaultInlineRender ? defaultInlineRender(tokens, idx, options, env, self) : self.renderToken(tokens, idx, options);
      };
      
      // 重写 text 渲染规则，跳过 demo 容器内的纯文本
      const defaultTextRender = md.renderer.rules.text;
      md.renderer.rules.text = (tokens, idx, options, env, self) => {
        // 检查当前 token 是否在 demo 容器内
        let inDemoContainer = false;
        for (let i = idx - 1; i >= 0; i--) {
          if (tokens[i].type === 'container_demo_open') {
            inDemoContainer = true;
            break;
          }
          if (tokens[i].type === 'container_demo_close') {
            break;
          }
        }
        
        // 如果在 demo 容器内，返回空字符串
        if (inDemoContainer) {
          return '';
        }
        
        // 否则使用默认渲染规则
        return defaultTextRender ? defaultTextRender(tokens, idx, options, env, self) : tokens[idx].content;
      };
      
      // 支持 ```demo 语法
      md.use((md) => {
        // 转义HTML字符
        function escapeHtml(str) {
          return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
        }
        
        // 重写 fence 渲染规则，处理 ```demo 语法
        const defaultFence = md.renderer.rules.fence?.bind(md.renderer.rules) ?? ((...args) => args[0][args[1]].content);
        md.renderer.rules.fence = (tokens, idx, options, env, self) => {
          const token = tokens[idx];
          const info = token.info.trim();
          
          // 处理 ```demo 语法
          if (info === 'demo') {
            const code = token.content.trim();
            return `<Demo code="${escapeHtml(code)}" />`;
          }
          
          // 其他代码块按默认规则渲染
          return defaultFence(tokens, idx, options, env, self);
        };
      });

    }

  },

  vite: {
    plugins: [
      // crystalplus-ui 使用 window，SSR 时用存根替换，避免 "window is not defined"
      {
        name: 'crystalplus-ssr-stub',
        enforce: 'pre',
        resolveId(id: string, _importer: string | undefined, options: { ssr?: boolean }) {
          if (options?.ssr && (id === 'crystalplus-ui' || id.startsWith('crystalplus-ui/'))) {
            return pathResolve('./crystalplus-ssr-stub.js')
          }
        }
      },
      groupIconVitePlugin({
        customIcon: {
          ts: localIconLoader(import.meta.url, '../public/svg/typescript.svg'), //本地ts图标导入
          md: localIconLoader(import.meta.url, '../public/svg/md.svg'), //markdown图标
          css: localIconLoader(import.meta.url, '../public/svg/css.svg'), //css图标
          js: 'logos:javascript', //js图标
        },
      }),
      [MermaidPlugin()]
    ]as any,
    optimizeDeps: {
      include: ['mermaid', 'echarts'],
      exclude: ['wangeditor'],
    },
    ssr: {
      noExternal: ['mermaid'],
    },
    resolve: {
      alias: {
        "@": pathResolve("../../src"),
        "@build": pathResolve("../../build"),
        // 使用用户指定的crystalplus-ui路径配置
        // "crystalplus-ui": pathResolve("../../../element-plus-wrapper/packages/crystal-ui/src/index.ts")
      }
    }
  },

  lastUpdated: true, //此配置不会立即生效，需git提交后爬取时间戳，没有安装git本地报错可以先注释

  //主题配置
  themeConfig: {
    //左上角logo
    logo: '/logo.png',
    //logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
    //siteTitle: false, //标题隐藏

    //设置站点标题 会覆盖title
    //siteTitle: 'Hello World',

    //语言选择器
    locales: {
      root: {
        label: '简体中文',
      },
      en: {
        label: 'English',
      },
      fr: {
        label: 'French',
      }
    },

    //编辑本页
    editLink: {
      pattern: 'https://github.com/321424890/vitepress-doc-main/edit/main/docs/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    },

    //上次更新时间
    lastUpdated: {
      text: '上次更新时间',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },

    //导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '🍉指南',
        items: [
          {
            // 分组标题1
            text: '介绍',
            items: [
              { text: '前言', link: '/preface' },
            ],
          },
          {
            // 分组标题2
            text: '基础设置',
            items: [
              { text: '快速上手', link: '/getting-started' },

            ],
          },
          {
            // 分组标题3
            text: '进阶玩法',
            items: [
              // { text: 'Markdown', link: '/markdown' },
              // { text: '多语言', link: '/multi-language' },
              // { text: '静态部署', link: '/assets' },
              // { text: '插件', link: '/plugin' },
              // { text: '更新及卸载', link: '/update' },
            ],
          },
          {
            // 分组标题4
            text: '案例展示',
            items: [
              { text: 'crystalplus UI案例', link: '/cases' },
            ],
          },
        ],
      },
      { text: '组件', link: '/components' },
      { text: `VitePress ${devDependencies.vitepress.replace('^', '')}`, link: 'https://vitepress.dev/zh/', noIcon: true },
      { text: '更新日志', link: '/changelog' },
    ],


    //侧边栏
    sidebar: {
      // 组件页面的侧边栏
      '/components/': [
        {
          text: '基础',
          collapsed: false,
          items: [
            { text: '文本', link: '/components/basic/text' },
            { text: '图标', link: '/components/basic/icon' },
            { text: '按钮', link: '/components/basic/button' },
          ],
        },
        {
          text: '表单组件',
          collapsed: false,
          items: [
            { text: '输入框', link: '/components/basic/input' },
            { text: '数字输入框', link: '/components/basic/input/inputnumber' },
            { text: '复选框', link: '/components/basic/checkbox' },
            { text: '复选框组', link: '/components/basic/checkbox-group' },
            { text: '单选框', link: '/components/basic/radio' },
            { text: '单选框组', link: '/components/basic/radio-group' },
            { text: '开关', link: '/components/basic/switch' },
            { text: '选择器', link: '/components/basic/select' },
            { text: '日期选择', link: '/components/basic/date-picker' },
            { text: '时间选择器', link: '/components/basic/time-picker' },
            { text: '时间点选择', link: '/components/basic/time-select' },
            { text: '日历', link: '/components/basic/calendar' },
            { text: '图片上传', link: '/components/basic/image' },
            { text: '富文本编辑器', link: '/components/basic/editor' },
            
            { text: '树选择', link: '/components/basic/tree-select' },
            { text: '树形组件', link: '/components/basic/tree' },
            { text: '级联选择器', link: '/components/basic/cascader' },
             { text: 'From表单', link: '/components/basic/form-wrapper' },
            { text: '搜索表单', link: '/components/basic/search-form' },
          ],
        },
        {
          text: '布局组件',
          collapsed: false,
          items: [
            // { text: '容器', link: '/components/container' },
            // { text: '网格', link: '/components/grid' },
            // { text: '空间', link: '/components/space' },
            { text: 'Table表格', link: '/components/basic/table' },
            { text: 'FormGroup表单组', link: '/components/basic/form-group' },
            { text: '卡片组件', link: '/components/basic/card' },
          ],
        },
        {
          text: '反馈组件',
          collapsed: false,
          items: [
            { text: 'dialog对话框', link: '/components/basic/dialog' },
            { text: 'drawer抽屉', link: '/components/basic/drawer' },
            { text: 'message消息提示', link: '/components/basic/message' },
            { text: 'modal模态框', link: '/components/basic/modal' },
            { text: 'alert警告', link: '/components/basic/alert' },
            { text: 'notify通知', link: '/components/basic/notify' },
            // { text: '加载', link: '/components/loading' },
          ],
        },
      ],
      // 其他页面的侧边栏
      '/': [
        {
          //分组标题1
          text: '介绍',
          collapsed: false,
          items: [
            { text: '前言', link: '/preface' },
          ],
        },
        {
          //分组标题2
          text: '基础配置',
          collapsed: false,
          items: [
            { text: '快速上手', link: '/getting-started' },
          ],
        },
        // {
        //   //分组标题3
        //   text: '进阶玩法',
        //   collapsed: false,
        //   items: [
        //     { text: 'Markdown', link: '/markdown' },
        //     { text: '多语言', link: '/multi-language' },
        //     { text: '静态部署', link: '/assets' },
        //     { text: '插件', link: '/plugin' },
        //     { text: '更新及卸载', link: '/update' },
        //   ],
        // },
        {
          //分组标题3
          text: '其他站点',
          collapsed: false,
          items: [
            { text: 'VuePress', link: 'https://vuepress.yiov.top/' },
            { text: 'crystalplusUI案例项目', link: 'http://admin.crystalui.cn' },
            { text: 'BL_Vue3_Admin代码仓库', link: 'https://github.com/321424890' },
            { text: 'BL_Vue3_Admin开发指南', link: '/development-guide' },
            { text: 'BL_Vue3_Admin配置', link: '/config-guide' },
            { text: 'BL_Vue3_Admin路由', link: '/router-guide' },
            { text: 'BL_Vue3_Admin样式', link: '/style-guide' },
            { text: 'BL_Vue3_Admin请求', link: '/request-guide' },
            { text: 'BL_Vue3_Admin目录  ', link: '/directory-structure' },
            { text: 'BL_Vue3_Admin构建', link: '/build-guide' },
          ],
        },
      ],
    },



    //Algolia搜索
    search: {
      provider: 'algolia',
      options: {
        appId: 'QVKQI62L15',
        apiKey: 'bef8783dde57293ce082c531aa7c7e0c',
        indexName: 'doc',
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                },
              },
            },
          },
        },
      },
    },



    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/321424890/vitepress-doc-main' },
      // { icon: 'twitter', link: 'https://twitter.com/yourusername' },
      // { icon: 'discord', link: 'https://discord.com/invite/yourserver' },
      // {
      //   icon: {
      //     svg: '<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>'
      //   },
      //   link: 'https://weixin.qq.com/',
      //   // You can include a custom label for accessibility too (optional but recommended):
      //   ariaLabel: 'wechat'
      // }
    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',




    //页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} 我的文档`,
    },


    //侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel: '返回顶部',


    //大纲显示2-3级标题
    outline: {
      level: [2, 3],
      label: '当前页大纲'
    },


    //自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

  },



})