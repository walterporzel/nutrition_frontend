import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Foods from './Foods'

function App() {
  return (
    <div className="App">
      <h1>Nutrition4U</h1>
      <nav>
        <Link to="/foods">Food List</Link>
      </nav>
      <Route path="/foods" exact component = {Foods} />
    </div>
  );
}

export default App;
