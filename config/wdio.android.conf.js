const { config } = require('./wdio.shared.conf');
const path = require('path');

config.port = 4724;

config.specs = [
    '../test/spec/android/**/*.js'
];

config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:deviceName': 'pixel_xl',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        "appium:app": path.join(process.cwd(), 'app/android/ApiDemos-debug.apk')
    }
]

exports.config = config;