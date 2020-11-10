import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import * as CONST from '../utils/Constants/StringConstants';
import ModalDropdown from 'react-native-modal-dropdown';
export default function Dropdown(props) {
  const {optionList, defaultValue, width, onClickDropDown} = props;
  return (
    <View style={{flex: 1, borderRadius: 20}}>
      <ModalDropdown
        ref={(el) => {
          this.dropDown = el;
        }}
        options={optionList}
        defaultValue={defaultValue}
        style={{
          height: 30,

          borderWidth: 1,
          justifyContent: 'center',
          borderRadius: 20,
        }}
        textStyle={{fontWeight: 'bold', textAlign: 'center'}}
        dropDownTextStyle={{}}
        onSelect={(index, value) => {
          onClickDropDown(value);
        }}
        dropdownStyle={{
          width: width ? width : '50%',
          borderColor: 'black',
          borderRadius: 20,
        }}
      />
      <Text style={{fontSize: 18, position: 'absolute', right: 5, top: 5}}>
        ▼
      </Text>
    </View>
  );
}
