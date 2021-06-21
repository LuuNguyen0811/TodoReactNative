import React, { useEffect } from 'react';
import {View, Text,ImageBackground} from 'react-native';
import images from '../../assest/image';
import { NAVIGATION_TITLE } from '../../constants';
import { navigate, replace } from '../../navigation/service';
import { styles } from './styles';

const SplashScreen = () => {
    useEffect(() => {
        setTimeout(() => {
            replace(NAVIGATION_TITLE.HOME)
        }, 3000);
    }, [])
  return (
    <View style ={styles.container}>
      <ImageBackground source={images.imgSplash} style={styles.backgroundImage}>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
