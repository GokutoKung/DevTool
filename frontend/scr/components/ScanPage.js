import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ScanPage = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');

  const handleScan = () => {
    console.log('Scanning:', inputValue);
    // do something with the scanned value here
    if (inputValue === "station") {
      navigation.navigate("BusCall")
    }
    else if (inputValue === "bus") {
      navigation.navigate("BusStop")
    }
  };

  const handleReport = () => {
    navigation.navigate("Report")
  };

  return (
    <View style={styles.container}>
      <View style={styles.scanContainer}>
        <Text style={styles.scanText}>Scan your item:</Text>
        <Image source={require('../../assets/scan.png')} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="Enter item ID"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.submitButton, { marginRight: 10 }]} onPress={handleScan}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.submitButton, { backgroundColor: 'red' }]} onPress={handleReport} >
              <Text style={styles.submitButtonText}>Report</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanContainer: {
    width: '80%',
    alignItems: 'center',
  },
  scanText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    fontSize: 18,
  },
  image: {
    width: 400,
    height: 400,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  }
});

export default ScanPage;
