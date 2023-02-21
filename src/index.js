// Second part of tutorial:
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import app component
import App from './App'

//render application 
ReactDOM.render(<App />, document.getElementById('root'))



//First one we did:

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'

// // class-based component called App
// // extends inherits from React.Component
// // tells App tp behave like a component
// class App extends Component {
//   // you always have a render function in a component.
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello, React!</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'))
