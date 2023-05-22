


import React , { useState }from 'react';
import { StyleSheet, Text, TouchableOpacity, View ,Button} from 'react-native';
import Register from './components/Register';
import Login from './components/Login';

import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [authResult, setAuthResult] = useState('');

  async function handleRegister() {
    let result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      setShowRegister(true);
      setShowLogin(false);
      setAuthResult('Authentication successful!');
    } else {
      setAuthResult('Authentication failed.');
    }


  };

  async function handleLogin() {
    let result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      setShowRegister(false);
      setShowLogin(true);
      setAuthResult('Authentication successful!');
    } else {
      setAuthResult('Authentication failed.');
    }

 
  };


  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      

      {showRegister && <Register />}
      {showLogin && <Login />}

      {/* <Text style={styles.result}>{authResult}</Text> */}
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
  
