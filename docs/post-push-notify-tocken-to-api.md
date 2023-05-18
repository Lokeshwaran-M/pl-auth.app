# To implement push notification token generation

## To install dependencies

```
expo install expo-notifications axios
```
- code 
```js
import React, { useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import axios from 'axios';

const PushNotificationComponent = () => {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  const registerForPushNotificationsAsync = async () => {
    try {
      const { status } = await Notifications.getPermissionsAsync();
      let expoPushToken = '';

      if (status !== 'granted') {
        const { status: newStatus } =
          await Notifications.requestPermissionsAsync();
        if (newStatus !== 'granted') {
          throw new Error('Failed to get push token permission');
        }
      }

      const { data: token } = await Notifications.getExpoPushTokenAsync();
      expoPushToken = token;

      // Send the token to the Node.js API
      sendPushTokenToApi(expoPushToken);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const sendPushTokenToApi = async (token) => {
    try {
      const response = await axios.post('YOUR_NODEJS_API_URL', { token });
      console.log(response.data); // Process the response from the API
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Push Notification Example</Text>
      <Button
        title="Register for Push Notifications"
        onPress={registerForPushNotificationsAsync}
      />
    </View>
  );
};

export default PushNotificationComponent;

```