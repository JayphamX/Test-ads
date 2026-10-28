import type * as GoogleMobileAds from 'react-native-google-mobile-ads';

export function getAdUnits(ads: typeof GoogleMobileAds) {
  return {
    banner: ads.TestIds.BANNER,
    interstitial: ads.TestIds.INTERSTITIAL,
    appOpen: ads.TestIds.APP_OPEN,
  };
}
