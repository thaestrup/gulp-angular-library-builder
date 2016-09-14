'use strict';

var gulp = require('gulp'), 
    sass = require('gulp-sass');

module.exports = function (options) {

    gulp.task('styles', function () {
        return gulp.src(['src/index.scss'])
            .pipe(sass())
            .pipe(gulp.dest('target/build'));
    });

};