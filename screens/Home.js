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
import HomeCard from '../components/HomeCard';
import {useSelector} from 'react-redux';

export default function Home() {
  const navigation = useNavigation();
  const profiles = useSelector(state => state.profileSlice);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome to the Home Page</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Add new profile"
          onPress={() => {
            navigation.navigate('ProfileForm');
          }}
        />
      </View>
      <ScrollView>
        {profiles.length <= 0 ? (
          <Text>No profiles to display</Text>
        ) : (
          profiles.map(profile => (
            <HomeCard key={profile.name} data={profile} />
          ))
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
});
