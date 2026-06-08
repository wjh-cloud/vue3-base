//全局注册组件
import { App } from 'vue'

import SvgIcon from './SvgIcon/index.vue'

//全局组件
const globalComponents: Record<string, object> = {
  SvgIcon,
}

//对外暴露插件对象
export default {
  //install 注册组件
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install(app: App) {
    Object.keys(globalComponents).forEach((key) => {
      app.component(key, globalComponents[key])
    })
  },
}
