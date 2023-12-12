import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  Modal,
} from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const RegistrationScreen = ({ navigation, route }) => {
  const { formData } = route.params;
  const [department, setDepartment] = useState('');
  const [regNo, setRegNo] = useState('');
  const [image, setImage] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handlePictureUpload = async () => {
    // Ask for permission
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    // Store the image temporarily
    const newPath = FileSystem.documentDirectory + 'temp-image.jpg';
    await FileSystem.copyAsync({
      from: pickerResult.uri,
      to: newPath,
    });

    setImage({ uri: newPath });
  };

  const submitForm = () => {
    const updatedFormData = {
      ...formData,
      department,
      regNo,
      imageUri: image?.uri,
    };
    console.log(updatedFormData);
  };

  const departments = ['BSE', 'BCE', 'BCS', 'EEE'];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.container}>
          <Text style={styles.headerText}>Registration</Text>

          {/* Department Modal */}
          <TouchableOpacity
            style={styles.pickerButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.pickerButtonText}>
              {department || 'Select Department'}
            </Text>
          </TouchableOpacity>
          <Modal
            visible={isModalVisible}
            onRequestClose={() => setModalVisible(false)}
            transparent={true}
            animationType='slide'
          >
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Choose Department</Text>
              {departments.map((dept, index) => (
                <View key={index} style={styles.radioContainer}>
                  <RadioButton
                    value={dept}
                    status={department === dept ? 'checked' : 'unchecked'}
                    onPress={() => setDepartment(dept)}
                  />
                  <Text style={styles.radioText}>{dept}</Text>
                </View>
              ))}
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              mode='outlined'
              label='Reg No'
              onChangeText={setRegNo}
              value={regNo}
              placeholder='AB12-ABC-000'
            />
          </View>

          {/* Picture Upload */}
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={handlePictureUpload}
          >
            <Text style={styles.uploadButtonText}>Upload Picture</Text>
          </TouchableOpacity>

          {/* Display the selected image */}
          {image && (
            <Image
              source={image}
              style={{ width: 200, height: 200, marginTop: 10 }}
            />
          )}

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
          {/* Remaining UI elements (TextInput, Image Upload, Submit Button) */}
          {/* ... */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioText: {
    fontSize: 18,
    marginLeft: 10,
  },
  modalButton: {
    backgroundColor: '#7a29ff',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pickerButton: {
    borderWidth: 1,
    borderColor: '#7a29ff',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  pickerButtonText: {
    color: '#7a29ff',
    fontSize: 18,
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
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
    height: 50, // Adjust the height as needed
    fontSize: 18,
    // Add any additional styling you prefer
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
