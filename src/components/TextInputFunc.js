import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
export default function TextInputFunc(props) {
  const {
    placeholder,
    alignment,
    text,
    textType,
    onChange,
    value,
    lowerText,
    secure,
    kType,
    mLine,
  } = props;
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
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={(changedText) => {
          onChange(changedText);
        }}
        secureTextEntry={secure ? secure : false}
        value={value}
        keyboardType={kType ? kType : 'default'}
        multiline={mLine ? mLine : false}
      />
      <Text>{lowerText}</Text>
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
    height: 45,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    // alignSelf: alignment ? alignment : 'flex-start',
  },
});
