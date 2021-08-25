import Button from '@lxy/button'
import Icon from '@lxy/icon'
import ButtonGroup from '@lxy/button-group'
import type { App } from 'vue'

const components = [Button, Icon, ButtonGroup]

const install = (app: App) => {
  components.forEach((component) => {
    console.log(component)
    app.component(component.name, component)
  })
}

//使用组件库 createApp().use(xxx)
export default { install }

//组件文档
