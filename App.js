import React from 'react';
import MapScreen from './components/MapScreen';
import HelloWorldScreen from './components/HelloWorldScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MapScreen} />
        <Stack.Screen name="Hello" component={HelloWorldScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}