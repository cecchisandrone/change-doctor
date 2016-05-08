//config file for Protractor
exports.config = {
    specs: [
        'test/*.js'
    ],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': [
                "--disable-web-security"
            ]
        }
    },
    rootElement: 'body',
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1200000
    }
};