const commonWebpackConfig = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(commonWebpackConfig, {
  mode: "development", // process.env.NODE_ENV = development
  // 开启持久化缓存-提升第二次启动速度
  cache: true,
  plugins: [],
  devServer: {
    port: 8090, //服务器监听的端口
    host: "0.0.0.0", //服务器开起的ip地址
    open: false, // 是否打开浏览器提供访问
    //hot: true, // 需要配合webpack.HotModuleReplacementPlugin使用 热更新
    //compress: true, // 是否为每个静态文件启动gzip压缩 也可以使用命令：npx webpack serve --compress
    //开发环境下配置代理
    proxy: {
      "/cmsapi": {
        target: "https://dayuding.wisesoft.net.cn",
        changeOrigin: true,
        ws: false,
      },
      "/dsapi": {
        target: "https://dayuding.wisesoft.net.cn/api",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          "^/dsapi": "",
        },
      },
    },
  },
  optimization: {
    // 开发环境...
  },
});
