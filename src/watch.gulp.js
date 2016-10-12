'use strict';

var gulp = require('gulp'),
    assign = require('object-assign'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

module.exports = function (options) {

    var  watchOptions = {
            usePolling: true,
            awaitWriteFinish: {
                stabilityThreshold: 2000,
                pollInterval: 100
            }
        };

    gulp.task('watch', function () {    
        var config = assign({}, {
            livereload: {
                port: 35729
            }
        }, options.server.livereload)


        livereload.listen(config.livereload.port);

        watch('src/**/*.js', watchOptions, function () {
            gulp.start(['lint-es', 'test', 'inject-js'], function () {
                livereload.reload();
            });
        });
		watch(['src/**/*.ts'], watchOptions, function () {
            gulp.start('templates', 'lint-es', 'test', 'inject-ts', function () {
                livereload.reload();
            });
        });
	    watch('src/**/*.scss', watchOptions, function () {
            gulp.start('lint-styles', 'styles-serve', 'inject-styles', function () {
                livereload.reload('*.css');
            });
        });
        watch(['src/**/*.html'], watchOptions, function () {
            gulp.start('lint-html', function () {
                livereload.reload();
            });
        });
    });
};