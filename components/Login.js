import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default function Login() {
  const [appName, setAppName] = useState('');
  const [username, setUsername] = useState('');
  const [key, setKey] = useState('');

  const handleLogin = async () => {
    try {
      // Retrieve token from local storage based on appName
      const storageData = await localStorage.getItem(appName);
      if (storageData) {
        const { token } = JSON.parse(storageData);

        const response = await axios.post('https://your-api-url/login', {
          appName,
          username,
          token,
          key,
        });

        console.log('Response:', response.data);
        Alert.alert('Success', 'Login successful!');
      } else {
        Alert.alert('Error', 'Invalid app name. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Login failed. Please try again.');
    }
  };

  return (
    <View>
      <Text>Login Component</Text>

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

      <Text>Key:</Text>
      <TextInput
        value={key}
        onChangeText={text => setKey(text)}
        placeholder="Enter Key"
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
