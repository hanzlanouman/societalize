import React, { useState } from 'react';
<<<<<<< Updated upstream
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker'; // Ensure you have @react-native-picker/picker installed
=======
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';
>>>>>>> Stashed changes

const RegistrationScreen = () => {
  const [department, setDepartment] = useState('');
  const [regNo, setRegNo] = useState('');
  const [image, setImage] = useState(null);

  const handlePictureUpload = () => {
<<<<<<< Updated upstream
    // Logic to handle picture upload
    // This is usually done using Image Picker or similar library
    console.log('Upload Picture');
=======
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setImage(source);
      }
    });
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          <View style={styles.inputContainer}>
=======
          <View style={styles.pickerContainer}>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              {/* Add other departments as needed */}
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

          {/* Display the selected image */}
          {image && (
            <Image source={image} style={{ width: 200, height: 200, marginTop: 10 }} />
          )}
>>>>>>> Stashed changes
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

<<<<<<< Updated upstream
// Styles for the RegistrationScreen component
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#7a29ff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  picker: {
    height: 50, // Adjust the height as needed
    color: '#7a29ff',
    fontSize: 18,
    // Add any additional styling you prefer
  },
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    // Add your input styles here
  },
  picker: {
    // Style your picker component
=======
    height: 50, // Adjust the height as needed
    fontSize: 18,
    fontFamily: 'YourPreferredFont', // Add the desired font family
    // Add any additional styling you prefer
>>>>>>> Stashed changes
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
