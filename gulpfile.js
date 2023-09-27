const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

function comprimirJs() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/scripts"));
}

function compilaSass() {
  return gulp
    .src("./src/styles/main.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/styles"));
}

function comprimirImg() {
  return gulp
    .src("./src/imagens/**")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/imagens"));
}

exports.default = gulp.parallel(compilaSass, comprimirImg, comprimirJs);
exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(compilaSass));
  gulp.watch("./src/scripts/*.js", gulp.parallel(comprimirJs));
};
