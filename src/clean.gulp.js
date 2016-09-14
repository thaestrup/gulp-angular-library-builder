'use strict';

var clean = require('gulp-clean'),
    gulp = require('gulp');

module.exports = function (options) {
    gulp.task('clean', function (cb) {
        return gulp.src([options.dist, options.target], {
                read: false
            })
            .pipe(clean());
    });

};