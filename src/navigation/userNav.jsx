import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';

// import { Avatar } from "react-native-elements";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import PostScreen from '../screens/PostScreen';
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
    <Stack.Screen name='EventList' component={EventListScreen} />
    <Stack.Screen name='EditEvent' component={EditEventScreen} />
  </Stack.Navigator>
);
const UserNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='PostScreen'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'PostScreen') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'ProfileScreen') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            } else if (route.name === 'CreateEventScreen') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            } else if (route.name === 'CreatePostScreen') {
              iconName = focused ? 'ios-create' : 'ios-create-outline';
            } else if (route.name === 'EventListScreen') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: '#7a29ff',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: '#e9e9e9',
          // Dont show header
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            marginHorizontal: 0,
            textAlign: 'center',
          },
          tabBarStyle: {
            height: 70,
          },
        })}
      >
        <Tab.Screen
          name='PostScreen'
          component={PostScreen}
          // Set Text
          options={{ tabBarLabel: 'Feed' }}
        />
        <Tab.Screen
          name='ProfileScreen'
          component={ProfileScreen}
          options={{ tabBarLabel: 'Profile' }}
        />
        <Tab.Screen
          name='CreateEventScreen'
          component={CreateEventScreen}
          options={{ tabBarLabel: 'Create Event' }}
        />
        <Tab.Screen
          name='CreatePostScreen'
          component={CreatePostScreen}
          options={{ tabBarLabel: 'Create Post' }}
        />
        <Tab.Screen
          name='EventListScreen'
          component={EventListScreen}
          options={{ tabBarLabel: 'Events' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default UserNav;
