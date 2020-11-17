import React, {Component} from 'react';
import {StyleSheet, View, Image, SafeAreaView, Text} from 'react-native';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
import {connect} from 'react-redux';
import {logout} from '../../actions/CommonAction';
import styles from './styles';
class DashboardScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Header centerText={CONST.HEADER_TEXT} />
        <View style={styles.view}>
          <Image
            style={styles.profileImage}
            source={CONST.DASHBOARD_ICON_IMAGE}
          />
          <View style={styles.subView}>
            <View
              style={styles.textView}>
              <Text style={styles.text}>
                {this.props.user.name}
              </Text>
            </View>
            <View
              style={styles.textView}>

              <Text style={styles.text}>
              {this.props.user.email}
              </Text>
            </View>
            <View
              style={styles.textView}>
              <Text style={styles.text}>
              {this.props.user.contact}
              </Text>
             
            </View>
          </View>
          <View style={styles.buttonView}>
          <ButtonFunc
            text={CONST.BUTTON_TEXT_LOGOUT}
            wid="70%"
            fontsize={14}
            onButtonPress={() => {
              this.props.logoutAction();
              this.props.navigation.reset({
                index: 0,
                routes: [{name: 'AuthStack'}],
              });
            }}
          />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  const {CommonReducer} = state;
  return {
    user: CommonReducer.userData,
  };
};

const mapDispatchToProps = (dispatch, nextProps) => {
  return {
    logoutAction: () => {
      dispatch(logout());
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

