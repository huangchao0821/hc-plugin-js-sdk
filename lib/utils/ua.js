"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.BOT_UA = void 0;
var ua_parser_js_1 = require("ua-parser-js");
exports.BOT_UA = [
    '\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/',
    'googlebot',
    'baiduspider',
    'gurujibot',
    'yandexbot',
    'slurp',
    'msnbot',
    'bingbot',
    'facebookexternalhit',
    'linkedinbot',
    'twitterbot',
    'slackbot',
    'telegrambot',
    'applebot',
    'pingdom',
    'tumblr',
];
function parse(phrase) {
    var _a, _b, _c, _d, _e, _f, _g;
    var result = new ua_parser_js_1.UAParser(phrase).getResult();
    var regex = new RegExp("(".concat(exports.BOT_UA.join('|'), ")"), 'ig');
    var isBot = phrase ? regex.test(phrase.toLowerCase()) : false;
    var browser = (_a = result.browser.name) !== null && _a !== void 0 ? _a : '';
    var deviceType = (_b = result.device.type) !== null && _b !== void 0 ? _b : '';
    var os = (_c = result.os.name) !== null && _c !== void 0 ? _c : '';
    var engine = (_d = result.engine.name) !== null && _d !== void 0 ? _d : '';
    var isMobile = deviceType === 'mobile';
    var isTablet = deviceType === 'tablet';
    var isIos = os === 'iOS';
    var ua = Object.freeze({
        browser: browser,
        deviceType: deviceType,
        os: os,
        engine: engine,
        isMobile: isMobile,
        isTablet: isTablet,
        isIos: isIos,
        source: phrase,
        deviceVendor: result.device.vendor || null,
        osVersion: parseInt((_e = result.os.version) !== null && _e !== void 0 ? _e : '', 10),
        browserVersion: parseFloat((_f = result.browser.version) !== null && _f !== void 0 ? _f : ''),
        engineVersion: parseFloat((_g = result.engine.version) !== null && _g !== void 0 ? _g : ''),
        isIphone: isMobile && isIos,
        isIpad: isTablet && isIos,
        isDesktop: !isMobile && !isTablet,
        isChrome: browser === 'Chrome',
        isFirefox: browser === 'Firefox',
        isSafari: browser === 'Safari',
        isIE: browser === 'IE',
        isEdge: browser === 'Edge',
        isOpera: browser === 'Opera',
        isMac: os === 'Mac OS',
        isChromeOS: os === 'Chromium OS',
        isWindows: os === 'Windows',
        isAndroid: os === 'Android',
        isBot: isBot,
    });
    return ua;
}
exports.parse = parse;
