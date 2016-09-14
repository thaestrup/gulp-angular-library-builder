'use strict';

var path = require('path'),
    gulp = require('gulp'),
    sequence = require('gulp-sequence').use(gulp);

module.exports = function (options) {    
    options.failOnError = false;
    gulp.task('serve:dev', function (callback) {
        sequence('build', 'styles', 'inject', 'server', 'watch', callback);
    });
}