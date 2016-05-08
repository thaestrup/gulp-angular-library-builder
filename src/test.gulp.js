'use strict';

var bower = require('gulp-bower'),
    gulp = require('gulp'),
    Server = require('karma').Server,
    path = require('path'),
    wiredep = require('wiredep');

module.exports = function (options) {
    gulp.task('bower', function () {
        return bower();
    });

    gulp.task('test', ['bower'], function (cb) {
        var bowerDeps = wiredep({
            dependencies: true,
            devDependencies: true
        });
        new Server({
            configFile: __dirname + '/karma.conf.js',
            files: bowerDeps.js.concat(path.join(options.src, '**/*.js')),
            singleRun: true
        }, cb).start();
    });
}
