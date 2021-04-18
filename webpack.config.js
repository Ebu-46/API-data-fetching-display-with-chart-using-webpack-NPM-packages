const path = require('path');

module.exports = {
  entry: './chart.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
};