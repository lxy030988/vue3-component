const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'main.ts'),
  output: {
    path: path.resolve(__dirname, '../website-dist'),
    filename: 'bundle.js'
  },
  resolve: {
    //解析模块 对应的扩展名有哪些
    extensions: ['.ts', '.tsx', '.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue?$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.(gif|jpg|jpeg|png)?$/,
        exclude: /node_modules/,
        loader: 'url-loader'
      },
      //必须带上fonts文件夹才能解析成功
      {
        test: /fonts\/.*\.(woff|woff2|eot|ttf|svg)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(scss|css)?$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}
