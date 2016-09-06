'use strict';

var angularFilesort = require('gulp-angular-filesort'),
    concat = require('gulp-concat'),
    ngTemplateStrings = require('gulp-ng-template-strings'),
    path = require('path');

module.exports = function (options, gulp) {
    gulp.task('templates', ['ts'], function () {
        return gulp.src([path.join(options.src, '**/*.js'), path.join(options.tmp, '**/*.js'), '!**/*.spec.js'])
            .pipe(ngTemplateStrings({ cwd: options.src }))
            .pipe(gulp.dest(path.join(options.dist, 'templates')));
    });

    gulp.task('concat', ['templates'], function () {
        return gulp.src(path.join(options.dist, 'templates/**/*.js'))
            .pipe(angularFilesort())
            .pipe(concat(options.name + ".js"))
            .pipe(gulp.dest(path.join(options.dist, 'build')));
    });

    gulp.task('html', function () {
        return gulp.src(path.join(options.src, '*.html'))
            .pipe(gulp.dest(path.join(options.dist, 'build')));
    });

    gulp.task('build', ['ts', 'lint', 'test', 'concat', 'html']);
}
