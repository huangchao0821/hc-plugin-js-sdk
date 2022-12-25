import { UAParser } from 'ua-parser-js';

export interface UserAgent {
  readonly source: string;
  readonly deviceType: string | null;
  readonly deviceVendor: string | null;
  readonly os: string;
  readonly osVersion: number;
  readonly browser: string;
  readonly browserVersion: number;
  readonly engine: string;
  readonly engineVersion: number;
  readonly isIphone: boolean;
  readonly isIpad: boolean;
  readonly isMobile: boolean;
  readonly isTablet: boolean;
  readonly isDesktop: boolean;
  readonly isBot: boolean;
  readonly isChrome: boolean;
  readonly isFirefox: boolean;
  readonly isSafari: boolean;
  readonly isIE: boolean;
  readonly isEdge: boolean;
  readonly isOpera: boolean;
  readonly isMac: boolean;
  readonly isChromeOS: boolean;
  readonly isWindows: boolean;
  readonly isIos: boolean;
  readonly isAndroid: boolean;
}

export const BOT_UA = [
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

export function parse(phrase: string): UserAgent {
  const result: UAParser.IResult = new UAParser(phrase).getResult();

  const regex = new RegExp(`(${BOT_UA.join('|')})`, 'ig');
  const isBot = phrase ? regex.test(phrase.toLowerCase()) : false;

  const browser: string = result.browser.name ?? '';
  const deviceType: string = result.device.type ?? '';
  const os: string = result.os.name ?? '';
  const engine: string = result.engine.name ?? '';
  const isMobile: boolean = deviceType === 'mobile';
  const isTablet: boolean = deviceType === 'tablet';
  const isIos: boolean = os === 'iOS';

  const ua: UserAgent = Object.freeze({
    browser,
    deviceType,
    os,
    engine,
    isMobile,
    isTablet,
    isIos,
    source: phrase,
    deviceVendor: result.device.vendor || null,
    osVersion: parseInt(result.os.version ?? '', 10),
    browserVersion: parseFloat(result.browser.version ?? ''),
    engineVersion: parseFloat(result.engine.version ?? ''),
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
