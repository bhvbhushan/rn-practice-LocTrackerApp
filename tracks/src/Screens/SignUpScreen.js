import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}> SignUpScreen</Text>
      <Button
        title='Go To SignIn'
        onPress={() => navigation.navigate('SignIn')}
      />
      <Button
        title='Go To MainFlow'
        onPress={() => navigation.navigate('TrackList')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
