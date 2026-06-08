import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * 应用全局状态示例：侧边栏折叠状态。
 * 通过 persist 持久化到 localStorage（已在 src/stores/index.ts 注册插件）。
 */
export const useAppStore = defineStore(
  'app',
  () => {
    // 侧边栏是否折叠
    const sidebarCollapsed = ref(false)

    function toggleSidebar() {
      sidebarCollapsed.value = !sidebarCollapsed.value
    }

    return { sidebarCollapsed, toggleSidebar }
  },
  {
    persist: true,
  },
)
