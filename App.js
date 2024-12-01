import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';
import Home from './Home';
import ProfileForm from './ProfileForm';
import ProfileDisplay from './ProfileDisplay';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProfileForm" component={ProfileForm} />
        <Stack.Screen name="ProfileDisplay" component={ProfileDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
