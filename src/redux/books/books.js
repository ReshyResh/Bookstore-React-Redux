const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const EDIT_BOOK = 'bookStore/books/EDIT_BOOK';

const MODAL = 'bookStore/books/MODAL';

const initialState = [];
const modalState = [{}, {}];

export const modal = (payload) => ({
  type: MODAL,
  payload,
});

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const editBook = (payload) => ({
  type: EDIT_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case EDIT_BOOK:
      return state;
      // return state.map((book) => (book === action.payload.book
      //   ? { ...book, progress: Number(action.payload.newperc) }
      //   : book
      // ));
    default:
      return state;
  }
};

export const reducerModal = (state = modalState, action) => {
  switch (action.type) {
    case MODAL:
      return [{ display: !state.display }, action.payload];
    default:
      return state;
  }
};

export default reducer;
