const {config} = require('./wdio.shared.conf');
const path = require('path');

config.port = 4724;

config.specs = [
    '../test/spec/iOS/**/*.js'
];

config.capabilities = [
    {
        'appium:platformName': 'iOS',
        'appium:deviceName': 'iPhone 15 Pro Max',
        'appium:platformVersion': '17.2',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), 'app/iOS/UIKitCatalog-iphonesimulator.app'),
        'appium:udid': "CF39F663-2A16-4372-97E0-31FD00A04E7E"
    }
]

exports.config = config;