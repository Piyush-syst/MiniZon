import React, {Component} from 'react';
import {
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
import {logout} from '../../actions/CommonAction';
import styles from './styles';
class AdminControlPanel extends Component {
  componentDidMount() {
    this.props.FetchSizeAction();
    this.props.FetchCategoryAction();
    this.props.FetchBrandAction();
  }
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Header centerText={CONST.HEADER_TEXT} />
        <View style={styles.view}>
          <Text
            style={styles.headText}>
            {CONST.WELCOME_ADMIN}
          </Text>
          <View style={styles.subView}>
            <View style={styles.flexFull}>
              <TouchableOpacity
                style={styles.alignCenter}
                onPress={() => {
                  this.props.navigation.navigate('CreateNewItem');
                }}>
                <Image
                  style={styles.image}
                  source={CONST.CREATE_PRODUCT_ICON_IMAGE}
                />
                <Text style={styles.text}>
                  Create Product
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flexFull}>
              <TouchableOpacity style={styles.alignCenter}
              onPress={() => {
                this.props.navigation.navigate('UpdateProduct');
              }}>
                <Image
                  style={styles.image}
                  source={CONST.UPDATE_PRODUCT_ICON_IMAGE}
                />
                <Text style={styles.text}>
                  Update Product
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.subView}>
            <View style={styles.flexFull}>
              <TouchableOpacity
                style={styles.alignCenter}
                onPress={() => {
                  this.props.navigation.navigate('DeleteProduct');
                }}>
                <Image
                  style={styles.image}
                  source={CONST.DELETE_PRODUCT_ICON_IMAGE}
                />
                <Text style={styles.text}>
                  Delete Product
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flexFull}>
              <TouchableOpacity
                style={styles.alignCenter}
                onPress={() => {
                  this.props.navigation.navigate('ViewProduct');
                }}>
                <Image
                  style={styles.image}
                  source={CONST.VIEW_LIST_ICON_IMAGE}
                />
                <Text style={styles.text}>
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
                this.props.logoutAction();
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
   logoutAction: () => {
      dispatch(logout());
    },
  };
};


export default connect(null, mapDispatchToProps)(AdminControlPanel);
