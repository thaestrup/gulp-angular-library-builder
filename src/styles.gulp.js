'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sequence = require('run-sequence').use(gulp),
    sourcemaps = require('gulp-sourcemaps');

module.exports = function (options) {

    gulp.task('styles-serve', function () {
        return gulp.src(['src/*.scss'])
            .pipe(sass())
            .pipe(gulp.dest('target/build'));
    });

    gulp.task('styles-dist', function (callback) {
        sequence(['styles-css', 'styles-sass-copy'], callback);
    });

    gulp.task('styles-css', function () {
        return gulp.src(['src/*.scss'])
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write(''))
            .pipe(gulp.dest('target/build'));
    });

    gulp.task('styles-sass-copy', function () {
        return gulp.src(['src/**/*.scss'])
            .pipe(gulp.dest('target/build/scss/'));
    });


};