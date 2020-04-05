const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')

module.exports = (env, arg) => {
  let config = arg.mode === 'development' ? devConfig : prodConfig
  return merge(baseConfig, config)
}
