import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const [key, setKey] = useState("");
  const [userName, setUsername] = useState("");

  const handleLogin = async () => {
    try {
      // Retrieve token from local storage based on appName
      const serializedData = await AsyncStorage.getItem("pl-auth");
      if (serializedData !== null) {
        const data = JSON.parse(serializedData);
        const appName = data.appname;
        const username = data.username;
        const token = data.token;
        setUsername(data.username);
        const url = "http://localhost:3000/api/login"; // Replace with your API endpoint URL

        const requestData = {
          appname: appName,
          username: username,
          token: token,
          key: key,
        };

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data); // Success response
          Alert.alert("Success", "Login successful!");
        } else {
          const errorData = await response.json();
          console.log(errorData); // Error response
          Alert.alert("Error", "Invalid acess");
        }
        
      } else {
        Alert.alert("Error", "cant access local storage");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Login failed. Please try again.");
    }
  };

  return (
    <View>
      <Text>Login Component</Text>

      <Text>Key:</Text>
      <TextInput
        value={key}
        onChangeText={(text) => setKey(text)}
        placeholder="Enter Key"
      />

      <Button title="Login" onPress={handleLogin} />
      <Text>username : {userName}</Text>
    </View>
  );
}
