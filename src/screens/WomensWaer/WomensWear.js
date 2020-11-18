import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {connect} from 'react-redux';
import Header from '../../components/header';
import {fetchProduct} from '../../actions/ProductFetchAction';
import * as CONST from '../../utils/Constants/StringConstants';
import styles from './styles';
class WomensWear extends Component {

  componentDidMount() {
    this.props.getListAction();
  }


  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Header
          centerText={CONST.HEADER_TEXT}
          isIconLeftVisible
          isIconRightVisible
          navProp={this.props.navigation}
          itemsCount= {this.props.count}
        />
        <View style={styles.view}>
          <FlatList
            style={styles.flexFull}
            //numColumns={2}
            data={this.props.items}
            renderItem={({item, index}) => (
              <TouchableWithoutFeedback
                style={styles.flexFull}
                onPress={() =>
                  this.props.navigation.navigate('Product', {item})
                }>
                  <View style={styles.ViewList}>
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
                    <Text
                      style={styles.itemHeadText}>
                      {item.name}
                    </Text>
                    <Text style={styles.itemText}>{item.description}</Text>
                    <Text style={styles.itemText}>{item.brand}</Text>
                  </View>
                  <Text style={styles.itemText}>{item.price} Rs</Text>
                </View>
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
  const {ProductFetchReducer, CartUpdateReducer} = state;
  return {
    items: ProductFetchReducer.womensWearData,
    count: CartUpdateReducer.numberOfItems,
  };
};

const mapDispatchToProps = (dispatch, nextProps) => {
  return {
    getListAction: () => {
      dispatch(fetchProduct());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WomensWear);
