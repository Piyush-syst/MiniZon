import * as CONST from '../utils/Constants/StringConstants';
const initialState = {
  mensWearData: [],
  womensWearData: [],
  itemData: [],
  loaderStatus: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CONST.GOT_ITEMS:
      return {
        ...state,

        mensWearData: action.payload.mensWear,
        womensWearData: action.payload.womensWear,
      };
    case CONST.GOT_ALL_ITEMS:
      return {
        ...state,

        itemData: action.payload.items,
      };

    default:
      return state;
  }
}
