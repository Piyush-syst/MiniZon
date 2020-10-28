import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import TextInputFunc from '../components/TextInputFunc';
import ButtonFunc from '../components/ButtonFunc';
class LoginScreen extends Component {
  render() {
    return (
        <ImageBackground style={{flex:1}} >
      <View style={styles.view}>
        <Text style={styles.text}>Welcome!!</Text>
       <TextInputFunc placehold= {'Enter Your E-mail'}></TextInputFunc>
       <TextInputFunc placehold= {'Enter Your Password'}></TextInputFunc>
       <ButtonFunc
            text={'Login'}
            wid= '40%'
            onButtonPress={() => {
            //   alert('Login Pressed')
            }}
          />
           <ButtonFunc
            text={'Create Account, New to MiniZon?'}
            wid='70%'
            onButtonPress={() => {
            //   alert('Login Pressed')
            }}
          />
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 100,
    alignItems: 'center',
  },
});

export default LoginScreen;
