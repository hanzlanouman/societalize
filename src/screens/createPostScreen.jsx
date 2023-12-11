import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Switch } from 'react-native';
import { TextInput } from 'react-native-paper';


const CreatePostScreen = () => {
    const [formData, setFormData] = useState({
      description: '',
      auditorium: '',
      tags: '',
      timings: '',
      announcement: false
    });
    const [errors, setErrors] = useState({});
    
    // Function to handle changes in text inputs
    const handleInputChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
    };
  
    const handlePostCreation = () => {
      // Logic to handle post creation
      console.log('Form Data:', formData);
    };
  
    return (
      <View>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.headerText}>Create Post</Text>
  
            {/* Description Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.descriptionInput]}
                label='Description'
                multiline
                numberOfLines={4}
                onChangeText={(text) => handleInputChange('description', text)}
                value={formData.description}
              />
              {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}
            </View>
  
            {/* Auditorium Image Placeholder */}
            <TouchableOpacity style={styles.imagePlaceholder}>
              <Text style={styles.placeholderText}>+ Add Image</Text>
            </TouchableOpacity>
  
            {/* Tags Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                label='Tags'
                onChangeText={(text) => handleInputChange('tags', text)}
                value={formData.tags}
              />
              {errors.tags && <Text style={styles.errorText}>{errors.tags}</Text>}
            </View>
  
            {/* Timings Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                label='Timings'
                onChangeText={(text) => handleInputChange('timings', text)}
                value={formData.timings}
              />
              {errors.timings && <Text style={styles.errorText}>{errors.timings}</Text>}
            </View>
  
            {/* Announcement Toggle */}
            <View style={styles.toggleContainer}>
              <Text>Announcement</Text>
              <Switch
                value={formData.announcement}
                onValueChange={(value) => handleInputChange('announcement', value)}
              />
            </View>
  
            {/* Action Buttons */}
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.discardButton]}
                onPress={() => console.log('Discard Post')}
              >
                <Text style={styles.buttonText}>Discard</Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                style={[styles.button, styles.postButton]}
                onPress={handlePostCreation}
              >
                <Text style={styles.buttonText}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };

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
    fontSize: 24,
    color: '#7a29ff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#7A29FF',
    backgroundColor: '#F8F2FF',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  descriptionInput: {
    height: 100, // Adjusted for description input
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 25,
    flexGrow: 1,
    marginHorizontal: 5, // Spacing between buttons
  },
  discardButton: {
    backgroundColor: '#CCCCCC', // A neutral color for the discard button
  },
  postButton: {
    backgroundColor: '#7a29ff',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  imagePlaceholder: {
    borderWidth: 1,
    borderColor: '#7A29FF',
    borderRadius: 10,
    height: 100,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDE7F6', // Light purple background for the placeholder
  },
  placeholderText: {
    color: '#7A29FF',
    fontSize: 16,
  },

});

export default CreatePostScreen;
