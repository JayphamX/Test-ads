// Cờ chung: tránh hiện 2 quảng cáo toàn màn hình liên tiếp
// (ví dụ App Open bật lại ngay khi Interstitial vừa đóng).
let busy = false;

export const adLock = {
  lock() {
    busy = true;
  },
  unlockSoon() {
    setTimeout(() => {
      busy = false;
    }, 1500);
  },
  isBusy() {
    return busy;
  },
};
