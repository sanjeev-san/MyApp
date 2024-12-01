import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';

export default function ProfileForm() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: 'pink'}]}>
      <View>
        <TextInput
          placeholder="Name"
          textContentType="name"
          maxLength={16}
          onChangeText={newText => {
            setName(newText);
          }}
        />
        <TextInput
          placeholder="Age"
          maxLength={3}
          onChangeText={newText => {
            setAge(newText);
          }}
        />
        <TextInput
          placeholder="Email"
          maxLength={16}
          onChangeText={newText => {
            setEmail(newText);
          }}
        />
        <Button
          title="Submit"
          onPress={() => {
            console.log({name, age, email});
            navigation.navigate('ProfileDisplay', {
              name: name,
              age: age,
              email: email,
            });
          }}></Button>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
});
