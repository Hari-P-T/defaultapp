// RegistrationScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RegistrationScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    // Validate input here
    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Store user data locally (AsyncStorage)
    await AsyncStorage.setItem('username', username);
    await AsyncStorage.setItem('password', password);

    // Navigate to the login screen
    navigation.navigate('Login');
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
}

export default RegistrationScreen;
