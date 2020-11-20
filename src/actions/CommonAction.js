import * as CONST from '../utils/Constants/StringConstants';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: CONST.START_LOADER,
    });
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        this.user = firestore()
          .collection('users')
          .where('email', '==', username)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size > 0) {
              querySnapshot.forEach((querySnapshotItem) => {
                const userData = querySnapshotItem.data();
                userData.ID = querySnapshotItem.id;
                if (userData.password == password) {
                  if (userData.isAdmin) {
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
        console.warn('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.warn('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.warn('That email address is invalid!');
        }

        console.error(error);
      });
  };
}
export function signUp(name, contact, email, password) {
  return (dispatch) => {
    dispatch({
      type: CONST.START_LOADER,
    });
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
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
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.warn('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.warn('That email address is invalid!');
        }

        console.error(error);
      });

    dispatch({
      type: CONST.STOP_LOADER,
    });
  };
}
export function logout() {
  return (dispatch) => {
    auth()
      .signOut()
      .then(() => {
        console.warn('User signed out!');
        dispatch({
          type: CONST.LOGOUT,
        });
      });
  };
}
export function updateUser(id, name, contact, email) {
  return (dispatch) => {
    dispatch({
      type: CONST.START_LOADER,
    });
    firestore()
      .collection('users')
      .doc(id)
      .update({
        name: name,
        contact: contact,
        email: email,
      })
      .then(() => {
        console.log('User updated!');
      });
    dispatch({
      type: CONST.STOP_LOADER,
    });
  };
}
export function getUserData(id) {
  return (dispatch) => {
    dispatch({
      type: CONST.START_LOADER,
    });
    this.user = firestore()
      .collection('users')
      .doc(id)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          const userData = documentSnapshot.data();
          userData.ID = documentSnapshot.id;
          dispatch({
            type: CONST.USER_DATA_UPDATED,
            payload: {userData},
          });
        }
      });

    dispatch({
      type: CONST.STOP_LOADER,
    });
  };
}
