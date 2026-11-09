import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
window.PidNativeAuth = {
  isNative: Capacitor.isNativePlatform(),
  openBrowser: (url) => Browser.open({ url }),
  closeBrowser: () => Browser.close(),
  listenForUrl: (callback) => App.addListener('appUrlOpen', callback),
  getLaunchUrl: () => App.getLaunchUrl()
};
