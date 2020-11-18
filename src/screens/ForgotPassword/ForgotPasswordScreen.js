import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
import styles from './styles';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  render() {
    return (
      <View style={styles.view}>
        <Header center={CONST.HEADER_TEXT} />
        <Text style={styles.text}>Forgot Password</Text>
        <View style={{marginHorizontal: 10, marginTop: 100}}>
          <TextInputFunc
            textType="medium"
            text={CONST.TEXT_MAIL}
            placeholder={CONST.LABEL_PLACEHOLDER_USERNAME}
            onChange={(changedText) => {
              this.setState({contact: changedText});
            }}
            value={this.state.email}
          />
          <ButtonFunc
            text={CONST.GET_PASSWORD}
            wid="60%"
            fontsize={16}
            onButtonPress={() => {}}
          />
        </View>
      </View>
    );
  }
}

export default LoginScreen;
