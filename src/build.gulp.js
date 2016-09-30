'use strict';

var gulp = require('gulp'),
    angularFilesort = require('gulp-angular-filesort'),
    concat = require('gulp-concat'),    
    ngTemplateStrings = require('gulp-ng-template-strings'),
    path = require('path');

module.exports = function (options) {
    gulp.task('templates', ['ts'], function () {
        return gulp.src([path.join(options.src, '**/*.js'), path.join(options.target, 'ts/**/*.js'), '!**/*.spec.js'])
            .pipe(ngTemplateStrings({ cwd: options.src }))
            .pipe(gulp.dest(path.join(options.target, 'templates')));
    });

    gulp.task('concat', ['templates'], function () {
        return gulp.src(path.join(options.target, 'templates/**/*.js'))
            .pipe(angularFilesort())
            .pipe(concat(options.name + ".js"))
            .pipe(gulp.dest(path.join(options.target, 'build')));
    });

    gulp.task('html', function () {
        return gulp.src(path.join(options.src, '*.html'))
            .pipe(gulp.dest(path.join(options.target, 'build')));
    });

    gulp.task('build', ['lint', 'test', 'concat', 'html']);
};
