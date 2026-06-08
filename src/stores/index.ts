import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 添加 persisted state 插件
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
