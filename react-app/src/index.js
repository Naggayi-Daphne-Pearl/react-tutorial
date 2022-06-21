import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css'

//SETUP VARS
const books =  [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL210_SR195,210_.jpg',
    title: 'Ugly love',
    author: 'Coolen Hover',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/71nCY2F3UKL._AC_UL210_SR195,210_.jpg', 
    title: 'The Seven Husbands of Evelyn Hugo: A Novel', 
    author: 'Taylor Jenkins',
  },

]


function Booklist(){
  return (
   <section className ='booklist'>
    {books.map((book)=>{
      const {img, title, author} = book; 
      return (
        <div>
          <img src= {img} alt =''/>
          <h3>{title}</h3>
          <h6>{author}</h6>
        </div>
      )
    })}
   </section>
  ) 

}
// another way to include props
const Book =(props) => {  
  return (
  <article className ='book'>
    <img src= {props.img} alt="book" />
    <h1>{props.author}</h1>
    <h2>{ props.title }</h2>
  </article>)
}
 
ReactDOM.render(<Booklist/>, document.getElementById('root')); 

