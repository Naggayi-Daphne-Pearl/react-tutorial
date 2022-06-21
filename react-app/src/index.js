import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css'

//SETUP VARS
const books =  [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL210_SR195,210_.jpg',
    title: 'Ugly love',
    author: 'Coolen Hover',
  },
  {
    id: 2, 
    img: 'https://images-na.ssl-images-amazon.com/images/I/71nCY2F3UKL._AC_UL210_SR195,210_.jpg', 
    title: 'The Seven Husbands of Evelyn Hugo: A Novel', 
    author: 'Taylor Jenkins',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81F30JDZU9L._AC_UL210_SR195,210_.jpg', 
    title: 'Why a Daughter Needs a Dad:  ', 
    author: 'Coolen Hover',
  },

]


function Booklist(){
  return (
   <section className ='booklist'>
    {books.map((book)=>{
      return <Book key={book.id} book={book}></Book>
    })}
   </section>
  ) 

}
// another way to include props
const Book =(props) => {  
  //attribute, eventhandler 
  // onclick 
  const clickHandler  =()=>{
    alert('Hello world')
  }
  const {img, title, author} = props.book;
  return (
  <article className ='book'>
    <img src= {img} alt="book" />
    <h1>{author}</h1>
    <h2>{ title }</h2>
    <button type="button" onClick ={clickHandler}>Reference example</button>
  </article>)
}
 
ReactDOM.render(<Booklist/>, document.getElementById('root')); 

