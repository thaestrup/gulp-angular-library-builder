'use strict';

var assign = require('object-assign');

module.exports = function (options) {

    options = assign({}, {
        name: 'no-name',
        src: 'src',
        dist: 'dist',
        target: 'target',
        failOnError: true,
        test: {
            browsers: ['PhantomJS'],
            singleRun: true
        },
        distributions: ['target/build/**/*', '!**/*.html', 'src/**/*.d.ts', 'bower.json', 'README.md', 'resources/**/*'],
    }, options);

    require('./clean.gulp')(options);
    require('./lint.gulp')(options);
    require('./styles.gulp')(options);
    require('./test.gulp')(options);
    require('./build.gulp')(options);
    require('./dist.gulp')(options);
    require('./release.gulp')(options);
    require('./ts.gulp')(options);
    require('./inject.gulp')(options);
    require('./server.gulp')(options);
    require('./watch.gulp')(options);
    require('./serve.gulp')(options);

}