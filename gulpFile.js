var gulp = require("gulp")

var src = {
  files: "app/*.html"
}

gulp.task("default", ["watch"])

gulp.task("watch", ["move-files"], function() {
  gulp.watch(src.files, ["move-files"])
})

gulp.task("move-files", function() {
  return gulp.src(src.files)
    .pipe(gulp.dest("build"))
})
