import * as CONST from '../utils/Constants/StringConstants';
import firestore from '@react-native-firebase/firestore';
export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: CONST.START_LOADER,
    });
    this.user = firestore()
      .collection('users')
      .where('email', '==', username)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size > 0) {
          querySnapshot.forEach((querySnapshotItem) => {
            const userData = querySnapshotItem.data();
            if (userData.password == password) {
              if (userData.isAdmin) {
                console.warn('Admin Login IF');
                dispatch({
                  type: CONST.ADMIN_LOGIN_SUCCESS,
                  payload: {userData},
                });
              } else {
                dispatch({
                  type: CONST.LOGIN_SUCCESS,
                  payload: {userData},
                });
              }
            } else {
              dispatch({
                type: CONST.LOGIN_FAILED,
                payload: {loginMessage: CONST.DATA_INCORRECT},
              });
            }
          });
        } else {
          dispatch({
            type: CONST.LOGIN_FAILED,
            payload: {loginMessage: CONST.USER_NOT_EXIST},
          });
        }
        dispatch({
          type: CONST.STOP_LOADER,
        });
      });
  };
}
export function signUp(name, contact, email, password) {
  console.warn('signup action');
  return (dispatch) => {
    dispatch({
      type: CONST.START_LOADER,
    });
    firestore()
      .collection('users')
      .add({
        name: name,
        contact: contact,
        email: email,
        password: password,
      })
      .then(() => {
        dispatch({
          type: CONST.SIGNUP_SUCCESS,
        });
      });
    dispatch({
      type: CONST.STOP_LOADER,
    });
  };
}
