import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
import {CartUpdateAction} from '../../actions/CartAction';
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.route.params.item,
      quantity: 0,
    };
  }
  IncreamentItem = () => {
    this.setState({quantity: this.state.quantity + 1});
  };
  DecreamentItem = () => {
    if (this.state.quantity > 0) {
      this.setState({quantity: this.state.quantity - 1});
    }
  };
  addToCart() {
    if (this.state.quantity >= 1) {
      this.props.cartUpdateAction(
        this.state.product,
        this.state.quantity,
        this.props.items,
      );
    }
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
        <View style={{backgroundColor: 'linen', flex: 1}}>
          <Image
            style={{height: 500}}
            source={{
              uri: this.state.product.imgUrl,
            }}
          />

          <View style={{padding: 15, marginLeft: 10}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                paddingVertical: 10,
              }}>
              {this.state.product.name}
            </Text>
            <Text style={{fontSize: 16}}>{this.state.product.description}</Text>
            <Text style={{fontSize: 16}}>{this.state.product.brand}</Text>

            <Text style={{fontSize: 16}}>{this.state.product.price} Rs</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <ButtonFunc
              text={'+'}
              wid="20%"
              fontsize={16}
              onButtonPress={() => {
                this.IncreamentItem();
              }}
            />
            <Text
              style={{
                padding: 15,
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 20,
              }}>
              {this.state.quantity}
            </Text>
            <ButtonFunc
              text={'-'}
              wid="20%"
              fontsize={16}
              onButtonPress={() => {
                this.DecreamentItem();
              }}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <ButtonFunc
              text={'Add To Cart'}
              wid="40%"
              fontsize={16}
              onButtonPress={() => {
                this.addToCart();
              }}
            />
            <ButtonFunc
              text={'Buy Now'}
              wid="40%"
              fontsize={16}
              onButtonPress={() => {
                this.props.navigation.navigate('CheckOut', {
                  items: [
                    {items: this.state.product, quantity: this.state.quantity},
                  ],
                });
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const mapDispatchToProps = (dispatch, nextProps) => {
  return {
    cartUpdateAction: (item, quantity, items) => {
      dispatch(CartUpdateAction(item, quantity, items));
    },
  };
};
const mapStateToProps = (state) => {
  const {CartUpdateReducer} = state;
  return {
    items: CartUpdateReducer.cartData,
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
    flexDirection: 'row',
    backgroundColor: '#a5e2fd',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  halfFlex: {
    flex: 0.5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
