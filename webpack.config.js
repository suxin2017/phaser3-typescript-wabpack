const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./node_modules/phaser/dist/phaser.min.js", "./src/index.ts"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  mode: "development",
  devServer: {
    open: true,
    contentBase: "./dist",
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    usedExports: true,
  },
  cache: true,
  plugins: [
    new HtmlWebpackPlugin({
      title: "phaser3",
    }),
  ],
  externals: {
    phaser: "phaser",
  },
  module: {
    rules: [
      {
        test: /phaser.min.js$/,
        loader: "expose-loader",
        options: {
          exposes: "phaser",
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.glsl$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
