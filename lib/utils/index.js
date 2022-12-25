"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmbeddedInIos = exports.isEmbeddedInAndroid = exports.isEmbeddedInIFrame = void 0;
var ssr_1 = require("./ssr");
var ua_1 = require("./ua");
var ua = (0, ua_1.parse)((0, ssr_1.isBrowser)() ? window.navigator.userAgent : '');
function isEmbeddedInIFrame() {
    return (0, ssr_1.isBrowser)()
        ? window.parent && window.self && window.parent !== window.self
        : false;
}
exports.isEmbeddedInIFrame = isEmbeddedInIFrame;
function isEmbeddedInAndroid() {
    return ua.isAndroid;
}
exports.isEmbeddedInAndroid = isEmbeddedInAndroid;
function isEmbeddedInIos() {
    return ua.isIos;
}
exports.isEmbeddedInIos = isEmbeddedInIos;
