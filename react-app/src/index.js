import React from 'react';
import ReactDOM from 'react-dom';

//css
import './index.css'


// Nested Component  
function Booklist(){
  return (
   <section className ='booklist'>
    <Book/>
    <Book/>
    <Book/>
   </section>
  ) 

}

const Book =() => {
  return (
  <article className ='book'>
    <Image> </Image>
    <Author/>
    <Title/>
  </article>)
}

const Image =() => <img src="https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL210_SR195,210_.jpg" alt="book" />
const Author =() => <h1>Coolen Hover</h1>
const Title =() => <h2>Ugly love</h2>


ReactDOM.render(<Booklist/>, document.getElementById('root')); 

