import Button from '@lxy/button'
import Icon from '@lxy/icon'
import ButtonGroup from '@lxy/button-group'
import Row from '@lxy/row'
import Col from '@lxy/col'
import type { App } from 'vue'

const components = [Button, Icon, ButtonGroup, Row, Col]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

//使用组件库 createApp().use(xxx)
export default { install }

//组件文档
