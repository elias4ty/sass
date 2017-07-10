var gulp = require('gulp'),
    // min = require('gulp-uglify'),
    // map = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber');// 当 sass 语法有错误时报错，并且不会退出项目

gulp.task('css',()=>{
  gulp.src('./src/sass/compile/**/*.scss')
  .pipe(plumber())
  .pipe(sass())
  // .pipe(plumber.stop())
  .pipe(gulp.dest('static/css'))
})

gulp.task('watch',()=>{
  gulp.watch('./src/sass/**/*.scss',['css']);
})
