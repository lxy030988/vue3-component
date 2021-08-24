# vue3-cpmponent

## lerna

- lerna init
- lerna create <name>  创建一个package

## ts

- yarn add typescript -W
- npx tsc --init

## webpack

- 启动服务 查看组件效果
- webpack webpack-cli webpack-dev-server vue-loader@next @vue/compiler-sfc     -D -W
- babel-loader @babel/core @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver url-loader file-loader html-webpack-plugin css-loader sass-loader style-loader sass

## gulp打包scss

- gulp gulp-autoprefixer gulp-cssmin gulp-dart-sass gulp-rename -D -W

## 组件库的打包格式

- 整体打包 umd
  - webpack
- esmodule
  - rollup
  - rollup rollup-plugin-typescript2 @rollup/plugin-node-resolve rollup-plugin-vue -D -W

- 组件 的按需加载，每个文件单独打包
