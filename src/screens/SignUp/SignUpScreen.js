import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';

class SignUpScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'skyblue'}}>
        <Header centerText="MiniZon" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          bounces={false}
          overScrollMode={'always'}>
          <KeyboardAvoidingView style={styles.view} behavior="position">
            <Text style={styles.text}>Sign Up!!</Text>
            <Text style={styles.smalltext}>
              Create a new account to access thousends of products!!
            </Text>
            <View style={{paddingLeft: 15, marginTop: 40, marginBottom: 40}}>
              <TextInputFunc
                textType="medium"
                text="Name"
                placeholder={'    Enter Your Full Name'}
              />
              <TextInputFunc
                textType="medium"
                text="Email"
                placeholder={'    Enter Your E-mail'}
              />
              <TextInputFunc
                textType="medium"
                text="Contact"
                placeholder={'    Enter Your Contact'}
              />
              <TextInputFunc
                textType="medium"
                text="Password"
                placeholder={'    Enter Your Password'}
              />
              <TextInputFunc
                textType="medium"
                text="Confirm Password"
                placeholder={'    Confirm Your Password'}
              />
            </View>
            <ButtonFunc
              text={'SignUp'}
              wid="60%"
              fontsize={16}
              onButtonPress={() => {
                //   alert('Login Pressed')
              }}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
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
  smalltext: {
    marginTop: 20,
    color: 'slategray',
    alignSelf: 'center',
  },
  view: {
    flex: 1,
    backgroundColor: 'linen',
  },
  medium: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default SignUpScreen;
