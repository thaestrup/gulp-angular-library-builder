'use strict';

var assign = require('object-assign'),
    gulp = require('gulp');

module.exports = function (options) {

    options = assign({}, {
        name: 'no-name',
        src: 'src',
        dist: 'dist',
        ts: 'dist/ts'  
    }, options);

    require('./clean.gulp')(options);
    require('./lint.gulp')(options);
    require('./test.gulp')(options);
    require('./build.gulp')(options);
    require('./dist.gulp')(options);
    require('./release.gulp')(options);
    require('./ts.gulp')(options);

}
