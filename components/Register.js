import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default function Register() {
  const [appName, setAppName] = useState('');
  const [username, setUsername] = useState('');

  const generateToken = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000);
  };

  const handleRegister = async () => {
    const token = generateToken();

    try {
      const response = await axios.post('https://your-api-url/register', {
        appName,
        username,
        token,
      });

      // Store appName, username, and token in local storage
      const data = {
        appName,
        username,
        token,
      };
      await localStorage.setItem(appName, JSON.stringify(data));

      console.log('Response:', response.data);
      Alert.alert('Success', 'Registration successful!');
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };

  return (
    <View>
      <Text>Register Component</Text>

      <Text>App Name:</Text>
      <TextInput
        value={appName}
        onChangeText={text => setAppName(text)}
        placeholder="Enter App Name"
      />

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
