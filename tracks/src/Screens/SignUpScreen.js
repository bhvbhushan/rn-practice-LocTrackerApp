import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Signup for Tracker'
        errMessage={state.errMessage}
        submitButtonText='SignUp'
        onSubmit={signup}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return { header: null };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  },
  link: {
    color: 'blue'
  }
});

export default SignUpScreen;
