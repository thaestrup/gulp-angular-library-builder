'use strict';

var path = require('path'),
    gulp = require('gulp'),
    sequence = require('run-sequence').use(gulp);

module.exports = function (options) {

    gulp.task('dist', function (callback) {
        sequence('clean', 'build', 'dist-copy', callback);
    });

    gulp.task('dist-copy', function () {
        return gulp.src([path.join(options.dist, 'build/**/*'), path.join(options.src, '**/*.d.ts'), 'bower.json', 'README.md'])
            .pipe(gulp.dest(path.join(options.dist, 'distribution')));
    });
};