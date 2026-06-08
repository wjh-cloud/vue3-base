import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue'),
    meta: { title: '页面不存在' },
  },
]

// 根据环境变量选择路由模式
const history =
  import.meta.env.VITE_ROUTER_MODE === 'hash'
    ? createWebHashHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL)

const router = createRouter({
  history,
  routes,
})

// 全局前置守卫：设置标题 + 鉴权占位（纯脚手架不含真实鉴权逻辑）
router.beforeEach((to, _from, next) => {
  const appName = import.meta.env.VITE_APP_NAME
  document.title = to.meta.title ? `${to.meta.title as string} - ${appName}` : appName
  // 鉴权示例：
  // const token = localStorage.getItem('token')
  // if (!token && to.path !== '/login') return next('/login')
  next()
})

export default router
