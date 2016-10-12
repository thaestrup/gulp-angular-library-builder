'use strict';

var gulp = require('gulp'),
    assign = require('object-assign'),
    connect = require('gulp-connect');

module.exports = function (options) {

    gulp.task('server', function () {

        var config = assign({}, {
            root: ['src', 'bower_components', options.target, 'resources'],
            port: 8080,
            host: 'localhost',
            livereload: {
                port: 35729
            }
        }, options.server);

        connect.server(config);
    });

};