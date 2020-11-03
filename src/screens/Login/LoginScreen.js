import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
import firestore from '@react-native-firebase/firestore';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      username: '',
      password: '',
    };
  }
  async auth() {
    // const usersCollection
    if (this.state.username == '' || this.state.username == ' ') {
      alert('Name must be filled out');
      this.state.username = '';
      this.state.password = '';
    } else if (this.state.password == '' || this.state.password == ' ') {
      alert('Password must be filled out');
      this.state.username = '';
      this.state.password = '';
    } else {
      this.user = await firestore()
        .collection('users')
        .where('email', '==', this.state.username)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size > 0) {
            querySnapshot.forEach((querySnapshotItem) => {
              const userData = querySnapshotItem.data();
              if (userData.password == this.state.password) {
                this.props.navigation.reset({
                  index: 0,
                  routes: [{name: 'MainStack'}],
                });
              } else {
                alert('Username/Password is incorrect');
              }
            });
          } else {
            alert("User Doesn't Exist");
          }
        });
    }
  }
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'skyblue', flex: 1}}>
        <Header
          centerText={CONST.HEADER_TEXT}
          navProp={this.props.navigation}
        />
        <View style={styles.view}>
          <Text style={styles.text}>Welcome!!</Text>
          <View style={{paddingLeft: 15}}>
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
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('ForgotPassword');
            }}>
            <Text
              style={{
                alignSelf: 'flex-end',
                fontWeight: 'bold',
                fontSize: 12,
                marginTop: 10,
              }}>
              {CONST.HEAD_TEXT_FORGOTPASSWORD}
            </Text>
          </TouchableOpacity>
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
    result: CommonReducer.loginStatus,
  };
};

const mapDispatchToProps = (dispatch, nextProps) => {
  return {
    login: () => {},
  };
};
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 100,
    alignItems: 'center',
  },
  view: {
    flex: 1,
    backgroundColor: 'linen',
  },
});

export default LoginScreen;
