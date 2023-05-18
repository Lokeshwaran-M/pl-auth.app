import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

const API_URL = 'https://your-nodejs-api-url.com'; // Replace with your actual API URL

export default function PushNotificationComponent() {
  const [appName, setAppName] = useState('');
  const [username, setUsername] = useState('');

  const registerForPushNotificationsAsync = async () => {
    let token;
    try {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        throw new Error('Failed to get push token for push notification!');
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to get push token for push notification!');
    }
    return token;
  };

  const handlePress = async () => {
    try {
      const expoPushToken = await registerForPushNotificationsAsync();
      const requestBody = JSON.stringify({
        appName,
        username,
        expoPushToken,
      });
      const response = await fetch(`${API_URL}/notifications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      });
      if (response.ok) {
        Alert.alert('Success', 'Push notification token sent to the API!');
      } else {
        Alert.alert('Error', 'Failed to send push notification token to the API!');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to send push notification token to the API!');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ width: 200, height: 40, borderWidth: 1, marginBottom: 10 }}
        placeholder="App Name"
        value={appName}
        onChangeText={setAppName}
      />
      <TextInput
        style={{ width: 200, height: 40, borderWidth: 1, marginBottom: 10 }}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Register" onPress={handlePress} />
    </View>
  );
}
