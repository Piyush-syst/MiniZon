import React, {Component} from 'react';
import {StyleSheet, View, Image, SafeAreaView, Text} from 'react-native';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
import {connect} from 'react-redux';
import {logout} from '../../actions/CommonAction';
class DashboardScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.view}>
        <Header centerText={CONST.HEADER_TEXT} />
        <View style={{backgroundColor: 'linen', flex: 1}}>
          <Image
            style={{
              height: 200,
              width: 200,
              alignSelf: 'center',
              marginTop: 50,
            }}
            source={CONST.DASHBOARD_ICON_IMAGE}
          />
          <View style={{flex: 1, alignItems:'center'}}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                marginLeft: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 24}}>
                {this.props.user.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                marginLeft: 20,
              }}>

              <Text style={{fontWeight: 'bold', fontSize: 24}}>
              {this.props.user.email}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                marginLeft: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 24, marginRight: 20}}>
              {this.props.user.contact}
              </Text>
             
            </View>
          </View>
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
    backgroundColor: 'skyblue',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

