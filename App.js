import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  DevSettings,
} from 'react-native';
import Home from './screens/Home';
import ProfileForm from './screens/ProfileForm';
import ProfileDisplay from './screens/ProfileDisplay';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  const allowInDevMode = true;
  const exceptionhandler = async (error, isFatal) => {
    console.log('js exception handling start');
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({log: error.message}),
    };
    let data = await fetch(
      'https://6751e985d1983b9597b4cbfb.mockapi.io/api/error',
      requestOptions,
    );
    // Alert.alert(
    //   'Unexpected error occurred',
    //   `
    //   Error: ${e.name} ${e.message}

    //   We will need to restart the app.
    //   `,
    //   [
    //     {
    //       text: 'Restart',
    //       onPress: () => {
    //         // RNRestart.Restart();
    //         DevSettings.reload();
    //       },
    //     },
    //   ],
    // );
    console.log('js exception handling end');
  };

  setNativeExceptionHandler(exceptionString => {
    console.log('native exception start');
    console.log('native exception end');
  });
  setJSExceptionHandler(exceptionhandler, allowInDevMode);

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
