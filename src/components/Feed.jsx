import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import Avatar from './Avatar';

const Feed = () => {
    return (
        <>
            {/* First Post Container */}
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.row}>
                        <Avatar source={require('../../assets/user3.jpg')} />
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={styles.user}>Regi P</Text>
                            <View style={styles.row}>
                                <Text style={styles.time}>9m</Text>
                                <Entypo name='dot-single' size={12} color='#747476' />
                                <Entypo name='globe' size={10} color='#747476' />
                            </View>
                        </View>
                    </View>
                    <Entypo name='dots-three-horizontal' size={15} color='#222121' />
                </View>
                <Text style={styles.post}>
                    Crie na prática uma aplicação utilizando NextJS, ReactJS, React Native e Strap Api.
                </Text>
                <Image source={require('../../assets/post1.jpg')} style={styles.photo} />
                {/* Footer */}
                <View style={styles.footer}>
                    <View style={styles.footerCount}>
                        <View style={styles.row}>
                            <View style={styles.iconCount}>
                                <AntDesign name='like1' size={12} color='#FFFFFF' />
                            </View>
                            <Text style={styles.textCount}>88 likes</Text>
                        </View>
                        <Text style={styles.textCount}>2k comments</Text>
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.footerMenu}>
                        <TouchableOpacity style={styles.button}>
                            <View style={styles.icon}>
                                <AntDesign name='like2' size={20} color='#424040' />
                            </View>
                            <Text style={styles.text}>Like</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <View style={styles.icon}>
                                <MaterialCommunityIcons name='comment-outline' size={20} color='#424040' />
                            </View>
                            <Text style={styles.text}>Comment</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <View style={styles.icon}>
                                <MaterialCommunityIcons name='share-outline' size={20} color='#424040' />
                            </View>
                            <Text style={styles.text}>Share</Text>
                        </TouchableOpacity>
                    </View>

           
</View>
</View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 6,
        paddingHorizontal: 11,
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    user: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#222121',
    },
    time: {
        fontSize: 9,
        color: '#747476',
    },
    post: {
        fontSize: 12,
        color: '#222121',
        lineHeight: 16,
        paddingHorizontal: 11,
    },
    photo: {
        marginTop: 9,
        width: '100%',
        height: 300,
    },
    footer: {
        paddingHorizontal: 11,
        // ... Additional footer styling
    },
    bottomDivider: {
        width: '100%',
        height: 9,
        backgroundColor: '#f0f2f5',
    },
    footer: {
        paddingHorizontal: 11,
    },
    footerCount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 9,
    },
    iconCount: {
        backgroundColor: '#1878f3',
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6,
    },
    textCount: {
        fontSize: 11,
        color: '#424040',
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#f9f9f9',
    },
    footerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 9,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 6,
    },
    text: {
        fontSize: 12,
        color: '#424040',
    }});

export default Feed;
