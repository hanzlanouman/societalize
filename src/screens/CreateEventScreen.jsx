import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const CreateEventScreen = () => {
  const [formData, setFormData] = useState({ eventName: '', description: '', date: '' , time: ''});
  const [errors, setErrors] = useState({});
  
  const handleEventCreation = () => {
    // Logic to handle event creation
    console.log('Form Data:', formData);
  };

  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Create Event</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
             
              label='Event Name'
              onChangeText={(text) => setFormData({ ...formData, eventName: text })}
              value={formData.eventName}
            />
            {errors.eventName && <Text style={styles.errorText}>{errors.eventName}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.descriptionInput]}
             
              label='Description'
              multiline
              numberOfLines={4}
              onChangeText={(text) => setFormData({ ...formData, description: text })}
              value={formData.description}
            />
            {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
           
              label='Date (e.g., YYYY-MM-DD)'
              onChangeText={(text) => setFormData({ ...formData, date: text })}
              value={formData.date}
            />
            {errors.date && <Text style={styles.errorText}>{errors.date}</Text>}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
           
              label='9:00-10:00 AM'
              onChangeText={(text) => setFormData({ ...formData, time: text })}
              value={formData.time}
            />
            {errors.date && <Text style={styles.errorText}>{errors.date}</Text>}
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => console.log('Cancel Event')}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.createEventButton]}
              onPress={handleEventCreation}
            >
              <Text style={styles.buttonText}>Create Event</Text>
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
    fontSize: 44,
    color: '#7a29ff',
    fontWeight: 'bold',
    marginBottom: 40,
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
    height: 150, // Adjusted for description input
  },
  errorText: {
    color: 'red',
    marginTop: 5,
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
  cancelButton: {
    backgroundColor: '#7a29ff', // A neutral color for the cancel button
  },
  createEventButton: {
    backgroundColor: '#7a29ff',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },


});

export default CreateEventScreen;
