import {combineReducers} from 'redux';
import CommonReducer from './CommonReducer';
import FetchAttributeReducer from './FetchAttributeReducer';
import ProductFetchReducer from './ProductFetchReducer';
export default combineReducers({
  CommonReducer,
  FetchAttributeReducer,
  ProductFetchReducer,
});
