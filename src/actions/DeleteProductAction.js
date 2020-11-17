import * as CONST from '../utils/Constants/StringConstants';
import firestore from '@react-native-firebase/firestore';
export function deleteProductAction(id) {
  let item = {};
  let mensWear = [];
  let womensWear = [];
  return (dispatch) => {
    firestore()
    .collection('items')
    .doc(id)
    .delete()
    .then(() => {
      console.log('Item deleted!');
    });
  };
}