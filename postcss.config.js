module.exports = {
  plugins: [
    // 兼容浏览器，添加前缀
    require("autoprefixer")({
      overrideBrowserslist: [
        "ie >= 8",
        "Firefox >= 20",
        "Safari >= 5",
        "Android >= 4",
        "Ios >= 6",
        "last 10 versions", // 所有主流浏览器最近10版本用
      ],
      grid: true,
    }),
  ],
};
