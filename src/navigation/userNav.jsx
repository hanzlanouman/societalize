import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import RegistrationScreen from '../screens/VerifyCredentials';
const Stack = createStackNavigator();
const UserNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='UserScreens'>
        <Stack.Screen name='UserScreens' component={UserScreens} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const UserScreens = () => {
  const { signOutUser } = useAuth();
  const {  user } = useAuth();

  return (
    <View>
      <Text> This is a User Screen. Shown only when Authenticateds</Text>
      <Button
        title='Logout'
        onPress={() => {
          signOutUser();
        }}
      />

        {/* Display user profile info if user is not null */}
        {user && (
            <View >
              <Text >User Profile</Text>
              <Text >Email: {user.email}</Text>
              {/* Password is not displayed for security reasons */}
            </View>
          )}
    </View>
  );
};

export default UserNav;
