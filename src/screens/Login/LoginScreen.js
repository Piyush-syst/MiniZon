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

class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'skyblue', flex: 1}}>
        <Header
          centerText={CONST.HEADER_TEXT}
          navProp={this.props.navigation}
        />
        <View style={styles.view}>
          <Text style={styles.text}>Welcome!!</Text>

          <TextInputFunc
            alignment={'center'}
            placeholder={CONST.LABEL_PLACEHOLDER_USERNAME}
          />
          <TextInputFunc
            alignment={'center'}
            placeholder={CONST.LABEL_PLACEHOLDER_PASSWORD}
          />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('ForgotPassword');
            }}>
            <Text
              style={{alignSelf: 'flex-end', fontWeight: 'bold', fontSize: 12}}>
              {CONST.HEAD_TEXT_FORGOTPASSWORD}
            </Text>
          </TouchableOpacity>
          <ButtonFunc
            text={CONST.BUTTON_TEXT_LOGIN}
            wid="70%"
            fontsize={14}
            onButtonPress={() => {
              this.props.navigation.reset({
                index: 0,
                routes: [{name: 'MainStack'}],
              });
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
