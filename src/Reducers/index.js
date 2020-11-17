import {combineReducers} from 'redux';
import CommonReducer from './CommonReducer';
import FetchAttributeReducer from './FetchAttributeReducer';
import ProductFetchReducer from './ProductFetchReducer';
import CartUpdateReducer from './CartUpdateReducer';
export default combineReducers({
  CommonReducer,
  FetchAttributeReducer,
  ProductFetchReducer,
  CartUpdateReducer,
});
