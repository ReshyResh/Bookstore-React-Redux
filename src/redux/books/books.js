const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const EDIT_BOOK = 'bookStore/books/EDIT_BOOK';
const MODAL = 'bookStore/books/MODAL';
const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: true,
  books: [],
  error: '',
};
const modalState = [{}, {}];

export const modal = (payload) => ({
  type: MODAL,
  payload,
});

export const fetchPostsSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetchPostsError = () => ({
  type: FETCH_ERROR,
});

export const fetchPostsLoading = () => ({
  type: FETCH_LOADING,
});

export const fetchPostsRequest = () => async (dispatch) => {
  dispatch(fetchPostsLoading());
  const request = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DLyLFq2oHapm6zHBdl0d/books');
  const result = await request.json();
  const result2 = Object.entries(result).map((key) => ([...key[1]]));
  const ids = Object.keys(result);
  ids.forEach((id, index) => {
    result2[index][0].id = id;
  });
  dispatch(fetchPostsSuccess(result2));
};

export const addBook = (payload) => async (dispatch) => {
  dispatch(fetchPostsLoading());
  await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DLyLFq2oHapm6zHBdl0d/books/',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: payload.id,
        title: payload.title,
        category: payload.category,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  dispatch(fetchPostsRequest());
};

export const removeBook = (payload) => async (dispatch) => {
  dispatch(fetchPostsLoading());
  await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DLyLFq2oHapm6zHBdl0d/books/${payload}`,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  dispatch(fetchPostsRequest());
};

export const editBook = (payload) => ({
  type: EDIT_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        loading: false,
        books: action.payload,
        error: '',
      };
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case EDIT_BOOK:
      return state;
      // return state.map((book) => (book === action.payload.book
      //   ? { ...book, progress: Number(action.payload.newperc) }
      //   : book
      // ));
    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: '',
      };
    case FETCH_ERROR:
      return {
        loading: false,
        books: [],
        error: action.payload,
      };
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
