import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Books from './Books' ;
import * as BooksAPI from '../BooksAPI';
import PropTypes from 'prop-types';

export default class SearchBooks extends Component{
  state = {
    showingBooks:[]
  }
     search = async (query)=>{
        if(query){
         const searchForBooks =  await BooksAPI.search(query)
          if(!searchForBooks.error){
            const mapbooks = searchForBooks.map(b=>{
               if(this.props.books.some(item => item.id === b.id)) {
                 b.shelf=this.props.books.find(Book=>Book.id===b.id).shelf
               }
               else{
                 b.shelf = "none"
               }
               return b
            }) 
            this.setState({showingBooks:mapbooks})  
        }
        else{
          this.setState( {showingBooks : []} )
        }
      }
      else{
        this.setState( {showingBooks : []} )
      }
    }
  render(){
    return(
      <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={(event) => this.search(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results"> 
              <ol className="books-grid">
                {this.state.showingBooks.map(book=><Books key={book.id} book={book} moveBook={this.props.moveBook}/>)}
              </ol>
              </div>
          </div>
    );
  }
 }   
 SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  moveBook : PropTypes.func.isRequired
} 