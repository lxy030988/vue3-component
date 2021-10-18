import { createApp } from 'vue'
import App from './App.vue'

// import lxy from 'lxy'
// import lxy from '../lib/index.js'
// import lxy from '../lib/index.esm.js'
// import Button from '../lib/button/index'
import LIcon from '@lxy/components/icon'
import '@lxy/theme-chalk/src/index.scss'

createApp(App).use(LIcon).mount('#app')
