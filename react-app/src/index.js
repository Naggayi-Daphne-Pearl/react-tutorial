import React from 'react';
import ReactDOM from 'react-dom';

// importing from file 
import {books} from './books'
import './index.css'
import Book from './book'


function Booklist(){
  return (
   <section className ='booklist'>
    {books.map((book, index)=>{
      return <Book key={book.id} {...book}></Book>
    })}
   </section>
  ) 

}
// another way to include props

 
ReactDOM.render(<Booklist/>, document.getElementById('root')); 

