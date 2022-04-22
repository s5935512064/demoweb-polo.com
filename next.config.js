//next.config.js

const webpack = require('webpack')

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
      })
    )
    return config
  }
}

const withTM = require('next-transpile-modules')(['@fancyapps/ui']); // pass the modules you would like to see transpiled

module.exports = withTM({});