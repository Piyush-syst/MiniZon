import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import promise from './Promise';
import combineReducers from '../reducers/index';
import AsyncStorage from '@react-native-community/async-storage';
//import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, combineReducers);
// export default function ConfigureStore(onCompletion) {
const enhancer = compose(applyMiddleware(thunk, promise));
const store = createStore(persistedReducer, enhancer);
let persistor = persistStore(store);
export default () => {
  return {store, persistor};
};
export const getPersistor = () => persistor;
export const getStore = () => store;
