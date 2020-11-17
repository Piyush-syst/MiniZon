import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {connect} from 'react-redux';
import Header from '../../components/header';
import {fetchProduct} from '../../actions/ProductFetchAction';
import * as CONST from '../../utils/Constants/StringConstants';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
class MensWear extends Component {

  componentDidMount() {
    this.props.getListAction();

  }


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
          <FlatList
            style={{flex: 1}}
            //numColumns={2}
            data={this.props.items}
            renderItem={({item, index}) => (
              <TouchableWithoutFeedback
                style={styles.ViewList}
                onPress={() =>
                  this.props.navigation.navigate('Product', {item})
                }>
                <View style={{height: 140, width: 100, padding: 10, margin: 5}}>
                  <Image
                    style={{flex: 1}}
                    source={{
                      uri: item.imgUrl,
                    }}
                  />
                </View>
                <View style={{paddingLeft: 10}}>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        paddingVertical: 10,
                      }}>
                      {item.name}
                    </Text>
                    <Text style={{fontSize: 16}}>{item.description}</Text>
                    <Text style={{fontSize: 16}}>{item.brand}</Text>
                  </View>
                  <Text style={{fontSize: 16}}>{item.price} Rs</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  const {ProductFetchReducer} = state;
  return {
    items: ProductFetchReducer.mensWearData,
  };
};

const mapDispatchToProps = (dispatch, nextProps) => {
  return {
    getListAction: () => {
      dispatch(fetchProduct());
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
    backgroundColor: 'linen',
  },
  ViewList: {
    height: 160,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'black',
    margin: 5,
    zIndex: 1,
    backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    padding: 10,
  },
  halfFlex: {
    flex: 1,
  },
  wrapper: {
    height: 170,
    width: 170,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MensWear);
