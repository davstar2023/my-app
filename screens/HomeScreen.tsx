import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="home" size={28} color="#ffffff" />
          <Text style={styles.headerText}>Home</Text>
        </View>

        {/* Content */}
        <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>Welcome to YourApp!</Text>
          
          <Text style={styles.sectionTitle}>What You Can Do:</Text>
          
          <View style={styles.instruction}>
            <Ionicons name="map" size={24} color="#ffffff" style={styles.instructionIcon} />
            <View style={styles.instructionText}>
              <Text style={styles.instructionTitle}>Maps</Text>
              <Text style={styles.instructionDescription}>
                Browse interactive maps to find locations near you.
              </Text>
            </View>
          </View>
          
          <View style={styles.instruction}>
            <Ionicons name="calendar" size={24} color="#ffffff" style={styles.instructionIcon} />
            <View style={styles.instructionText}>
              <Text style={styles.instructionTitle}>Events</Text>
              <Text style={styles.instructionDescription}>
                Discover and keep track of upcoming events in your area.
              </Text>
            </View>
          </View>
          
          <View style={styles.instruction}>
            <Ionicons name="person" size={24} color="#ffffff" style={styles.instructionIcon} />
            <View style={styles.instructionText}>
              <Text style={styles.instructionTitle}>Profile</Text>
              <Text style={styles.instructionDescription}>
                Create an account to customize your experience and save preferences.
              </Text>
            </View>
          </View>
          
          <Text style={styles.note}>
            Get started by exploring the options in the navigation bar below!
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  instruction: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#121212',
    padding: 16,
    borderRadius: 8,
  },
  instructionIcon: {
    marginRight: 16,
  },
  instructionText: {
    flex: 1,
  },
  instructionTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  instructionDescription: {
    color: '#dddddd',
    fontSize: 16,
    lineHeight: 22,
  },
  note: {
    color: '#bbbbbb',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 24,
    fontStyle: 'italic',
  },
});

export default HomeScreen;