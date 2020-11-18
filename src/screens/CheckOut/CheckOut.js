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
import styles from './styles';
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
    this.state.product.forEach((element) => {
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
      <SafeAreaView style={styles.safeView}>
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
                <View style={styles.itemView}>
                  <Image
                    style={styles.itemImage}
                    source={{
                      uri: item.items.imgUrl,
                    }}
                  />

                  <View style={styles.itemSubView}>
                    <View style={styles.flexFull}>
                      <Text style={styles.itemHeadText}>{item.items.name}</Text>
                      <Text style={styles.itemText}>
                        {item.items.description}
                      </Text>
                      <Text style={styles.itemText}>{item.items.brand}</Text>
                      <Text style={styles.itemText}>
                        Quantity:{item.quantity}
                      </Text>
                      <Text style={styles.itemText}>{item.items.price} Rs</Text>
                    </View>
                  </View>
                </View>
              </>
            )}
            keyExtractor={(item, index) => index}
          />
          <View style={styles.priceBarView}>
            <Text style={styles.priceBarText}>Total:</Text>
            <Text style={styles.priceBarText}>{this.state.amount} Rs.</Text>
          </View>
          <ButtonFunc
            text={CONST.BUTTON_TEXT_PROCEEDTOPAY}
            wid="70%"
            fontsize={14}
            onButtonPress={() => {
              this.props.navigation.navigate('FinalScreen');
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default CheckOut;
