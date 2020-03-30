/*
 * @Description: 
 * @Autor: Yao
 * @Date: 2019-11-06 15:31:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-30 17:41:17
 */
const webpack = require('webpack');
const path = require('path');
// 更新html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 每次打包后清理dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[hash].js',
  },
  // 追踪源文件
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './lib/static'),
        to: './static',
        ignore: ['.*']
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      // {
      //   test: /\.js$/,
      //   loader: 'eslint-loader',
      //   // 在webpack编译之前进行检测
      //   enforce: 'pre',
      //   // 指定检查的目录
      //   include: [path.resolve(__dirname, 'src')]
      // }
    ]
  }
};
