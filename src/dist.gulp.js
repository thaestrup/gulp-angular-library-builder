'use strict';

var gulp = require('gulp'),
    path = require('path');

module.exports = function (options) {
    gulp.task('dist', ['build'], function () {
        return gulp.src([path.join(options.dist, 'build/**/*'), 'bower.json', 'README.md'])
            .pipe(gulp.dest(path.join(options.dist, 'distribution')));
    });
}
