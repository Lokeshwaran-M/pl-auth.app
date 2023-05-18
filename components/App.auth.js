import * as LocalAuthentication from 'expo-local-authentication';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [authResult, setAuthResult] = useState('');

  async function handleAuth() {
    let result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      setAuthResult('Authentication successful!');
    } else {
      setAuthResult('Authentication failed.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click the button to authenticate using fingerprint:</Text>
      <TouchableOpacity style={styles.button} onPress={handleAuth}>
        <Text style={styles.buttonText}>Authenticate</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{authResult}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
});
  
