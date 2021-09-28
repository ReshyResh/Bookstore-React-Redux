import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { removeBook, editBook } from '../redux/books/books';
import ProgressBar from './ProgressBar';

const BookInfo = (props) => {
  const { book } = props;
  const {
    title, author, genre, progress,
  } = book;
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <p className="book-genre">{genre}</p>
      <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
      <button
        className="delete-book"
        type="button"
        onClick={() => {
          dispatch(removeBook(book));
        }}
      >
        {' '}
        Delete
      </button>
      <button
        className="delete-book"
        type="button"
        onClick={() => {
          const newperc = prompt('Enter new percentage');
          dispatch(editBook({ book, newperc }));
        }}
      >
        {' '}
        Edit
      </button>
      <ProgressBar progress={progress} />
    </div>
  );
};

BookInfo.propTypes = {
  book: propTypes.instanceOf(Object).isRequired,
};

export default BookInfo;
