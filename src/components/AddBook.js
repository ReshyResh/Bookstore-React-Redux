import { useDispatch } from 'react-redux';
// import your Action Creators
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const submitBookToStore = () => {
    const parent = document.getElementById('form-add');
    const newBook = {
      id: uuidv4(), // make sure it's unique
      title: parent.title.value,
      author: parent.author.value,
      genre: parent.genre.value,
      progress: 30,
    };
    dispatch(addBook(newBook));
  };

  return (
    <div>
      <form id="form-add">
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="author" placeholder="author" />
        <label htmlFor="genre">Genre:</label> {/*eslint-disable-line*/}
        <select id="genre" name="genre">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Horror">Horror</option>
        </select>
        <button onClick={submitBookToStore} type="button">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
