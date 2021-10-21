import { series, parallel } from 'gulp' //series串行打包 parallel并行打包
import { genTypes } from './gen-types'
import { run, withTaskName } from './utils'
import { lxyRoot, outDir } from './utils/paths'

// gulp 不叫打包 做代码转化 vite

const copySourceCode = async () => {
  await run(`cp ${lxyRoot}/package.json ${outDir}/package.json`)
}

//1.打包样式 2.打包工具方法 3.打包所有组件,打包每个组件 4.生成一个组件库 5.发布组件
export default series(
  withTaskName('start', async () => console.log('start打包')),
  parallel(
    withTaskName('clean', async () => run('rm -rf ./dist')),
    withTaskName('buildPackages', () => run('pnpm run --filter ./packages --parallel build')),
    withTaskName('buildFullComponent', () => run('pnpm run build buildFullComponent')), // 执行build命令时会调用gulp, 我们给gulp传递参数buildFullComponent 那么就会执行导出任务叫 buildFullComponent
    withTaskName('buildComponent', () => run('pnpm run build buildComponent')),
  ),
  parallel(genTypes, copySourceCode),
)

export * from './full-component'
export * from './component'
