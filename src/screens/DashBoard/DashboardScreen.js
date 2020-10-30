import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.view}>
        <Header centerText={CONST.HEADER_TEXT} />
        <View style={{backgroundColor:'linen', flex:1}}>
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
