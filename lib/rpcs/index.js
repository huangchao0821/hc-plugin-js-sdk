"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRPC = exports.getNativeRPC = exports.getIframeRPC = void 0;
var rpc_shooter_1 = require("rpc-shooter");
var utils_1 = require("../utils");
var native_1 = require("./native");
var iframeRPC;
var nativeRPC;
function getIframeRPC(timeout) {
    if (iframeRPC) {
        return iframeRPC;
    }
    iframeRPC = new rpc_shooter_1.RPC({
        event: new rpc_shooter_1.RPCMessageEvent({
            currentEndpoint: window,
            targetEndpoint: window.top,
            config: { targetOrigin: '*' },
        }),
        timeout: timeout,
    });
    return iframeRPC;
}
exports.getIframeRPC = getIframeRPC;
function getNativeRPC(platform) {
    if (nativeRPC) {
        return nativeRPC;
    }
    nativeRPC = new native_1.NativeRPC(platform);
    return nativeRPC;
}
exports.getNativeRPC = getNativeRPC;
function getRPC() {
    if ((0, utils_1.isEmbeddedInIFrame)()) {
        return getIframeRPC();
    }
    if ((0, utils_1.isEmbeddedInAndroid)()) {
        return getNativeRPC('android');
    }
    if ((0, utils_1.isEmbeddedInIos)()) {
        return getNativeRPC('ios');
    }
    throw 'no rpc for current platform';
}
exports.getRPC = getRPC;
