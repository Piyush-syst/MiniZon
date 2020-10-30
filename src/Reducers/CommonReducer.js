import * as CONST from '../utils/Constants/StringConstants';
const initialState = {
  loginStatus: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CONST.LOGIN_SUCCESS:
      return {
        loginStatus: action.payload.loginResult,
      };

    default:
      return state;
  }
}
