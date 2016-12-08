'use strict';

var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    ts = require('gulp-typescript'),
    path = require('path');

module.exports = function (options) {

    var defaults = {
        compilerOptions: {
            noImplicitAny: true,
            target: "es5",
            sourceMap: true,
            declarationFiles: true,
            noExternalResolve: false,
            sortOutput: true,
            removeComments: false,
            preserveConstEnums: true
        }
    };

    /**
     * Compile all typescript files and source maps from options.src and output them to options.dist
     */
    gulp.task('ts', function () {
        var tsProject = ts(defaults.compilerOptions),
            tsResult = gulp.src(path.join(options.src, '**/*.ts'))
            .pipe(sourcemaps.init())
            .pipe(ts(tsProject,  ts.reporter.longReporter())).js
            .pipe(sourcemaps.write('maps'))
            .pipe(gulp.dest(path.join(options.target, "ts")));
        return tsResult;
    });

};
