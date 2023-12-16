import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from '../screens/VerifyCredentials';
import EventListScreen from '../screens/EventListScreen';
import EditEventScreen from '../screens/EditEventScreen';
import AddProfilePicture from '../screens/AddProfilePicture';
const Stack = createStackNavigator();
const AuthNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='RegCreds' component={RegistrationScreen} />
        <Stack.Screen name='EditEvent' component={EditEventScreen} />
        <Stack.Screen name='AddProfilePicture' component={AddProfilePicture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNav;
