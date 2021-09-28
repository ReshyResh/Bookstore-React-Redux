import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import BookContainer from './components/BookContainer';
import AddBook from './components/AddBook';
import Navbar from './components/Navbar';
import store from './redux/store';

function App() {
  const books = store.getState();
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <BookContainer books={books} />
          <AddBook />
        </Route>
        <Route path="/categories">
          Under construction
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
