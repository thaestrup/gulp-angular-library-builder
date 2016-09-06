'use strict';

var del = require('del')

module.exports = function (options, gulp) {
    gulp.task('clean', function (cb) {
        del([options.dist, options.tmp], cb);
    });
}
