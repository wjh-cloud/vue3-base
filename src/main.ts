/**
 * vue3-base — 开箱即用的 Vue 3 后台管理基础脚手架
 *
 * @author     WJH <r2@mrwang.pw>
 * @repository https://github.com/wjh-cloud/vue3-base
 * @license    MIT
 */
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import GlobalComponents from '@/components/index'
import pinia from '@/stores'
import { printBanner } from '@/utils/banner'

// 样式引入顺序：Tailwind 在前，避免 preflight 重置 Element Plus 组件样式
// Element Plus 组件样式由 unplugin-vue-components 按需自动注入，无需全量引入
import '@/assets/styles/tailwind.css'

// 自定义全局样式
import '@/assets/styles/main.scss'

// 注册 SVG 雪碧图
import 'virtual:svg-icons-register'

// 引入 iconfont 图标
import '@/assets/iconfont/iconfont.js'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(GlobalComponents)

app.mount('#app')

// 控制台打印项目信息 banner
printBanner()
