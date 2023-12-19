
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect, useState } from 'react';
const GoogleLogin = ({ navigation }) => {

    GoogleSignin.configure({
        webClientId: '1038362371548-p0re36v2v34o5rrh0458usrns7pj65hp.apps.googleusercontent.com',
    });
    const onGoogleButtonPress = async () => {
        // Get the users ID token
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();
        console.log(idToken);
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        console.log(googleCredential);
        // Sign-in the user with the credential
        const user_sign_in = auth().signInWithCredential(googleCredential)
            .then((user) => {
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    // function onAuthStateChanged(user) {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    //   }
    
    //   useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    //   }, []);

    return (
        <View>
           

            <Text style={styles.orText}>OR</Text>
            <TouchableOpacity style={styles.googleSignInButton}
                onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}

            >
                <Text style={styles.googleSignInText}>Sign in with Google</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    googleSignInButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#e2e8f0',
    },
    googleSignInText: {
        textAlign: 'center',
        color: '#374151',
        fontSize: 18,
        fontWeight: '700',
    },

    orText: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 20,
    },
});
export default GoogleLogin;