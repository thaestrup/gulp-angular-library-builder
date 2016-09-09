'use strict';

var sourcemaps = require('gulp-sourcemaps'),
    ts = require('gulp-typescript'),
    gulp = require('gulp'),
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
        var tsProject = ts.createProject({
                compilerOptions: defaults
            }),
            tsResult = gulp.src(path.join(options.src, '**/*.ts'))
                .pipe(sourcemaps.init())
                .pipe(ts(tsProject)).js
                .pipe(sourcemaps.write('maps'))
                .pipe(gulp.dest(path.join(options.dist, "ts")));
        return tsResult;
    });

};
