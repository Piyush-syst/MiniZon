import * as CONST from '../utils/Constants/StringConstants';
const initialState = {
  cartData: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case CONST.CART_ADD_SUCCESS:
      return {
        ...state,
        cartData: action.payload,
      };
    case CONST.CART_REMOVE_SUCCESS:
      return {
        ...state,
        cartData: [...action.payload],
      };
    default:
      return state;
  }
}
