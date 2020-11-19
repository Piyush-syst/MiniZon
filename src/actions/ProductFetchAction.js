import * as CONST from '../utils/Constants/StringConstants';
import firestore from '@react-native-firebase/firestore';
export function fetchProduct() {
  let item = {};
  let mensWear = [];
  let womensWear = [];
  return (dispatch) => {
    firestore()
      .collection('items')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          item = documentSnapshot.data();
          if (item.gender == 'Male') {
            mensWear.push(item);
          } else {
            womensWear.push(item);
          }
        });

        dispatch({
          type: CONST.GOT_ITEMS,
          payload: {mensWear, womensWear},
        });
      });
  };
}
export function fetchAllProducts() {
  let item = {};
  let items = [];
  return (dispatch) => {
    firestore()
      .collection('items')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          item = documentSnapshot.data();
          item.ID = documentSnapshot.id;
          items.push(item);
        });
        dispatch({
          type: CONST.GOT_ALL_ITEMS,
          payload: {items},
        });
      });
  };
}
