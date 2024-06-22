const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(gulp.dest("./public/styles"));
}

gulp.task("compilescss", buildStyles);
gulp.task("watch", function () {
  gulp.watch("./src/scss/**/*.scss", buildStyles);
});
