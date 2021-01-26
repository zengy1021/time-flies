module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    proxy: {}
  }
};
