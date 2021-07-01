const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => ({
  entry: path.resolve(__dirname, "./src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    chunkFilename: "[id].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader",
        options: {},
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/templates/index.html"),
      filename: "index.html",
      inject: "body",
    }),
    new Dotenv({
      path: `./.env${env.file ? `.${env.file}` : ""}`,
    }),
  ],
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, "./dist"),
    compress: true,
    historyApiFallback: true,
  },
});
