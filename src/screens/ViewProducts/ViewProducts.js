import React, {Component} from 'react';
import {View, Text, FlatList, SafeAreaView, Image} from 'react-native';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {connect} from 'react-redux';
import Header from '../../components/header';
import styles from './styles';
import {fetchAllProducts} from '../../actions/ProductFetchAction';
import * as CONST from '../../utils/Constants/StringConstants';
class ViewProduct extends Component {
  componentDidMount() {
    this.props.getListAction();
  }
  constructor(props) {
    super(props);
    // this.state = {
    //   image: [
    //     // 'https://source.unsplash.com/1024x768/?nature',
    //     // 'https://source.unsplash.com/1024x768/?water',
    //     // 'https://source.unsplash.com/1024x768/?girl',
    //     // 'https://source.unsplash.com/1024x768/?tree',
    //     // 'https://source.unsplash.com/1024x768/?tree',
    //     // 'https://source.unsplash.com/1024x768/?tree',
    //     // 'https://source.unsplash.com/1024x768/?tree',
    //     // Network image
    //     // Local image
    //     CONST.UPDATE_PRODUCT_ICON_IMAGE,
    //     CONST.CREATE_PRODUCT_ICON_IMAGE,
    //     CONST.DELETE_PRODUCT_ICON_IMAGE,
    //   ],
    // };
  }

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Header
          centerText={CONST.HEADER_TEXT}
          navProp={this.props.navigation}
        />
        <View style={styles.view}>
          <FlatList
            style={styles.flexFull}
            //numColumns={2}
            data={this.props.items}
            renderItem={({item, index}) => (
              <View style={styles.ViewList}>
                {/* <View>
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
                </View> */}
                <View style={styles.itemView}>
                  <Image
                    style={styles.flexFull}
                    source={{
                      uri: item.imgUrl,
                    }}
                  />
                </View>
                <View style={styles.itemSubView}>
                  <View style={styles.flexFull}>
                    <Text style={styles.itemHeadText}>{item.name}</Text>
                    <Text style={styles.itemText}>{item.description}</Text>
                    <Text style={styles.itemText}>{item.brand}</Text>
                  </View>
                  <Text style={styles.itemText}>{item.price} Rs</Text>
                </View>
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
      dispatch(fetchAllProducts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
