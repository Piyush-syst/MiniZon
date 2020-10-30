import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import promise from './Promise';
import reducer from '../Reducers';

export default function ConfigureStore(onCompletion) {
  const enhancer = compose(
    applyMiddleware(),
    // thunk,
    // promise
  );

  const store = createStore(reducer, enhancer);
  return store;
}
