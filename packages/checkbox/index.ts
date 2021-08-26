import type { App } from 'vue'
import CheckBox from './src/checkbox.vue'

type TCheckBox = typeof CheckBox & {
  install(app: App): void
}

CheckBox.install = (app: App) => {
  app.component(CheckBox.name, CheckBox) //注册全局组件
}

const _CheckBox: TCheckBox = CheckBox

export default _CheckBox
