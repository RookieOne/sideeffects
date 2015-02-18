var gulp = require("gulp")
var watchify = require('watchify')
var browserify = require('browserify')
var livereload = require('gulp-livereload')
var to5ify = require("6to5ify")
var reactify = require("reactify")
var source = require("vinyl-source-stream")
var rename = require("gulp-rename")

var DEST = "build"
var src = {
  app: 'app/**/*.js',
  files: "app/*.html"
}

gulp.task("default", ["watch"])

gulp.task("watch", ["move-files", "app"], function() {
  gulp.watch(src.files, ["move-files"])
})

gulp.task("move-files", function() {
  return gulp.src(src.files)
    .pipe(gulp.dest("build"))
})

gulp.task("app", function() {
  var bundle = function() {
    return bundler
      .bundle()
      .pipe(source('app.js'))
      // .pipe(source("./app/routes.js"))
      // .pipe(rename("main.js"))
      .pipe(gulp.dest("./build"))
      .pipe(livereload())
  }

  var bundler = watchify(browserify("./app/routes.js", watchify.args))
  bundler.transform(reactify)
  bundler.transform(to5ify)
  bundler.on("update", bundle)
  // bundler = watchify(bundler)

  return bundle()
})
