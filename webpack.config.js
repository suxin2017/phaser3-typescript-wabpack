const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const phaser = path.resolve(
  __dirname,
  "node_modules/phaser/dist/phaser.min.js"
);
module.exports = {
  entry: {
    app: "./src/index.ts",
    vendor: "phaser",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  mode: "development",
  devServer: {
    contentBase: "./dist",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "phaser3",
    }),
  ],
  resolve: {
    alias: {
      phaser: phaser,
    },
  },
  module: {
    rules: [
      {
        test: phaser,
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
