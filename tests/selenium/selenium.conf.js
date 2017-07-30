// Selenium configuration
// Updated on Fri Jun 16 2017 22:11:34 GMT+0300 (FLE Daylight Time)

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        './login/login.spec.js'
    ],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--start-maximized']
        }
    }
};
