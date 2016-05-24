/**
 * Dependencies.
 */
var browserSync = require("browser-sync").create();
var gulp        = require("gulp");

/**
 * Gulp plugins.
 */
var concat  = require("gulp-concat");
var plumber = require("gulp-plumber");

/**
 * Input files. HTML, CSS, JS.
 */
var input = {
  html: [
    "index.html"
  ],
  css: [
    "bower_components/normalize-css/normalize.css",
    "css/**/*.css"
  ],
  js: [
    "bower_components/angular/angular.js",
    "js/**/*.js"
  ]
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
      baseDir: "./",
      open: false,
      notify: false
    }
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
    .pipe(concat("style.css"))
    .pipe(gulp.dest(output.css))
    .pipe(browserSync.stream());
});

/**
 * Run the JS task and reload the browser.
 */
gulp.task("js-reload", ["js"], browserSync.reload);

/**
 * Concatenate JS.
 */
gulp.task("js", function js() {
  return gulp.src(input.js)
    .pipe(plumber())
    .pipe(concat("script.js"))
    .pipe(gulp.dest(output.js));
});
