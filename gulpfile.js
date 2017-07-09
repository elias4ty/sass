var gulp = require('gulp'),
    // min = require('gulp-uglify'),
    // map = require('gulp-sourcemaps')
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass');

gulp.task('css',()=>{
  gulp.src('./src/sass/mafengwo/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('static/css/mafengwo'))
})

gulp.task('watch',()=>{
  gulp.watch('./src/sass/mafengwo/*.scss',['css']);
})
