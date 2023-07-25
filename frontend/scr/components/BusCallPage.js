import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

const BusCallPage = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    // Fetch bus data from API
    fetch('http://3.92.144.33:3000/buses')
      .then(response => response.json())
      .then(data => setBuses(data));
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.busText}>{item.busNumber}</Text>
        <TouchableOpacity style={styles.button} onPress={() => alert(`Calling driver for bus ${item.busNumber}`)}>
          <Text style={styles.buttonText}>Call Driver</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus List</Text>
      <FlatList
        data={buses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
  },
  busText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default BusCallPage;
