"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = exports.isBrowser = void 0;
function isBrowser() {
    return typeof window !== 'undefined';
}
exports.isBrowser = isBrowser;
var wait = function (duration) {
    return new Promise(function (resove) {
        var timer = setTimeout(function () {
            clearTimeout(timer);
            resove(null);
        }, duration);
    });
};
exports.wait = wait;
