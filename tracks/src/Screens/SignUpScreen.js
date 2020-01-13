import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignUpScreen = ({ navigation }) => {
  const { state, signup, clearErrMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrMessage} />
      <AuthForm
        headerText='Signup for Tracker'
        errMessage={state.errMessage}
        submitButtonText='SignUp'
        onSubmit={signup}
      />
      <NavLink
        routeName='SignIn'
        text='Already have an account? Sign in instead!!!'
      />
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
  }
});

export default SignUpScreen;
