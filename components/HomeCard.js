import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function HomeCard(props) {
  const profiles = props.data;
  return (
    <View style={styles.card}>
      <Text>Name : {profiles.name}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Button title="View profile" />
        <Button title="Edit profile" />
        <Button title="Delete profile" />
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
