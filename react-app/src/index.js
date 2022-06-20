import React from 'react';
import ReactDOM from 'react-dom';

function Greeting(){
  return (
   <div>
    <h1>Hello World!!</h1>
    <ul>
      <li>
        <a href="#">Hello world</a>
      </li>
    </ul>
   </div>
  ) 

}

ReactDOM.render(<Greeting/>, document.getElementById('root')); 

