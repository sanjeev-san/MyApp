import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';

export default function ProfileDisplay({route}) {
  const navigation = useNavigation();
  const {name, age, email} = route.params;
  return (
    <SafeAreaView>
      <View>
        <Text>{name}</Text>
        <Text>{age}</Text>
        <Text>{email}</Text>
        <Button title="Go back" onPress={() => navigation.goBack()}>
          Go back
        </Button>
        <Button title="Go to Home" onPress={() => navigation.popTo('Home')}>
          Go to Home
        </Button>
        <Button
          title="Go back to first screen"
          onPress={() => navigation.popToTop()}>
          Go back to first screen in stack
        </Button>
      </View>
    </SafeAreaView>
  );
}
