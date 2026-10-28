export type Article = {
  id: string;
  title: string;
  category: string;
  source: string;
  time: string;
  image: string;
  summary: string;
  content: string;
};

export type RootStackParamList = {
  Home: undefined;
  Detail: { articleId: string };
};
