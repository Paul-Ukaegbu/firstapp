import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NewComponent from './components/NewComponent'


function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Hello Dojo!</h1>
      </div>
      <h2>Members of my family</h2>
      <ul>
        <li>Lambert</li>
        <li>Honorine</li>
        <li>Paul</li>
        <li>Peter</li>
      </ul>

      <div className="row">

        <NewComponent
          name = "Paul"
          ranks = {25}
          color = "red"
        />
        <NewComponent
          name = "Peter"
          ranks = {23}
          color = "Orange"
        />
        <NewComponent
          name = "Lambert"
          ranks = {59}
          color = "Green"
        />

        <NewComponent
          name = "Honorine"
          ranks = {49}
          color = "Pink"
        />

      </div>
    </div>
  );
}

export default App;
