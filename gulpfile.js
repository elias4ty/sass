var gulp = require('gulp');
    min = require('gulp-uglify'),
    map = require('gulp-sourcemaps')
    sass = require('gulp-sass');

gulp.task('css',()=>{
  gulp.src('./test/sass/test.scss')
  .pipe(sass({outputStyle:'compressed'}))
  .pipe(gulp.dest('test/static'))
})

gulp.task('watch',()=>{
  gulp.watch('./test/sass/test.scss',['css']);
})
