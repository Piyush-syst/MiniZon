import * as CONST from '../utils/Constants/StringConstants';
import firestore from '@react-native-firebase/firestore';
export function deleteProductAction(id) {
  return (dispatch) => {
    dispatch({
      type: CONST.START_LOADER,
    });
    firestore()
      .collection('items')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Item deleted!');
      });
    dispatch({
      type: CONST.STOP_LOADER,
    });
  };
}
