import type { App } from 'vue'
import Transfer from './src/transfer.vue'

type TTransfer = typeof Transfer & {
  install(app: App): void
}

Transfer.install = (app: App) => {
  app.component(Transfer.name, Transfer) //注册全局组件
}

const _Transfer: TTransfer = Transfer

export default _Transfer
