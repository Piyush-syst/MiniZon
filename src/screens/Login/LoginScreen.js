import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
import {login} from '../../actions/CommonAction';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  componentDidUpdate(prevprops) {
    if (this.props != prevprops) {
      if (this.props.adminLoginStatus) {
        this.props.navigation.reset({
          index: 0,
          routes: [{name: 'AdminPanel'}],
        });
      } else if (this.props.status) {
        this.props.navigation.reset({
          index: 0,
          routes: [{name: 'MainStack'}],
        });
      } else if (this.props.loginMessage == CONST.DATA_INCORRECT) {
        alert(CONST.DATA_INCORRECT);
      } else if (CONST.USER_NOT_EXIST) {
        alert(CONST.USER_NOT_EXIST);
      }
    }
  }
  auth() {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
       let isValid = pattern.test(this.state.username) 
    if (this.state.username == '' || this.state.username == ' ') {
      alert('Email must be filled out');
    } else if (this.state.password == '' || this.state.password == ' ') {
      alert('Password must be filled out');
    } else if (!isValid) {
      alert('Enter a valid E-mail address');
    } 
    else {
      this.props.loginAction(this.state.username, this.state.password);
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Header
          centerText={CONST.HEADER_TEXT}
          navProp={this.props.navigation}
        />
        <View style={styles.view}>
          <Text style={styles.headText}>Welcome!!</Text>
          <View style={styles.subView}>
            <TextInputFunc
              text={CONST.TEXT_MAIL}
              alignment={'center'}
              placeholder={CONST.LABEL_PLACEHOLDER_USERNAME}
              onChange={(changedText) => {
                this.setState({username: changedText});
              }}
              value={this.state.username}
            />
            <TextInputFunc
              text={CONST.TEXT_PASSWORD}
              alignment={'center'}
              placeholder={CONST.LABEL_PLACEHOLDER_PASSWORD}
              onChange={(changedText) => {
                this.setState({password: changedText});
              }}
              value={this.state.password}
              secure={true}
            />
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ForgotPassword');
              }}>
              <Text
                style={styles.buttonText}>
                {CONST.HEAD_TEXT_FORGOTPASSWORD}
              </Text>
            </TouchableOpacity>
          </View>

          <ButtonFunc
            text={CONST.BUTTON_TEXT_LOGIN}
            wid="70%"
            fontsize={14}
            onButtonPress={() => {
              this.auth();
            }}
          />
          <ButtonFunc
            text={CONST.BUTTON_TEXT_SIGNUP}
            wid="70%"
            fontsize={14}
            onButtonPress={() => {
              this.props.navigation.navigate('SignUp');
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  const {CommonReducer} = state;
  return {
    adminLoginStatus: CommonReducer.isAdminLogin,
    status: CommonReducer.loginStatus,
    loginMessage: CommonReducer.loginMessage,
  };
};

const mapDispatchToProps = (dispatch, nextProps) => {
  return {
    loginAction: (username, password) => {
      dispatch(login(username, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
