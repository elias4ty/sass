var gulp = require('gulp');
    min = require('gulp-uglify'),
    map = require('gulp-sourcemaps')
    sass = require('gulp-sass');

gulp.task('css',()=>{
  gulp.src('./test.scss')
  .pipe(sass({outputStyle:'compressed'}))
  .pipe(gulp.dest('css'))
})

gulp.task('watch',()=>{
  gulp.watch('./test.scss',['css']);
})
