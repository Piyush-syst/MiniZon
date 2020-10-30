import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Header center={CONST.HEADER_TEXT} />
      </View>
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
    backgroundColor: 'linen',
  },
});

export default HomeScreen;
