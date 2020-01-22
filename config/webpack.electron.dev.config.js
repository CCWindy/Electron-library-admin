const path = require('path');
const { spawn } = require('child_process');
const merge = require('webpack-merge');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash].bundle.js',
  },
  devtool: 'cheap-module-source-map',
  target: 'electron-renderer',
  devServer: {
    contentBase: '/public',
    historyApiFallback: true,
    open: false,
    port: 9999,
    compress: true,
    hot: true,
    before() {
      console.log('Starting Main Process...');
      spawn('npm', ['run', 'start:electron'], {
        shell: true,
        env: process.env,
        stdio: 'inherit',
      })
        .on('close', code => process.exit(code))
        .on('error', spawnError => console.error(spawnError));
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
