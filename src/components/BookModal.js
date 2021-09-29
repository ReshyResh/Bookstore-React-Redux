/* eslint-disable */
import { useSelector } from 'react-redux';
import store from '../redux/store';

const BookModal = (props) => {
  const book = useSelector((store) => store.reducerModal[1]);
  const {
    title, author, genre, progress,
  } = book;
  return (
    <div id="modal">
      <p>
        {' '}
        { title }
        <br />
        { author }
        <br />
        { genre }
        <br />
        { progress }
        {' '}
      </p>
    </div>
  );
};

export default BookModal;
