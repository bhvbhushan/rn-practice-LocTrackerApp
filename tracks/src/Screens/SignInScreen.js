import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignInScreen = () => {
  const { state, signin, clearErrMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrMessage} />
      <AuthForm
        headerText='Sign in to your account'
        errMessage={state.errMessage}
        onSubmit={signin}
        submitButtonText='Sign In'
      />
      <NavLink
        text="Don't have an account? Sign Up first !!!"
        routeName='SignUp'
      />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return { header: null };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
});

export default SignInScreen;
