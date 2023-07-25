import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ReportPage = () => {
  const [busNumber, setBusNumber] = useState('');
  const [reportContent, setReportContent] = useState('');

  const handleReportSubmit = () => {
    // do something with the report data here
    console.log('Submitting report:', { busNumber, reportContent });
    // you can also send the report data to your backend server here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Submit a Report</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bus Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter bus number"
          value={busNumber}
          onChangeText={setBusNumber}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Report Content:</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Enter report content"
          value={reportContent}
          onChangeText={setReportContent}
          multiline
          numberOfLines={4}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleReportSubmit}>
        <Text style={styles.submitButtonText}>Submit Report</Text>
      </TouchableOpacity>
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
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    inputContainer: {
      width: '80%',
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      fontSize: 18,
    },
    multilineInput: {
      height: 100,
      textAlignVertical: 'top',
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
  
export default ReportPage;