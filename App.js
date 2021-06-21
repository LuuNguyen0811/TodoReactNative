import React from 'react';
import {
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import TodoScreen from './src/scense/TodoScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/scense/splash';
import RootNavigation from './src/navigation/RootNavigation'
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation/>
    </Provider>
  );
};
export default App;
