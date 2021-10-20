// import Button from '@lxy/button'
import { LIcon } from '@lxy/components'
// import ButtonGroup from '@lxy/button-group'
// import Row from '@lxy/row'
// import Col from '@lxy/col'
// import CheckBox from '@lxy/checkbox'
// import CheckBoxGroup from '@lxy/checkbox-group'
// import Transfer from '@lxy/transfer'
// import Message from '@lxy/message'
import type { App } from 'vue'

const components = [LIcon]

const install = (app: App) => {
  components.forEach((component) => {
    app.use(component)
  })
}

//使用组件库 createApp().use(xxx)
export default { install }

export * from '@lxy/components'
