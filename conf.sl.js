//config file for Sauce Labs
var multiCapabilities = [
    {
        'browserName': 'chrome',
        'platform': 'Windows 7',
        'chromeOptions': {
            'args': [
                "--disable-web-security"
            ]
        }
    }
];

exports.config = {
    sauceUser: 'RND-SEE-DDS-FPI-NCE',
    sauceKey: 'ac1b0d47-0d13-4ad7-9e7a-007efc49d72b',
    specs: [
      'test/*.js',
    ],
    rootElement: 'body',
    framework: 'jasmine2',
    getPageTimeout: 120000,
    allScriptsTimeout: 121000,
    onPrepare: function () {
        //AngularJS / RequireJS trick
        browser.manage().timeouts().pageLoadTimeout(120000);
        browser.manage().timeouts().implicitlyWait(25000);
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 500000
    },
    useAllAngular2AppRoots: true
};