import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../components/header';
import {fetchProduct} from '../../actions/ProductFetchAction';
import * as CONST from '../../utils/Constants/StringConstants';
import styles from './styles';
class MensWear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.props.getListAction();
    this.setState({count: this.props.count});
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({count: this.props.count});
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Header
          centerText={CONST.HEADER_TEXT}
          isIconLeftVisible
          isIconRightVisible
          navProp={this.props.navigation}
          itemsCount={this.state.count}
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
                      <Text style={styles.itemHeadText}>{item.name}</Text>
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
    items: ProductFetchReducer.mensWearData,
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

export default connect(mapStateToProps, mapDispatchToProps)(MensWear);
