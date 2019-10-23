import React, {useState} from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Foods from './Foods'
import FoodDetail from './FoodDetail'
import NewFood from './NewFood';
import UpdateFood from './UpdateFood';
import Intro from './Intro';
import Foodlog from './Foodlog'


function App() {
  let log = [];
  
  return (
    <div className='pageWrapper'>
      <div className='head'>
        <Link to='/' className='title'><h1>Nutrition4U</h1></Link>
        <nav>
          <Link to="/foods" className='navbarLinks'>Food List</Link>
          <Link to="/log" className='navbarLinks'>Food Log</Link>
        </nav>
      </div>
      <Route path='/' exact component = {Intro} />
      <Route path="/foods" exact component = {Foods} />
      <Route path="/foods/:id"
       render={(props) => <FoodDetail {...props} log={log} />}/>
      <Route path="/newFood" exact component = {NewFood} />
      <Route path="/updateFood/:id" exact component = {UpdateFood} />
      <Route path='/log' 
      render={(props) => <Foodlog {...props} log={log} />}/>
    </div>
  );
}

export default App;
