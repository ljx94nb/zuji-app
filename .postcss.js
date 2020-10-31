module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ["Android >= 4.0", "iOS >= 7"],
    },
    "postcss-pxtorem": {
      rootValue: 37.5, //vant-UI的官方根字体大小是37.5
      propList: ["*"],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    },
  },
};
