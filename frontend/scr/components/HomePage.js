import React, { useState } from 'react';
import { View, Image, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';

const HomePage = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <View style={styles.modalContent}>
            <Image source={require('../../assets/modal.png')} style={styles.modalImage} />
          </View>
        </View>
      </Modal>
      <Image
        style={styles.image}
        source={require('../../assets/map.png')}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
  },
  closeButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalImage: {
    width: 400,
    height: 400,
  },
});

export default HomePage;
