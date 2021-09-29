import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookInfo from './BookInfo';
import BookModal from './BookModal';

const BookContainer = () => {
  const arr = useSelector((state) => state.booksReducer);
  return (
    <div className="books-container">
      <BookModal />
      {arr.map((book) => (
        <BookInfo book={book} key={uuidv4()} />
      ))}
    </div>
  );
};

export default BookContainer;
