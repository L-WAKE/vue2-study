const webpack = require("webpack");
const webpackCommonConf = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const { distPath } = require("./paths");
const RemoveConsolePlugin = require("../src/plugins/RemoveConsolePlugin.js"); //自定义插件-去除代码中的debugger和console
const TerserPlugin = require("terser-webpack-plugin"); //删除debugger等

module.exports = merge(webpackCommonConf, {
  mode: "production", // 生产环境
  output: {
    // filename: "js/[name].[contenthash:8].js",
    filename: "js/[name].[contenthash].bundle.js",
    path: distPath,
    // publicPath: 'http://cdn.abc.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名）
  },
  plugins: [
    // new RemoveConsolePlugin(),//自定义插件
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true,
            pure_funcs: ["console.log", "console.warn"], //删除打印语句
          },
          format: {
            comments: false, //删除所有注释
          },
        },
        parallel: true, //多核打包，提升打包速度
        extractComments: false, //是否将注释全部集中到一个文件中
      }),
    ],
  },
});
