"strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var sass = require('gulp-sass');



var config = {
  port: 8080,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    scss: './src/scss/*.scss',
    dist: './dist',
    mainJs: './src/main.js'
  }
}

gulp.task('connect', function () {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  })
});

gulp.task('open', ['connect'], function(){
  gulp.src('dist/index.html')
      .pipe(open( {uri: config.devBaseUrl + ':' + config.port + '/'} ));
});

gulp.task('html', function(){
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(connect.reload());
});

gulp.task('js', function(){
    browserify(config.paths.mainJs)
      .transform(reactify)
      .bundle()
      .on('error', console.log.bind(console) )
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(config.paths.dist + '/js'))
      .pipe(connect.reload());
});

gulp.task('css', function(){
    return gulp.src(config.paths.scss)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.scss, ['css']);
});

gulp.task('default', ['html', 'js', 'css', 'open', 'watch']);