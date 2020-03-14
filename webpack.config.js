const path = require('path');

module.exports = {
  entry: {
    index: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: 'docs',
    port: 3000
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: [/node_modules/]
    }]
  }
};
