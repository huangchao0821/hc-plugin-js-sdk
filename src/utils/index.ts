import { isBrowser } from './ssr';
import { parse } from './ua';

const ua = parse(isBrowser() ? window.navigator.userAgent : '');

export function isEmbeddedInIFrame(): boolean {
  return isBrowser()
    ? window.parent && window.self && window.parent !== window.self
    : false;
}

export function isEmbeddedInAndroid(): boolean {
  return ua.isAndroid;
}

export function isEmbeddedInIos(): boolean {
  return ua.isIos;
}
