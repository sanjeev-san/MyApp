import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteProfile} from '../redux/profileAction';

export default function HomeCard(props) {
  const profile = props.data;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const confirmDelete = profileId => {
    Alert.alert(
      'Delete Profile', // Title
      'Are you sure you want to delete this profile?', // Message
      [
        {
          text: 'Cancel', // Cancel button
          style: 'cancel',
        },
        {
          text: 'OK', // Confirm button
          onPress: () => dispatch(deleteProfile(profileId)), // Dispatch delete action
        },
      ],
      {cancelable: false}, // Prevent dismissing the alert by tapping outside
    );
  };

  return (
    <View style={styles.card}>
      <Text style={{textAlign: 'center', marginVertical: 5}}>
        {profile.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Button
          title="View"
          onPress={() => {
            navigation.navigate('ProfileDisplay', {
              name: profile.name,
              age: profile.age,
              email: profile.email,
            });
          }}
        />
        <Button
          title="Edit"
          onPress={() => {
            navigation.navigate('ProfileForm', {
              name: profile.name,
              age: profile.age,
              email: profile.email,
              id: profile.id,
            });
          }}
        />
        <Button
          title="Delete"
          onPress={() => {
            // console.log('dispatched');
            confirmDelete(profile.id);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    elevation: 10,
    backgroundColor: 'white',
    marginVertical: 5,
    padding: 10,
    paddingVertical: 10,
  },
});
