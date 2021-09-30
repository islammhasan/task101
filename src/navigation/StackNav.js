import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Profile, Login} from '../screens/';
import {navigationOptions} from './navigationOptions';

const Stack = createStackNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
