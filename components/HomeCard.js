import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteProfile} from '../redux/profileAction';

export default function HomeCard(props) {
  const profile = props.data;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.card}>
      <Text>Name : {profile.name}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Button
          title="View profile"
          onPress={() => {
            navigation.navigate('ProfileDisplay', {
              name: profile.name,
              age: profile.age,
              email: profile.email,
            });
          }}
        />
        <Button
          title="Edit profile"
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
          title="Delete profile"
          onPress={() => {
            console.log('dispatched');
            dispatch(deleteProfile(profile.id));
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
