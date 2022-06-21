import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css'

//SETUP VARS
const firstbook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL210_SR195,210_.jpg',
  title: 'Ugly love',
  author: 'Coolen Hover',
};

const secondBook ={
  img: 'https://images-na.ssl-images-amazon.com/images/I/71nCY2F3UKL._AC_UL210_SR195,210_.jpg', 
  title: 'The Seven Husbands of Evelyn Hugo: A Novel', 
  author: 'Taylor Jenkins',
}

function Booklist(){
  return (
   <section className ='booklist'>
    <Book
       img={firstbook.img} 
       title={firstbook.title}
       author= {firstbook.author}
    >
      <p>
        My first react project
      </p>

    </Book>
     
    <Book
      img={secondBook.img}
      title={secondBook.title}
      author={secondBook.author}/>
   </section>
  ) 

}
// another way to include props
const Book =({img, title, author, children}) => {  
  return (
  <article className ='book'>
    <img src= {img} alt="book" />
    <h1>{author}</h1>
    <h2>{ title }</h2>
    {children}
  </article>)
}
 
ReactDOM.render(<Booklist/>, document.getElementById('root')); 

