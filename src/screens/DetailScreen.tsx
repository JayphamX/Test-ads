import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AdBanner from '../components/AdBanner';
import { ARTICLES } from '../data/articles';
import type { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function DetailScreen({ route }: Props) {
  const article = ARTICLES.find((a) => a.id === route.params.articleId);

  if (!article) {
    return (
      <View style={styles.center}>
        <Text>Không tìm thấy bài viết.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{ uri: article.image }} style={styles.image} />
        <View style={styles.body}>
          <Text style={styles.category}>{article.category}</Text>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.meta}>
            {article.source} · {article.time}
          </Text>
          <Text style={styles.content}>{article.content}</Text>
        </View>
      </ScrollView>
      <AdBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  image: { width: '100%', height: 220, backgroundColor: '#ddd' },
  body: { padding: 16 },
  category: { color: '#d32f2f', fontWeight: '700', fontSize: 13, marginBottom: 6 },
  title: { fontSize: 22, fontWeight: '800', color: '#111', marginBottom: 8 },
  meta: { fontSize: 13, color: '#888', marginBottom: 16 },
  content: { fontSize: 16, lineHeight: 26, color: '#222' },
});
