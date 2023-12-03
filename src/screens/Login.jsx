import React, { useState } from 'react';
<<<<<<< Updated upstream
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
=======
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
>>>>>>> Stashed changes

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
<<<<<<< Updated upstream
  const navigation = useNavigation(); // Hook to access navigation object
=======
  const navigation = useNavigation();
>>>>>>> Stashed changes

  const validateForm = () => {
    let newErrors = {};

    if (formData.username.includes(' ') || formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters long with no spaces';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      console.log('Form Data:', formData);
      // Proceed with login logic here
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Text style={styles.headerText}>Societalize</Text>
          <Text style={styles.subHeaderText}>Login</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
<<<<<<< Updated upstream
              mode='outlined'
              label='Username'
=======
              mode="outlined"
              label="Username"
>>>>>>> Stashed changes
              onChangeText={(text) => setFormData({ ...formData, username: text })}
              value={formData.username}
            />
            {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Password"
              secureTextEntry
              onChangeText={(text) => setFormData({ ...formData, password: text })}
              value={formData.password}
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>OR</Text>
          <TouchableOpacity style={styles.googleSignInButton}>
            <Text style={styles.googleSignInText}>Sign in with Google</Text>
          </TouchableOpacity>
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
          {/* Button to navigate to the Signup page */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={styles.navigateSignupButton}
          >
<<<<<<< Updated upstream
            <Text style={styles.navigateSignupText}>Don't have an account? Sign Up</Text>
=======
            <Text style={styles.navigateSignupText}>
              Don't have an account? Sign Up
            </Text>
>>>>>>> Stashed changes
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Styles for the Login component
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginTop: 100,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 44,
    color: '#7a29ff',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 38,
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'left',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    // Add your input styles here
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: '#7a29ff',
    padding: 12,
    borderRadius: 50,
    marginBottom: 10,
  },
  loginButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  orText: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
  },
 
    googleSignInButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 12,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#e2e8f0',
    },
    googleSignInText: {
      textAlign: 'center',
      color: '#374151',
      fontSize: 18,
      fontWeight: '700',
    },
  navigateSignupButton: {
    marginTop: 10,
  },
  navigateSignupText: {
    textAlign: 'center',
<<<<<<< Updated upstream
    color: '#7a29ff',
    fontSize: 16,
=======
    color: '#374151',
    fontSize: 18,
    fontWeight: '700',
    color: '#7a29ff',
    fontSize: 16,
  },
  navigateSignupButton: {
    marginTop: 10,
  },
  navigateSignupText: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 16,
>>>>>>> Stashed changes
  },
});

export default Login;
