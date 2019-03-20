const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const   HtmlWebpackPlugin = require('html-webpack-plugin');
const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'app/index.js');
const devMode = process.env.NODE_ENV !== 'production';
const config = {
  entry: { main: APP_DIR },
  output: {
    path: BUILD_DIR,
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  devServer: {
    contentBase: path.join(__dirname,'app'),
    filename: 'index.bundle.js',
    publicPath: '/'
  },
  devtool: devMode  ? 'inline-source-map' : false,
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
          },
        },
      ],
    }
   ]
  },
  optimization: {
    splitChunks: {
     chunks: 'all'
       },
    minimizer: [
      new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'app','index.html')
    }),
    new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : '[name].[hash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
  watch: true
};
module.exports = config;