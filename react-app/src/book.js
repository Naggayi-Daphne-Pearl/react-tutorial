import React from 'react'
const Book =({ img, title, author}) => {  
  
  const clickHandler  =()=>{
    alert('Hello world')
  }
  const complexExample =(author) => {
      console.log(author)
  }
  return (
  <article className ='book'>
    <img src= {img} alt="book" onMouseOver={()=>{
      console.log(title)
    }}/>
    <h1>{author}</h1>
    <h2 onClick={()=> console.log(title)}>{ title }</h2>
    <button type="button" onClick ={clickHandler}>Reference example</button>
    <button onClick={()=>complexExample(author)}> more complex example</button>
  </article>)
}
 
export default Book;
