import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
export default function TextInputFunc(props) {
  const {placehold} = props;
  console.warn('props');
  //   const {text, onButtonPress} = props;
  return (
    <TextInput
      style={{
        height: 30,
        width: '50%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        alignSelf: 'center',
        borderRadius:10,
      }}
      placeholder={placehold}
    />
  );
}
