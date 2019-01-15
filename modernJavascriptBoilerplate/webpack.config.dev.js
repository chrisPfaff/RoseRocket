const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 8000
  },
  //source map allows the devtools to show actual code
  devtool: 'source-map'
})
