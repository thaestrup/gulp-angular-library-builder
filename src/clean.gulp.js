'use strict';

var del = require('del'),
    gulp = require('gulp');

module.exports = function (options) {
    gulp.task('clean', function () {
        return del([options.dist, options.target]);
    });
};
