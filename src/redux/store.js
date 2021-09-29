import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer, { reducerModal } from './books/books';

const reducer = combineReducers({
  booksReducer,
  reducerModal,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
