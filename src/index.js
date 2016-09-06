'use strict';

var assign = require('object-assign')

module.exports = function (options, gulp) {

    options = assign({}, {
        name: 'no-name',
        src: 'src',
        dist: 'dist',
        tmp: 'tmp'
    }, options);

    require('./clean.gulp')(options, gulp);
    require('./lint.gulp')(options, gulp);
    require('./test.gulp')(options, gulp);
    require('./build.gulp')(options, gulp);
    require('./dist.gulp')(options, gulp);
    require('./release.gulp')(options, gulp);
    require('./ts.gulp')(options, gulp);

}
