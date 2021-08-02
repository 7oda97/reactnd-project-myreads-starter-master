import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css'; 
import HomeUI from './components/HomeUI';
import SearchBooks from './components/SearchBooks';
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
  books:[],
  }

  getBooks = async ()=>{
    const books=await BooksAPI.getAll()
    this.setState({
     books,
    })
  }

componentDidMount(){
  this.getBooks()
}

 moveBook =async (book,shelf)=>{
  await  BooksAPI.update(book,shelf)
  if(this.state.books.some(item => item.id === book.id)) {
    this.setState({
      books:this.state.books.map(b=>{
        if(b.id===book.id){
        b.shelf = shelf
        }
        return b
      })
    })
  }
  else {
    book.shelf=shelf;
     this.setState({
       books:[...this.state.books,book],
     })
  }
  }
  
  render() {
    console.log(this.state.books)
    return (      
    <div className="app">
        <Route exact path="/" 
        render={()=>(
          <HomeUI moveBook={this.moveBook} books={this.state.books}/>
          )}>
          </Route>
        <Route  path="/search"
         render={()=>(
          <SearchBooks  moveBook={this.moveBook} books={this.state.books}/>
          )}>
          </Route>
      </div>
    )
  }
}
export default BooksApp;