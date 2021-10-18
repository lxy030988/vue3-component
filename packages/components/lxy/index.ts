import Button from '@lxy/button'
import Icon from '@lxy/icon'
import ButtonGroup from '@lxy/button-group'
import Row from '@lxy/row'
import Col from '@lxy/col'
import CheckBox from '@lxy/checkbox'
import CheckBoxGroup from '@lxy/checkbox-group'
import Transfer from '@lxy/transfer'
import Message from '@lxy/message'
import type { App } from 'vue'

const components = [Button, Icon, ButtonGroup, Row, Col, CheckBox, CheckBoxGroup, Transfer, Message]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

//使用组件库 createApp().use(xxx)
export default { install }

//组件文档
