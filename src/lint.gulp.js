'use strict';

var eslint = require('gulp-eslint'),
    fs = require('fs'),
    gulp = require('gulp'),
    path = require('path'),
    htmllint = require('gulp-htmllint'),
    scsslint = require('gulp-scss-lint'),
    gulpif = require('gulp-if');

module.exports = function (options) {

    gulp.task('lint-js-autofix', function () {
        return gulp.src('src/**/*.js')
            .pipe(eslint({
                fix: true
            }))
            .pipe(eslint.format())
            .pipe(gulp.dest('src/'));
    });

    gulp.task('lint-html', function (failOnError) {
        return gulp.src('src/**/*html')
            .pipe(htmllint({
                'config': '.htmllintrc',
                'failOnError': options.failOnError
            }));
    });

    gulp.task('lint-styles', function (failOnError) {
        return gulp.src('src/' + '**/*.scss')
            .pipe(scsslint({
                'config': '.scss-lint.yml'
            }))
        .pipe(gulpif(options.failOnError, scsslint.failReporter()));        
    });

    gulp.task('lint-es', function (failOnError) {
        var out;
        if (!fs.existsSync(options.target)) {
            fs.mkdirSync(options.target);
        }
        out = fs.createWriteStream(path.join(options.target, 'es-lint-result.xml'));
        return gulp.src(path.join(options.src, '**/*.js'))
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.format('checkstyle', out))
            .pipe(gulpif(options.failOnError, eslint.failAfterError()));

    });

    gulp.task('lint', ['lint-es', 'lint-html', 'lint-styles']);

};