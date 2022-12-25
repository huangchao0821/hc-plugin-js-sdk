import { RPCMessageEvent, RPC as IframeRPC } from 'rpc-shooter';
import {
  isEmbeddedInAndroid,
  isEmbeddedInIFrame,
  isEmbeddedInIos,
} from '../utils';
import { NativeRPC, Platform } from './native';

let iframeRPC: RPC;
let nativeRPC: NativeRPC;

export type RPC = {
  invoke(method: string, ...args: any[]): Promise<any>;
};

export function getIframeRPC(timeout?: number) {
  if (iframeRPC) {
    return iframeRPC;
  }

  iframeRPC = new IframeRPC({
    event: new RPCMessageEvent({
      currentEndpoint: window,
      targetEndpoint: window.top as Window,
      config: { targetOrigin: '*' },
    }),
    timeout,
  });

  return iframeRPC;
}

export function getNativeRPC(platform: Platform) {
  if (nativeRPC) {
    return nativeRPC;
  }

  nativeRPC = new NativeRPC(platform);

  return nativeRPC;
}

export function getRPC(): RPC {
  if (isEmbeddedInIFrame()) {
    return getIframeRPC();
  }

  if (isEmbeddedInAndroid()) {
    return getNativeRPC('android');
  }

  if (isEmbeddedInIos()) {
    return getNativeRPC('ios');
  }

  throw 'no rpc for current platform';
}
