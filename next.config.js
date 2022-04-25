const withPlugins = require("next-compose-plugins");
const webpack = require("webpack");

/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["@fancyapps/ui"]); // pass the modules you would like to see transpiled

const nextConfig = {
  reactStrictMode: false,
  i18n: {
    // providing the locales supported by your application
    locales: ["en", "th"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "en",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      })
    );
    return config;
  },
};

module.exports = withPlugins([nextConfig, withTM]);
