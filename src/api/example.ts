import { request } from '@/utils/request'

/**
 * 示例 API 模块：演示请求封装的用法。
 * 新建业务接口时，在 src/api 下按模块新增文件，统一从这里调用 request。
 */

export interface DemoItem {
  id: number
  name: string
}

/** GET 列表示例 */
export function getDemoList(params?: Record<string, unknown>): Promise<DemoItem[]> {
  return request<DemoItem[]>({
    url: '/demo/list',
    method: 'get',
    params,
  })
}

/** POST 提交示例 */
export function createDemo(data: Partial<DemoItem>): Promise<DemoItem> {
  return request<DemoItem>({
    url: '/demo',
    method: 'post',
    data,
  })
}
