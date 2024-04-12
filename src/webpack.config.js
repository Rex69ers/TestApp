const path = require('path');

module.exports = {
  mode: 'development', // You can set this to 'production' for production builds
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};