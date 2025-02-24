import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';
import Home from './screens/Home';
import ProfileForm from './screens/ProfileForm';
import ProfileDisplay from './screens/ProfileDisplay';
import CustomWebView from './screens/CustomWebView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProfileForm" component={ProfileForm} />
        <Stack.Screen name="ProfileDisplay" component={ProfileDisplay} />
        <Stack.Screen name="CustomWebView" component={CustomWebView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
