import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css'

//SETUP VARS
const firstbook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL210_SR195,210_.jpg',
  title: 'Ugly love',
  author: 'Coolen Hover'
}

// const secondBook{
//   img: 'https://m.media-amazon.com/images/P/198219734X.01._SCLZZZZZZZ_SX500_.jpg', 
//   title: 'The terminal list', 
//   author: 'Jack Carr'
// }

function Booklist(){
  return (
   <section className ='booklist'>
    <Book 
      img={firstbook.img} 
      title={firstbook.title}
      author= {firstbook.author}/>
    {/* <Book
      img={secondBook.img}
      title={secondBook.title}
      author={secondBook.author}/> */}
   </section>
  ) 

}

const Book =(props) => {  
  console.log(props)
  return (
  <article className ='book'>
    <img src= {props.img} alt="book" />
    <h1>{props.author}</h1>
    <h2>{ props.title }</h2>
  </article>)
}
 
ReactDOM.render(<Booklist/>, document.getElementById('root')); 

