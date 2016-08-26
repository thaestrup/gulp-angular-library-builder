'use strict';

var gulp = require('gulp'),
    path = require('path'),
    release = require('gulp-git-release');

module.exports = function (options) {
    gulp.task('prerelease', ['dist'], function () {
        return gulp.src(path.join(options.dist, 'distribution', '**')).pipe(release({
            prefix: path.join(options.dist, 'distribution'),
            release: false,
            repository: options.repository
        }));
    });

    gulp.task('release', ['dist'], function () {
        return gulp.src(path.join(options.dist, 'distribution', '**')).pipe(release({
            prefix: path.join(options.dist, 'distribution'),
            release: true,
            repository: options.repository
        }));
    });
};
