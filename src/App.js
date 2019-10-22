import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Foods from './Foods'
import FoodDetail from './FoodDetail'
import NewFood from './NewFood';
import UpdateFood from './UpdateFood';

function App() {
  return (
    <div className="App">
      <h1>Nutrition4U</h1>
      <nav>
        <Link to="/foods">Food List</Link>
      </nav>
      <Route path="/foods" exact component = {Foods} />
      <Route path="/foods/:id" exact component = {FoodDetail} />
      <Route path="/newFood" exact component = {NewFood} />
      <Route path="/updateFood/:id" exact component = {UpdateFood} />
    </div>
  );
}

export default App;
