import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import RegistrationScreen from './src/screens/VerifyCredentials';
const Stack = createStackNavigator();

const App = () => {
  return (
<<<<<<< Updated upstream
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
   
=======
    <View style={styles.container}>
      <Text>Helloo</Text>
      <StatusBar style='auto' />
    </View>
>>>>>>> Stashed changes
  );
};

export default App;
