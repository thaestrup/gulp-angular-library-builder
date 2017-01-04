'use strict';

var gulp = require('gulp'),
    del = require('del');

gulp.task('source-files', function () {
    return gulp.src(['src/**'])
        .pipe(gulp.dest('dist/lib'));
});

gulp.task('static-files', function () {
    return gulp.src(['LICENSE', 'README.md', 'package.json'])
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function (cb) {
    del('dist', cb);
});

gulp.task('default', ['source-files', 'static-files']);
