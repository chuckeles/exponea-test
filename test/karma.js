module.exports = function(config) {

  config.set({
    basePath: "..",
    frameworks: ["jasmine"],
    files: [
      "build/js/script.js",
      "test/karma/**/*.js",
      "directives/**/*.html",
      "partials/**/*.html",
    ],
    preprocessors: {
      "**/*.html": "ng-html2js"
    },
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["Firefox"],
    singleRun: true,
    concurrency: Infinity
  });

};
