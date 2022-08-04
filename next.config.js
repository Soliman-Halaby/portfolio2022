const withFonts = require("next-fonts");

module.exports = withFonts({
  // images: {
  //   domains: [process.env.NEXT_IMAGE_DOMAIN],
  // },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
});
