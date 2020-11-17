import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.route.params.items,

      show: true,
      amount: 0,
    };
  }
  componentDidMount() {
    let total = 0;
    console.warn(this.state.product);
    this.state.product.forEach((element) => {
      console.warn(element);
      if (element.quantity == 0) {
        total = total + element.items.price * 1;
      } else {
        total = total + element.items.price * element.quantity;
      }
    });
    this.setState({amount: total});
  }
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'skyblue', flex: 1}}>
        <Header
          centerText={CONST.HEADER_TEXT}
          isIconLeftVisible
          navProp={this.props.navigation}
        />
        <View style={styles.view}>
          <FlatList
            data={this.state.product}
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
                    padding: 10,
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

                  <View style={{paddingLeft: 10}}>
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 18,
                          paddingVertical: 10,
                        }}>
                        {item.items.name}
                      </Text>
                      <Text style={{fontSize: 16}}>
                        {item.items.description}
                      </Text>
                      <Text style={{fontSize: 16}}>{item.items.brand}</Text>
                      <Text style={{fontSize: 16}}>
                        Quantity:{item.quantity}
                      </Text>
                      <Text style={{fontSize: 16}}>{item.items.price} Rs</Text>
                    </View>
                  </View>
                </View>
              </>
            )}
            keyExtractor={(item, index) => index}
          />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 15,
              borderColor: 'black',
              margin: 5,
              zIndex: 1,
              backgroundColor: 'whitesmoke',
              flexDirection: 'row',
              padding: 10,
            }}>
            <Text style={{fontSize: 18}}>Total:</Text>
            <Text style={{fontSize: 18}}>{this.state.amount} Rs.</Text>
          </View>
          <ButtonFunc
            text={CONST.BUTTON_TEXT_PROCEEDTOPAY}
            wid="70%"
            fontsize={14}
            onButtonPress={() => {}}
          />
        </View>
      </SafeAreaView>
    );
  }
}

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

export default CheckOut;
