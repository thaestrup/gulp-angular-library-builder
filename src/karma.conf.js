'use strict';

module.exports = function (config) {
    config.set({
        basePath: process.cwd(),
        frameworks: ['jasmine', 'angular-filesort'],
        files: ['**/*.spec.js'],
        preprocessors: {
            'src/**/!(*.spec).js': ['coverage']
        },
        reporters: ['progress', 'junit', 'coverage'],
        junitReporter: {
            outputDir: 'dist',
            outputFile: 'test-results.xml',
            suite: '',
            useBrowserName: false
        },
        coverageReporter: {
            type: 'cobertura',
            dir: 'dist',
            file: 'cobertura-coverage.xml',
            subdir: '.'
        },
        angularFilesort: {
            whitelist: [
                'src/**/*.js',
                'tmp/**/*.js'
            ]
        },
        plugins: [
            'karma-jasmine',
            'karma-angular-filesort',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-ng-html2js-preprocessor'
        ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: false
    });
};
