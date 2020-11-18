import * as CONST from '../utils/Constants/StringConstants';
import firestore from '@react-native-firebase/firestore';
export function updateProduct(
  id,
  name,
  gender,
  category,
  brand,
  price,
  quantity,
  description,
  size,
) {
  return (dispatch) => {
    dispatch({
      type: CONST.START_LOADER,
    });
    firestore()
      .collection('items')
      .doc(id)
      .update({
        name: name,
        gender: gender,
        category: category,
        brand: brand,
        price: price,
        quantity: quantity,
        description: description,
        size: size,
      })
      .then(() => {
        console.log('User updated!');
      });
    dispatch({
      type: CONST.STOP_LOADER,
    });
  };
}
