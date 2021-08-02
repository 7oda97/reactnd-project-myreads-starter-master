import React from 'react';
import PropTypes from 'prop-types';
const Books = (props)=>{
  const onChange= (e) =>{
    props.moveBook(props.book,e.target.value)
  } 
  let imageLink=""
  try{
      if(props.book.imageLinks){
       if(props.book.imageLinks.thumbnail){
       imageLink=props.book.imageLinks.thumbnail
     }
     else if (props.book.imageLinks.smallThumbnail){
      imageLink=props.book.imageLinks.smallThumbnail
     }
    }
  }
    catch(err){}
    let authors=""
    try{
      if(props.book.authors){
        props.book.authors.reduce((accumalator,item)=>{
          accumalator+=item+","
          return accumalator 
        }, "")
        authors.join(' +,');
      }
  
    }
    catch(err){}
    return(
        <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLink}")` }}></div>
            <div className="book-shelf-changer">
              <select defaultValue={props.book.shelf ? props.book.shelf: "none"} onChange={onChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{props.book.title}</div>
          <div className="book-authors">{props.book.authors}</div>
        </div>
      </li>
    );
}
Books.propTypes = {
    book: PropTypes.string.isRequired,
    moveBook : PropTypes.func.isRequired      
    }  
export default Books;