import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Societalize</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Feather name='search' size={29} color='black' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIcons name='facebook-messenger' size={29} color='black' />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 58,
        paddingHorizontal: 11,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: '#7a29ff',
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: -0.3,
    },
    row: {
        flexDirection: 'row',
    },
    button: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 16,
    }
});

export default AppBar;
