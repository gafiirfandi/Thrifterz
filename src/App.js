import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import {HomePage} from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'


const SupremePage = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Supreme Page</h1>
    </div>
  )
}

const SupremeGoods = (props) => {
  console.log(props);
  return(
    <div>
      <h1>Supreme Goods!</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
