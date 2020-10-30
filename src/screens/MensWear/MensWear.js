import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from 'react-native';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import QuizData from '../../utils/Constants/QuizData.json';
import * as CONST from '../../utils/Constants/StringConstants';
class MensWear extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'skyblue', flex: 1}}>
        <Header
          centerText={CONST.HEADER_TEXT}
          isIconLeftVisible
          isIconRightVisible
          navProp={this.props.navigation}
        />
        <View style={styles.view}>
          <FlatList /*numColumns={2}*/
            data={QuizData}
            renderItem={({item, index}) => (
              <View style={styles.ViewList}>
                <>
                  <Text style={styles.halfFlex}>{index + 1}</Text>
                  {/* <Image source={{uri:'http://farm2.staticflickr.com/1103/567229075_2cf8456f01_s.jpg'}} style={{width:50,
                height:40}}/> */}

                  <Text style={{flex: 1}}>{item.topicName}</Text>
                  {/*
                <Text style={styles.halfFlex}>{item.employee_age}</Text>

                <Text style={styles.halfFlex}>{item.employee_salary}</Text> */}
                </>
              </View>
            )}
            keyExtractor={(item, index) => index}
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
    backgroundColor: 'linen',
  },
  ViewList: {
    flexDirection: 'row',
    backgroundColor: '#a5e2fd',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  halfFlex: {
    flex: 0.5,
  },
});

export default MensWear;
