import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Foods from './Foods'
import FoodDetail from './FoodDetail'
import NewFood from './NewFood';
import UpdateFood from './UpdateFood';
import Intro from './Intro';

function App() {
  return (
    <div>
      <div className='head'>
        <Link to='/' className='title'><h1>Nutrition4U</h1></Link>
        <nav>
          <Link to="/foods" className='navbarLinks'>Food List</Link>
        </nav>
      </div>
      <Route path='/' exact component = {Intro} />
      <Route path="/foods" exact component = {Foods} />
      <Route path="/foods/:id" exact component = {FoodDetail} />
      <Route path="/newFood" exact component = {NewFood} />
      <Route path="/updateFood/:id" exact component = {UpdateFood} />
    </div>
  );
}

export default App;
