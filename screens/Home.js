import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import HomeCard from '../components/HomeCard';
import {useDispatch, useSelector} from 'react-redux';
import {
  getProfiles,
  setLoading,
  setStatusMessage,
} from '../redux/profileAction';
import {Icon, MD3Colors} from 'react-native-paper';

export default function Home() {
  const navigation = useNavigation();
  const {profiles, loading, statusMessage} = useSelector(
    state => state.profileSlice,
  );
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    console.log('closing modal');
    dispatch(setLoading(false)); // Hide the modal
    dispatch(setStatusMessage('')); // Reset the status message
  };
  // console.log(profiles);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome to the Home Page</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon="camera"
          mode="contained"
          title="Add a profile"
          onPress={() => {
            navigation.navigate('ProfileForm', {
              name: '',
              age: '',
              email: '',
              id: '',
            });
          }}
        />
        {/* <Icon source="camera" color={MD3Colors.error50} size={20} /> */}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Get all profiles"
          onPress={() => {
            dispatch(setStatusMessage('calling action'));
            dispatch(getProfiles());
          }}
        />
      </View>
      {loading && (
        <Modal transparent={true} animationType="fade" visible={loading}>
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
      <ScrollView>
        {profiles.length <= 0 ? (
          <Text>No profiles to display</Text>
        ) : (
          profiles.map(profile => <HomeCard key={profile.id} data={profile} />)
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'pink',
  },
  headerContainer: {
    marginBottom: 5,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
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
