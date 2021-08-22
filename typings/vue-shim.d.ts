declare module '*.vue' {
  import type { DefineComponent, App } from 'vue'
  const component: DefineComponent & {
    install(app: App): void
  }
  export default component
}
