/*
 * @Description:
 * @Autor: Yao
 * @Date: 2019-11-06 15:31:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-10 18:15:44
 */
const webpack = require("webpack");
const path = require("path");
// 更新html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 每次打包后清理dist
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.[hash].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].[hash].js",
  },
  // 追踪源文件
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    host:'0.0.0.0'
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./static"),
        to: "./static",
        ignore: [".*"],
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.join(__dirname, 'src')],
        options: {
          fix: true
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader", // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "sass-loader", // 将 Sass 编译成 CSS
          },
        ],
      }
    ],
  },
};
