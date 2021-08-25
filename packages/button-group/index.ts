import type { App } from 'vue'
import ButtonGroup from '../button/src/button-group.vue'

type TButtonGroup = typeof ButtonGroup & {
  install(app: App): void
}

ButtonGroup.install = (app: App) => {
  app.component(ButtonGroup.name, ButtonGroup) //注册全局组件
}

const _ButtonGroup: TButtonGroup = ButtonGroup

export default _ButtonGroup
