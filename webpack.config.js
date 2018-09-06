const path = require('path');
const glob = require('glob');

module.exports = {
  entry: {
    app: './src/App.tsx'
  },
  mode: 'development',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'bundle.js',
  },
};
