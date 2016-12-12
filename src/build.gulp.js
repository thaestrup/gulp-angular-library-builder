'use strict';

var gulp = require('gulp'),
    angularFilesort = require('gulp-angular-filesort'),
    concat = require('gulp-concat'),
    templateCache = require('gulp-angular-templatecache'),
    path = require('path');

module.exports = function (options) {

    gulp.task('concat', ['templates', 'ts'], function () {
        return gulp.src([
            path.join(options.src, '**/*.js'),
            path.join(options.target, 'ts/**/*.js'),
            path.join(options.target, 'templates/**/*.js'),
            '!**/*.spec.js', '!**/*.spec.ts'
        ])
            .pipe(angularFilesort())
            .pipe(concat(options.name + ".js"))
            .pipe(gulp.dest(path.join(options.target, 'build')));
    });

    gulp.task('templates', function () {
        var templateCacheOptions = {
            module: options.module + "-templates",
            standalone: true
        };
        return gulp.src([path.join(options.src, '**/*.html'), '!index.html'])
            .pipe(templateCache('templateCache.js', templateCacheOptions))
            .pipe(gulp.dest(path.join(options.target, 'templates')));
    });

    gulp.task('html', function () {
        return gulp.src(path.join(options.src, '*.html'))
            .pipe(gulp.dest(path.join(options.target, 'build')));
    });

    gulp.task('build', ['lint', 'test', 'concat', 'html']);
};
