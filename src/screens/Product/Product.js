import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
import {CartUpdateAction} from '../../actions/CartAction';
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.route.params.item,
      quantity: 1,
    };
  }
  IncreamentItem = () => {
    this.setState({quantity: this.state.quantity + 1});
  };
  DecreamentItem = () => {
    if (this.state.quantity > 1) {
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
      <SafeAreaView style={styles.safeView}>
        <Header
          centerText={CONST.HEADER_TEXT}
          isIconBackVisible
          isIconRightVisible
          navProp={this.props.navigation}
          itemsCount={this.props.count}
        />
        <View style={styles.view}>
          <Image
            style={styles.image}
            source={{
              uri: this.state.product.imgUrl,
            }}
          />

          <View style={styles.subView}>
            <Text style={styles.headText}>{this.state.product.name}</Text>
            <Text style={styles.text}>{this.state.product.description}</Text>
            <Text style={styles.text}>{this.state.product.brand}</Text>

            <Text style={styles.text}>{this.state.product.price} Rs</Text>
          </View>
          <View style={styles.counterView}>
            <ButtonFunc
              text={'+'}
              wid="20%"
              fontsize={16}
              onButtonPress={() => {
                this.IncreamentItem();
              }}
            />
            <Text style={styles.counterText}>{this.state.quantity}</Text>
            <ButtonFunc
              text={'-'}
              wid="20%"
              fontsize={16}
              onButtonPress={() => {
                this.DecreamentItem();
              }}
            />
          </View>
          <View style={styles.buttonView}>
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
    count: CartUpdateReducer.numberOfItems,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
