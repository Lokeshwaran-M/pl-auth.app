import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Register() {

  const [username, setUsername] = useState('');

  const generateToken = () => {
    t = Math.floor(1000000000 + Math.random() * 9000000000)
    return t.toString();
  };

  const handleRegister = async () => {
    const token = username + generateToken();
    const appName = "pl-auth"

    const url = 'http://localhost:3000/api/api/reg'; // Replace with the URL of your Node.js API endpoint

    const data = {
      appname: appName,
      username: username,
      token: token
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse.message); // Success message
        Alert.alert('Success', jsonResponse.message);
        
        try {
          await AsyncStorage.setItem('pl-auth', JSON.stringify(data));
  
          console.log('Data saved successfully.');
        } catch (error) {
          console.log('Error saving data:', error);
        }

      } else {
        const errorResponse = await response.json();
        console.error(errorResponse.error); // Error message
        Alert.alert('failed', errorResponse.error);
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Registration failed. Please try again.');
    }

    


  };

  return (
    <View>
      <Text>Register Component</Text>


      <Text>Username:</Text>
      <TextInput
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder="Enter Username"
      />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}
