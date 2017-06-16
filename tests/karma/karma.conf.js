// Karma configuration
// Generated on Sun Feb 26 2017 22:11:20 GMT+0200 (FLE Standard Time)

module.exports = function (config) {
    config.set({
        basePath: '../../',
        frameworks: ['jasmine'],
        files: [
            // dependencies
            './bower_components/angular/angular.js',
            './bower_components/angular-route/angular-route.js',
            './bower_components/angular-resource/angular-resource.js',
            './bower_components/angular-animate/angular-animate.js',
            './bower_components/ngstorage/ngStorage.js',
            './bower_components/angular-route-segment/build/angular-route-segment.js',
            './bower_components/angular-growl-v2/build/angular-growl.js',
            './bower_components/angular-bootstrap/ui-bootstrap.js',
            './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            './bower_components/angular-ui-mask/dist/mask.js',
            './bower_components/angular-mocks/angular-mocks.js',

            // app
            './landing/app.js',
            './landing/utils/auth/login/login.controller.js',

            // tests
            './tests/karma/login/login.spec.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['chrome_full_screen'],
        customLaunchers: {
            chrome_full_screen: {
                base: 'Chrome',
                flags: ['--start-maximized']
            }
        },
        singleRun: false,
        concurrency: Infinity
    })
};
