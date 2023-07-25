import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

const ProfilePage = ({navigation}) => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch('http://3.92.144.33:3000/travel')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.date}</Text>
      <Text style={styles.tableCell}>{item.startStation}</Text>
      <Text style={styles.tableCell}>{item.endStation}</Text>
      <Text style={styles.tableCell}>{item.startTime}</Text>
      <Text style={styles.tableCell}>{item.endTime}</Text>
      <Text style={styles.tableCell}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} value="Hanazono" editable={false} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Surname:</Text>
        <TextInput style={styles.input} value="Lily" editable={false} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} value="Lily@gmail.com" editable={false} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Password:</Text>
        <TextInput style={styles.input} value="********" secureTextEntry={true} editable={false} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#009688' }]} onPress={() => setShow(!show)}>
        <Text style={styles.buttonText}>{show ? 'Hide Travel History' : 'Show Travel History'}</Text>
      </TouchableOpacity>
      {show && data.length > 0 && (
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Date</Text>
            <Text style={styles.tableHeaderText}>Start Location</Text>
            <Text style={styles.tableHeaderText}>End Location</Text>
            <Text style={styles.tableHeaderText}>Start Time</Text>
            <Text style={styles.tableHeaderText}>End Time</Text>
            <Text style={styles.tableHeaderText}>Price</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: '#FFFFFF'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333333'
  },
  input: {
    flex: 2,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    borderColor: '#CCCCCC'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    marginTop: 24,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
  tableContainer: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  tableHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  tableCell: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 2,
  },
});

export default ProfilePage;
