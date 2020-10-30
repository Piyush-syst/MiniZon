import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import * as CONST from '../utils/Constants/StringConstants';
export default function Header(props) {
  const {centerText, navProp, isIconRightVisible, isIconLeftVisible} = props;
  return (
    <View
      style={{
        backgroundColor: 'skyblue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 40,
      }}>
      <View>
        {isIconLeftVisible && (
          <TouchableOpacity
            onPress={() => {
              navProp.navigate('Dashboard');
            }}>
            <Image
              style={{height: 30, width: 30}}
              source={CONST.DASHBOARD_ICON_IMAGE}
            />
          </TouchableOpacity>
        )}
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 18,
        }}>
        {centerText}
      </Text>
      <View>
        {isIconRightVisible && (
          <TouchableOpacity
            onPress={() => {
              navProp.navigate('Cart');
            }}>
            <Image
              style={{height: 30, width: 30}}
              source={CONST.CART_ICON_IMAGE}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
