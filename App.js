// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen'; // Make sure the path is correct

const Stack = createStackNavigator();

function App() {
  // ... your navigation code ...
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
