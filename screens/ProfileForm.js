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
  Modal,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProfile,
  editProfile,
  setStatusMessage,
  setLoading,
} from '../redux/profileAction';

export default function ProfileForm({route}) {
  const navigation = useNavigation();
  const {loading, statusMessage, loadingScreen} = useSelector(
    state => state.profileSlice,
  );
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
    if (id === '') {
      dispatch(setStatusMessage('calling action'));
      dispatch(addProfile({name, age, email}));
    } else {
      dispatch(setStatusMessage('calling action'));
      dispatch(editProfile({name, age, email, id}));
    }
  };

  const handleCloseModal = () => {
    dispatch(setLoading(false));
    dispatch(setStatusMessage(''));
    navigation.goBack();
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

        {loading && loadingScreen === 'screen2' && (
          <Modal
            transparent={true}
            animationType="fade"
            visible={loading && loadingScreen === 'screen2'}>
            <View style={styles.modalContainer}>
              {statusMessage !== 'success' && statusMessage !== 'failure' && (
                <ActivityIndicator size="large" color="#ffffff" />
              )}
              {statusMessage === 'success' && (
                <View style={styles.iconContainer}>
                  <Text style={styles.tickMark}>✔</Text>
                </View>
              )}
              {statusMessage === 'failure' && (
                <View style={styles.iconContainer}>
                  <Text style={styles.crossMark}>❌</Text>
                </View>
              )}
              <Text style={styles.loadingText}>{statusMessage}</Text>

              {(statusMessage === 'success' || statusMessage === 'failure') && (
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={handleCloseModal}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              )}
            </View>
          </Modal>
        )}
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

  modalContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loadingText: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 18,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff5722',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  tickMark: {
    fontSize: 50,
    color: 'green', // Customize for your UI
  },
  crossMark: {
    fontSize: 50,
    color: 'red', // Customize for failure state
  },
});
