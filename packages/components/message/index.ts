import type { App } from 'vue'
import Message from './src/message'

type TMessage = typeof Message & {
  install(app: App): void
}
;(Message as TMessage).install = (app: App) => {
  app.component(Message.name, Message) //注册全局组件
}

const _Message: TMessage = Message as TMessage

export default _Message
export {
  // 用户可以去引入组件 通过use的方式，或者可以直接导入
  Message,
}
