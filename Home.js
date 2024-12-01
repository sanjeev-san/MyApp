import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: 'pink'}]}>
      <View style={{backgroundColor: 'green', padding: 5}}>
        <Text
          style={{
            marginVertical: 5,
            backgroundColor: 'yellow',
            textAlign: 'center',
            fontSize: 20,
          }}>
          Welcome to the Home page
        </Text>
        <Button
          style={{flex: 1}}
          title="Go to profile form page"
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
});
