/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Image} from 'react-native';
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/Login/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUpScreen from './src/screens/SignUp/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPassword/ForgotPasswordScreen';
import MensWear from './src/screens/MensWear/MensWear';
import CartScreen from './src/screens/Cart/CartScreen';
import DashboardScreen from './src/screens/DashBoard/DashboardScreen';
import WomensWear from './src/screens/WomensWaer/WomensWear';
import CheckOut from './src/screens/CheckOut/CheckOut';
import * as CONST from './src/utils/Constants/StringConstants';
import {Provider} from 'react-redux';
import ConfigureStore from './src/Stores/ConfigureStore';
import SplashScreen from 'react-native-splash-screen';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      store: ConfigureStore(() => {
        console.log('Store persisted !');
      }),
    };
  }
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    const HomeTabNavigator = () => {
      return (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'MensWear') {
                iconName = CONST.MENSWEAR_ICON_IMAGE;
              } else if (route.name === 'WomensWear') {
                iconName = CONST.WOMENSWEAR_ICON_IMAGE;
              }

              // You can return any component that you like here!
              return (
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: focused ? 'black' : 'grey',
                  }}
                  source={iconName}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="MensWear" component={MensWear} />
          <Tab.Screen name="WomensWear" component={WomensWear} />
        </Tab.Navigator>
      );
    };

    const MainStack = () => {
      return (
        <Stack.Navigator screenOptions={{headerShown: false}}>

          <Stack.Screen name="MensWear" component={HomeTabNavigator} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="CheckOut" component={CheckOut} />

        </Stack.Navigator>
      );
    };
    const AuthStack = () => {
      return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
        </Stack.Navigator>
      );
    };
    return (
      <NavigationContainer>
        <Provider store={this.state.store}>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="AuthStack">
     
              <Stack.Screen name="AuthStack" component={AuthStack} />
       
              <Stack.Screen name="MainStack" component={MainStack} />
     
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}

export default App;
