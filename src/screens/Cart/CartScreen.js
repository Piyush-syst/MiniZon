import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
import QuizData from '../../utils/Constants/QuizData.json';
class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1, backgroundColor:'skyblue'}}>
        <Header centerText={CONST.HEADER_TEXT} />
        <View style={{backgroundColor:'linen', flex:1}}>
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
          <ButtonFunc
            text={CONST.BUTTON_TEXT_CHECKOUT}
            wid="70%"
            fontsize={14}
            onButtonPress={() => {
              this.props.navigation.navigate('CheckOut');
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
    backgroundColor: 'linen',
  },
});

export default HomeScreen;
