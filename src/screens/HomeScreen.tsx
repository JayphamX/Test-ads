import React, { useRef } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AdBanner from '../components/AdBanner';
import { showInterstitial } from '../ads/interstitial';
import { ARTICLES } from '../data/articles';
import type { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

// Cứ mỗi N lần mở bài thì hiện 1 quảng cáo toàn màn hình.
const INTERSTITIAL_EVERY = 2;

export default function HomeScreen({ navigation }: Props) {
  const opens = useRef(0);

  const openArticle = (id: string) => {
    opens.current += 1;
    const go = () => navigation.navigate('Detail', { articleId: id });
    if (opens.current % INTERSTITIAL_EVERY === 0) showInterstitial(go);
    else go();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={ARTICLES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => openArticle(item.id)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.body}>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.summary} numberOfLines={2}>
                {item.summary}
              </Text>
              <Text style={styles.meta}>
                {item.source} · {item.time}
              </Text>
            </View>
          </Pressable>
        )}
      />
      <AdBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f3f5' },
  list: { padding: 12, gap: 12 },
  card: { backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden', elevation: 2 },
  image: { width: '100%', height: 170, backgroundColor: '#ddd' },
  body: { padding: 12 },
  category: { color: '#d32f2f', fontWeight: '700', fontSize: 12, marginBottom: 4 },
  title: { fontSize: 17, fontWeight: '700', color: '#111', marginBottom: 4 },
  summary: { fontSize: 14, color: '#555' },
  meta: { fontSize: 12, color: '#888', marginTop: 8 },
});
