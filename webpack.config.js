require('babel-polyfill');
const path = require('path');
const webpack = require("webpack");

const DEBUG = !process.argv.includes('--release');
console.log(DEBUG);

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.OccurenceOrderPlugin()
];

if(!DEBUG){
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({ compress: { screw_ie8: true, warnings: false } }),
    new webpack.optimize.AggressiveMergingPlugin()
  );
}

module.exports = {
  entry: path.join(__dirname, 'src/app.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    contentBase: 'public',
    port: 5555,
    inline: true
  },
  plugins: plugins,
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel'
        ]
      }
    ]
  }
};
