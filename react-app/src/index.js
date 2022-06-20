import React from 'react';
import ReactDOM from 'react-dom';


// Nested Component  
function Greeting(){
  return (
   <div>
    <Person/>
    <Message/>
   </div>
  ) 

}

const Person =() => <h1>Hello World!!</h1>
const Message =() => {
  return <p>This is a message</p>
}
ReactDOM.render(<Greeting/>, document.getElementById('root')); 

