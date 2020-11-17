import * as CONST from '../utils/Constants/StringConstants';
const initialState = {
  userData: {},
  loginStatus: false,
  loginMessage: '',
  loaderStatus: false,
  isAdminLogin: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CONST.START_LOADER:
      return {
        ...state,
        loaderStatus: true,
      };
    case CONST.STOP_LOADER:
      return {
        ...state,
        loaderStatus: false,
      };
    case CONST.LOGIN_SUCCESS:
      return {
        ...state,
        loginStatus: true,
        userData: action.payload.userData,
        isAdminLogin: false,
      };
    case CONST.LOGIN_FAILED:
      return {
        ...state,
        loginStatus: false,
        loginMessage: action.payload.loginMessage,
      };
    case CONST.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isAdminLogin: true,
        userData: action.payload.userData,
      };
    case CONST.SIGNUP_SUCCESS:
      return {
        ...state,
        signUpStatus: true,
      };
      case CONST.LOGOUT:
        return {
          ...state,
          loginStatus: false,
        };
    default:
      return state;
  }
}
