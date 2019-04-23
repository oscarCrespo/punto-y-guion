"strict";

var gulp = require("gulp");
var connect = require("gulp-connect");
var open = require("gulp-open");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var cleanCSS = require("gulp-clean-css");

var config = {
  port: 8080,
  devBaseUrl: "http://localhost",
  paths: {
    html: "./src/*.html",
    js: "./src/**/*.js",
    css: "./src/css/*.css",
    img: "./src/img/**/*",
    dist: "./dist",
    mainJs: "./src/main.js"
  }
};

gulp.task("connect", function() {
  connect.server({
    root: ["dist"],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task("open", ["connect"], function() {
  gulp
    .src("dist/index.html")
    .pipe(open({ uri: config.devBaseUrl + ":" + config.port + "/" }));
});

gulp.task("html", function() {
  gulp
    .src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task("img", function() {
  gulp
    .src(config.paths.img)
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest(config.paths.dist + "/img"));

  gulp.src("./src/favicon.ico").pipe(gulp.dest(config.paths.dist));
});

gulp.task("css", function() {
  return gulp
    .src(config.paths.css)
    .pipe(cleanCSS())
    .pipe(concat("bundle.css"))
    .pipe(gulp.dest(config.paths.dist + "/css"))
    .pipe(connect.reload());
});

gulp.task("watch", function() {
  gulp.watch(config.paths.html, ["html"]);
  gulp.watch(config.paths.js, ["js"]);
  gulp.watch(config.paths.scss, ["css"]);
});

gulp.task("js", function() {
  return gulp
    .src(config.paths.mainJs)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["es2015", "react"]
      })
    )
    .pipe(concat("bundle.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.paths.dist + "/js"))
    .pipe(connect.reload());
});

gulp.task("dev", ["html", "img", "css", "js", "open", "watch"]);

gulp.task("build", ["html", "img", "css", "js"]);
