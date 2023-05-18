import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const FingAuth = () => {
  const [message, setMessage] = useState('');

  const scanFingerprint = () => {
    FingerprintScanner
      .authenticate({ title: 'Scan your fingerprint' })
      .then(() => {
        setMessage('Fingerprint scan successful');
      })
      .catch((error) => {
        setMessage(`Fingerprint scan failed: ${error.message}`);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{message}</Text>
      <Button title="Scan Fingerprint" onPress={scanFingerprint} />
    </View>
  );
};

export default FingAuth;
