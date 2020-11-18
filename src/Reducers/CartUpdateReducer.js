import * as CONST from '../utils/Constants/StringConstants';
const initialState = {
  cartData: [],
  numberOfItems: 0,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case CONST.CART_ADD_SUCCESS:
      return {
        ...state,
        cartData: action.payload.items,
        numberOfItems: action.payload.count,
      };
      
    case CONST.CART_REMOVE_SUCCESS:
      return {
        ...state,
        cartData: [...action.payload.items],
        numberOfItems: action.payload.count,
      };
    default:
      return state;
  }
}
