import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../hooks/useAuth';
import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
// import { Avatar } from "react-native-elements";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import PostScreen from '../screens/PostScreen';
import { AuthContext } from '../contexts/AuthContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateEventScreen from '../screens/CreateEventScreen';
import CreatePostScreen from '../screens/createPostScreen';
import EventListScreen from '../screens/EventListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditEventScreen from '../screens/EditEventScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="EventList" component={EventListScreen} />
    <Stack.Screen name="EditEvent" component={EditEventScreen} />
  </Stack.Navigator>
);
const UserNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='PostScreen'>
        <Tab.Screen name='PostScreen' component={PostScreen} />
        <Tab.Screen name='ProfileScreen' component={ProfileScreen} />
        <Tab.Screen name='CreateEventScreen' component={CreateEventScreen} />
        <Tab.Screen name='CreatePostScreen' component={CreatePostScreen} />
        <Tab.Screen name='EventListScreen' component={MainStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default UserNav;
