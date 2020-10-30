import * as CONST from '../utils/Constants/StringConstants';
export function login() {
  return {type: CONST.LOGIN_SUCCESS, payload: {loginResult: true}};
}
