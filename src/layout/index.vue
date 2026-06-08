<script setup lang="ts">
import { HomeFilled, Expand, Fold } from '@element-plus/icons-vue'

import { useAppStore } from '@/stores/modules/app'
import { AUTHOR_INFO } from '@/utils/banner'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

const appName = import.meta.env.VITE_APP_NAME

// 侧边菜单项（实际项目可由路由表自动生成）
const menus = [{ index: '/home', title: '首页', icon: HomeFilled }]

// 当前激活菜单
const activeMenu = computed(() => route.path)

function handleSelect(index: string) {
  router.push(index)
}
</script>

<template>
  <el-container class="h-screen">
    <el-aside :width="appStore.sidebarCollapsed ? '64px' : '210px'" class="bg-[#304156] transition-all">
      <div class="h-14 flex items-center justify-center text-white font-bold truncate px-2">
        {{ appStore.sidebarCollapsed ? 'C' : appName }}
      </div>
      <el-menu
        :default-active="activeMenu"
        :collapse="appStore.sidebarCollapsed"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409eff"
        router
        @select="handleSelect"
      >
        <el-menu-item v-for="m in menus" :key="m.index" :index="m.index">
          <el-icon><component :is="m.icon" /></el-icon>
          <template #title>{{ m.title }}</template>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="flex items-center border-b border-gray-200 bg-white !px-4">
        <el-icon class="cursor-pointer text-xl" @click="appStore.toggleSidebar">
          <Fold v-if="!appStore.sidebarCollapsed" />
          <Expand v-else />
        </el-icon>
        <div class="ml-auto text-gray-500">{{ appName }}</div>
      </el-header>

      <el-main class="bg-gray-50">
        <router-view #default="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>

      <el-footer height="40px" class="flex items-center justify-center border-t border-gray-200 bg-white text-sm text-gray-400">
        <span>
          © {{ appName }} · Powered by
          <a :href="AUTHOR_INFO.repository" target="_blank" rel="noopener" class="text-[#409eff] hover:underline">
            {{ AUTHOR_INFO.name }}
          </a>
        </span>
      </el-footer>
    </el-container>
  </el-container>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
