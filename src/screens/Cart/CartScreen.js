import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
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
  componentDidUpdate(prevProps)
  {  
    if(prevProps.items.length!=this.props.items.length)
      {
        this.setState({items: this.props.items });
      }
  }
  removeItem(index) {
    this.props.cartItemRemoveAction(this.state.items, index);
  }
  render() {
   
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'skyblue'}}>
        <Header centerText={CONST.HEADER_TEXT} />
        <View style={{backgroundColor: 'linen', flex: 1}}>
          <FlatList /*numColumns={2}*/
          
            data={this.state.items}           
            renderItem={({item, index}) => (

              <>
                <View
                  style={{
                    height: 160,
                    borderWidth: 1,
                    borderRadius: 15,
                    borderColor: 'black',
                    margin: 5,
                    zIndex: 1,
                    backgroundColor: 'whitesmoke',
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                  }}>
                  <Image
                    style={{
                      height: 140,
                      width: 100,
                      padding: 10,
                      margin: 5,
                    }}
                    source={{
                      uri: item.items.imgUrl,
                    }}
                  />

                  <View style={{paddingLeft: 10, flex:1}}>                    
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 18,
                          paddingVertical: 5,
                        }}>
                        {item.items.name}
                      </Text>
                      <Text numberOfLines={2} style={{fontSize: 16, flexWrap: 'wrap', }}>
                        {item.items.description}
                      </Text>
                      <Text style={{fontSize: 16}}>{item.items.brand}</Text>
                      <Text style={{fontSize: 16}}>
                        Quantity:{item.quantity}
                      </Text>
                      <Text style={{fontSize: 16}}>{item.items.price} Rs</Text>                 
                  </View>
                  <View style={{flex:1}}>
                    <View
                      style={{ flexDirection: 'row', justifyContent: 'center'}}>
                      <ButtonFunc
                        text={'-'}
                        wid="45%"
                        fontsize={18}
                        onButtonPress={() => {
                          this.DecreamentItem(index);
                          
                        }}
                      />
                      <Text
                        style={{
                          padding: 10,
                          fontSize: 16,
                          fontWeight: 'bold',
                          marginTop: 20,
                        }}>
                        {item.quantity}
                      </Text>
                      <ButtonFunc
                        text={'+'}
                        wid="45%"
                        fontsize={18}
                        onButtonPress={() => {
                          this.IncreamentItem(index);
                        }}
                      />
                    </View>
                    <ButtonFunc
                        text={'Remove Item'}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
