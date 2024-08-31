const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const dev = require('./webpack.dev.js');
const prod = require('./webpack.prod.js');

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    return merge(common, dev);
  } else if (argv.mode === 'production') {
    return merge(common, prod);
  } else {
    throw new Error('No matching configuration was found!');
  }
};
