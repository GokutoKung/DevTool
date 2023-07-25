import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://3.92.144.33:3000/news')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Latest News</Text>
      </View>
      <View style={styles.articlesContainer}>
        {data.map(article => (
          <View style={styles.article} key={article.title}>
            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text style={styles.articleText}>{article.text}</Text>
            <Text style={styles.articleLink}>Read more...</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  articlesContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  article: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  articleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  articleText: {
    fontSize: 16,
    marginBottom: 10,
  },
  articleLink: {
    color: '#007AFF',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default NewsPage;
