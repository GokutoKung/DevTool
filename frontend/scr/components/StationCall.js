import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

const StationCallPage = () => {
  const [stops, setStops] = useState([]);

  useEffect(() => {
    // Fetch stop data from API
    fetch('http://3.92.144.33:3000/stops')
      .then(response => response.json())
      .then(data => setStops(data));
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.stopText}>{item.station}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Call Stop</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus Stops</Text>
      <FlatList
        data={stops}
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
    backgroundColor: '#FFFFFF',
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
  },
  stopText: {
    fontSize: 16,
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

export default StationCallPage;
