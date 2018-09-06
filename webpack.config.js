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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'bundle.js',
  },
};
