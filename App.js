


import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View ,Button} from 'react-native';
import Register from './components/Register';
import Login from './components/Login';

export default function App() {
  const [showRegister, setShowRegister] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);

  const handleRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
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
  
