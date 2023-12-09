import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../hooks/useAuth';
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    ScrollView,
    Button,
    TouchableOpacity,

} from "react-native";
// import { Avatar } from "react-native-elements";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import PostScreen from '../screens/PostScreen';
const Stack = createStackNavigator();
const UserNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='PostScreen'>
                <Stack.Screen name='PostScreen' component={PostScreen} />
                <Stack.Screen name='ProfileScreen' component={ProfileScreen} />


            </Stack.Navigator>
        </NavigationContainer>
    );
};

const ProfileScreen = () => {
    const { signOutUser } = useAuth();
    const { user } = useAuth();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.titleBar}>
                    <Ionicons name="ios-arrow-back" size={24} color="#FFC0CB"></Ionicons>
                </View>

                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <View style={styles.profileImage}>
                        </View>
                       
                        <Image
                            source={require("../../assets/profile.jpg")}
                            style={styles.image}
                            resizeMode="center"
                        />
                      
                    </View>
                    <View style={styles.dm}>
                        <MaterialIcons
                            name="chat"
                            size={18}
                            color="purple"
                        ></MaterialIcons>
                    </View>
                    <View style={styles.active}></View>
                    <View style={styles.add}>
                        <Ionicons
                            name="ios-add"
                            size={48}
                            color="purple"
                            style={{ marginTop: 6, marginLeft: 2 }}
                        ></Ionicons>
                    </View>

                    
              </View>

                <View style={styles.infoContainer}>
                    {user && (
                        <View >
                            <Text style={[styles.text, { fontWeight: "200", fontSize: 20, textAlign: 'center' }]}>
                                User Profile</Text>
                            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
                                {user.email}</Text>
                                <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
                                {user.password}</Text>
                            {/* Password is not displayed for security reasons */}
                        </View>
                    )}
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>30</Text>
                        <Text style={[styles.text, styles.subText]}>Posts</Text>
                    </View>
                    <View
                        style={[
                            styles.statsBox,
                            {
                                borderColor: "#FFC0CB",
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                            },
                        ]}
                    >
                        <Text style={[styles.text, { fontSize: 24 }]}>2</Text>
                        <Text style={[styles.text, styles.subText]}>Friends</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>12</Text>
                        <Text style={[styles.text, styles.subText]}>Groups</Text>
                    </View>
                </View>


                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Button
                        title='Logout'
                        onPress={() => {
                            signOutUser();
                        }}
                    />
                </View>
                

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#f0f4f7", // Light background color for a clean look
  },
  text: {
      fontFamily: "sans-serif-medium",
      color: "#52575D", // A neutral, dark color for text
  },
  titleBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 24,
      marginHorizontal: 16,
  },
  profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden",
      marginTop: 36,
      alignSelf: "center",
  },
  dm: {
      backgroundColor: "#7a29ff",
      position: "absolute",
      top: 20,
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
  },
  active: {
      backgroundColor: "#34FFB9",
      position: "absolute",
      bottom: 28,
      left: 10,
      padding: 4,
      height: 20,
      width: 20,
      borderRadius: 10,
  },
  add: {
      backgroundColor: "#7a29ff",
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
  },
  infoContainer: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: 16,
  },
  statsContainer: {
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 32,
      backgroundColor: "#FFF", // White background for stats
      borderRadius: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 6,
      shadowOpacity: 0.1,
      elevation: 3,
  },
  statsBox: {
      alignItems: "center",
      flex: 1,
      padding: 12,
  },
  subText: {
      fontSize: 12,
      color: "#7a29ff",
      textTransform: "uppercase",
      fontWeight: "500",
  },
  recent: {
      marginLeft: 78,
      marginTop: 32,
      marginBottom: 6,
      fontSize: 10,
      color: "#C3C5CD",
  },
  recentItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 16,
  },
  activityIndicator: {
      backgroundColor: "#7a29ff",
      padding: 4,
      height: 12,
      width: 12,
      borderRadius: 6,
      marginTop: 3,
      marginRight: 20,
  },
});


export default UserNav;
