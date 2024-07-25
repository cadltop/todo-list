const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new HtmlWebpackPlugin({
    title: 'Todo List',
    template: 'src/index.html'
  })],
  module: {
    rules: [
      {
      test: /\.css$/,
      use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
    },
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }]
},
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};