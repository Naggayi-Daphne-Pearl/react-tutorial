import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
 
function Booklist(){
  return (
   <section className ='booklist'>
    <Book/>
   </section>
  ) 

}

const Book =() => {
  const Title = 'Ugly love'; 
  const author = 'Coolen Hover'
  return (
  <article className ='book'>
    <img src="https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL210_SR195,210_.jpg" alt="book" />
    <h1>{author.toUpperCase()}</h1>
    <h2>{ Title }</h2>
  </article>)
}
 
ReactDOM.render(<Booklist/>, document.getElementById('root')); 

