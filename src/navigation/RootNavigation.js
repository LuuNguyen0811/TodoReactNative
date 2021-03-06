import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {config, horizontalAnimation, navigationConfigs} from './config';
import SplashScreen from '../scense/splash';
import HomeScreen from '../scense/HomeScreen';
import {NAVIGATION_TITLE} from '../constants';
import {navigationRef} from './service';
import AddNew from '../scense/addNew';
const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={navigationConfigs}>
        <Stack.Screen name={NAVIGATION_TITLE.SPLASH} component={SplashScreen} />
        <Stack.Screen name={NAVIGATION_TITLE.HOME} component={HomeScreen} />
        <Stack.Screen name={NAVIGATION_TITLE.ADD_NEW} component={AddNew} options={config} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
