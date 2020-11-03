import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
import firestore from '@react-native-firebase/firestore';
class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      name: '',
      contact: '',
      email: '',
      password: '',
      cnfpassword: '',
    };
  }
  emptyFields() {
    this.state.name = '';
    this.state.password = '';
    this.state.contact = '';
    this.state.email = '';
    this.state.cnfpassword = '';
  }

  async setData() {
    var phoneno = /^\d{10}$/;
    if (this.state.name == '' || this.state.name == ' ') {
      alert('Name must be filled out');
      this.emptyFields();
    } else if (this.state.email == '' || this.state.email == ' ') {
      alert('Email must be filled out');
      this.emptyFields();
    } else if (this.state.contact == '' || this.state.contact == ' ') {
      alert('Contact must be filled out');
      this.emptyFields();
    } else if (this.state.password == '' || this.state.password == ' ') {
      alert('Password must be filled out');
      this.emptyFields();
    } else if (this.state.cnfpassword == '' || this.state.cnfpassword == ' ') {
      alert('Password must be confirmed');
      this.emptyFields();
    } else if (this.state.contact) {
      if (this.inputtxt.value.match(phoneno)) {
      } else {
        alert('Please Enter 10 digits in contact number');
        this.emptyFields();
      }
    } else {
      firestore()
        .collection('users')
        .add({
          name: this.state.name,
          contact: this.state.contact,
          email: this.state.email,
          password: this.state.password,
        })
        .then(() => {
          alert('User added!');
          this.props.navigation.navigate('Login');
        });
    }
  }
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
                text={CONST.TEXT_NAME}
                placeholder={CONST.LABEL_PLACEHOLDER_NAME}
                onChange={(changedText) => {
                  this.setState({name: changedText});
                }}
                value={this.state.name}
              />
              <TextInputFunc
                textType="medium"
                text={CONST.TEXT_MAIL}
                placeholder={CONST.LABEL_PLACEHOLDER_USERNAME}
                onChange={(changedText) => {
                  this.setState({email: changedText});
                }}
                value={this.state.email}
              />
              <TextInputFunc
                textType="medium"
                text={CONST.TEXT_CONTACT}
                placeholder={CONST.LABEL_PLACEHOLDER_CONTACT}
                onChange={(changedText) => {
                  this.setState({contact: changedText});
                }}
                value={this.state.contact}
              />
              <TextInputFunc
                textType="medium"
                text={CONST.TEXT_PASSWORD}
                placeholder={CONST.LABEL_PLACEHOLDER_PASSWORD}
                onChange={(changedText) => {
                  this.setState({password: changedText});
                }}
                value={this.state.password}
              />
              <TextInputFunc
                textType="medium"
                text={CONST.TEXT_CONFIRM_PASSWORD}
                placeholder={CONST.LABEL_PLACEHOLDER_CONFIRM_PASSWORD}
                onChange={(changedText) => {
                  this.setState({cnfpassword: changedText});
                }}
                value={this.state.cnfpassword}
              />
            </View>
            <ButtonFunc
              text={'SignUp'}
              wid="60%"
              fontsize={16}
              onButtonPress={() => {
                this.setData();
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
