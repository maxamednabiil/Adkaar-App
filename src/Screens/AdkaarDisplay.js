import React, { memo, useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import utilsMethod from '../utils/Helper';
import colors from '../utils/colors';
import Back from '../assets/images/svg/Back';

const AdkaarItem = memo(({ item, index, handleAdkaar }) => {
  return (
    <TouchableOpacity
      style={styles.adkaarLayer}
      onPress={() => handleAdkaar(index)}
    >
      <View style={styles.adkaar}>
        <Text style={styles.adkaarText}>{item.text}</Text>
      </View>
      <View style={styles.adkaarButton}>
        <Text style={styles.timeText}>Times</Text>
        <View style={styles.adkaarNumber}>
          <Text style={styles.adkaarNumberText}>{item.times}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const AdkaarDisplay = ({ route, navigation }) => {
  const { Data = [] } = route.params || {};
  const [adkaarData, setAdkaarData] = useState(() =>
    Array.isArray(Data) ? Data.map(item => ({ ...item })) : []
  );

  const handleAdkaar = index => {
    const UpdatedData = [...adkaarData];
    if (UpdatedData[index].times > 1) {
      UpdatedData[index].times -= 1;
    } else if (UpdatedData[index].times === 1) {
      UpdatedData.splice(index, 1);
    }
    setAdkaarData(UpdatedData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.TopView}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Back style={styles.backIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.adkaarContainer}>
        <FlatList
          data={adkaarData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <AdkaarItem
              item={item}
              index={index}
              handleAdkaar={handleAdkaar}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default AdkaarDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  TopView: {
    paddingTop: StatusBar.currentHeight + utilsMethod.hp(5.5),
    backgroundColor: colors.main,
  },
  backIcon: {
    marginLeft: 15,
    marginTop: -20,
    marginBottom: 20,
  },
  adkaarContainer: {
    flex: 1,
    alignItems: 'center',
  },
  adkaarLayer: {
    marginTop: 20,
    width: 340,
    backgroundColor: colors.main,
    borderRadius: 20,
  },
  adkaar: {
    width: 340,
    backgroundColor: colors.second,
    borderRadius: 20,
  },
  adkaarText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 20,
    textAlign: 'right',
    margin: 10,
    lineHeight: 32,
  },
  adkaarButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 15,
    marginRight: 15,
  },
  timeText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 18,
  },
  adkaarNumber: {
    backgroundColor: colors.second,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  adkaarNumberText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 18,
  },
});
