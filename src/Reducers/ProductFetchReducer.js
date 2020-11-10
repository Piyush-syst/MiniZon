import * as CONST from '../utils/Constants/StringConstants';
const initialState = {
  itemData: {},

  loaderStatus: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CONST.START_LOADER:
      return {
        ...state,
        loaderStatus: true,
      };
    case CONST.GOT_ITEMS:
      return {
        ...state,
        itemData: action.payload.items,
      };

    default:
      return state;
  }
}
