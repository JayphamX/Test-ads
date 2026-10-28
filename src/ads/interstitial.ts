import type { InterstitialAd as InterstitialAdInstance } from 'react-native-google-mobile-ads';
import { getAdUnits } from './adUnits';
import { adLock } from './adLock';
import { getGoogleMobileAds } from './nativeAds';

const ads = getGoogleMobileAds();
const adUnits = ads ? getAdUnits(ads) : null;
const ad: InterstitialAdInstance | null =
  ads && adUnits
    ? ads.InterstitialAd.createForAdRequest(adUnits.interstitial)
    : null;
let loaded = false;

if (ad && ads) {
  ad.addAdEventListener(ads.AdEventType.LOADED, () => {
    loaded = true;
  });
  ad.addAdEventListener(ads.AdEventType.ERROR, () => {
    loaded = false;
  });
}

export function loadInterstitial() {
  if (!ad) return;

  loaded = false;
  ad.load();
}

// Hiện quảng cáo (nếu đã sẵn sàng) rồi gọi onDone khi đóng.
// Nếu chưa tải xong thì bỏ qua quảng cáo, gọi onDone ngay để không chặn người dùng.
export function showInterstitial(onDone: () => void) {
  if (!ad || !ads || !loaded) {
    onDone();
    loadInterstitial();
    return;
  }
  const unsubscribe = ad.addAdEventListener(ads.AdEventType.CLOSED, () => {
    unsubscribe();
    adLock.unlockSoon();
    loadInterstitial();
    onDone();
  });
  adLock.lock();
  ad.show().catch(() => {
    unsubscribe();
    adLock.unlockSoon();
    onDone();
  });
}
