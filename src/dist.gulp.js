'use strict';

var path = require('path'),
    gulp = require('gulp'),
    sequence = require('run-sequence').use(gulp);

module.exports = function (options) {

    gulp.task('dist', function (callback) {
        sequence('clean', 'build', 'styles-dist', 'dist-copy', callback);
    });

    gulp.task('dist-copy', function () {
        return gulp.src(options.distributions)
            .pipe(gulp.dest(path.join(options.dist, 'distribution')));
    });
};
