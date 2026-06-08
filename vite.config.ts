import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 加载当前 mode 对应的环境变量（.env / .env.[mode]）
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      VueSetupExtend(),
      // Tailwind CSS v4
      tailwindcss(),
      // API 自动导入：写页面时无需手动 import ref/computed/useRouter 等
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        resolvers: [ElementPlusResolver()],
        dts: 'src/types/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
        },
      }),
      // 组件自动按需导入：Element Plus 组件无需手动 import
      Components({
        resolvers: [ElementPlusResolver()],
        dts: 'src/types/components.d.ts',
      }),
      // SVG 图标插件配置
      createSvgIconsPlugin({
        // 指定图标目录 src/assets/icons
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        // 指定生成的 symbol-id 的格式
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    server: {
      port: Number(env.VITE_SERVER_PORT) || 3000,
      open: env.VITE_SERVER_OPEN === 'true',
      proxy: {
        // 开发环境接口代理：以 /api 开头的请求转发到后端，规避跨域。
        // 把请求 baseURL 设为 '/api' 即可走代理；当前模板默认直连 VITE_API_URL，此项作为示例保留。
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
