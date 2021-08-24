import type { App } from 'vue'
import Button from './src/button.vue'

type TButton = typeof Button & {
  install(app: App): void
}

Button.install = (app: App) => {
  app.component(Button.name, Button) //注册全局组件
}

const _Button: TButton = Button

export default _Button
