import * as CONST from '../utils/Constants/StringConstants';
const initialState = {
  
};
export default function (state = initialState, action) {
  switch (action.type) {
    case CONST.PRODUCT_DELETED:
      return {
        ...state,
        cartData: action.payload,
      };
    default:
      return state;
  }
}
