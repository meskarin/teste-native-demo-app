const {join} = require('path')

exports.config = {
    hostname:'localhost',
    port: 4723,
    path: '/wd/hub',
    specs:[
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities:[{
            "platformName": "Android",
            "platformVersion": "10.0",
            "deviceName": "AppiumT",
            "automationName": "UiAutomator2",
            "app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
            "appActivity": "com.wdiodemoapp.MainActivity"
            //"appWaitActivity": "com.wdiodemoapp.MainActivity"
    }]
}