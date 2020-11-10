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
import QuizData from '../../utils/Constants/QuizData.json';
import {fetchProduct} from '../../actions/ProductFetchAction';
import * as CONST from '../../utils/Constants/StringConstants';
class ViewProduct extends Component {
  componentDidMount() {
    this.props.getListAction();
    console.warn(this.props.items);
  }
  constructor(props) {
    super(props);
    this.state = {
      image: [
        // 'https://source.unsplash.com/1024x768/?nature',
        // 'https://source.unsplash.com/1024x768/?water',
        // 'https://source.unsplash.com/1024x768/?girl',
        // 'https://source.unsplash.com/1024x768/?tree',
        // 'https://source.unsplash.com/1024x768/?tree',
        // 'https://source.unsplash.com/1024x768/?tree',
        // 'https://source.unsplash.com/1024x768/?tree',
        // Network image
        // Local image
        CONST.UPDATE_PRODUCT_ICON_IMAGE,
        CONST.CREATE_PRODUCT_ICON_IMAGE,
        CONST.DELETE_PRODUCT_ICON_IMAGE,
      ],
    };
  }

  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'skyblue', flex: 1}}>
        <Header
          centerText={CONST.HEADER_TEXT}
          navProp={this.props.navigation}
        />
        <View style={styles.view}>
          <FlatList
            style={{flex: 1}}
            numColumns={2}
            data={this.props.items}
            renderItem={({item, index}) => (
              <View style={styles.ViewList}>
                <View>
                  <Carousel
                    containerCustomStyle={{backgroundColor: 'linen'}}
                    dotsLength={2}
                    ref={(c) => {
                      this._carousel = c;
                    }}
                    onSnapToItem={() => {
                      // handle snap to item
                    }}
                    animate={true}
                    itemHeight={100}
                    sliderHeight={100}
                    data={item.downloadUrls}
                    sliderWidth={200}
                    itemWidth={200}
                    renderItem={({item, index}) => {
                      return (
                        <View style={{}}>
                          <Image
                            style={{height: '100%', width: '100%'}}
                            source={{uri: item}}
                          />
                        </View>
                      );
                    }}
                  />
                </View>
                <Text style={{flex: 1,height:'15%'}}>{item.name}</Text>
                <Text style={{flex: 1,height:'15%'}}>{item.description}</Text>

                <Text style={styles.halfFlex}>{item.price}</Text>
              </View>
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
    items: ProductFetchReducer.itemData,
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
    backgroundColor: 'linen',
    flex: 1,
    margin: 30,
    justifyContent: 'space-between',
    height:'auto',
   
  },
  halfFlex: {
    flex: 1,
  },
  wrapper: {
    height: 170,
    width: 170,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
