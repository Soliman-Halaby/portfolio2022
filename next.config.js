const withFonts = require("next-fonts");

module.exports = withFonts({
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
