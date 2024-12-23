import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'

import Home from '../Screens/Home';
import AdkaarDisplay from '../Screens/AdkaarDisplay';
import React from 'react';
import Profile from '../Screens/Profile';

const Stack = createNativeStackNavigator();
const NavigationRef = React.createRef()

const RootSack = () => {
  return (
    <NavigationContainer ref={NavigationRef}>
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_left'}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AdkaarDisplay" component={AdkaarDisplay} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootSack;