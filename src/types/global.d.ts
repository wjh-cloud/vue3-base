/// <reference types="vite/client" />

/** 环境变量类型声明（与 .env / .env.[mode] 中的键保持一致） */
interface ImportMetaEnv {
  /** 应用名称 */
  readonly VITE_APP_NAME: string
  /** 应用描述 */
  readonly VITE_APP_DESCRIPTION: string
  /** 应用版本 */
  readonly VITE_APP_VERSION: string
  /** 接口基础地址 */
  readonly VITE_API_URL: string
  /** 接口超时时间（毫秒） */
  readonly VITE_API_TIMEOUT: string
  /** 开发服务器端口 */
  readonly VITE_SERVER_PORT: string
  /** 启动时是否自动打开浏览器 */
  readonly VITE_SERVER_OPEN: string
  /** 路由模式：history | hash */
  readonly VITE_ROUTER_MODE: 'history' | 'hash'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
