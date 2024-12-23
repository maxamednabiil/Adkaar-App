import {Dimensions, PixelRatio} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;

class Helper {
  hp = heightPercentage => {
    const heightElement =
      typeof heightPercentage === 'number'
        ? heightPercentage
        : parseFloat(heightPercentage);
    return PixelRatio.roundToNearestPixel((screenHeight * heightElement) / 100);
  };

  wp = widthPercentage => {
    const widthElement =
      typeof widthPercentage === 'number'
        ? widthPercentage
        : parseFloat(widthPercentage);
    return PixelRatio.roundToNearestPixel((screenwidth * widthElement) / 100);
  };
}

const utilsMethod = new Helper();

export default utilsMethod;
