'use strict';

var gulp = require('gulp'),
    sequence = require('run-sequence').use(gulp),
    wiredep = require('wiredep').stream,
    gulpInject = require('gulp-inject'),
    angularFilesort = require('gulp-angular-filesort'),
    naturalSort = require('gulp-natural-sort');

module.exports = function (options) {

    gulp.task('inject', function (callback) {
        sequence('inject:bower', 'inject:styles', 'inject:js', callback);
    });

    gulp.task('inject:styles', function () {
        return gulp.src('src/index.html')
            .pipe(gulpInject(gulp.src('target/build/*.css', {
                read: false
            }), {
                relative: false,
                ignorePath: '/target/'
            }))
            .pipe(gulp.dest('src/'));
    });

    gulp.task('inject:bower', function () {
        return gulp.src('src/index.html')
            .pipe(wiredep({
                directory: 'bower_components',
                ignorePath: '../bower_components/'
            }))
            .pipe(gulp.dest('src/'));
    });

    gulp.task('inject:js', function () {
        return gulp.src('src/index.html')
            .pipe(gulpInject(
                gulp.src(['src/**/*.js', '!src/**/*spec.js'])
                .pipe(naturalSort())
                .pipe(angularFilesort()), {
                    relative: true
                }
            ))
            .pipe(gulp.dest('src/'));
    })

};