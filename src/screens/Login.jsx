import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';

const Login = () => {
  const [formData, setFormData] = useState({ username: 'xoxo', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const validateForm = () => {
    let newErrors = {};

    // Username validation: no spaces, not less than 3 characters
    if (formData.username.includes(' ') || formData.username.length < 3) {
      newErrors.username =
        'Username must be at least 3 characters long with no spaces';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      console.log('Form Data:', formData);
      // proceed with login
    }
  };

  return (
    <KeyboardAvoidingView behavior='padding'>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.container}>
          <Text style={styles.headerText}>Societalize</Text>
          <Text style={styles.subHeaderText}>Login</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              mode='outlined'
              label='username'
              right={<TextInput.Icon />}
              onChangeText={(text) =>
                setFormData({ ...formData, username: text })
              }
              value={formData.username}
            />
            {errors.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              mode='outlined'
              label='Password'
              secureTextEntry
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
              }
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
});

export default Login;
