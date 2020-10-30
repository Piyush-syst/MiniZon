import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
export default function TextInputFunc(props) {
  const {placeholder, alignment, text, textType} = props;
  //   const {text, onButtonPress} = props;
  return (
    <View>
      <Text
        style={
        
          textType === 'small'
            ? styles.smallText
            : textType === 'large'
            ? styles.largeText
            : styles.mediumtext
        }>
        {text}
      </Text>
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 100,
    alignItems: 'center',
  },
  smalltext: {
    marginTop: 20,
    color: 'slategrey',
    alignSelf: 'center',
  },
  view: {
    flex: 1,
    backgroundColor: 'linen',
  },
  mediumtext: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    height: 30,
    width: '100%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 10,
    // alignSelf: alignment ? alignment : 'flex-start',
  },
});
