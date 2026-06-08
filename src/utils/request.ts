import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'
// ElMessage 由 unplugin-auto-import + ElementPlusResolver 自动导入（含样式）

/** 后端统一返回结构（按你的后端实际结构调整 code / data / message 字段） */
export interface ApiResult<T = unknown> {
  code: number
  data: T
  message: string
}

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
})

// 请求拦截器：统一注入 token 等
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// 响应拦截器：统一校验业务码与错误提示（保持返回完整 response，由 request() 负责剥壳）
service.interceptors.response.use(
  (response: AxiosResponse<ApiResult>) => {
    const res = response.data
    // 约定 code === 0（或 200）为成功，按后端实际约定修改
    if (res.code === 0 || res.code === 200) {
      return response
    }
    ElMessage.error(res.message || '请求出错')
    return Promise.reject(new Error(res.message || 'Error'))
  },
  (error) => {
    ElMessage.error(error.message || '网络异常，请稍后重试')
    return Promise.reject(error)
  },
)

/** 统一请求方法：返回值即剥壳后的 data */
export async function request<T = unknown>(config: AxiosRequestConfig): Promise<T> {
  const response = await service.request<ApiResult<T>>(config)
  return response.data.data
}

export default request
