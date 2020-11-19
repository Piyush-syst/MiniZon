import React, {Component} from 'react';
import {View, Text, FlatList, SafeAreaView, Image} from 'react-native';
import styles from './styles';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
import {connect} from 'react-redux';
import {CartItemRemoveAction} from '../../actions/CartAction';
class CartScreen extends Component {
  constructor(props) {
    super(props);
    let a = Object.assign([], this.props.items);
    this.state = {
      items: a,
      flag: false,
    };
  }
  IncreamentItem = (index) => {
    let items = [...this.state.items];
    items[index].quantity += 1;
    this.setState({items: items});
  };
  DecreamentItem = (index) => {
    if (this.state.items[index].quantity > 0) {
      let items = [...this.state.items];
      items[index].quantity -= 1;
      this.setState({items: items});
    } else {
      this.removeItem(index);
    }
  };
  componentDidUpdate(prevProps) {
    if (prevProps.items.length !== this.props.items.length) {
      this.setState({items: this.props.items});
    }
  }
  removeItem(index) {
    this.props.cartItemRemoveAction(this.state.items, index);
  }
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Header centerText={CONST.HEADER_TEXT} />
        <View style={styles.view}>
          <FlatList /*numColumns={2}*/
            data={this.state.items}
            renderItem={({item, index}) => (
              <>
                <View style={styles.viewList}>
                  <Image
                    style={styles.itemImage}
                    source={{
                      uri: item.items.imgUrl,
                    }}
                  />

                  <View style={styles.itemSubView}>
                    <Text style={styles.itemHeadText}>{item.items.name}</Text>
                    <Text numberOfLines={2} style={styles.itemDescriptionText}>
                      {item.items.description}
                    </Text>
                    <Text style={styles.itemText}>{item.items.brand}</Text>
                    <Text style={styles.itemText}>
                      Quantity:{item.quantity}
                    </Text>
                    <Text style={styles.itemText}>{item.items.price} Rs</Text>
                  </View>
                  <View style={styles.flexFull}>
                    <View style={styles.itemButtonView}>
                      <ButtonFunc
                        text={'-'}
                        wid={45}
                        fontsize={18}
                        onButtonPress={() => {
                          this.DecreamentItem(index);
                        }}
                      />
                      <Text style={styles.itemQuantityText}>
                        {item.quantity}
                      </Text>
                      <ButtonFunc
                        text={'+'}
                        wid={45}
                        fontsize={18}
                        onButtonPress={() => {
                          this.IncreamentItem(index);
                        }}
                      />
                    </View>
                    <ButtonFunc
                      text={'Remove'}
                      wid="100%"
                      fontsize={16}
                      onButtonPress={() => {
                        this.removeItem(index);
                      }}
                    />
                  </View>
                </View>
              </>
            )}
            keyExtractor={(item, index) => index}
          />
          <View style={styles.buttonView}>
            <ButtonFunc
              text={CONST.BUTTON_TEXT_CHECKOUT}
              wid="70%"
              fontsize={14}
              onButtonPress={() => {
                this.props.navigation.navigate('CheckOut', {
                  items: this.state.items,
                });
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  const {CartUpdateReducer} = state;
  return {
    items: CartUpdateReducer.cartData,
  };
};
const mapDispatchToProps = (dispatch, nextProps) => {
  return {
    cartItemRemoveAction: (items, index) => {
      dispatch(CartItemRemoveAction(items, index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
