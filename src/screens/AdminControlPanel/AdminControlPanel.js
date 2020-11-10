import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
import {fetchSizes} from '../../actions/FetchAttributesAction';
import {fetchCategories} from '../../actions/FetchAttributesAction';
import {fetchBrands} from '../../actions/FetchAttributesAction';
import {connect} from 'react-redux';
class AdminControlPanel extends Component {
  componentDidMount() {
    this.props.FetchSizeAction();
    this.props.FetchCategoryAction();
    this.props.FetchBrandAction();
  }
  render() {
    return (
      <SafeAreaView style={styles.view}>
        <Header centerText={CONST.HEADER_TEXT} />
        <View style={{flex: 1, backgroundColor: 'linen'}}>
          <Text
            style={{
              fontSize: 26,
              marginTop: 50,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            {CONST.WELCOME_ADMIN}
          </Text>
          <View style={{flex: 1, marginTop: 50, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => {
                  this.props.navigation.navigate('CreateNewItem');
                }}>
                <Image
                  style={{height: 200, width: '90%', tintColor: 'dodgerblue'}}
                  source={CONST.CREATE_PRODUCT_ICON_IMAGE}
                />
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  Create Product
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity style={{alignItems: 'center'}}
              onPress={() => {
                this.props.navigation.navigate('UpdateProduct');
              }}>
                <Image
                  style={{height: 200, width: '90%', tintColor: 'dodgerblue'}}
                  source={CONST.UPDATE_PRODUCT_ICON_IMAGE}
                />
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  Update Product
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1, marginTop: 50, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => {
                  this.props.navigation.navigate('DeleteProduct');
                }}>
                <Image
                  style={{height: 200, width: '90%', tintColor: 'dodgerblue'}}
                  source={CONST.DELETE_PRODUCT_ICON_IMAGE}
                />
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  Delete Product
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => {
                  this.props.navigation.navigate('ViewProduct');
                }}>
                <Image
                  style={{height: 200, width: '90%', tintColor: 'dodgerblue'}}
                  source={CONST.VIEW_LIST_ICON_IMAGE}
                />
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  View Products
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <ButtonFunc
            text={CONST.BUTTON_TEXT_LOGOUT}
            wid="60%"
            fontsize={16}
            onButtonPress={() => {
              this.props.navigation.reset({
                index: 0,
                routes: [{name: 'AuthStack'}],
              });
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch, nextProps) => {
  return {
    FetchSizeAction: () => {
      dispatch(fetchSizes());
    },
    FetchCategoryAction: () => {
      dispatch(fetchCategories());
    },
    FetchBrandAction: () => {
      dispatch(fetchBrands());
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
    backgroundColor: 'skyblue',
  },
});

export default connect(null, mapDispatchToProps)(AdminControlPanel);
