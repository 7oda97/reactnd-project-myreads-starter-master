import React from 'react';
import {Link} from 'react-router-dom' ;
import PropTypes from 'prop-types';
import Shelf from './Shelf';
const HomeUI = (props)=>{
    return(
        <div className="list-books">
          <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
              <Shelf shelf="currentlyReading" moveBook={props.moveBook} books={props.books.filter(book => book.shelf==="currentlyReading")} />
              <Shelf shelf="wantToRead"moveBook={props.moveBook} books={props.books.filter(book => book.shelf==="wantToRead")} />
              <Shelf shelf="read" moveBook={props.moveBook}books={props.books.filter(book => book.shelf==="read")} />
           </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
}
HomeUI.propTypes = {
  books: PropTypes.array.isRequired,
  moveBook : PropTypes.func.isRequired
}
export default HomeUI;