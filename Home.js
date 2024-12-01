import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome to the Home Page</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Profile Form Page"
          onPress={() => {
            navigation.navigate('ProfileForm');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'pink',
  },
  headerContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#666',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
