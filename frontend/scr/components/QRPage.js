import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const QRPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your QR Code</Text>
      <View style={styles.centered}>
        <Image source={require('../../assets/QR.png')} style={styles.image} />
      </View>
      <Text style={styles.credit}>Credit: 100 Bath</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 30,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderRadius: 20,
    borderColor: '#ddd',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  credit: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
});

export default QRPage;