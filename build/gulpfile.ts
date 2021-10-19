import { series, parallel } from 'gulp' //series串行打包 parallel并行打包
import { run, withTaskName } from './utils'

// gulp 不叫打包 做代码转化 vite

//1.打包样式 2.打包工具方法 3.打包所有组件,打包每个组件 4.生成一个组件库 5.发布组件
export default series(
  withTaskName('start', async () => console.log('start打包')),
  withTaskName('clean', async () => run('rm -rf ./dist')),
  withTaskName('buildPackages', () => run('pnpm run --filter ./packages --parallel build')),
)
