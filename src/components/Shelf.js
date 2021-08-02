    import React from 'react';
    import PropTypes from 'prop-types';
    import Book from './Books' ;
    const titles = {
      "currentlyReading":"currentlyReading",
      "wantToRead":"wantToRead",
      "read":"read",
    }
    const Shelf = (props)=>{
        return( 
            <div className="bookshelf">
              <h2 className="bookshelf-title">{titles[props.shelf]}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {props.books.map(book=> <Book key={book.id} book={book} moveBook={props.moveBook}/>)}
                </ol>
              </div>  
          </div>
        ); 
    }
    Shelf.propTypes = {
        shelf: PropTypes.string.isRequired,
        moveBook : PropTypes.func.isRequired,
           }
export default Shelf;