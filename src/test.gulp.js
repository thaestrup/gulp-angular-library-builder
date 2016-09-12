'use strict';

var bower = require('gulp-bower'),
        Server = require('karma').Server,
        path = require('path'),
        gulp = require('gulp'),
        wiredep = require('wiredep');

module.exports = function (options) {
    gulp.task('bower', function () {
        return bower();
    });

    gulp.task('watch-test', function () {
        gulp.watch(path.join(options.src, '**/*.js'), ['test']);
    });

    gulp.task('test', ['bower', 'ts'], function (cb) {
        var bowerDeps = wiredep({
            dependencies: true,
            devDependencies: true
        });
        new Server({
            configFile: __dirname + '/karma.conf.js',
            files: bowerDeps.js.concat(path.join(options.src, '**/*.js'), path.join(options.dist, 'ts/**/*.js')),
            singleRun: true,
            dist: options.dist,
            ts: path.join(options.dist, 'ts/**/*.js')
        }, cb).start();
    });
};
