const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const common = require("./webpack.base.js");
const paths = require("./paths");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    path: paths.build,
    publicPath: "dist",
    //filename: "index.js",
    filename(file) {
      if (file.chunk.name === "index") return "index.js";
      return `${file.chunk.name}/index.js`;
    },
    globalObject: "this",
    library: "antd-ui-b",
    libraryTarget: "commonjs2",
    umdNamedDefine: true,
    //libraryExport: "default",
    //libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: true,
            },
          },
          "postcss-loader",
          // "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    // Extracts CSS into separate files
    // Note: style-loader is for development, MiniCssExtractPlugin is for production
    new MiniCssExtractPlugin({
      filename: "dist/antd-ui-b.min.css",
      // filename: "styles/[name].[contenthash].css",
      // chunkFilename: "[id].css",
    }),
  ],
  optimization: {
    emitOnErrors: true,
    minimize: true,
    // minimizer: [
    //   new TerserJSPlugin({
    //     test: /\.js(\?.*)?$/i,
    //     exclude: /\/node_modules/,
    //   }),
    //   new CssMinimizerPlugin(),
    // ],
    //runtimeChunk: "single",
    // splitChunks: {
    //   chunks: "all",
    //   maxInitialRequests: Infinity,
    //   minSize: 0,
    //   cacheGroups: {
    //     defaultVendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: "vendors",
    //       chunks: "all",
    //     },
    //   },
    // },
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
