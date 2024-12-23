import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../utils/colors';
import utilsMethod from '../utils/Helper';
import Qorax from '../assets/images/svg/Qorax';
import Reset from '../assets/images/svg/Reset';
import Menu from '../assets/images/svg/menu';
import {AdkaarSabaax, AdkaarMasaa, TextDisplay} from '../Data/Adkaar';

const Home = ({navigation}) => {
  const [tasxiibCount, setTasbiixCount] = useState(0);
  const [DisplayText, setDisplayText] = useState(0)

  const HandletasxiibCount = () => {
    if (tasxiibCount >= 100000) {
      Alert.alert('xisaab badan ayaa gaartay fadlan clear dheh');
    } else {
      setTasbiixCount(tasxiibCount + 1);
    }
  };

  useEffect(()=>{
    const interval =  setInterval(()=>{
      setDisplayText(prevIndex => {
        let newIdex = prevIndex + 1
        if(newIdex >= TextDisplay.length){
          newIdex = 0
        }
        return newIdex
      });
    }, 10000)
    return () => clearInterval(interval);
  },[])

  const HandleClear = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to reset the count?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => setTasbiixCount(0),
        },
      ],
      {cancelable: true},
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerBackgroud}>
        <TouchableOpacity onPress={()=> navigation.push('Profile')}>
          <Menu style={styles.menu} />
        </TouchableOpacity>
        <View style={styles.headerComponent}>
          <View style={styles.headercontante}>
            <Qorax />
            <View style={styles.adkaardisplay}>
              <Text style={styles.adkaardisplayText}>
                {TextDisplay[DisplayText].text}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.adkaarContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('AdkaarDisplay', {Data: AdkaarSabaax})
          }>
          <Text style={styles.buttonText}>أذكار الصباح</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('AdkaarDisplay', {Data: AdkaarMasaa})
          }>
          <Text style={styles.buttonText}>أذكار المساء</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TasbiixContener}>
        <TouchableOpacity
          style={styles.tasbiixButton}
          onPress={HandletasxiibCount}>
          <Text style={styles.tasbiixText}>{tasxiibCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clearButton} onPress={HandleClear}>
          <Reset />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerBackgroud: {
    paddingTop: StatusBar.currentHeight + utilsMethod.hp(3),
    paddingBottom: utilsMethod.hp(2),
    backgroundColor: colors.main,
    justifyContent: 'center',
  },
  menu: {
    marginLeft: 20,
  },
  headerComponent: {
    width: '100%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headercontante: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 70,
    backgroundColor: colors.white,
    width: utilsMethod.wp(90),
    height: utilsMethod.hp(25),
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    paddingRight: 30,
  },
  adkaardisplay: {
    width: 200,
  },
  adkaardisplayText: {
    flex: 1,
    fontSize: 25,
    fontFamily: 'Rubik-Bold',
    textAlign: 'right',
    textAlignVertical: 'center',
    marginRight: 10,
  },
  adkaarContainer: {
    flexDirection: 'row',
    marginTop: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: colors.ButtonColor,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Rubik-SemiBold',
  },
  TasbiixContener: {
    position: 'relative',
    marginTop: 60,
    alignItems: 'center',
  },
  tasbiixButton: {
    width: 270,
    height: 270,
    backgroundColor: colors.white,
    borderColor: colors.ButtonColor,
    borderWidth: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 135,
  },
  tasbiixText: {
    fontSize: 60,
    fontFamily: 'Rubik-Bold',
  },
  clearButton: {
    position: 'relative',
    top: -250,
    right: -140,
    width: 50,
    height: 50,
    backgroundColor: colors.second,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
