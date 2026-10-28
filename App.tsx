import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import { loadInterstitial } from './src/ads/interstitial';
import { initAppOpenAd } from './src/ads/appOpen';
import { getGoogleMobileAds } from './src/ads/nativeAds';
import type { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => {
    const ads = getGoogleMobileAds();
    if (!ads) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;
    ads
      .default()
      .initialize()
      .then(() => {
        if (cancelled) return;
        loadInterstitial();
        cleanup = initAppOpenAd();
      });
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tin Nhanh 24h' }} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Chi tiết' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
