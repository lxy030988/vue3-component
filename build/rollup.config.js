import path from 'path'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { getPackagesSync } from '@lerna/project'

//获取当前packages目录下的所有的package.json
const inputs = getPackagesSync()
  .map((pkg) => pkg.name)
  .filter((name) => name.includes('@lxy'))

export default inputs.map((name) => {
  const pkgName = name.split('@lxy')[1]
  return {
    input: path.resolve(__dirname, `../packages/${pkgName}/index.ts`),
    output: {
      file: `lib/${pkgName}/index.js`,
      format: 'es'
    },
    plugins: [
      vue({
        target: 'browser'
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            //打包单个组件不生成ts声明文件
            declaration: false
          },
          exclude: ['node_modules', 'website', 'packages/**/__tests__/*']
        }
      }),
      nodeResolve()
    ],
    external(id) {
      //排除vue  排除自己写的包
      return /^vue/.test(id) || /^@lxy/.test(id)
    }
  }
})
