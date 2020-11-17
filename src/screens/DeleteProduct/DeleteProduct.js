import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {connect} from 'react-redux';
import Header from '../../components/header';
import {deleteProductAction} from  '../../actions/DeleteProductAction';
import {fetchAllProducts} from '../../actions/ProductFetchAction';
import * as CONST from '../../utils/Constants/StringConstants';
class DeleteProduct extends Component {
  componentDidMount() {
    this.props.getListAction();   
  }
  componentDidUpdate() {
    this.props.getListAction();   
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
            //numColumns={2}
            data={this.props.items}
            renderItem={({item, index}) => (
              <View style={styles.ViewList}>               
                <View style={{height: 140, width: 100, padding: 10, margin: 5}}>
                  <Image
                    style={{flex: 1}}
                    source={{
                      uri:
                       item.imgUrl
                    }}
                  />
                </View>
                <View style={{paddingLeft: 10,flex:1}}>
                  <View style={{flex: 1,}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        paddingVertical: 10,
                      }}>
                      {item.name}
                    </Text>
                    <Text numberOfLines={2} style={{fontSize: 16,flexWrap: 'wrap', }}>{item.description}</Text>
                    <Text style={{fontSize: 16}}>{item.brand}</Text>
                  </View>
                  <Text style={{fontSize: 16}}>{item.price} Rs</Text>
                </View>
                <View style={{flex:1}}>
                <ButtonFunc
                        text={'Delete Item'}
                        wid="100%"
                        fontsize={16}
                        onButtonPress={() => {
                          Alert.alert(
                            "Warning",
                            "Are you sure you want to delete?",
                            [                            
                              {
                                text: "OK",
                                onPress: () => { this.props.deleteProduct(item.ID);
                                },
                                style: "OK"
                              },
                              { text: "Cancel", onPress: () => {
                               
                              } }
                            ],
                            { cancelable: false }
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProduct);
