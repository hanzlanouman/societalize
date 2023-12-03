import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const AuthNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNav;
