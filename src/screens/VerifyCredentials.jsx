import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker'; // Ensure you have @react-native-picker/picker installed

const RegistrationScreen = () => {
  const [department, setDepartment] = useState('');
  const [regNo, setRegNo] = useState('');
  const [image, setImage] = useState(null);

  const handlePictureUpload = () => {
    // Logic to handle picture upload
    // This is usually done using Image Picker or similar library
    console.log('Upload Picture');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.container}>
          <Text style={styles.headerText}>Registration</Text>

          {/* Department Dropdown */}
          <View style={styles.inputContainer}>
            <Picker
              selectedValue={department}
              onValueChange={(itemValue, itemIndex) => setDepartment(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Department" value="" />
              <Picker.Item label="BSE" value="BSE" />
              <Picker.Item label="BCE" value="BCE" />
              <Picker.Item label="BCS" value="BCS" />
              <Picker.Item label="EEE" value="EEE" />
              {/* Add other departments as needed */}
            </Picker>
          </View>

          {/* Registration Number Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              mode='outlined'
              label='Reg No'
              onChangeText={setRegNo}
              value={regNo}
            />
          </View>

          {/* Picture Upload */}
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={handlePictureUpload}
          >
            <Text style={styles.uploadButtonText}>Upload Picture</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Styles for the RegistrationScreen component
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 44,
    color: '#7a29ff',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    // Add your input styles here
  },
  picker: {
    // Style your picker component
  },
  uploadButton: {
    backgroundColor: '#7a29ff',
    padding: 12,
    borderRadius: 50,
    marginBottom: 10,
  },
  uploadButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default RegistrationScreen;
