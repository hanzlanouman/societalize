import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../hooks/useAuth';
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
  return (
    <View>
      <Text> This is a User Screen. Shown only when Authenticateds</Text>
      <Button title='Logout' onPress={() => signOutUser} />
    </View>
  );
};

export default UserNav;
