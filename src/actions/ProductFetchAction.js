import * as CONST from '../utils/Constants/StringConstants';
import firestore from '@react-native-firebase/firestore';
export function fetchProduct() {
  let item = {};
  let items = [];
  return (dispatch) => {
    firestore()
      .collection('items')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          item = documentSnapshot.data();
          items.push(item);
        });
        dispatch({
          type: CONST.GOT_ITEMS,
          payload: {items},
        });
      });
  };
}
