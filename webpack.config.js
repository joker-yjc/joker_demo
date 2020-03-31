/*
 * @Description:
 * @Autor: Yao
 * @Date: 2019-11-01 09:44:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-31 13:49:32
 */
const webpack = require("webpack");
const path = require("path");
// 更新html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 每次打包后清理dist
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  // entry:{
  //   index:'./src/index.js',
  //   app:'./src/x.js'
  // },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].[hash].js",
    libraryTarget: "umd"
    // library:"myLib"
  },
  // 追踪源文件
  // devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new UglifyJSPlugin({ sourceMap: true }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './static'),
        to: './static',
        ignore: ['.*']
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:8].[ext]",
              outputPath: "images"
            }
          }
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
