/**
 * Dependencies.
 */
var argv        = require("yargs").argv;
var browserSync = require("browser-sync").create();
var gulp        = require("gulp");
var karma       = require("karma");
var spawn       = require("child_process").spawn;

/**
 * Gulp plugins.
 */
var autoprefixer = require("gulp-autoprefixer");
var concat       = require("gulp-concat");
var plumber      = require("gulp-plumber");
var sass         = require("gulp-sass");

/**
 * Input files. HTML, CSS, JS.
 */
var input = {
  html: [
    "index.html",
    "partials/**/*.html",
    "directives/**/*.html"
  ],
  css: [
    "bower_components/normalize-css/normalize.css",
    "bower_components/chartist/dist/chartist.css",
    "sass/**/*.sass"
  ],
  js: [
    "bower_components/angular/angular.js",
    "bower_components/angular-route/angular-route.js",
    "bower_components/chartist/dist/chartist.js",
    "js/**/*.js"
  ],
  karma:      __dirname + "/test/karma.js",
  protractor: "test/protractor.js"
};

/**
 * Where to put the output.
 */
var output = {
  css: "build/css",
  js: "build/js"
};

/**
 * Default task. Watch and serve.
 */
gulp.task("default", ["watch", "serve"]);

/**
 * The build task builds everything.
 */
gulp.task("build", ["html", "css", "js"]);

/**
 * Watch task. Watches files for changes and reloads and recompiles.
 */
gulp.task("watch", function watch() {
  gulp.watch(input.html, ["html"]);
  gulp.watch(input.css,  ["css"]);
  gulp.watch(input.js, ["js-reload"]);
});

/**
 * Serve task. Serves the front-end using browser-sync.
 */
gulp.task("serve", function serve() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    open: false,
    notify: false
  });
});

/**
 * Reload the browser when the HTML changes.
 */
gulp.task("html", function html() {
  browserSync.reload();
});

/**
 * Concatenate CSS. Also inject into the browser.
 */
gulp.task("css", function css() {
  return gulp.src(input.css)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat("style.css"))
    .pipe(gulp.dest(output.css))
    .pipe(browserSync.stream());
});

/**
 * Run the JS task and reload the browser.
 */
gulp.task("js-reload", ["js"], function jsReload() {
  browserSync.reload();
});

/**
 * Concatenate JS.
 */
gulp.task("js", function js() {
  return gulp.src(input.js)
    .pipe(plumber())
    .pipe(concat("script.js"))
    .pipe(gulp.dest(output.js));
});

/**
 * This task runs the tests.
 * Run karma and protractor in order in case protractor fails.
 */
gulp.task("test", ["karma"], function test() {
  gulp.start("protractor");
});

/**
 * Run the karma tests (unit tests).
 */
gulp.task("karma", function karmaTask(done) {
  new karma.Server({
    configFile: input.karma,
    singleRun: true
  }, done).start();
});

/**
 * Run the protractor tests (feature or end-to-end tests).
 */
gulp.task("protractor", function protractorTask(done) {
  gulp.start("serve");

  spawn("node_modules/protractor/bin/webdriver-manager", ["update"])
    .on("close", function webdriverManagerUpdated() {
      // This is for my own computer. The webdriver-manager has to be run
      // by xvfb-run. This is a mess...
      var first = "node_modules/protractor/bin/webdriver-manager";
      var second = "start";
      var third = "";
      if (argv.x || argv.xvfb || argv.xvfbRun) {
        third = second;
        second = first;
        first = "xvfb-run";
      }

      spawn(first, [second, third]);

      spawn("node_modules/protractor/bin/protractor", [input.protractor], {
        stdio: "inherit"
      })
        .on("close", function protractorRun(code) {
          done(code);

          // Close browser-sync and webdriver-manager.
          // Unfortunatelly this also exits the karma task
          // when run as `gulp test`.
          process.exit();
        });
    });
});
