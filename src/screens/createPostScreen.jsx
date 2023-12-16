import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Switch,
  Alert,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import useFirestore from '../hooks/useFirestore';
import { auth } from '../config/firebase.config';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { Image } from 'react-native';
import useStorage from '../hooks/useStorage';

const CreatePostScreen = () => {
  const [formData, setFormData] = useState({
    description: '',
    auditorium: '',
    tags: '',
    timings: '',
    announcement: false,
    postedBy: auth.currentUser.uid,
    likes: 0,
    comments: [],

    // postImage,
  });
  const [errors, setErrors] = useState({});
  const { uploadPostPicture } = useStorage();
  const { createSocietyPost } = useFirestore();
  const [postImage, setPostImage] = useState(null); // New state variable

  // Function to handle changes in text inputs
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleDiscardPost = () => {
    // Logic to handle post discard
    Alert.alert(
      'Discard Post?',
      'Are you sure you want to discard this post?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Discard',
          onPress: () => {
            setFormData({
              description: '',
              auditorium: '',
              tags: '',
              timings: '',
              announcement: false,
              postImage,
            });
            setPostImage(null);
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };
  const handlePostPictureUpload = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access camera roll is required!');
      return;
    }
    const handlePostCreation = async () => {
      // const postImageUrl = await uploadPostPicture(postImage.uri);
      // Logic to handle post creation
      console.log('Form Data:', formData.postImage);
    };

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled && pickerResult.assets) {
      const newPath = FileSystem.documentDirectory + 'profile-image.jpg';
      await FileSystem.copyAsync({
        from: pickerResult.assets[0].uri, // Updated to use assets array
        to: newPath,
      });
      setPostImage({ uri: newPath });
    }
  };
  const handlePostCreation = async () => {
    // const postImageUrl = await uploadPostPicture(postImage.uri);
    // Logic to handle post creation
    console.log('Form Data:', postImage.uri);
    const postPictureUrl = await uploadPostPicture(postImage.uri);
    await createSocietyPost(auth.currentUser.uid, {
      ...formData,
      postPictureUrl,
    });
  };

  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Create Post</Text>

          {/* Description Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.descriptionInput]}
              label='Description'
              multiline
              numberOfLines={4}
              onChangeText={(text) => handleInputChange('description', text)}
              value={formData.description}
            />
            {errors.description && (
              <Text style={styles.errorText}>{errors.description}</Text>
            )}
          </View>

          {/* Auditorium Image Placeholder */}
          {postImage && <Image source={postImage} style={styles.image} />}

          <TouchableOpacity
            style={styles.imagePlaceholder}
            onPress={handlePostPictureUpload}
          >
            {postImage ? (
              <Text style={styles.placeholderText}>Change Image</Text>
            ) : (
              <Text style={styles.placeholderText}>+ Add Image</Text>
            )}
          </TouchableOpacity>

          {/* Tags Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              label='Tags'
              onChangeText={(text) => handleInputChange('tags', text)}
              value={formData.tags}
            />
            {errors.tags && <Text style={styles.errorText}>{errors.tags}</Text>}
          </View>

          {/* Timings Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              label='Timings'
              onChangeText={(text) => handleInputChange('timings', text)}
              value={formData.timings}
            />
            {errors.timings && (
              <Text style={styles.errorText}>{errors.timings}</Text>
            )}
          </View>

          {/* Announcement Toggle */}
          <View style={styles.toggleContainer}>
            <Text>Announcement</Text>
            <Switch
              value={formData.announcement}
              onValueChange={(value) =>
                handleInputChange('announcement', value)
              }
            />
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.discardButton]}
              onPress={handleDiscardPost}
            >
              <Text style={styles.buttonText}>Discard</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.postButton]}
              onPress={handlePostCreation}
            >
              <Text style={styles.buttonText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 24,
    color: '#7a29ff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#7A29FF',
    backgroundColor: '#F8F2FF',
    // padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  descriptionInput: {
    height: 80, // Adjusted for description input
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 25,
    flexGrow: 1,
    marginHorizontal: 5, // Spacing between buttons
  },
  discardButton: {
    backgroundColor: 'tomato', // A neutral color for the discard button
  },
  postButton: {
    backgroundColor: '#7a29ff',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  imagePlaceholder: {
    borderWidth: 1,
    borderColor: '#7A29FF',
    borderRadius: 10,
    height: 100,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDE7F6', // Light purple background for the placeholder
  },
  placeholderText: {
    color: '#7A29FF',
    fontSize: 16,
  },
});

export default CreatePostScreen;
