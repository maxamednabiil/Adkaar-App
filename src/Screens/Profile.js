import {
  Alert,
  Linking,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import utilsMethod from '../utils/Helper';
import colors from '../utils/colors';
import Back from '../assets/images/svg/Back';
import ChatIcon from '../assets/images/svg/ChatIcon';
import EmailIcon from '../assets/images/svg/EmailIcon';

const Profile = ({navigation}) => {
  const openEmail = () => {
    const email = 'maxamednbil@gmail.com';
    const url = `mailto:${email}`;
    Linking.openURL(url).catch(() =>
      Alert.alert('Error', 'Could not open WhatsApp. Please try again.'),
    );
  };

  const openWhatsApp = () => {
    const phoneNumber = '+252619755455';
    const url = `whatsapp://send?phone=${phoneNumber}`;
    Linking.openURL(url).catch(() =>
      Alert.alert('Error', 'Could not open WhatsApp. Please try again.'),
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.TopView}>
        <TouchableOpacity
          onPress={() => navigation.push('Home')}
          style={styles.backIcon}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.contact}>Contact Us</Text>
      </View>
      <View style={styles.ButtomView}>
        <Text style={styles.ProfileText}>
          My name is Mohamed Yusuf, and I am a full-stack developer based in
          Mogadishu. This app is intended for reading Adkaar and does not
          contain any advertisements, nor will it include any in the future,
          Insha'Allah. If you have any feedback, need assistance, or notice any
          issues with the app, please feel free to contact me.
        </Text>
        <View style={styles.buttonsViews}>
          <TouchableOpacity style={styles.buttonChat} onPress={openWhatsApp}>
            <ChatIcon />
            <View>
              <Text style={styles.chat}>Chat</Text>
              <Text>Call or Chat hare</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonEmail} onPress={openEmail}>
            <EmailIcon />
            <View>
              <Text style={styles.chat}>Email</Text>
              <Text>maxamednbil@gmail.com</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  TopView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.main,
    paddingTop: StatusBar.currentHeight + utilsMethod.hp(4),
    paddingBottom: utilsMethod.hp(3),
  },
  backIcon: {
    left: 15,
    zIndex: 1,
  },
  contact: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    color: '#000',
  },
  ButtomView: {
    flex: 1,
    margin: 25,
  },
  ProfileText: {
    marginBottom: 20,
    textAlign: 'left',
    fontSize: 16,
    lineHeight: 30,
  },
  buttonsViews: {},
  buttonChat: {
    flexDirection: 'row',
    backgroundColor: colors.second,
    borderRadius: 20,
    margin: 10,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25,
    gap: 15,
  },
  buttonEmail: {
    flexDirection: 'row',
    backgroundColor: colors.second,
    borderRadius: 20,
    margin: 10,
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 25,
    // gap: 5,
  },
  chat: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
