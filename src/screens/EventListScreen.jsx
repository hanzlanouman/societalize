import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, } from 'react-native';

const EventListScreen = () => {
  // Example events data - this should come from your state or props
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollection = collection(firestore, 'events');
      const eventsSnapshot = await getDocs(eventsCollection);
      const eventsList = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(eventsList); // Update state with fetched events
    };

    fetchEvents();
  }, []);

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
            <Text style={styles.title}>{event.eventName}</Text> {/* Updated field name */}
            <Text style={styles.description}>{event.description}</Text>
            {/* Assuming 'venue' is not a field in your Firestore, only 'date' and 'time' are displayed */}
            <Text style={styles.info}>{event.date} at {event.time}</Text>
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
