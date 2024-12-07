import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addProfile, editProfile} from '../redux/profileAction';

export default function ProfileForm({route}) {
  const navigation = useNavigation();
  const namer = route.params.name;
  const ager = String(route.params.age);
  const emailr = route.params.email;
  const id = route.params.id;

  const [name, setName] = useState(namer);
  const [age, setAge] = useState(ager);
  const [email, setEmail] = useState(emailr);

  const dispatch = useDispatch();
  const handleOnSubmit = () => {
    if (!name.trim()) {
      Alert.alert('Validation Error', 'Name field cannot be empty.');
      return;
    }
    if (!/^\d+$/.test(age)) {
      Alert.alert('Validation Error', 'Age must contain only numeric values.');
      return;
    }
    if (!email.includes('@')) {
      Alert.alert('Validation Error', 'Email must contain an "@" symbol.');
      return;
    }
    if (namer === '') {
      // console.log('adding');
      dispatch(addProfile({name, age, email}));
      navigation.goBack();
    } else {
      // console.log('editong');
      dispatch(editProfile({name, age, email, id}));
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Profile Form</Text>
        <TextInput
          placeholder="Name"
          textContentType="name"
          maxLength={16}
          value={name}
          onChangeText={newText => setName(newText)}
          style={styles.input}
        />
        <TextInput
          placeholder="Age"
          maxLength={3}
          keyboardType="numeric"
          value={age}
          onChangeText={newText => setAge(newText)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          maxLength={30}
          keyboardType="email-address"
          value={email}
          onChangeText={newText => setEmail(newText)}
          style={styles.input}
        />
        <Button title="Submit" onPress={handleOnSubmit} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#999',
    paddingHorizontal: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});
