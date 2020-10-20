const webpack = require('webpack');
const withCSS = require('@zeit/next-css');
// module.exports = withCSS();

const isProd = (process.env.NODE_ENV || 'production') === 'production';
const assetPrefix = isProd ? '/next_poc' : '';

const debug = process.env.NODE_ENV !== "production";
module.exports = withCSS({
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/projects": { page: "/projects" },
    }
  },
  assetPrefix: assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )

    return config
  },
  devIndicators: {
    autoPrerender: false,
  },
});
