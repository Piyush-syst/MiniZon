/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>);
  }
}

export default App;
