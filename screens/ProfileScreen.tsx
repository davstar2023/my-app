import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'register' | null>(null);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registeredUser, setRegisteredUser] = useState<{ username: string; password: string } | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegister = () => {
    if (name && username && password) {
      setRegisteredUser({ username, password });
      Alert.alert('Success', 'Registration complete!');
      setMode('login');
      setName('');
      setUsername('');
      setPassword('');
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  const handleLogin = () => {
    if (
      registeredUser &&
      username === registeredUser.username &&
      password === registeredUser.password
    ) {
      setIsLoggedIn(true);
      Alert.alert('Welcome', `Hello, ${username}!`);
    } else {
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };

  const renderForm = () => {
    return (
      <View style={styles.formContainer}>
        {mode === 'register' && (
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#ccc"
            value={name}
            onChangeText={setName}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ccc"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={mode === 'register' ? handleRegister : handleLogin}
        >
          <Text style={styles.submitButtonText}>
            {mode === 'register' ? 'Register' : 'Login'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="person" size={28} color="#ffffff" />
          <Text style={styles.headerText}>Profile</Text>
        </View>

        {/* Mode Toggle */}
        {!isLoggedIn && (
          <View style={styles.toggleButtons}>
            <TouchableOpacity
              style={[styles.toggleButton, mode === 'register' && styles.activeButton]}
              onPress={() => setMode('register')}
            >
              <Text style={styles.toggleButtonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.toggleButton, mode === 'login' && styles.activeButton]}
              onPress={() => setMode('login')}
            >
              <Text style={styles.toggleButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Forms or Welcome */}
        <View style={styles.content}>
          {isLoggedIn ? (
            <Text style={styles.welcomeText}>You are logged in as {username} 🎉</Text>
          ) : (
            mode && renderForm()
          )}
        </View>
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
    borderBottomColor: '#333',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  toggleButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  toggleButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#444',
  },
  toggleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 20,
  },
  formContainer: {
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    padding: 10,
    color: '#fff',
    marginBottom: 12,
  },
  submitButton: {
    backgroundColor: '#1e90ff',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 18,
    color: '#0f0',
    textAlign: 'center',
    marginTop: 30,
  },
});

export default ProfileScreen;