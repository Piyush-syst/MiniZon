import * as CONST from '../utils/Constants/StringConstants';
const initialState = {
  sizes: [],
  categories: [],
  brands: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CONST.START_LOADER:
      return {
        ...state,
        loaderStatus: true,
      };
    case CONST.GOT_SIZES:
      return {
        ...state,
        sizes: action.payload.sizes,
      };
    case CONST.GOT_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };
    case CONST.GOT_BRANDS:
      return {
        ...state,
        brands: action.payload.brands,
      };
    case CONST.STOP_LOADER:
      return {
        ...state,
        loaderStatus: false,
      };
    default:
      return state;
  }
}
