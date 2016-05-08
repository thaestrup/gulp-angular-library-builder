'use strict';

var eslint = require('gulp-eslint'),
    fs = require('fs'),
    gulp = require('gulp'),
    path = require('path');

module.exports = function (options) {

    gulp.task('eslint', function () {
        var out;
        if (!fs.existsSync(options.dist)) {
            fs.mkdirSync(options.dist);
        }
        out = fs.createWriteStream(path.join(options.dist, 'es-lint-result.xml'));
        return gulp.src(path.join(options.src, '**/*.js'))
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.format('checkstyle', out))
            .pipe(eslint.failAfterError());
    });

    gulp.task('lint', ['eslint']);

};
