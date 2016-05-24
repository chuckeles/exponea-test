/**
 * Dependencies.
 */
var browserSync = require("browser-sync").create();
var gulp        = require("gulp");

/**
 * Input files. HTML, CSS, JS.
 */
var input = {
  html: [
    "index.html"
  ],
  scss: [
    "bower_components/normalize-css/normalize.css"
  ]
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
