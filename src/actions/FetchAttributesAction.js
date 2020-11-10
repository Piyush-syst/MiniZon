import * as CONST from '../utils/Constants/StringConstants';
import firestore from '@react-native-firebase/firestore';
export function fetchSizes() {
  const sizes = [];
  let size;
  return (dispatch) => {
    firestore()
      .collection('sizes')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          size = documentSnapshot.data();
          sizes.push(size.name);
        });
        dispatch({
          type: CONST.GOT_SIZES,
          payload: {sizes},
        });
      });
  };
}
export function fetchCategories() {
  const categories = [];
  let category;
  return (dispatch) => {
    firestore()
      .collection('category')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          category = documentSnapshot.data();
          categories.push(category.name);
        });
        dispatch({
          type: CONST.GOT_CATEGORIES,
          payload: {categories},
        });
      });
  };
}
export function fetchBrands() {
  const brands = [];
  let brand;
  return (dispatch) => {
    firestore()
      .collection('brand')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          brand = documentSnapshot.data();
          brands.push(brand.name);
        });
        dispatch({
          type: CONST.GOT_BRANDS,
          payload: {brands},
        });
        dispatch({
          type: CONST.STOP_LOADER,
        });
      });
  };
}
