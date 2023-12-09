import React from 'react';
import { StatusBar, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

import ToolBar from '../components/ToolBar';
import Feed from '../components/Feed';
import AppBar from '../components/AppBar';
import { useNavigation } from '@react-navigation/native';
const PostScreen = () => {
    const navigation = useNavigation();

    const handlePressProfile = () => {
      navigation.navigate('ProfileScreen');
    };
    return (
        <>
            <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content' />
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <AppBar />
                    <ToolBar onPressProfile={handlePressProfile} />
                    <Feed />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default PostScreen;
