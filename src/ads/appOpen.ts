import { AppState } from 'react-native';
import type { AppOpenAd as AppOpenAdInstance } from 'react-native-google-mobile-ads';
import { getAdUnits } from './adUnits';
import { adLock } from './adLock';
import { getGoogleMobileAds } from './nativeAds';

const ads = getGoogleMobileAds();
const adUnits = ads ? getAdUnits(ads) : null;
let loaded = false;
let wantShow = true; // true khi mới mở app: hiện ngay khi tải xong
let ad: AppOpenAdInstance | null = createAd();

function createAd(): AppOpenAdInstance | null {
  if (!ads || !adUnits) return null;

  const a = ads.AppOpenAd.createForAdRequest(adUnits.appOpen);
  a.addAdEventListener(ads.AdEventType.LOADED, () => {
    loaded = true;
    if (wantShow) show();
  });
  a.addAdEventListener(ads.AdEventType.ERROR, () => {
    loaded = false;
  });
  a.addAdEventListener(ads.AdEventType.CLOSED, () => {
    adLock.unlockSoon();
    loaded = false;
    const nextAd = createAd();
    ad = nextAd;
    nextAd?.load();
  });
  return a;
}

function show() {
  if (!ad || !loaded || adLock.isBusy()) return;
  wantShow = false;
  adLock.lock();
  ad.show().catch(() => adLock.unlockSoon());
}

// Gọi 1 lần sau khi mobileAds().initialize() xong. Trả về hàm dọn dẹp.
export function initAppOpenAd() {
  if (!ad) return () => {};

  ad.load();
  // Quá 5 giây chưa tải xong thì thôi, không hiện giữa chừng khi người dùng đang đọc.
  const timer = setTimeout(() => {
    wantShow = false;
  }, 5000);
  // Quay lại app từ nền -> hiện nếu quảng cáo đã sẵn sàng.
  const sub = AppState.addEventListener('change', (state) => {
    if (state === 'active') show();
  });
  return () => {
    clearTimeout(timer);
    sub.remove();
  };
}
