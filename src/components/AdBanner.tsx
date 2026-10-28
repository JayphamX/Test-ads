import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getAdUnits } from '../ads/adUnits';
import { getGoogleMobileAds } from '../ads/nativeAds';

export default function AdBanner() {
  const insets = useSafeAreaInsets();
  const ads = getGoogleMobileAds();
  if (!ads) return null;

  const adUnits = getAdUnits(ads);
  const { BannerAd, BannerAdSize } = ads;
  return (
    <View style={[styles.box, { paddingBottom: insets.bottom }]}>
      <BannerAd
        unitId={adUnits.banner}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{ requestNonPersonalizedAdsOnly: true }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: { alignItems: 'center', backgroundColor: '#fff' },
});
