import type { App } from 'vue'
import CheckBoxGroup from '../checkbox/src/checkbox-group.vue'

type TCheckBoxGroup = typeof CheckBoxGroup & {
  install(app: App): void
}

CheckBoxGroup.install = (app: App) => {
  app.component(CheckBoxGroup.name, CheckBoxGroup) //注册全局组件
}

const _CheckBoxGroup: TCheckBoxGroup = CheckBoxGroup

export default _CheckBoxGroup
