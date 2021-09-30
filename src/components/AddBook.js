import { useDispatch } from 'react-redux';
// import your Action Creators
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books';
import error from './error';

const AddBook = () => {
  const dispatch = useDispatch();

  const defState = {
    id: '',
    title: '',
    genre: 'Action',
  };
  const [form, setForm] = useState(defState);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitBookToStore = () => {
    if (form.title === '') {
      error('Please fill in the title', 'red');
    } else {
      const newBook = {
        id: uuidv4(), // make sure it's unique
        title: form.title,
        category: form.genre,
      };
      error('Book added', 'green');
      dispatch(addBook(newBook));
      setForm(defState);
      const parent = document.getElementById('form-add');
      parent.title.value = '';
      parent.genre.value = 'Action';
    }
  };

  return (
    <div className="form-add">
      <h2 className="add-book">Add a book </h2>
      <form id="form-add">
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <select defaultValue="DEFAULT" id="genre" name="genre" onChange={handleChange}>
          <option value="DEFAULT" disabled hidden>Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Horror">Horror</option>
        </select>
        <button className="add-button" onClick={submitBookToStore} type="button">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
