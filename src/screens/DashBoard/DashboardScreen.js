import React, {Component} from 'react';
import {StyleSheet, View, Image, SafeAreaView, Text} from 'react-native';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
class HomeScreen extends Component {
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
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                marginLeft: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 28}}>
                Piyush Shrivastava
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                marginLeft: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 28, marginRight: 20}}>
                {CONST.TEXT_MAIL}
              </Text>
              <Text style={{fontWeight: 'bold', fontSize: 28}}>
                piyushshrivastava.801@gmail.com
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                marginLeft: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 28, marginRight: 20}}>
                {CONST.TEXT_CONTACT}
              </Text>
              <Text style={{fontWeight: 'bold', fontSize: 28}} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                marginLeft: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 28, marginRight: 20}}>
                {CONST.TEXT_JOINING_DATE}
              </Text>
              <Text style={{fontWeight: 'bold', fontSize: 28}} />
            </View>
          </View>
          <ButtonFunc
            text={CONST.BUTTON_TEXT_LOGOUT}
            wid="70%"
            fontsize={14}
            onButtonPress={() => {
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

export default HomeScreen;
