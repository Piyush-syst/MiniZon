import React, {Component} from 'react';
import {View, Text, Alert, FlatList, SafeAreaView, Image} from 'react-native';
import ButtonFunc from '../../components/ButtonFunc';
import {connect} from 'react-redux';
import Header from '../../components/header';
import {deleteProductAction} from '../../actions/DeleteProductAction';
import {fetchAllProducts} from '../../actions/ProductFetchAction';
import * as CONST from '../../utils/Constants/StringConstants';
import styles from './styles';
class UpdateProduct extends Component {
  componentDidMount() {
    this.props.getListAction();
  }
  componentDidUpdate() {
    this.props.getListAction();
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
                <View style={styles.imageView}>
                  <Image
                    style={styles.flexFull}
                    source={{
                      uri: item.imgUrl,
                    }}
                  />
                </View>
                <View style={styles.subView}>
                  <View style={styles.flexFull}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text numberOfLines={2} style={styles.descriptionText}>
                      {item.description}
                    </Text>
                    <Text style={styles.itemText}>{item.brand}</Text>
                  </View>
                  <Text style={styles.itemText}>{item.price} Rs</Text>
                </View>
                <View style={styles.flexFull}>
                  <ButtonFunc
                    text={'Update Item'}
                    wid="100%"
                    fontsize={16}
                    onButtonPress={() => {
                      Alert.alert(
                        'Warning',
                        'Are you sure you want to Update?',
                        [
                          {
                            text: 'OK',
                            onPress: () => {
                              this.props.navigation.navigate(
                                'UpdateSingleProduct',
                                {product: item},
                              );
                            },
                            style: 'OK',
                          },
                          { text: "Cancel", onPress: () => {

                           } }
                        ],
                        {cancelable: false},
                      );
                    }}
                  />
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
    deleteProduct: (id) => {
      dispatch(deleteProductAction(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct);
