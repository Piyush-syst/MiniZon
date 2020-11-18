import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
import {connect} from 'react-redux';
import {signUp} from '../../actions/CommonAction';
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
      warnTextName: '',
      warnTextContact: '',
      warnTextEmail: '',
      warnTextPassword: '',
      warnTextCnfPassword: '',
    };
  }

  async setData() {
    this.setState({
      warnTextName: '',
      warnTextPassword: '',
      warnTextContact: '',
      warnTextEmail: '',
      warnTextCnfPassword: '',
    });
    var phoneno = /^\d{10}$/;
    let isNumberValid = phoneno.test(this.state.contact);
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let isValid = pattern.test(this.state.email);
    if (this.state.name == '' || this.state.name == ' ') {
      this.setState({warnTextName: 'Please Fill the Username'});
    } else if (this.state.email == '' || this.state.email == ' ') {
      this.setState({warnTextEmail: 'Please Fill the Email Address'});
    } else if (this.state.contact == '' || this.state.contact == ' ') {
      this.setState({warnTextContact: 'Please Fill the Contact'});
    } else if (this.state.password == '' || this.state.password == ' ') {
      this.setState({warnTextPassword: 'Please Fill the Password'});
    } else if (this.state.cnfpassword == '' || this.state.cnfpassword == ' ') {
      this.setState({warnTextCnfPassword: 'Password must be confirmed'});
    } else if (!isNumberValid) {
      this.setState({warnTextContact: 'Please enter valid contact number'});
    } else if (!isValid) {
      this.setState({warnTextEmail: 'Enter a valid E-mail'});
    } else if (this.state.password != this.state.cnfpassword) {
      alert("Passwords Doesn't Match");
    } else {
      this.props.signUpAction(
        this.state.name,
        this.state.contact,
        this.state.email,
        this.state.password,
      );
    }
  }
  componentDidUpdate(prevprops) {
    if (this.props != prevprops) {
      if (this.props.status) {
        this.props.navigation.navigate('Login');
      }
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Header centerText="MiniZon" />
        <ScrollView bounces={false}>
          <KeyboardAvoidingView style={styles.view} behavior="position">
            <Text style={styles.headText}>Sign Up!!</Text>
            <Text style={styles.smalltext}>
              Create a new account to access thousends of products!!
            </Text>
            <View style={styles.subView}>
              <TextInputFunc
                textType="medium"
                text={CONST.TEXT_NAME}
                placeholder={CONST.LABEL_PLACEHOLDER_NAME}
                onChange={(changedText) => {
                  this.setState({name: changedText});
                }}
                lowerText={this.state.warnTextName}
                value={this.state.name}
              />
              <TextInputFunc
                textType="medium"
                text={CONST.TEXT_MAIL}
                placeholder={CONST.LABEL_PLACEHOLDER_USERNAME}
                onChange={(changedText) => {
                  this.setState({email: changedText});
                }}
                lowerText={this.state.warnTextEmail}
                value={this.state.email}
              />
              <TextInputFunc
                textType="medium"
                text={CONST.TEXT_CONTACT}
                placeholder={CONST.LABEL_PLACEHOLDER_CONTACT}
                onChange={(changedText) => {
                  this.setState({contact: changedText});
                }}
                lowerText={this.state.warnTextContact}
                kType="numeric"
                value={this.state.contact}
              />
              <TextInputFunc
                textType="medium"
                text={CONST.TEXT_PASSWORD}
                placeholder={CONST.LABEL_PLACEHOLDER_PASSWORD}
                onChange={(changedText) => {
                  this.setState({password: changedText});
                }}
                lowerText={this.state.warnTextPassword}
                value={this.state.password}
                secure={true}
              />
              <TextInputFunc
                textType="medium"
                text={CONST.TEXT_CONFIRM_PASSWORD}
                placeholder={CONST.LABEL_PLACEHOLDER_CONFIRM_PASSWORD}
                onChange={(changedText) => {
                  this.setState({cnfpassword: changedText});
                }}
                value={this.state.cnfpassword}
                secure={true}
                lowerText={this.state.warnTextCnfPassword}
              />
              <ButtonFunc
                text={'SignUp'}
                wid="60%"
                fontsize={16}
                onButtonPress={() => {
                  this.setData();
                }}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  const {CommonReducer} = state;
  return {
    status: CommonReducer.signUpStatus,
  };
};

const mapDispatchToProps = (dispatch, nextProps) => {
  return {
    signUpAction: (name, contact, email, password) => {
      dispatch(signUp(name, contact, email, password));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
