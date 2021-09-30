import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer, { reducerModal } from './books/books';

const reducer = combineReducers({
  booksReducer,
  reducerModal,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
