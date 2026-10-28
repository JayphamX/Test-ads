import Constants, { AppOwnership } from 'expo-constants';
import { TurboModuleRegistry, type TurboModule } from 'react-native';
import type * as GoogleMobileAds from 'react-native-google-mobile-ads';

type GoogleMobileAdsModule = typeof import('react-native-google-mobile-ads');

declare const require: (moduleName: string) => GoogleMobileAdsModule;

const hasNativeAdsModule =
  TurboModuleRegistry.get<TurboModule>('RNGoogleMobileAdsModule') !== null;

export const isExpoGo =
  Constants.appOwnership === AppOwnership.Expo || !hasNativeAdsModule;

let adsModule: GoogleMobileAdsModule | null = null;

export function getGoogleMobileAds(): GoogleMobileAdsModule | null {
  if (isExpoGo) return null;
  if (!adsModule) {
    adsModule = require('react-native-google-mobile-ads');
  }
  return adsModule;
}
