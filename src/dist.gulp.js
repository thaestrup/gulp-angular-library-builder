'use strict';

var path = require('path'),
    gulp = require('gulp');

module.exports = function (options) {
    gulp.task('dist', ['build'], function () {
        return gulp.src([path.join(options.dist, 'build/**/*'), path.join(options.src, '**/*.d.ts'), 'bower.json', 'README.md'])
            .pipe(gulp.dest(path.join(options.dist, 'distribution')));
    });
};
