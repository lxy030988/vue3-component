import type { App } from 'vue'
import Icon from './src/icon.vue'

Icon.install = (app: App) => {
  app.component(Icon.name, Icon) //注册全局组件
}

export default Icon
