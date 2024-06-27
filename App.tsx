/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SalahTime from './src/tabs/SalahTime';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './src/tabs/HomePage';
import Alert from './src/tabs/Alert';
import ReqApi from './src/tabs/ReqApi';
const Tab = createBottomTabNavigator();

export default function App() {
  const nameoftab='Alert'
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Salah Time" component={SalahTime} />
        <Tab.Screen name={nameoftab} component={Alert} /> 
        <Tab.Screen name='ReqApi' component={ReqApi} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}

