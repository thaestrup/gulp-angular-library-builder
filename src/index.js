'use strict';

var assign = require('object-assign');

module.exports = function (options) {

    options = assign({}, {
        name: 'no-name',
        src: 'src',
        dist: 'dist'
    }, options);
    require('./clean.gulp')(options);
    require('./lint.gulp')(options);
    require('./test.gulp')(options);
    require('./build.gulp')(options);
    require('./dist.gulp')(options);
    require('./release.gulp')(options);
};
