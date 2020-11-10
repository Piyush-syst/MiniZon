import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import * as CONST from '../utils/Constants/StringConstants';
import ImagePicker from 'react-native-image-picker';

// More info on all the options is below in the API Reference... just some common use cases shown here
export function photoUpload() {
  var options = {
    title: 'Select Image',
    customButtons: [
      {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  return new Promise((resolve, reject) => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        reject('User cancelled image picker');
      } else if (response.error) {
        reject('ImagePicker Error: ', response.error);
      } else if (response.camera) {
        reject('User tapped custom button: ', response.camera);
      } else {
        const source = {uri: response.uri};
        resolve(source);
      }
    });
  });
}
