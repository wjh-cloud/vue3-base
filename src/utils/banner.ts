/**
 * 项目作者与仓库信息（统一来源，供控制台 banner、页脚等复用）
 */
export const AUTHOR_INFO = {
  name: 'WJH',
  email: 'r2@mrwang.pw',
  repository: 'https://github.com/wjh-cloud/vue3-base',
} as const

/**
 * 应用启动时在浏览器控制台打印带样式的项目信息 banner。
 */
/* eslint-disable no-console */
export function printBanner(): void {
  const appName = import.meta.env.VITE_APP_NAME || 'vue3-base'

  console.info(
    `%c ${appName} %c ${AUTHOR_INFO.repository} `,
    'background:#409eff;color:#fff;padding:4px 8px;border-radius:4px 0 0 4px;font-weight:bold;',
    'background:#304156;color:#fff;padding:4px 8px;border-radius:0 4px 4px 0;',
  )
  console.info(`%c Author: ${AUTHOR_INFO.name} <${AUTHOR_INFO.email}>`, 'color:#909399;')
}
/* eslint-enable no-console */
