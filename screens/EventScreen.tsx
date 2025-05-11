import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const dummyEvents = [
  {
    id: '1',
    title: 'Community Cleanup',
    ageGroup: 'All ages',
    accessibility: 'Wheelchair accessible',
    genre: 'Volunteering',
  },
  {
    id: '2',
    title: 'Indie Film Night',
    ageGroup: '18+',
    accessibility: 'Not accessible',
    genre: 'Entertainment',
  },
  {
    id: '3',
    title: 'Kids Coding Workshop',
    ageGroup: '6-12',
    accessibility: 'Wheelchair accessible',
    genre: 'Education',
  },
];

type EventItem = {
  id: string;
  title: string;
  ageGroup: string;
  accessibility: string;
  genre: string;
};


export default function EventsScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }: { item: EventItem }) => (
  <View style={styles.eventCard}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.details}>Age Group: {item.ageGroup}</Text>
    <Text style={styles.details}>Accessibility: {item.accessibility}</Text>
    <Text style={styles.details}>Genre: {item.genre}</Text>
  </View>
);


  return (
    <View style={styles.container}>
      <FlatList
        data={dummyEvents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* Filter Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter Events</Text>
            <Text>• Age Group</Text>
            <Text>• Accessibility</Text>
            <Text>• Genre</Text>
            {/* Later: Replace with dropdowns or checkboxes */}
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={{ color: 'white' }}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Floating Buttons */}
      <View style={styles.floatingButtons}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Create new event')}>
          <Ionicons name="add-circle-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Ionicons name="filter-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  eventCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  details: { fontSize: 14, marginTop: 4 },
  floatingButtons: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '75%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
});