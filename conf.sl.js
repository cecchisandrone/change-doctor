exports.config = {
    sauceUser: 'RND-SEE-DDS-FPI-NCE',
    sauceKey: 'ac1b0d47-0d13-4ad7-9e7a-007efc49d72b',
    specs: [
      'test/*.js',
    ],
    rootElement: 'body',
    framework: 'jasmine2',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 1200000
    },
    multiCapabilities : [
        {
            'browserName': 'chrome',
            'platform': 'Windows 7',
            'chromeOptions': {
                'args': [
                    "--disable-web-security"
                ]
            }
        }
    ]
};