const webpack = require("webpack");
const path = require("path");
// const fs = require("fs");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const config = {
  entry: ["./src/js/main.js", "./src/js/styles.js", "./src/scss/main.scss"],
  output: {
    filename: "./js/bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map",
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        extractComments: true
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, "src/scss"),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: () => [
                require("cssnano")({
                  preset: [
                    "default",
                    {
                      discardComments: {
                        removeAll: true
                      }
                    }
                  ]
                })
              ]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ 
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new MiniCssExtractPlugin({
      filename: "./css/style.css"
    }),
    new CopyWebpackPlugin([
      {
        from: "./src/assets/fonts",
        to: "./fonts"
      },
      {
        from: "./src/assets/icons",
        to: "./icons"
      },
      {
        from: "./src/assets/images",
        to: "./images"
      }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template : path.join(__dirname, './src/html/views/index.html'),
      minify: {
        collapseWhitespace: true
      }
    })
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    config.plugins.push(new CleanWebpackPlugin());
  }
  return config;
};
