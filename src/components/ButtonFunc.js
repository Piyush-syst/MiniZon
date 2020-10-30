import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
export default function ButtonFunc(props) {
  const {text, onButtonPress, wid, fontsize} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: 'powderblue',
        padding: 10,
        paddingHorizontal:20,
        width: wid,
        marginTop: 20,
        borderRadius: 20,
        alignItems: 'center',
        alignSelf: 'center',
      }}
      onPress={() => {
        onButtonPress();
      }}>
      <Text 
      style={{fontSize:fontsize}}>{text ? text : 'Button'}</Text>
    </TouchableOpacity>
  );
}
