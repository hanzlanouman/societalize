import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { updateDoc, doc } from 'firebase/firestore';
import { firestore } from '../config/firebase.config'; // Adjust the import based on your project structure

const EditEventScreen = ({ route, navigation }) => {
  const { event } = route.params;
  const [eventName, setEventName] = useState(event.eventName);
  const [description, setDescription] = useState(event.description);
  const [date, setDate] = useState(event.date);
  const [time, setTime] = useState(event.time);

  const handleSave = async () => {
    try {
      const updatedEventData = {};
      if (eventName !== undefined) updatedEventData.eventName = eventName;
      if (description !== undefined) updatedEventData.description = description;
      if (date !== undefined) updatedEventData.date = date;
      if (time !== undefined) updatedEventData.time = time;
  
      console.log('Updated Event Data:', updatedEventData);
  
      if (Object.keys(updatedEventData).length === 0) {
        console.error("No fields to update");
        return;
      }
  
      const eventDoc = doc(firestore, "events", event.id);
      await updateDoc(eventDoc, updatedEventData);
      navigation.goBack();
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };
  
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={eventName}
        onChangeText={setEventName}
        placeholder="Event Name"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
      />
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Date"
      />
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
        placeholder="Time"
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default EditEventScreen;
