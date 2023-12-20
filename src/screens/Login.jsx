import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../config/firebase.config';
import { ActivityIndicator, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import GoogleLogin from './GoogleLogin';


const societiesData = [
  {
    name: "Tech Pioneers",
    description: "Empowering students through technology and innovation.",
    email: "techpioneers@university.com",
    image: "https://media.istockphoto.com/id/626724070/photo/group-of-crazy-girls-taking-selfie-and-making-faces-outdoors.jpg?s=612x612&w=0&k=20&c=OtKQgvnluYo-NlQzxvv5FrKnMIFNe2D6Xy72eqlD-Ws=",
    mainBody: ["Adil Khan", "Bisma Riaz", "Usman Ghani", "Zainab Ali", "Fahad Hussain", "Rabia Tariq", "Saad Ullah", "Hina Kausar", "Ibrahim Yousaf", "Noor Fatima"],
    members: ["Kamran Saleem", "Lubna Asghar", "Mehwish Iqbal", "Nadir Ali", "Omar Farooq", "Parveen Akhtar", "Qasim Javed", "Raheel Khan", "Sania Mirza", "Tahir Iqbal"],
    executiveMembers: "President: Ali Zafar, Vice President: Fatima Zahra, Secretary: Hassan Mehmood, Treasurer: Imran Qadir",
    aboutUs: "Led by President Ali Zafar, Tech Pioneers focuses on harnessing the power of technology for creative and innovative solutions."
  },

  {
    name: "Art and Culture Society",
    description: "Celebrating and promoting diverse art and cultural activities within the university.",
    email: "artculture@university.com",
    image: "https://media.istockphoto.com/id/1384618716/photo/group-of-happy-friends-taking-selfie-pic-outside-happy-different-young-people-having-fun.webp?b=1&s=170667a&w=0&k=20&c=wWtYoTCWJUZqJK-ehBglTVxA4PtuDUZf1FVWLP2ddcA=",
    mainBody: ["Jamil Khan", "Kiran Shahzadi", "Liaqat Ali", "Mehak Naveed", "Nadia Ali", "Owais Khalid", "Pervaiz Aslam", "Quratulain Baloch", "Rafia Bashir", "Sajid Ali"],
    members: ["Tasneem Akhtar", "Uzair Ahmed", "Vaheed Baloch", "Wasiq Khan", "Younas Chaudhry", "Zafar Iqbal", "Aasia Mahmood", "Babar Khan", "Cyrus Pervaiz", "Dilawar Hussain"],
    executiveMembers: "President: Sohail Khan, Vice President: Umar Farooq, Secretary: Zara Asif, Treasurer: Yasir Hamid",
    aboutUs: "Under President Sohail Khan’s leadership, the Art and Culture Society aims to showcase the rich artistic traditions and cultural heritage."
  },
  {
    name: "Green Earth Society",
    description: "Dedicated to environmental awareness and action.",
    email: "contact@greenearth.org",
    image: "https://as1.ftcdn.net/jpg/02/71/63/10/220_F_271631079_UcVImFYDo0jQo0OzAzvH8Y4a44joS7dm.jpg[Image URL]",
    mainBody: ["Ayesha Khan", "Bilal Ahmed", "Fatima Ali", "Hassan Raza", "Iqra Yasmin", "Junaid Khan", "Komal Zafar", "Laraib Aslam", "Mohsin Iqbal", "Nadia Hussain"],
    members: ["Saima Malik", "Tariq Mahmood", "Uzma Javed", "Waqas Ali", "Yasir Qureshi", "Zahra Batool", "Imran Saleem", "Javeria Khalid", "Kashif Rehman", "Lubna Faisal"],
    executiveMembers: "President: Asad Ali, Vice President: Hina Iqbal, Secretary: Sana Ullah, Treasurer: Rizwan Ahmed",
    aboutUs: "Led by President Asad Ali and Vice President Hina Iqbal, focusing on environmental education and conservation projects."
  },
  {
    name: "Innovators Hub",
    description: "A society dedicated to nurturing innovation and technology among university students.",
    email: "innovate@university.com",
    image: "https://previews.123rf.com/images/rawpixel/rawpixel1711/rawpixel171104757/90033511-group-of-diverse-young-people.jpg",
    mainBody: ["Salman Shah", "Aiman Farooq", "Rabia Basri", "Umer Farooq", "Zara Ahmed", "Faisal Khan", "Noor Fatima", "Adeel Hussain", "Maira Ali", "Usman Ghani"],
    members: ["Hamid Ali", "Saba Qamar", "Ali Raza", "Hira Manzoor", "Sohail Ahmad", "Farah Khan", "Rehan Malik", "Anum Asif", "Usama Iqbal", "Rania Noor"],
    executiveMembers: "President: Arsalan Javed, Vice President: Mehwish Yasin, Secretary: Bilal Qureshi, Treasurer: Sonia Ijaz",
    aboutUs: "Led by President Arsalan Javed, Innovators Hub fosters a culture of technological advancement and creative thinking."
  },

  {
    name: "Literary Circle",
    description: "Fosters a love for literature and poetry among students.",
    email: "literary@university.com",
    image: "https://media.istockphoto.com/id/108316207/photo/this-is-our-generation.jpg?s=612x612&w=0&k=20&c=qX71aBjJCvi9h8a9ta9phkYTqE_1ttFuUGxh_TUbSmM=",
    mainBody: ["Hammad Ali", "Zoya Khan", "Safina Hussain", "Farhan Qasim", "Rija Malik", "Arif Jamal", "Samreen Iqbal", "Tahir Mehmood", "Nida Yasir", "Fawad Ahmed"],
    members: ["Aliya Rashid", "Babar Ali", "Dania Shah", "Ebad Ali", "Farida Ilyas", "Gulzar Ahmed", "Hina Aslam", "Irfan Malik", "Jaleel Khan", "Komal Aziz"],
    executiveMembers: "President: Asma Khalid, Vice President: Bilal Ahmad, Secretary: Hira Aftab, Treasurer: Junaid Ali",
    aboutUs: "Led by President Asma Khalid, the Literary Circle brings together young poets and writers to explore the richness of literature."
  },

  
  {
    name: "Environmental Visionaries",
    description: "Dedicated to promoting environmental awareness and sustainable practices.",
    email: "envirovision@university.com",
    image: "https://as1.ftcdn.net/jpg/02/71/63/10/220_F_271631079_UcVImFYDo0jQo0OzAzvH8Y4a44joS7dm.jpg",
    mainBody: ["Amina Khalid", "Bilal Raza", "Farah Ali", "Gul Zaman", "Hira Asif", "Imran Khan", "Javeria Qureshi", "Khalil Ahmad", "Lubna Hassan", "Noman Ali"],
    members: ["Omar Shahzad", "Pervaiz Akhtar", "Quratulain Iqbal", "Rabia Malik", "Sadia Qasim", "Tahira Yasmeen", "Uzma Rizwan", "Waheed Murad", "Yasir Abbas", "Zubair Ahmed"],
    executiveMembers: "President: Asif Mehmood, Vice President: Bushra Khan, Secretary: Danish Ali, Treasurer: Faryal Murtaza",
    aboutUs: "President Asif Mehmood leads the Environmental Visionaries in initiatives for a greener, more sustainable campus."
  },

  {
    name: "Debate and Oratory Club",
    description: "A platform for students to hone their public speaking and debating skills.",
    email: "debateclub@university.com",
    image: "https://previews.123rf.com/images/rawpixel/rawpixel1711/rawpixel171104757/90033511-group-of-diverse-young-people.jpg",
    mainBody: ["Laiba Khan", "Mehmood Ali", "Nadia Jameel", "Owais Raza", "Parveen Akhter", "Qasim Jatt", "Raheel Bukhari", "Sana Ilyas", "Tahir Mahmood", "Umar Farooq"],
    members: ["Viqas Ahmed", "Waseem Akram", "Xulfiqar Ali", "Yumna Farooq", "Zahid Hussain", "Ayesha Sadiq", "Bilquis Rehman", "Chaudhry Aslam", "Dilshad Begum", "Ejaz Ahmad"],
    executiveMembers: "President: Sajid Qureshi, Vice President: Tuba Malik, Secretary: Usman Ghani, Treasurer: Veena Ali",
    aboutUs: "Led by President Sajid Qureshi, the Debate and Oratory Club empowers students to become confident speakers and critical thinkers."
  },
  {
    name: "Cultural Heritage Society",
    description: "Promotes the appreciation and preservation of diverse cultural heritages.",
    email: "culturalheritage@university.com",
    image: "https://media.istockphoto.com/id/108316207/photo/this-is-our-generation.jpg?s=612x612&w=0&k=20&c=qX71aBjJCvi9h8a9ta9phkYTqE_1ttFuUGxh_TUbSmM=",
    mainBody: ["Naila Iqbal", "Osman Khalid", "Pervaiz Alam", "Quratulain Haider", "Rashid Minhas", "Saba Qamar", "Tahira Syed", "Uzair Jaswal", "Veena Malik", "Wahab Riaz"],
    members: ["Xulfi Rehman", "Yasmeen Ghauri", "Zafar Gohar", "Adeel Akhtar", "Bushra Ansari", "Chand Baral", "Dilawar Figar", "Erum Akhtar", "Faisal Qureshi", "Ghazala Lari"],
    executiveMembers: "President: Rauf Lala, Vice President: Sajal Aly, Secretary: Talat Hussain, Treasurer: Umer Sharif",
    aboutUs: "Led by President Rauf Lala, the Cultural Heritage Society is dedicated to celebrating and preserving Pakistan's rich cultural legacy."
  },

  {
    name: "Science and Research Club",
    description: "Encourages scientific inquiry and research among students.",
    email: "scienceresearch@university.com",
    image: "https://as1.ftcdn.net/jpg/02/71/63/10/220_F_271631079_UcVImFYDo0jQo0OzAzvH8Y4a44joS7dm.jpg",
    mainBody: ["Viqar Sami", "Wasi Shah", "Xarnish Khan", "Younis Khan", "Zubaida Tharwat", "Aarif Lohar", "Babra Sharif", "Chhalawa Haseeb", "Durdana Butt", "Ejaz Durrani"],
    members: ["Faakhir Mehmood", "Gulab Chandio", "Haseena Moin", "Ibn-e-Insha", "Jameeluddin Aali", "Kishwar Naheed", "Lal Shahbaz", "Moin Akhtar", "Nayyar Ejaz", "Owais Raza Qadri"],
    executiveMembers: "President: Zeba Bakhtiar, Vice President: Abdur Rauf, Secretary: Chandni Iqbal, Treasurer: Danyal Zafar",
    aboutUs: "Under President Zeba Bakhtiar’s leadership, the Science and Research Club fosters a spirit of inquiry and a passion for scientific research."
  },
  {
    name: "Entrepreneurs' Guild",
    description: "Fosters entrepreneurship and business skills among students.",
    email: "entrepreneursguild@university.com",
    image: "https://media.istockphoto.com/id/626724070/photo/group-of-crazy-girls-taking-selfie-and-making-faces-outdoors.jpg?s=612x612&w=0&k=20&c=OtKQgvnluYo-NlQzxvv5FrKnMIFNe2D6Xy72eqlD-Ws=",
    mainBody: ["Aamir Sohail", "Bilal Ashraf", "Danish Taimoor", "Eman Suleman", "Fahad Mustafa", "Gohar Rasheed", "Hania Amir", "Imran Abbas", "Juggun Kazim", "Kubra Khan"],
    members: ["Laila Zuberi", "Mawra Hocane", "Nadia Khan", "Osman Khalid Butt", "Palwasha Yousuf", "Qurat Ul Ain Balouch", "Rahat Fateh Ali Khan", "Sajal Ali", "Tuba Siddiqui", "Ushna Shah"],
    onlyMembers: ["Vasay Chaudhry", "Wahaj Ali", "Xarnish Khan", "Yumna Zaidi", "Zara Noor Abbas", "Abdullah Kadwani", "Bushra Ansari", "Chaiwala Arshad Khan", "Durdana Butt", "Eshal Fayyaz"],
    executiveMembers: "President: Feroze Khan, Vice President: Gohar Mumtaz, Secretary: Hareem Farooq, Treasurer: Iqra Aziz",
    aboutUs: "Led by President Feroze Khan, the Entrepreneurs' Guild aims to inspire and equip students for startup success."
  },

  {
    name: "Health and Wellness Society",
    description: "Promotes health awareness and wellness activities on campus.",
    email: "healthwellness@university.com",
    image: "https://www.shutterstock.com/image-photo/happy-multigenerational-people-having-fun-600nw-2276453329.jpg",
    mainBody: ["Javed Sheikh", "Komal Aziz", "Laila Wasti", "Mehwish Hayat", "Nabeel Zafar", "Omar Sharif", "Parveen Akhtar", "Qavi Khan", "Rabi Pirzada", "Saba Qamar"],
    members: ["Taher Shah", "Uzma Khan", "Vena Malik", "Waseem Abbas", "Xulfi Jaffery", "Yasir Hussain", "Zahid Ahmed", "Aamina Sheikh", "Babar Ali", "Cybil Chaudhry"],
    onlyMembers: ["Danish Nawaz", "Ejaz Aslam", "Fahad Mirza", "Gia Ali", "Hassan Niazi", "Iman Ali", "Jamal Shah", "Kanza Wayne", "Lubna Aslam", "Mohib Mirza"],
    executiveMembers: "President: Noman Ijaz, Vice President: Osman Peerzada, Secretary: Palwasha Bashir, Treasurer: Qasim Ali Mureed",
    aboutUs: "President Noman Ijaz leads the Health and Wellness Society in promoting a healthier lifestyle on campus."
  },

  {
    name: "Performing Arts Club",
    description: "Encourages students to explore and express through theater, music, and dance.",
    email: "performingarts@university.com",
    image: "https://media.istockphoto.com/id/1215919062/photo/young-friends-from-diverse-cultures-and-races-taking-photo-making-happy-faces-millennial.jpg?s=612x612&w=0&k=20&c=iw0wvWxvCQQuESFn7WFIzaLJhGsnFOXyX3lH8E5-n80=",
    mainBody: ["Rahim Shah", "Sadia Imam", "Tariq Jameel", "Umer Sharif", "Vaneeza Ahmed", "Waseem Akram", "Xaher Kazmi", "Yasir Nawaz", "Zeba Bakhtiar", "Abdullah Ejaz"],
    members: ["Bilal Qureshi", "Cyra Yousuf", "Danish Tamoor", "Eshal Fayyaz", "Faisal Qureshi", "Gohar Rasheed", "Hira Mani", "Imran Ashraf", "Javeria Saud", "Kashif Mehmood"],
    onlyMembers: ["Lubna Asghar", "Meesha Shafi", "Noman Habib", "Osman Butt", "Parveen Akbar", "Qavi Khan", "Rabi Pirzada", "Saba Hameed", "Tahira Syed", "Uzair Jaswal"],
    executiveMembers: "President: Veena Malik, Vice President: Wajahat Rauf, Secretary: Xille Huma, Treasurer: Yasra Rizvi",
    aboutUs: "Under President Veena Malik, the Performing Arts Club brings vibrant theater and music performances to the university."
  },

];



const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const { signIn, loading, user } = useAuth();
  const navigation = useNavigation();

  const validateForm = () => {
    let newErrors = {};
    if (formData.username.includes(' ') || formData.username.length < 3) {
      newErrors.username =
        'Username must be at least 3 characters long with no spaces';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (validateForm()) {
      console.log('Form Data:', formData);
      await signIn(formData.username, formData.password);
    }
  };








  const [uploadStatus, setUploadStatus] = useState('');

  const uploadData = async () => {
    try {
      const societiesCol = collection(firestore, 'societies');
      for (const society of societiesData) {
        await addDoc(societiesCol, society);
      }
      setUploadStatus('Data uploaded successfully!');
    } catch (error) {
      setUploadStatus(`Error uploading data: ${error.message}`);
    }
  };







  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.container}>
          <Text style={styles.headerText}>Societalize</Text>
          <Text style={styles.subHeaderText}>Login</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              mode='outlined'
              label='Username'
              onChangeText={(text) =>
                setFormData({ ...formData, username: text })
              }
              value={formData.username}
            />
            {errors.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              mode='outlined'
              label='Password'
              secureTextEntry
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
              }
              value={formData.password}
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            {
              // If loading is true, display loading text, else display Login
              loading ? (
                <ActivityIndicator size='small' color='white' />
              ) : (
                <Text style={styles.loginButtonText}>Login</Text>
              )
            }
          </TouchableOpacity>

              <GoogleLogin/>

          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={styles.navigateSignupButton}
          >
            <Text style={styles.navigateSignupText}>
              Don't have an account?
              <Text style={{ color: '#7a29ff' }}> Sign Up</Text>
            </Text>
          </TouchableOpacity>

          <View>
      <Button title="Upload Societies Data" onPress={uploadData} />
      {uploadStatus ? <Text>{uploadStatus}</Text> : null}
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
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 44,
    color: '#7a29ff',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 38,
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'left',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    // Add your input styles here
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: '#7a29ff',
    padding: 12,
    borderRadius: 50,
    marginBottom: 10,
  },
  loginButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  orText: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
  },
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
  navigateSignupButton: {
    marginTop: 20,
  },
  navigateSignupText: {
    textAlign: 'center',
    color: '#374151',
    fontSize: 18,
    fontWeight: '700',
  },
  // Styles for user profile display
  profileContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  profileText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Login;
