// 放公共的配置
//webpack5教程地址： https://www.dgrt.cn/news/show-3961996.html?action=onClick
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //自动生成HTML文件插件
// const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //提取分离css文件打包到单独文件
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); //压缩及优化css结构
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //打包之前清除旧的打包文件 变量名称上的 花括号一定要带上
// const timeStamp = new Date().getTime(); //生成时间戳.避免发布新版本时读取缓存文件
const VueLoaderPlugin = require("vue-loader/lib/plugin"); //vue-loader

const { srcPath, publicPath } = require("./paths");
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      // "@": resolve("src"), //配置可使用@表示项目 根src目录
      "@": path.resolve(__dirname, "../src"),
    },
  },
  entry: path.join(srcPath, "main"), //入口文件
  module: {
    rules: [
      // 处理vue文件
      {
        test: /\.vue$/,
        use: "vue-loader", //webpac4 用laoder:[],webpack5用use:[];
      },
      // 样式处理的loader
      {
        test: /\.(scss|less|css)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          "less-loader",
          "postcss-loader",
        ],
      },
      //图片处理的loader
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          },
        ],
        type: "javascript/auto",
      },
      // babel-loader 将高阶语法转换成ES5
      {
        test: /\.js$/,
        exclude: /node_modules/, // exclude:表示排除查找目录
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: `css/[name].${timeStamp}.css`,
    //   chunkFilename: `css/chunk.[id].${timeStamp}.css`,
    //   filename: "css/main.css",
    // }),
    new HtmlWebpackPlugin({
      template: path.join(publicPath, "index.html"), //模板html
      filename: "index.html", // 生成的文件名
      favicon: "public/favicon.ico", // 图标
      title: "我的webpack应用",
    }),
    new webpack.ProvidePlugin({
      // jQuery: "jQuery",
    }),
  ],
  optimization: {
    sideEffects: true, //开启树摇，将没有使用的变量或方法剔除 不参与打包
  },
};
