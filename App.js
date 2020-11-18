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
import CreateNewItem from './src/screens/CreateNewItem/CreateNewItem';
import DashboardScreen from './src/screens/DashBoard/DashboardScreen';
import WomensWear from './src/screens/WomensWaer/WomensWear';
import AdminControlPanel from './src/screens/AdminControlPanel/AdminControlPanel';
import CheckOut from './src/screens/CheckOut/CheckOut';
import * as CONST from './src/utils/Constants/StringConstants';
import {Provider} from 'react-redux';
import ConfigureStore from './src/stores/ConfigureStore';
import SplashScreen from 'react-native-splash-screen';
import Loader from './src/components/Loader';
import UpdateProduct from './src/screens/UpdateProduct/UpdateProduct';
import UpdateSingleProduct from './src/screens/UpdateSingleProduct/UpdateSingleProduct';
import DeleteProduct from './src/screens/DeleteProduct/DeleteProduct';
import ViewProduct from './src/screens/ViewProducts/ViewProducts';
import Product from './src/screens/Product/Product';
import EditUser from './src/screens/EditUser/EditUser'
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
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="EditUser" component={EditUser} />
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
    const AdminPanel = () => {
      return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AdminPanel" component={AdminControlPanel} />
          <Stack.Screen name="CreateNewItem" component={CreateNewItem} />
          <Stack.Screen name="UpdateProduct" component={UpdateProduct} />
          <Stack.Screen name="DeleteProduct" component={DeleteProduct} />
          <Stack.Screen name="ViewProduct" component={ViewProduct} />
          <Stack.Screen name="UpdateSingleProduct" component={UpdateSingleProduct} />
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
            <Stack.Screen name="AdminPanel" component={AdminPanel} />
          </Stack.Navigator>
          <Loader />
        </Provider>
      </NavigationContainer>
    );
  }
}

export default App;
