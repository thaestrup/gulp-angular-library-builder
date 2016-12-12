'use strict';

var gulp = require('gulp'),
    sequence = require('run-sequence').use(gulp),
    wiredep = require('wiredep').stream,
    gulpInject = require('gulp-inject'),
    angularFilesort = require('gulp-angular-filesort'),
    naturalSort = require('gulp-natural-sort'),
    path = require('path');

module.exports = function (options) {

    gulp.task('inject', function (callback) {
        sequence('inject-bower', 'inject-styles', 'inject-js', 'inject-ts', callback);
    });

    gulp.task('inject-styles', function () {
        return gulp.src('src/index.html')
            .pipe(gulpInject(gulp.src(path.join(options.target, '/build/*.css'), {
                read: false
            }), {
                relative: false,
                ignorePath: path.join('/', options.target, '/')
            }))
            .pipe(gulp.dest('src/'));
    });

    gulp.task('inject-bower', function () {
        return gulp.src('src/index.html')
            .pipe(wiredep({
                directory: 'bower_components',
                ignorePath: '../bower_components/'
            }))
            .pipe(gulp.dest('src/'));
    });

    gulp.task('inject-js', function () {
        return gulp.src('src/index.html')
            .pipe(gulpInject(
                gulp.src([path.join(options.src, '**/*.js'), '!**/*spec.js'])
                    .pipe(naturalSort())
                    .pipe(angularFilesort()), {
                        relative: true
                    }
            ))
            .pipe(gulp.dest('src/'));
    });

    gulp.task('inject-ts', function () {
        return gulp.src('src/index.html')
            .pipe(gulpInject(
                gulp.src([path.join(options.target, 'ts/**/*.js'), '!**/*spec.js'])
                    .pipe(naturalSort())
                    .pipe(angularFilesort()), {
                        ignorePath: path.join('/', options.target, '/'),
                        starttag: '<!-- inject:ts -->'
                    }
            ))
            .pipe(gulp.dest('src/'));
    });

    gulp.task('inject-templates', function () {
        return gulp.src('src/index.html')
            .pipe(gulpInject(
                gulp.src([path.join(options.target, 'templates/**/*.js'), '!**/*spec.js'])
                    .pipe(naturalSort())
                    .pipe(angularFilesort()), {
                        ignorePath: path.join('/', options.target, '/'),
                        starttag: '<!-- inject:templates -->'
                    }
            ))
            .pipe(gulp.dest('src/'));
    });
};
