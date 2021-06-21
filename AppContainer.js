import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/scense/splash/index'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()
const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
