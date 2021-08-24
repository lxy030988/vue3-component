import path from 'path'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: path.resolve(__dirname, '../packages/lxy/index.ts'),
  output: {
    file: 'lib/index.esm.js',
    format: 'es'
  },
  plugins: [
    vue({
      target: 'browser'
    }),
    typescript({
      //默认调用tsconfig.json 会生成声明文件
      tsconfigOverride: {
        exclude: ['node_modules', 'website', 'packages/**/__tests__/*']
      }
    }),
    nodeResolve()
  ],
  external(id) {
    //排除vue
    return /^vue/.test(id)
  }
}
