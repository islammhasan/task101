import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNav} from './StackNav';

export const NavContainer = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};
