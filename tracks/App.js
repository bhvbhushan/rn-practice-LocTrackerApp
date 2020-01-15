import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/Screens/AccountScreen';
import SignInScreen from './src/Screens/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import TrackCreateScreen from './src/Screens/TrackCreateScreen';
import TrackDetailScreen from './src/Screens/TrackDetailScreen';
import TrackListScreen from './src/Screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/Screens/ResolveAuthScreen';
import { Provider as LocationProvider } from './src/context/LocationContext';

const switchNavigator = createSwitchNavigator(
  {
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
      SignUp: SignUpScreen,
      SignIn: SignInScreen
    }),
    mainFlow: createBottomTabNavigator({
      trackListFlow: createStackNavigator({
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen
      }),
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen
    })
  },
  {
    initialRouteName: 'ResolveAuth'
  }
);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </LocationProvider>
  );
};
