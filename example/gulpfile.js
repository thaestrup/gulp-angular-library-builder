/*jslint node: true */
'use strict';

var gulp = require('gulp');

var options = {
    module: 'my-demo',
    name: 'my-demo',
    hostHeader: 'localhost',
   /* see all options in gulp-angular-library-builder index.js*/
};


require('gulp-angular-library-builder')(options);

gulp.task('default', ['serve:dev']);