import * as CONST from '../utils/Constants/StringConstants';
import firestore from '@react-native-firebase/firestore';
export function createProduct(
  downloadUrls,
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
    firestore()
      .collection('items')
      .add({
        name: name,
        downloadUrls: downloadUrls,
        gender: gender,
        category: category,
        brand: brand,
        price: price,
        quantity: quantity,
        description: description,
        size: size,
      })
      .then(() => {
        console.warn('Item added!');
      });
  };
}
