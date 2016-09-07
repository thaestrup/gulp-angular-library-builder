'use strict';

var bower = require('gulp-bower'),
        Server = require('karma').Server,
        path = require('path'),
        wiredep = require('wiredep');

module.exports = function (options, gulp) {
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
            files: bowerDeps.js.concat(path.join(options.src, '**/*.js'), path.join(options.ts, '/**/*.js')),
            singleRun: true
        }, function() {cb();}).start();
    });
}
