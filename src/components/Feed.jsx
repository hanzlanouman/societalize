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
                            <Text style={styles.user}>Arfah Ali</Text>
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
                    Guys main Hunza main hun, main bohat travel kr kr k yahan tak pohnchi hun, bohat pyari jaga hai, mujhy suffering ka bohat shok hai, may you all suffer.                </Text>
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
        backgroundColor: '#ffffff', // White background for cleanliness
        marginBottom: 10, // Space between posts
    },
    header: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#f8f8f8', // Light grey background for header
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    user: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#7a29ff', // Purple text for username
    },
    time: {
        fontSize: 11,
        color: '#a1a1a1', // Lighter grey for time
    },
    post: {
        fontSize: 14,
        color: '#333333', // Darker text for post content
        lineHeight: 18,
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    photo: {
        marginTop: 10,
        width: '100%',
        height: 300,
        resizeMode: 'cover', // Cover resize mode for photos
    },
    footer: {
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 15,
        backgroundColor: '#f8f8f8', // Light grey background for footer
    },
    footerCount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconCount: {
        backgroundColor: '#7a29ff', // Purple background for like icon
        width: 22,
        height: 22,
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCount: {
        fontSize: 12,
        marginLeft: 10,
        color: 'black', // Purple text for counts
    },
    separator: {
        height: 1,
        backgroundColor: '#e0e0e0', // Slightly darker separator
        marginVertical: 10,
    },
    footerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 6,
    },
    text: {
        fontSize: 14,
        color: 'black', // Purple text for button labels
    }
});


export default Feed;
