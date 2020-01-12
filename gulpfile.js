//gulpfile.js

var gulp        = require('gulp');
var minifyJS    = require('gulp-uglify');
var minifyCSS   = require('gulp-clean-css');
var concat      = require('gulp-concat');
var log         = require('fancy-log');
var pipeline    = require('readable-stream').pipeline;

// Compress CSS into assets/css
gulp.task('css', function() {
    return pipeline(
        gulp.src('assets/*.css'),
        minifyCSS(),
        concat('styles.css'),
        gulp.dest('assets'),
    );
});

// Compress JS into assets/js
gulp.task('js', function() {
    return pipeline(
        gulp.src('_js/**/*.js'),
        minifyJS(),
        concat('script.js'),
        gulp.dest('assets'),
    );
});

// Default Gulp Task (CSS + JS compression)
gulp.task('default', gulp.series('css','js'));

//Re-run the task when a file changes
gulp.task('watch', function() {
  gulp.watch('src/css/**/*.css', ['css']);
  gulp.watch('js/**/*,js', ['js']);
});
