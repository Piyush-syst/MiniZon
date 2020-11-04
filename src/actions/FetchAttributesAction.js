import * as CONST from '../utils/Constants/StringConstants';
import firestore from '@react-native-firebase/firestore';
export function fetchSizes(username, password) {
  return (dispatch) => {
    firestore()
      .collection('sizes')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          console.warn('Size: ', documentSnapshot.data());
        });
      });
  };
}
export function fetchCategories(username, password) {
  return (dispatch) => {
    firestore()
    .collection('category')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((documentSnapshot) => {
        console.warn('Category: ', documentSnapshot.data());
      });
    });
  };
}
export function fetchBrands(username, password) {
  return (dispatch) => {
    firestore()
    .collection('brand')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((documentSnapshot) => {
        console.warn('Brands: ', documentSnapshot.data());
      });
    });
  };
}
