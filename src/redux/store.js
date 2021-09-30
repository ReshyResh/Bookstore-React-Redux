import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer, { reducerModal } from './books/books';

const reducer = combineReducers({
  booksReducer,
  reducerModal,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
