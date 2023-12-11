import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const EventListScreen = () => {
  // Example events data - this should come from your state or props
  const events = [
    { id: 1, title: 'Event 1', description: 'Description of Event 1', time: '12:00 PM', venue: 'Hall A' },
    { id: 2, title: 'Event 2', description: 'Description of Event 2', time: '3:00 PM', venue: 'Hall B' },
    // ... add more events
  ];

  const handleDelete = (eventId) => {
    // Logic to handle event deletion
    console.log('Delete event with id:', eventId);
  };

  const handleEdit = (eventId) => {
    // Logic to handle event editing
    console.log('Edit event with id:', eventId);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Event List</Text>
        {events.map((event) => (
          <View key={event.id} style={styles.eventBlock}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.description}>{event.description}</Text>
            <Text style={styles.info}>{event.time} - {event.venue}</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.deleteButton]}
                onPress={() => handleDelete(event.id)}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.editButton]}
                onPress={() => handleEdit(event.id)}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#7a29ff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  eventBlock: {
    borderWidth: 1,
    borderColor: '#7A29FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#F8F2FF',
  },
  title: {
    fontSize: 18,
    color: '#7a29ff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    borderRadius: 25,
    flexGrow: 1,
    marginHorizontal: 5,
  },
  deleteButton: {
    backgroundColor: '#ff6b6b', // Red color for the delete button
  },
  editButton: {
    backgroundColor: '#7a29ff', // Purple color for the edit button
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default EventListScreen;
